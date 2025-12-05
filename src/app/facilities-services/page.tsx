// Removed unused Link import
import type { Metadata } from 'next'; // Import Metadata type
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import wrapper
import OptimizedImage from '@/components/OptimizedImage';
import LinkButton from '@/components/LinkButton'; // Import LinkButton
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import InquirySection from '@/components/InquirySection';
import { HiOutlineSparkles as CoffeeIcon, HiOutlinePrinter as PrinterIcon, HiOutlineWifi as WifiIcon, HiOutlineBuildingStorefront as FacilitiesIcon } from 'react-icons/hi2';
import BackButton from '@/components/BackButton';
import Card from '@/components/Card';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

// Add metadata for the facilities & services page
export const metadata: Metadata = {
  title: "시설 및 서비스 | 오피스아트",
  description: "프리미엄 JURA X9 커피머신 무제한, A3 컬러 복합기 무료, 1Gbps 기가 인터넷, 회의실 무료 이용. 24시간 이용 가능한 최고급 업무 환경. 지금 방문 상담 예약하세요!",
  alternates: {
    canonical: `${siteUrl}/facilities-services`,
  },
};

export default function FacilitiesServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center">시설 및 서비스 안내</SectionTitle>

        {/* 1. Coffee Machine (4.5 커피머신) */}
        {/* Use Card component */}
        <ScrollAnimationWrapper>
          <Card className="mb-16 flex flex-col md:flex-row items-center gap-12"> {/* Removed bg, p, rounded, shadow */}
            {/* Add rounded corners to image container */}
            <div className="md:w-1/3 w-full relative h-64 rounded-lg overflow-hidden">
              {/* TODO: Add JURA X9 image (JURA 공식 or 자체 촬영) */}
              <OptimizedImage
                src="/images/gallery/jura-x9.jpg"
                alt="오피스아트 시설 - 스위스 JURA X9 전자동 커피머신, 12가지 이상의 스페셜티 커피를 24시간 무료로 제공"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="md:w-2/3 w-full">
              {/* Use SectionTitle, adjust size/margin, add icon color */}
              <SectionTitle as="h2" level="section" icon={<CoffeeIcon className="h-6 w-6 text-accent-blue" />}>프리미엄 커피 무제한</SectionTitle> {/* Use level prop */}
              <h3 className="text-xl font-semibold mb-2">JURA X9 (스위스 프리미엄 브랜드)</h3>
              {/* Adjust text color */}
              <p className="text-text-secondary mb-4 text-sm">
                원터치 자동 추출 방식으로 아메리카노, 에스프레소, 라떼, 카푸치노 등 12가지 이상의 다양한 스페셜티 커피 메뉴를 24시간 무료로 즐기실 수 있습니다. (테이크아웃 컵 무료 제공)
              </p>
              {/* Adjust text color */}
              <ul className="list-disc list-outside pl-5 text-sm text-text-secondary space-y-1"> {/* Changed to list-outside */}
                <li>최고급 원두 사용 및 자동 분쇄 시스템</li>
                <li>원터치 자동 추출 및 세척</li>
                <li>다양한 메뉴 선택 가능</li>
                <li>24시간 이용 가능</li>
              </ul>
            </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 2. Printer/Copier (4.5 복합기/출력 서비스) */}
        {/* Use Card component */}
        <ScrollAnimationWrapper>
          <Card className="mb-16 flex flex-col md:flex-row-reverse items-center gap-12"> {/* Removed bg, p, rounded, shadow */}
            {/* Add rounded corners to image container */}
            <div className="md:w-1/3 w-full relative h-64 rounded-lg overflow-hidden">
              {/* TODO: Add EPSON WF-C8690 image (제조사 공식 or 자체 촬영) */}
              <OptimizedImage
                src="/images/gallery/epson-wf-c8690.jpg"
                alt="오피스아트 시설 - EPSON WF-C8690 A3 컬러 복합기, 고품질 컬러 출력과 스캔 기능을 무료로 제공"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="md:w-2/3 w-full">
              {/* Use SectionTitle, adjust size/margin, add icon color */}
              <SectionTitle as="h2" level="section" icon={<PrinterIcon className="h-6 w-6 text-accent-blue" />}>A3 컬러 복합기 무료 이용</SectionTitle> {/* Use level prop */}
              <h3 className="text-xl font-semibold mb-2">EPSON WF-C8690</h3>
              {/* Adjust text color */}
              <p className="text-text-secondary mb-4 text-sm">
                고해상도 A3 컬러/흑백 출력, 복사, 스캔이 가능한 전문가용 복합기를 24시간 무료로 이용하세요. A4, A3 용지가 기본 제공되며, 고급 용지(코팅지, 두꺼운 종이 등)는 별도 요청 시 이용 가능합니다.
              </p>
              {/* Adjust text color */}
              <ul className="list-disc list-outside pl-5 text-sm text-text-secondary space-y-1"> {/* Changed to list-outside */}
                <li>A3 컬러/흑백 출력 (분당 24매)</li>
                <li>자동 양면 인쇄/스캔 기능</li>
                <li>고해상도: 4800 x 1200 dpi</li>
                <li>A4/A3 용지 무료 제공</li>
                <li>24시간 이용 가능</li>
              </ul>
            </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 3. Network/Internet (4.5 네트워크/인터넷) */}
        {/* Use Card component */}
        <ScrollAnimationWrapper>
          <Card className="mb-16"> {/* Removed bg, p, rounded, shadow */}
            {/* Use SectionTitle, adjust size/margin, add icon color */}
            <SectionTitle as="h2" level="section" icon={<WifiIcon className="h-6 w-6 text-accent-blue" />} className="text-center">초고속 네트워크 환경</SectionTitle> {/* Use level prop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Speed */}
              {/* Use border-border-light */}
              <div className="border-r-0 md:border-r border-border-light pr-0 md:pr-4">
                <h3 className="text-xl font-semibold mb-2">1Gbps 기가 인터넷</h3>
                {/* Adjust text color */}
                <p className="text-text-secondary text-sm">KT 기가 오피스 전용선으로 빠르고 안정적인 유선 인터넷 환경을 제공합니다. (각 좌석별 기가비트 이더넷 포트)</p>
              </div>
              {/* WiFi */}
              {/* Use border-border-light */}
              <div className="border-r-0 md:border-r border-border-light pr-0 md:pr-4">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">안정적인 Wi-Fi</h3>
                {/* Adjust text color */}
                <p className="text-text-secondary text-sm">802.11ac 듀얼밴드(5GHz/2.4GHz) Wi-Fi를 WPA3 암호화 및 개별 네트워크 격리로 안전하게 이용할 수 있습니다.</p>
              </div>
              {/* Stability */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">백업 회선 구비</h3>
                {/* Adjust text color */}
                <p className="text-text-secondary text-sm">백업 회선을 통해 예기치 못한 인터넷 장애 발생 시에도 끊김 없는 업무 환경을 보장합니다.</p>
              </div>
            </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 4. Additional Facilities (4.5 추가 시설) */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
            {/* Use SectionTitle, adjust size/margin, add icon color */}
            <SectionTitle as="h2" level="section" icon={<FacilitiesIcon className="h-6 w-6 text-accent-blue" />} className="text-center">추가 편의 시설</SectionTitle> {/* Use level prop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rest Area */}
              {/* Use Card component */}
              <Card>
                <h3 className="text-xl font-semibold mb-3">회의 공간</h3>
                <div className="w-full relative h-48 bg-gray-200 rounded mb-3 overflow-hidden group">
                  {/* TODO: Add Rest Area image */}
                  <OptimizedImage src="/images/gallery/gallery-7.jpg" alt="오피스아트 회의 공간 - 프로젝터와 화이트보드가 설치된 미팅룸 내부, 효율적인 협업과 프레젠테이션이 가능한 환경" fill className="group-hover:scale-105 transition-transform object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                {/* Adjust text color */}
                <p className="text-text-secondary text-sm">
                  고해상도 프로젝터와 화이트보드가 설치되어 있어 회의, 레슨, 강연 등 다양한 용도로 무료 이용이 가능합니다.
                </p>
                {/* Add reservation info */}
                <p className="text-text-secondary text-sm mt-2">
                  <span className="font-semibold text-text-primary">이용 안내:</span> 사전 예약 후 이용 가능합니다. 예약은 관리자에게 문의해주세요. (무료)
                </p>
              </Card>
              {/* Rooftop */}
              {/* Use Card component */}
              <Card>
                <h3 className="text-xl font-semibold mb-3">옥상 공간</h3>
                <div className="w-full relative h-48 bg-gray-200 rounded mb-3 overflow-hidden group">
                  <OptimizedImage src="/images/gallery/gallery-5.jpg" alt="오피스아트 옥상 휴식 공간 - 테이블과 파라솔이 설치된 옥외 휴게 공간, 업무 중 휴식과 네트워킹이 가능한 공간" fill className="group-hover:scale-105 transition-transform object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                {/* Adjust text color */}
                <p className="text-text-secondary text-sm">
                  건물 옥상(바로 위층)에 테이블, 의자, 파라솔 등이 설치되어 있어 휴식, 네트워킹, 야외 미팅 공간으로 활용할 수 있습니다.
                </p>
                {/* Add usage guidelines */}
                <p className="text-text-secondary text-sm mt-2">
                  <span className="font-semibold text-text-primary">이용 안내:</span> 업무 시간 내 자유롭게 이용 가능하며, 음식물 반입 시 뒷정리를 부탁드립니다. (무료)
                </p>
              </Card>
            </div>
            {/* TODO: Add other 부가 서비스 정보 if any */}
          </section>
        </ScrollAnimationWrapper>

        {/* Inquiry Section */}
        <ScrollAnimationWrapper>
          <InquirySection />
        </ScrollAnimationWrapper>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
