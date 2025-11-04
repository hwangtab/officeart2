'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface KakaoMapProps {
  officeAddress: string;
  apiKey: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export default function KakaoMap({ officeAddress, apiKey, coordinates }: KakaoMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initMap = () => {
      if (!isMounted || !mapContainerRef.current) return;

      try {
        // 주소로 좌표를 검색하는 함수
        const searchAddressToCoordinate = (address: string) => {
          const geocoder = new window.kakao.maps.services.Geocoder();

          type SearchResult = { y: string; x: string }[];
          type SearchStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';

          geocoder.addressSearch(address, (result: SearchResult, status: SearchStatus) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(Number(result[0].y), Number(result[0].x));

              const mapOptions = {
                center: coords,
                level: 3,
              };

              const map = new window.kakao.maps.Map(mapContainerRef.current, mapOptions);

              // 마커 추가
              const marker = new window.kakao.maps.Marker({
                position: coords,
              });
              marker.setMap(map);

              // 정보창 추가
              const infoWindow = new window.kakao.maps.InfoWindow({
                content: `<div style="padding:5px;font-size:12px;text-align:center;">🏢 오피스아트<br/>${address.split(' ').slice(0, 3).join(' ')}</div>`,
              });
              infoWindow.open(map, marker);

              // 지도 크기 재조정
              setTimeout(() => {
                if (isMounted) {
                  map.relayout();
                  setIsLoaded(true);
                }
              }, 100);

            } else {
              // 주소 검색 실패 시 fallback 좌표 사용
              console.warn('주소 검색 실패, fallback 좌표 사용:', address);
              initMapWithCoordinates();
            }
          });
        };

        // fallback용 좌표 기반 지도 초기화
        const initMapWithCoordinates = () => {
          const lat = coordinates?.lat || 37.523806772049696;
          const lng = coordinates?.lng || 126.89100097651672;

          const mapOptions = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
          };

          const map = new window.kakao.maps.Map(mapContainerRef.current, mapOptions);

          // 마커 추가
          const markerPosition = new window.kakao.maps.LatLng(lat, lng);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);

          // 정보창 추가
          const infoWindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:5px;font-size:12px;text-align:center;">🏢 오피스아트<br/>${officeAddress.split(' ').slice(0, 2).join(' ')}</div>`,
          });
          infoWindow.open(map, marker);

          // 지도 크기 재조정
          setTimeout(() => {
            if (isMounted) {
              map.relayout();
              setIsLoaded(true);
            }
          }, 100);
        };

        // 주소가 있으면 주소로 검색, 없으면 좌표 사용
        if (officeAddress) {
          searchAddressToCoordinate(officeAddress);
        } else {
          initMapWithCoordinates();
        }

      } catch (err) {
        console.error('카카오맵 초기화 오류:', err);
        if (isMounted) {
          setError('지도를 불러올 수 없습니다.');
        }
      }
    };

    const loadScript = () => {
      // 이미 로드된 경우
      if (window.kakao && window.kakao.maps) {
        initMap();
        return;
      }

      // 스크립트가 이미 DOM에 있는지 확인
      if (document.querySelector('script[src*="dapi.kakao.com"]')) {
        const checkInterval = setInterval(() => {
          if (window.kakao && window.kakao.maps) {
            clearInterval(checkInterval);
            initMap();
          }
        }, 100);
        return;
      }

      // 새 스크립트 로드 (services 라이브러리 포함)
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(initMap);
        }
      };

      script.onerror = () => {
        if (isMounted) {
          setError('카카오맵 스크립트를 불러올 수 없습니다.');
        }
      };

      document.head.appendChild(script);
    };

    loadScript();

    return () => {
      isMounted = false;
    };
  }, [apiKey, coordinates, officeAddress]);

  if (error) {
    return (
      <div className="w-full h-[450px] rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 text-sm"
          >
            새로고침
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg relative bg-gray-200">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">지도를 불러오는 중...</p>
          </div>
        </div>
      )}
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      />
    </div>
  );
}
