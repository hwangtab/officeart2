import type { Metadata } from 'next'; // Import Metadata type
// Removed unused Link import
import BackButton from '@/components/BackButton'; // Import BackButton
import LinkButton from '@/components/LinkButton'; // Import LinkButton
// Import icons (remove ArrowLeftIcon)
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

// Add metadata for the location page
export const metadata: Metadata = {
  title: "오시는 길 | 오피스아트",
  description: "오피스아트 위치(영등포구청역 도보 3분), 지도, 대중교통(지하철, 버스), 주차 정보, 주변 편의시설 안내.",
};

export default function LocationPage() {
  const officeAddress = "서울특별시 영등포구 양산로 96 오피스아트";
  // TODO: Get Google Maps API Key from 황경하

  // Function to generate map links (basic example)
  const getNaverMapUrl = () => `https://map.naver.com/v5/search/${encodeURIComponent(officeAddress)}`;
  const getKakaoMapUrl = () => `https://map.kakao.com/link/search/${encodeURIComponent(officeAddress)}`;


  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-4"> {/* Removed bg-light-gray as it's now in layout */}
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">오시는 길</h1>

        {/* 1. Map Section (4.6 지도 섹션) */}
        <section className="mb-16 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
          <h2 className="text-3xl font-bold mb-8 text-center">지도</h2>
          {/* Google Map iframe */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden mb-6 shadow"> {/* Added shadow */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.326216325662!2d126.89100097651672!3d37.523806772049696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fafc70f3463%3A0x9b1cfd246f0445fa!2z7Jik7ZS87Iqk7JWE7Yq4IOyYiOyIoOyduCDqs7XsnKDsnpHsl4Xsi6QsIOqzteycoOyYpO2UvOyKpA!5e0!3m2!1sko!2skr!4v1744362971639!5m2!1sko!2skr" // 제공된 iframe src로 교체
              width="100%" // Tailwind로 제어되므로 유지 또는 제거 가능
              height="100%" // Tailwind로 제어되므로 유지 또는 제거 가능
              style={{ border: 0 }}
              allowFullScreen={false} // allowfullscreen="" 대신 false 사용
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="오피스아트 위치 지도" // title 추가
            ></iframe>
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
               size="sm"
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
               size="sm"
               iconLeft={<RiKakaoTalkFill className="h-4 w-4" />}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto" // Responsive width
             >
               카카오맵 길찾기
             </LinkButton>
          </div>
        </section>

        {/* 2. Public Transport (4.6 지하철/버스 접근성) */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Subway Access */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <SubwayIcon className="h-6 w-6 mr-2 text-primary-blue" />
                 지하철 이용 시
            </h2>
            <div className="text-dark-gray text-sm space-y-2">
              <h3 className="text-lg font-semibold mb-3">영등포구청역 (2, 5호선)</h3>
              <p>6번 출구에서 도보 약 3분 거리입니다.</p>
            </div>
          </div>

          {/* Bus Access */}
          <div className="bg-white p-6 rounded-lg shadow">
             <h2 className="text-2xl font-bold mb-6 flex items-center">
                 <BusIcon className="h-6 w-6 mr-2 text-primary-blue" />
                  버스 이용 시
             </h2>
             <div className="text-dark-gray text-sm space-y-2">
               <h3 className="text-lg font-semibold mb-3">영등포구청 정류장</h3>
               <p>(정류소 ID: 19-852) 도보로 약 3분 거리입니다.</p>
             </div>
          </div>
        </section>

        {/* 3. Parking Information (4.6 주차 정보) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <ParkingIcon className="h-6 w-6 mr-2 text-primary-blue" /> {/* Unified icon size */}
               주차 안내
          </h2>
          {/* Apply card styles only to the outer container, add padding */}
          <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Remove redundant card styles from inner div */}
            <div>
              <h3 className="text-lg font-semibold mb-3">건물 내 주차</h3>
              <ul className="list-disc list-inside space-y-1 text-dark-gray pl-5">
                <li>시간당 주차: 2,000원</li>
                <li>월 정기주차: 10만원</li>
                {/* TODO: Add contact info for monthly parking if available */}
              </ul>
            </div>
            {/* Remove redundant card styles from inner div */}
            <div>
              <h3 className="text-lg font-semibold mb-3">인근 공영주차장</h3>
              <p className="text-dark-gray">영등포구청역 공영주차장 (시간당 1,200원)</p>
            </div>
          </div>
        </section>

        {/* 4. Nearby Amenities (4.6 주변 편의시설) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <AmenitiesIcon className="h-6 w-6 mr-2 text-primary-blue" /> {/* Unified icon size */}
               주변 편의시설 (반경 500m 내)
          </h2>
          <div className="bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
            {/* Changed to icon list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-dark-gray">
              <li className="flex items-center gap-2">
                <ShopIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span><span className="font-semibold">영등포전통시장:</span> 도보 약 10분</span>
              </li>
              <li className="flex items-center gap-2">
                <CafeIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span><span className="font-semibold">카페/음식점:</span> 브런치, 한식, 분식 등 다수</span>
              </li>
              <li className="flex items-center gap-2">
                <StoreIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span><span className="font-semibold">편의점:</span> GS25, CU 등 인접</span>
              </li>
               <li className="flex items-center gap-2">
                <BankIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span><span className="font-semibold">은행/약국:</span> 도보 거리 내 위치</span>
              </li>
              {/* Add more specific amenities if needed */}
            </ul>
          </div>
        </section>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
