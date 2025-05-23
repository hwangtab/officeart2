'use client';

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
// Removed unused Link import
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import wrapper
import BackButton from '@/components/BackButton';
import LinkButton from '@/components/LinkButton';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import Card from '@/components/Card'; // Import Card
import {
  HiMapPin as MapPinIcon,
  // Removed unused BuildingOfficeIcon
  HiOutlineTicket as SubwayIcon,
  HiOutlineTruck as BusIcon,
  HiOutlineMap as AmenitiesIcon,
  HiOutlineBanknotes as BankIcon,
  HiOutlineShoppingBag as ShopIcon,
  HiOutlineHomeModern as StoreIcon, // Changed from HiOutlineHome
  HiOutlineSparkles as CafeIcon,
  // Removed unused HospitalIcon
  // Removed unused PostIcon
  HiOutlineRectangleGroup as ParkingIcon
} from 'react-icons/hi2';
import { RiKakaoTalkFill } from "react-icons/ri"; // Use KakaoTalk icon for Kakao Map link
// Removed FaMapMarkerAlt import
import { SiNaver as NaverIcon } from "react-icons/si"; // Import Naver icon from Simple Icons

import { useEffect } from 'react';
export default function LocationPage() {
  const officeAddress = "서울특별시 영등포구 양산로 96 오피스아트";
  const kakaoMapApiKey = "9b52ab4382965154f8f524a4c8c37099";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapApiKey}&libraries=services&autoload=false`;
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

        // 주소로 좌표 검색
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(officeAddress, (result: KakaoAddressSearchResult[], status: string) => {
          if (status === window.kakao.maps.services.Status.OK && result[0]) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            
            // 지도 중심 변경
            map.setCenter(coords);
            
            // 마커 생성 및 표시
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            });

            // 인포윈도우로 장소 표시
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
  }, [officeAddress, kakaoMapApiKey]);

  // Function to generate map links (basic example)
  const getNaverMapUrl = () => `https://map.naver.com/v5/search/${encodeURIComponent(officeAddress)}`;
  const getKakaoMapUrl = () => `https://map.kakao.com/link/search/${encodeURIComponent(officeAddress)}`;


  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4"> {/* Removed bg-light-gray as it's now in layout */}
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center">오시는 길</SectionTitle> {/* Use level prop */}

        {/* 1. Map Section (4.6 지도 섹션) */}
        {/* Use Card and SectionTitle */}
        <ScrollAnimationWrapper>
          <Card className="mb-16">
          <SectionTitle as="h2" level="section" className="text-center">지도</SectionTitle> {/* Use level prop */}
          {/* Kakao Map Container */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden mb-6 shadow" id="kakao-map-container">
            {/* Map will be rendered here */}
          </div>
          <p className="text-center text-lg font-medium mb-4 flex items-center justify-center gap-2">
             <MapPinIcon className="h-5 w-5 text-red-600" />
             {officeAddress}
          </p>
          {/* Use flexbox for responsive layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             {/* Use LinkButton for Naver Map */}
             <LinkButton
               href={getNaverMapUrl()}
               variant="naver"
               size="base" // Changed size to base
               iconLeft={<NaverIcon className="h-4 w-4" />} // Use Naver icon
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto" // Responsive width
             >
               네이버 지도 길찾기
             </LinkButton>
             {/* Use LinkButton for Kakao Map */}
             <LinkButton
               href={getKakaoMapUrl()}
               variant="kakao"
               size="base" // Changed size to base
               iconLeft={<RiKakaoTalkFill className="h-4 w-4" />}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto" // Responsive width
             >
               카카오맵 길찾기
             </LinkButton>
          </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 2. Public Transport (4.6 지하철/버스 접근성) */}
        <ScrollAnimationWrapper>
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Subway Access */}
          {/* Use Card and SectionTitle */}
          <Card>
            {/* Use SectionTitle with medium size and icon prop */}
            <SectionTitle as="h2" level="subsection" icon={<SubwayIcon className="h-6 w-6 text-accent-blue" />}>지하철 이용 시</SectionTitle> {/* Use level prop */}
            {/* Adjust text color */}
            <div className="text-text-secondary text-sm space-y-2">
              <h3 className="text-lg font-semibold mb-3">영등포구청역 (2, 5호선)</h3>
              <p>6번 출구에서 도보 약 3분 거리입니다.</p>
            </div>
          </Card>

          {/* Bus Access - Use Card and SectionTitle */}
          <Card>
             {/* Use SectionTitle with medium size and icon prop */}
             <SectionTitle as="h2" level="subsection" icon={<BusIcon className="h-6 w-6 text-accent-blue" />}>버스 이용 시</SectionTitle> {/* Use level prop */}
             {/* Adjust text color */}
             <div className="text-text-secondary text-sm space-y-2">
               <h3 className="text-lg font-semibold mb-3">영등포구청 정류장</h3>
               <p>(정류소 ID: 19-852) 도보로 약 3분 거리입니다.</p>
             </div>
          </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* 3. Parking Information (4.6 주차 정보) */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
          {/* Use SectionTitle with icon prop */}
          <SectionTitle as="h2" level="section" align="center" icon={<ParkingIcon className="h-6 w-6 text-accent-blue" />}>주차 안내</SectionTitle> {/* Use level prop */}
          {/* Use Card component */}
          <Card className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm"> {/* Removed bg, rounded, shadow, p */}
            <div>
              {/* Use SectionTitle */}
              <SectionTitle as="h3" level="card" className="text-text-primary">건물 내 주차</SectionTitle> {/* Use level prop */}
              {/* Adjust text color */}
              <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                <li>시간당 주차: 2,000원</li>
                <li>월 정기주차: 10만원</li>
                {/* TODO: Add contact info for monthly parking if available */}
              </ul>
            </div>
            {/* Remove redundant card styles from inner div */}
            <div>
              {/* Use SectionTitle */}
              <SectionTitle as="h3" level="card" className="text-text-primary">인근 공영주차장</SectionTitle> {/* Use level prop */}
              {/* Adjust text color */}
              <p className="text-text-secondary">영등포구청역 공영주차장 (시간당 1,200원)</p>
            </div>
          </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* 4. Nearby Amenities (4.6 주변 편의시설) */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
          {/* Use SectionTitle with icon prop */}
          <SectionTitle as="h2" level="section" align="center" icon={<AmenitiesIcon className="h-6 w-6 text-accent-blue" />}>주변 편의시설 (반경 500m 내)</SectionTitle> {/* Use level prop */}
          {/* Use Card component */}
          <Card className="mb-16"> {/* Removed bg, p, rounded, shadow */}
            {/* Enhanced Nearby Amenities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              {/* Category 1: Food & Cafe */}
              <div>
                {/* Use SectionTitle with icon prop */}
                <SectionTitle as="h4" level="card" icon={<CafeIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"> {/* Use level prop */}
                  식당 & 카페
                </SectionTitle>
                <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                  <li><span className="font-medium">스타벅스 영등포구청역점:</span> 도보 3분</li>
                  <li><span className="font-medium">다양한 한식/분식/중식당:</span> 도보 5분 이내 다수</li>
                  <li><span className="font-medium">맥도날드, 서브웨이 등 패스트푸드:</span> 도보 5-7분</li>
                </ul>
              </div>
              {/* Category 2: Convenience & Shopping */}
              <div>
                {/* Use SectionTitle with icon prop */}
                <SectionTitle as="h4" level="card" icon={<StoreIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"> {/* Use level prop */}
                  편의점 & 쇼핑
                </SectionTitle>
                <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                  <li><span className="font-medium">GS25, CU 편의점:</span> 건물 바로 옆 및 도보 1분</li>
                  <li><span className="font-medium">영등포전통시장:</span> 도보 약 10분</li>
                  <li><span className="font-medium">롯데마트 양평점:</span> 도보 약 15분</li>
                </ul>
              </div>
              {/* Category 3: Bank & Pharmacy */}
              <div>
                {/* Use SectionTitle with icon prop */}
                <SectionTitle as="h4" level="card" icon={<BankIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"> {/* Use level prop */}
                  은행 & 약국
                </SectionTitle>
                <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                  <li><span className="font-medium">주요 은행 (국민, 신한, 우리 등):</span> 도보 5분 이내</li>
                  <li><span className="font-medium">약국:</span> 도보 3분 이내 다수</li>
                </ul>
              </div>
              {/* Category 4: Others (Optional) */}
              <div>
                {/* Use SectionTitle with icon prop */}
                <SectionTitle as="h4" level="card" icon={<ShopIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"> {/* Use level prop */}
                  기타 시설
                </SectionTitle>
                <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                  <li><span className="font-medium">영등포구청:</span> 도보 5분</li>
                  <li><span className="font-medium">우체국:</span> 도보 7분</li>
                </ul>
              </div>
            </div>
          </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
