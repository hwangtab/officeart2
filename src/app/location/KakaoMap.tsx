'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoAddressSearchResult {
  address_name: string;
  y: string;
  x: string;
  address_type: string;
  road_address?: {
    address_name: string;
    building_name: string;
  };
}

interface KakaoMapProps {
  officeAddress: string;
  apiKey: string;
}

export default function KakaoMap({ officeAddress, apiKey }: KakaoMapProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    script.onload = () => {
      if (!window.kakao) return;
      
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map-container');
        if (!container) return;
        
        const options = {
          center: new window.kakao.maps.LatLng(37.523806772049696, 126.89100097651672),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(officeAddress, (result: KakaoAddressSearchResult[], status: string) => {
          if (status === window.kakao.maps.services.Status.OK && result[0]) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            
            map.setCenter(coords);
            
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">오피스아트</div>'
            });
            infowindow.open(map, marker);
          }
        });
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [officeAddress, apiKey]);

  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden mb-6 shadow" id="kakao-map-container" />
  );
}