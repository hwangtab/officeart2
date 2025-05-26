'use client';

import KakaoMap from './KakaoMap';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import BackButton from '@/components/BackButton';
import LinkButton from '@/components/LinkButton';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import {
  HiMapPin as MapPinIcon,
  HiOutlineTicket as SubwayIcon,
  HiOutlineTruck as BusIcon,
  HiOutlineMap as AmenitiesIcon,
  HiOutlineBanknotes as BankIcon,
  HiOutlineShoppingBag as ShopIcon,
  HiOutlineHomeModern as StoreIcon,
  HiOutlineSparkles as CafeIcon,
  HiOutlineRectangleGroup as ParkingIcon
} from 'react-icons/hi2';
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver as NaverIcon } from "react-icons/si";

export default function LocationPage() {
  const officeAddress = "서울특별시 영등포구 양산로 96 오피스아트";
  const kakaoMapApiKey = "9b52ab4382965154f8f524a4c8c37099";

  // Function to generate map links (basic example)
  const getNaverMapUrl = () => `https://map.naver.com/v5/search/${encodeURIComponent(officeAddress)}`;
  const getKakaoMapUrl = () => `https://map.kakao.com/link/search/${encodeURIComponent(officeAddress)}`;

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center">오시는 길</SectionTitle>

        {/* 1. Map Section */}
        <ScrollAnimationWrapper>
          <Card className="mb-16">
            <SectionTitle as="h2" level="section" className="text-center">지도</SectionTitle>
            <KakaoMap officeAddress={officeAddress} apiKey={kakaoMapApiKey} />
            <p className="text-center text-lg font-medium mb-4 flex items-center justify-center gap-2">
              <MapPinIcon className="h-5 w-5 text-red-600" />
              {officeAddress}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <LinkButton
                href={getNaverMapUrl()}
                variant="naver"
                size="base"
                iconLeft={<NaverIcon className="h-4 w-4" />}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                네이버 지도 길찾기
              </LinkButton>
              <LinkButton
                href={getKakaoMapUrl()}
                variant="kakao"
                size="base"
                iconLeft={<RiKakaoTalkFill className="h-4 w-4" />}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                카카오맵 길찾기
              </LinkButton>
            </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 2. Public Transport */}
        <ScrollAnimationWrapper>
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <SectionTitle as="h2" level="subsection" icon={<SubwayIcon className="h-6 w-6 text-accent-blue" />}>지하철 이용 시</SectionTitle>
              <div className="text-text-secondary text-sm space-y-2">
                <h3 className="text-lg font-semibold mb-3">영등포구청역 (2, 5호선)</h3>
                <p>6번 출구에서 도보 약 3분 거리입니다.</p>
              </div>
            </Card>

            <Card>
              <SectionTitle as="h2" level="subsection" icon={<BusIcon className="h-6 w-6 text-accent-blue" />}>버스 이용 시</SectionTitle>
              <div className="text-text-secondary text-sm space-y-2">
                <h3 className="text-lg font-semibold mb-3">영등포구청 정류장</h3>
                <p>(정류소 ID: 19-852) 도보로 약 3분 거리입니다.</p>
              </div>
            </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* 3. Parking Information */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
            <SectionTitle as="h2" level="section" align="center" icon={<ParkingIcon className="h-6 w-6 text-accent-blue" />}>주차 안내</SectionTitle>
            <Card className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <SectionTitle as="h3" level="card" className="text-text-primary">건물 내 주차</SectionTitle>
                <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                  <li>시간당 주차: 2,000원</li>
                  <li>월 정기주차: 10만원</li>
                </ul>
              </div>
              <div>
                <SectionTitle as="h3" level="card" className="text-text-primary">인근 공영주차장</SectionTitle>
                <p className="text-text-secondary">영등포구청역 공영주차장 (시간당 1,200원)</p>
              </div>
            </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* 4. Nearby Amenities */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
            <SectionTitle as="h2" level="section" align="center" icon={<AmenitiesIcon className="h-6 w-6 text-accent-blue" />}>주변 편의시설 (반경 500m 내)</SectionTitle>
            <Card className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <SectionTitle as="h4" level="card" icon={<CafeIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary">
                    식당 & 카페
                  </SectionTitle>
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                    <li><span className="font-medium">스타벅스 영등포구청역점:</span> 도보 3분</li>
                    <li><span className="font-medium">다양한 한식/분식/중식당:</span> 도보 5분 이내 다수</li>
                    <li><span className="font-medium">맥도날드, 서브웨이 등 패스트푸드:</span> 도보 5-7분</li>
                  </ul>
                </div>
                <div>
                  <SectionTitle as="h4" level="card" icon={<StoreIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary">
                    편의점 & 쇼핑
                  </SectionTitle>
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                    <li><span className="font-medium">GS25, CU 편의점:</span> 건물 바로 옆 및 도보 1분</li>
                    <li><span className="font-medium">영등포전통시장:</span> 도보 약 10분</li>
                    <li><span className="font-medium">롯데마트 양평점:</span> 도보 약 15분</li>
                  </ul>
                </div>
                <div>
                  <SectionTitle as="h4" level="card" icon={<BankIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary">
                    은행 & 약국
                  </SectionTitle>
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                    <li><span className="font-medium">주요 은행 (국민, 신한, 우리 등):</span> 도보 5분 이내</li>
                    <li><span className="font-medium">약국:</span> 도보 3분 이내 다수</li>
                  </ul>
                </div>
                <div>
                  <SectionTitle as="h4" level="card" icon={<ShopIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary">
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
