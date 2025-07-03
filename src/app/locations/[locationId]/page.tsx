// src/app/locations/[locationId]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locations, getLocationById } from '@/data/locations';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import CoreValuesSection from '@/components/CoreValuesSection';
import OccupancyCategoriesSection from '@/components/OccupancyCategoriesSection';
import AtAGlanceSection from '@/components/AtAGlanceSection';
import GallerySection from '@/components/GallerySection';
import InquirySection from '@/components/InquirySection';
import LinkButton from '@/components/LinkButton';
import KakaoMapWrapper from '@/components/KakaoMapWrapper';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import {
  HiMapPin as MapPinIcon,
  HiOutlineTicket as SubwayIcon,
  HiOutlineTruck as BusIcon,
} from 'react-icons/hi2';

interface LocationPageProps {
  params: Promise<{
    locationId: string;
  }>;
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationById(resolvedParams.locationId);
  
  if (!location) {
    return {
      title: '지점을 찾을 수 없습니다 | 오피스아트',
      description: '요청하신 지점을 찾을 수 없습니다.',
    };
  }

  return {
    title: `${location.name} | 오피스아트`,
    description: `${location.description} ${location.nearbyStation} 도보 ${location.walkingTime} 거리의 프리미엄 공유오피스입니다.`,
    openGraph: {
      title: `${location.name} | 오피스아트`,
      description: location.description,
    },
  };
}

// 정적 경로 생성
export async function generateStaticParams() {
  return locations.map((location) => ({
    locationId: location.id,
  }));
}

export default async function LocationPage({ params }: LocationPageProps) {
  const resolvedParams = await params;
  const location = getLocationById(resolvedParams.locationId);

  if (!location) {
    notFound();
  }

  // 지점별 Hero 배경 이미지 설정
  const getHeroBackground = (locationId: string) => {
    switch (locationId) {
      case 'yeongdeungpo':
        return '/images/gallery/value-focus.jpg';
      case 'bulgwang':
        return '/images/hero/bulgwang-hero.png';
      default:
        return '/images/gallery/value-focus.jpg';
    }
  };

  // 지점별 갤러리 이미지 설정
  const getGalleryImages = (locationId: string) => {
    switch (locationId) {
      case 'bulgwang':
        return [
          '/images/bulgwang/bulgwang01.png',
          '/images/bulgwang/bulgwang02.png',
          '/images/bulgwang/bulgwang03.png',
          '/images/bulgwang/bulgwang04.png',
          '/images/bulgwang/bulgwang05.png',
          '/images/bulgwang/bulgwang06.png',
          '/images/bulgwang/bulgwang07.png',
        ];
      default:
        return undefined; // 기본 이미지 사용
    }
  };

  // 환경변수에서 카카오맵 API 키 가져오기
  const kakaoMapApiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY || "9b52ab4382965154f8f524a4c8c37099";

  return (
    <main>
      {/* 지점별 Hero Section */}
      <section 
        className="relative w-full h-[70vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url("${getHeroBackground(location.id)}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="hero-highlight-text">{location.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10">
            {location.id === 'bulgwang' 
              ? <>180cm <span className="hero-highlight-text">초대형 책상</span>과 안락한 의자의 <span className="hero-highlight-text">프리미엄</span>을 만나보세요.</>
              : <>180만원대 <span className="hero-highlight-text">최고급 의자</span>와 L형 책상의 <span className="hero-highlight-text">프리미엄</span>을 만나보세요.</>
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton 
              href="/contact"
              variant="primary"
              size="lg"
            >
              상담 신청하기
            </LinkButton>
            <LinkButton 
              href={`/location/${location.id}`}
              variant="secondary"
              size="lg"
            >
              교통정보 보기
            </LinkButton>
          </div>
        </div>
      </section>

      {/* 지점 정보 섹션 */}
      <ScrollAnimationWrapper>
        <section className="py-16 px-4 w-full">
          <div className="max-w-5xl mx-auto">
            <SectionTitle level="section" align="center" className="mb-12">
              {location.name} 상세 정보
            </SectionTitle>
            
            <Card className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">📍</span>
                  <div>
                    <h3 className="font-semibold text-text-primary">주소</h3>
                    <p className="text-text-secondary">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">☎️</span>
                  <div>
                    <h3 className="font-semibold text-text-primary">연락처</h3>
                    <p className="text-text-secondary">
                      <a href={`tel:${location.phone}`} className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded">
                        {location.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">🕐</span>
                  <div>
                    <h3 className="font-semibold text-text-primary">운영시간</h3>
                    <p className="text-text-secondary">평일 {location.operatingHours.weekdays}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* 가격 안내 섹션 */}
      <ScrollAnimationWrapper>
        <section className="py-16 px-4 w-full">
          <div className="max-w-5xl mx-auto">
            <SectionTitle level="section" align="center" className="mb-12">
              가격 안내
            </SectionTitle>
            
            <Card className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-background-main rounded-lg">
                  <div>
                    <h4 className="font-semibold text-text-primary">정기 이용권</h4>
                    <p className="text-sm text-text-secondary">프리미엄 작업공간 무제한 이용</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{location.pricing.monthlyDesk.toLocaleString()}원</p>
                    <p className="text-sm text-text-secondary">월</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-background-main rounded-lg">
                  <div>
                    <h4 className="font-semibold text-text-primary">비상주사무실</h4>
                    <p className="text-sm text-text-secondary">사업자등록용 주소 제공</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{location.pricing.nonResidentOffice.price.toLocaleString()}원</p>
                    <p className="text-sm text-text-secondary">월</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* 기존 섹션들을 재활용 */}
      <ScrollAnimationWrapper>
        <CoreValuesSection locationId={location.id} />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <OccupancyCategoriesSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <AtAGlanceSection />
      </ScrollAnimationWrapper>

      <GallerySection images={getGalleryImages(location.id)} />

      {/* 위치 및 기본 교통정보 섹션 */}
      <ScrollAnimationWrapper>
        <section className="pt-16 pb-12 px-4 w-full">
          <div className="max-w-5xl mx-auto">
            <SectionTitle level="section" align="center" className="mb-12">
              위치 및 교통정보
            </SectionTitle>
            
            {/* 지도 */}
            <Card className="mb-8">
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
            </Card>

            {/* 기본 교통 정보 */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* 지하철 정보 */}
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <SubwayIcon className="h-6 w-6 text-accent-blue" />
                  <h3 className="text-lg font-semibold text-text-primary">지하철</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">{location.transportation.subway.station}</p>
                  <p className="text-sm text-text-secondary">
                    {location.transportation.subway.lines.join(', ')} | {location.transportation.subway.exit}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    도보 {location.transportation.subway.walkingTime}
                  </p>
                </div>
              </Card>

              {/* 버스 정보 */}
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <BusIcon className="h-6 w-6 text-accent-blue" />
                  <h3 className="text-lg font-semibold text-text-primary">버스</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">{location.transportation.bus.stopName} 정류장</p>
                  <p className="text-sm text-text-secondary">
                    정류소 ID: {location.transportation.bus.stopId}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    도보 {location.transportation.bus.walkingTime}
                  </p>
                </div>
              </Card>
            </div>

            {/* 상세 교통정보 링크 */}
            <div className="text-center mt-10">
              <LinkButton 
                href={`/location/${location.id}`}
                variant="primary"
                size="lg"
              >
                상세한 교통정보 보기
              </LinkButton>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <InquirySection />
      </ScrollAnimationWrapper>
    </main>
  );
}