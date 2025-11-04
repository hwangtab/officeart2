import type { Metadata } from 'next';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import KakaoMapWrapper from '@/components/KakaoMapWrapper';
import LinkButton from '@/components/LinkButton';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { getDefaultLocation } from '@/data/locations';
import {
  HiMapPin as MapPinIcon,
  HiOutlineTicket as SubwayIcon,
  HiOutlineTruck as BusIcon,
  HiOutlineMap as AmenitiesIcon,
  HiOutlineBanknotes as BankIcon,
  HiOutlineHomeModern as StoreIcon,
  HiOutlineSparkles as CafeIcon,
  HiOutlineRectangleGroup as ParkingIcon
} from 'react-icons/hi2';
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver as NaverIcon } from "react-icons/si";

export const metadata: Metadata = {
  title: '영등포구청점 오시는 길 | 오피스아트',
  description: '영등포구청역에서 도보 5분 거리에 위치한 프리미엄 공유오피스. 지하철 2호선·5호선 6번 출구. 주차장 및 주변 편의시설 정보를 확인하세요.',
  openGraph: {
    title: '영등포구청점 오시는 길 | 오피스아트',
    description: '서울 영등포구 양산로 96 A213호 위치 안내 및 교통 정보',
  },
};

export default function LocationPage() {
  const location = getDefaultLocation();
  const kakaoMapApiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY || "9b52ab4382965154f8f524a4c8c37099";

  // Function to generate map links
  const getNaverMapUrl = () => `https://map.naver.com/v5/search/${encodeURIComponent(location.address)}`;
  const getKakaoMapUrl = () => `https://map.kakao.com/link/search/${encodeURIComponent(location.address)}`;

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center"><span className="hero-highlight-text">{location.name}</span> 오시는 길</SectionTitle>

        {/* 1. Map Section */}
        <ScrollAnimationWrapper>
          <Card className="mb-16">
            <SectionTitle as="h2" level="section" className="text-center">지도</SectionTitle>
            <div className="mb-6">
              <KakaoMapWrapper
                officeAddress={location.address}
                apiKey={kakaoMapApiKey}
                coordinates={location.coordinates}
              />
            </div>

            {/* 주소 정보 */}
            <div className="text-center mb-6">
              <p className="text-lg font-medium mb-2 flex items-center justify-center gap-2">
                <MapPinIcon className="h-5 w-5 text-red-600" />
                {location.address}
              </p>
            </div>
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
                <h3 className="text-lg font-semibold mb-3">
                  {location.transportation.subway.station} ({location.transportation.subway.lines.join(', ')})
                </h3>
                <p>
                  {location.transportation.subway.exit}에서 도보 약 {location.transportation.subway.walkingTime} 거리입니다.
                </p>
                <p className="text-xs text-text-secondary mt-2">{location.transportation.subway.description}</p>
              </div>
            </Card>

            <Card>
              <SectionTitle as="h2" level="subsection" icon={<BusIcon className="h-6 w-6 text-accent-blue" />}>버스 이용 시</SectionTitle>
              <div className="text-text-secondary text-sm space-y-2">
                <h3 className="text-lg font-semibold mb-3">{location.transportation.bus.stopName} 정류장</h3>
                <p>(정류소 ID: {location.transportation.bus.stopId}) 도보로 약 {location.transportation.bus.walkingTime} 거리입니다.</p>
                <p className="text-xs text-text-secondary mt-2">{location.transportation.bus.description}</p>
              </div>
            </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* 3. Parking Information */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
            <SectionTitle as="h2" level="section" align="center" icon={<ParkingIcon className="h-6 w-6 text-accent-blue" />}>주차 안내</SectionTitle>
            <Card className="mb-16 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <SectionTitle as="h3" level="card" className="text-text-primary">건물 내 주차</SectionTitle>
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                    <li>시간당 주차: {location.parking.building.hourly}</li>
                    <li>월 정기주차: {location.parking.building.monthly}</li>
                  </ul>
                </div>
                <div>
                  <SectionTitle as="h3" level="card" className="text-text-primary">인근 공영주차장</SectionTitle>
                  {location.parking.nearby.map((parking, index) => (
                    <div key={index} className="text-text-secondary mb-2">
                      <p className="font-medium">{parking.name}</p>
                      <p className="text-xs">{parking.rate} (도보 {parking.walkingTime})</p>
                    </div>
                  ))}
                </div>
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
                    {location.nearbyFacilities.restaurants.map((restaurant, index) => (
                      <li key={index}>
                        <span className="font-medium">{restaurant.name}:</span> 도보 {restaurant.walkingTime}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionTitle as="h4" level="card" icon={<StoreIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary">
                    편의점 & 쇼핑
                  </SectionTitle>
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                    {location.nearbyFacilities.convenience.map((store, index) => (
                      <li key={index}>
                        <span className="font-medium">{store.name}:</span> 도보 {store.walkingTime}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <SectionTitle as="h4" level="card" icon={<BankIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary">
                    은행 & 기타 서비스
                  </SectionTitle>
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary">
                    {location.nearbyFacilities.services.map((service, index) => (
                      <li key={index}>
                        <span className="font-medium">{service.name}:</span> 도보 {service.walkingTime}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </section>
        </ScrollAnimationWrapper>
      </div>
    </main>
  );
}
