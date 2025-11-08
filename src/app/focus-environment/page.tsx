import React from 'react'; // Import React
import type { Metadata } from 'next'; // Import Metadata type
import OptimizedImage from '@/components/OptimizedImage';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import wrapper
// Removed unused Link import
import BackButton from '@/components/BackButton';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import InquirySection from '@/components/InquirySection';
// Import icons (Removed ArrowLeftIcon)
import {
  HiOutlineUserGroup as PersonalSpaceIcon, HiOutlineSparkles as OptimizedEnvIcon, HiOutlineClock as AccessIcon,
  HiOutlineNoSymbol as NoiseIcon, HiOutlineLockClosed as StabilityIcon, HiOutlineCurrencyDollar as CostIcon,
  HiOutlineComputerDesktop as DeskIcon, HiOutlineRectangleGroup as ChairIcon, HiOutlineWifi as WifiIcon,
  HiOutlineCalendarDays as CalendarIcon, HiOutlinePrinter as PrinterIcon, HiOutlineWrenchScrewdriver as ServiceIcon,
  HiOutlineCheckCircle as CheckCircleIcon, HiOutlineXCircle as XCircleIcon
} from 'react-icons/hi2';

// Add metadata for the focus environment page
export const metadata: Metadata = {
  title: "집중 환경 | 오피스아트",
  description: "오피스아트의 넓은 L형 책상, 독립적인 파티션, 백색소음기, 집중력 향상 조명 등 최적의 집중 환경을 위한 요소들을 소개합니다.",
};

export default function FocusEnvironmentPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center"><span className="">집중</span>을 위한 최적의 환경</SectionTitle> {/* Use level prop */}

        {/* 1. Space Introduction (4.3 공간 소개) */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
          {/* Use SectionTitle */}
          <SectionTitle as="h2" level="section" className="text-center"><span className="">오피스아트 공간 소개</span></SectionTitle> {/* Use level prop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Workspace Image */}
            {/* Add rounded corners */}
            <div className="w-full relative h-80 bg-gray-100 rounded-lg overflow-hidden"> {/* Use gray-100 for placeholder bg */}
              {/* TODO: Add workspace image (오피스아트 자체 촬영) */}
              <OptimizedImage
                src="/images/gallery/DSC07707.jpeg"
                alt="오피스아트 내부 전경 - 여러 개의 L자형 책상과 스틸케이스 의자가 배치된 집중 작업 공간, 넓은 지정석에서 창의력과 집중력이 극대화되는 환경"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            {/* L-shaped Desk Image */}
            {/* Add rounded corners */}
            <div className="w-full relative h-80 bg-gray-100 rounded-lg overflow-hidden"> {/* Use gray-100 for placeholder bg */}
              {/* TODO: Add L-shaped desk image (오피스아트 자체 촬영) */}
              <OptimizedImage
                 src="/images/gallery/l-shape-desk.jpg"
                 alt="160cm L형 책상 상세 이미지 - 넓은 작업 공간과 듀얼 모니터 설치가 가능한 인체공학적 설계의 프리미엄 데스크"
                 fill
                 className="object-cover"
                 sizes="(min-width: 768px) 50vw, 100vw"
               />
            </div>
          </div>
          {/* Use Card component for consistency */}
          <Card className="text-center mb-8">
            <SectionTitle as="h3" level="subsection" align="center" underline={true}><span className="">160cm L형 책상</span></SectionTitle> {/* Use level prop, override underline */}
            {/* Adjust text color */}
            <p className="text-text-secondary">가로 160cm, 세로 160cm, 높이 72cm</p>
            <p className="text-text-secondary"><span className="">듀얼 모니터</span> 설치 가능한 <span className="">넓은 작업면</span>과 <span className="">수납공간</span></p>
          </Card>
          {/* Floor Plan Section Removed */}
          </section>
        </ScrollAnimationWrapper>

        {/* 2. Concentration Enhancement Factors (4.3 집중력 향상 요소) */}
        {/* Use Card component */}
        <ScrollAnimationWrapper>
          <Card className="mb-16"> {/* Removed bg, p, rounded */}
          {/* Use SectionTitle */}
          <SectionTitle as="h2" level="section" className="text-center"><span className="">집중력 향상 요소</span></SectionTitle> {/* Use level prop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Space */}
            {/* Use Card component */}
            <Card className="text-center flex flex-col items-center">
              {/* Adjust icon and text colors */}
              <PersonalSpaceIcon className="h-8 w-8 mb-3 text-accent-blue" />
              <SectionTitle as="h3" level="card" className="text-text-primary"><span className="">프리미엄 지정석</span></SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary text-sm"><span className="">전용 L형 책상</span>과 <span className="">프리미엄 공간</span>을 제공합니다. 장비와 자료를 여유롭게 배치하고 <span className="">집중력 있는 작업</span>을 경험하세요. 오피스아트가 지원합니다.</p>
            </Card>
            {/* Optimized Environment */}
            {/* Use Card component */}
            <Card className="text-center flex flex-col items-center">
               {/* Adjust icon and text colors */}
               <OptimizedEnvIcon className="h-8 w-8 mb-3 text-accent-blue" />
              <SectionTitle as="h3" level="card" className="text-text-primary"><span className="">업무 최적화 환경</span></SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary text-sm">적절한 <span className="">조명</span>, <span className="">최적 온도 유지</span>(풍부한 냉난방), <span className="">산소공급 시스템</span> 및 <span className="">조용한 분위기</span>로 <span className="">쾌적함</span>을 유지합니다. 작가님의 <span className="">작업 능률 향상</span>을 위한 최고의 환경입니다.</p>
            </Card>
            {/* 24-Hour Access */}
            {/* Use Card component */}
            <Card className="text-center flex flex-col items-center">
               {/* Adjust icon and text colors */}
               <AccessIcon className="h-8 w-8 mb-3 text-accent-blue" />
              <SectionTitle as="h3" level="card" className="text-text-primary"><span className="">24시간 자유로운 이용</span></SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary text-sm"><span className="">지문인식 출입 시스템</span>으로 <span className="">심야/새벽 작업</span> 등 개인 일정에 맞춰 유연하게 이용 가능합니다. <span className="">보안 문제 발생 시 KT텔레캅</span>이 즉시 출동하여 <span className="">안전</span>을 보장합니다.</p>
            </Card>
          </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 3. Comparison with Cafes (4.3 카페와의 비교) */}
        {/* Use Card component */}
        <ScrollAnimationWrapper>
          <Card className="mb-16 overflow-x-auto"> {/* Added overflow-x-auto for table responsiveness */}
          {/* Use SectionTitle */}
          <SectionTitle as="h2" level="section" className="text-center"><span className="">카페 작업과의 비교</span></SectionTitle> {/* Use level prop */}
          <p className="text-sm text-text-secondary text-center mb-4 md:hidden">표를 좌우로 스크롤하여 전체 내용을 확인하세요.</p>
          {/* Adjust table styles */}
          <div className="overflow-x-auto"> {/* Keep overflow-x-auto on inner div if Card adds padding */}
            <table className="min-w-full border border-border-light text-sm responsive-table">
              <thead>
                {/* Adjust header background and text color */}
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                  <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">카페</th>
                  <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '소음', icon: <NoiseIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '대화 소음, 음악, 기계 소리', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '모두가 집중하는 정숙한 분위기', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '공간 안정성', icon: <StabilityIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '자리 확보 불확실, 짐 보관 어려움', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '고정석 보장, 개인 물품 보관 가능', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '비용 효율성', icon: <CostIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '음료값 (월 8만원+) + 식사/간식', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '월 25만원 (커피, 출력 무제한 포함)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '책상 크기', icon: <DeskIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '작은 테이블', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '이용 시간', icon: <AccessIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '카페 영업시간', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '24시간', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '의자', icon: <ChairIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '불편한 카페 의자', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '180만원대 프리미엄 의자', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } }, // Updated price
                  { item: '네트워크', icon: <WifiIcon className="h-5 w-5 text-text-secondary" />, cafe: { text: '불안정할 수 있음', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '안정적인 기가 인터넷', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b font-medium whitespace-normal" data-label="항목">
                      <div className="flex items-center gap-1">
                        {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary flex-shrink-0" })}
                        <span>{row.item}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b whitespace-normal" data-label="카페">
                      <div className="flex items-center gap-1">
                        {React.cloneElement(row.cafe.icon, { className: "h-5 w-5 text-error flex-shrink-0" })}
                        <span>{row.cafe.text}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-border-light bg-orange-50 whitespace-normal" data-label="오피스아트">
                      <div className="flex items-center gap-1 text-primary">
                        {React.cloneElement(row.officeart.icon, { className: "h-5 w-5 text-success flex-shrink-0" })}
                        <span>{row.officeart.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 4. Comparison with General Coworking Spaces */}
        {/* Use Card component */}
        <ScrollAnimationWrapper>
          <Card className="mb-16 overflow-x-auto"> {/* Added overflow-x-auto */}
          {/* Use SectionTitle */}
          <SectionTitle as="h2" level="section" className="text-center"><span className="">일반 공유오피스와의 비교</span></SectionTitle> {/* Use level prop */}
          <p className="text-sm text-text-secondary text-center mb-4 md:hidden">표를 좌우로 스크롤하여 전체 내용을 확인하세요.</p>
          {/* Adjust table styles */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border-light text-sm responsive-table">
              <thead>
                {/* Adjust header background and text color */}
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                  <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">일반 공유오피스</th>
                  <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '월 비용', icon: <CostIcon className="h-5 w-5 text-text-secondary" />, general: { text: '30-40만원', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '25만원', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '의자', icon: <ChairIcon className="h-5 w-5 text-text-secondary" />, general: { text: '일반 의자', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '180만원대 프리미엄 의자', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } }, // Added '의자'
                  { item: '책상', icon: <DeskIcon className="h-5 w-5 text-text-secondary" />, general: { text: '일반 데스크', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '커피', icon: <OptimizedEnvIcon className="h-5 w-5 text-text-secondary" />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } }, // Reusing OptimizedEnvIcon for Coffee
                  { item: '출력', icon: <PrinterIcon className="h-5 w-5 text-text-secondary" />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '계약 기간', icon: <CalendarIcon className="h-5 w-5 text-text-secondary" />, general: { text: '최소 3-6개월', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '1개월부터 가능', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                  { item: '보증금', icon: <StabilityIcon className="h-5 w-5 text-text-secondary" />, general: { text: '1-2개월치', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '없음', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } }, // Reusing StabilityIcon for Deposit
                  { item: '네트워킹', icon: <PersonalSpaceIcon className="h-5 w-5 text-text-secondary" />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '웹툰/일러스트 특화', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } }, // Reusing PersonalSpaceIcon for Networking
                  { item: '특화 서비스', icon: <ServiceIcon className="h-5 w-5 text-text-secondary" />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '창작자 특화 서비스', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b font-medium whitespace-normal" data-label="항목">
                      <div className="flex items-center gap-1">
                        {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary flex-shrink-0" })}
                        <span>{row.item}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b whitespace-normal" data-label="일반 공유오피스">
                      <div className="flex items-center gap-1">
                        {React.cloneElement(row.general.icon, { className: "h-5 w-5 text-error flex-shrink-0" })}
                        <span>{row.general.text}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-border-light bg-orange-50 whitespace-normal" data-label="오피스아트">
                      <div className="flex items-center gap-1 text-primary">
                        {React.cloneElement(row.officeart.icon, { className: "h-5 w-5 text-success flex-shrink-0" })}
                        <span>{row.officeart.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </Card>
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
