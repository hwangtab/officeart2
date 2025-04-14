import React from 'react'; // Import React
import type { Metadata } from 'next'; // Import Metadata type
import Image from 'next/image';
// Removed unused Link import
import BackButton from '@/components/BackButton';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
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
    <main className="flex min-h-screen flex-col items-center py-16 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">집중을 위한 최적의 환경</h1>

        {/* 1. Space Introduction (4.3 공간 소개) */}
        <section className="mb-16">
          {/* Use SectionTitle */}
          <SectionTitle as="h2" size="xlarge" className="text-center">오피스아트 공간 소개 (총 75석)</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Workspace Image */}
            {/* Add rounded corners */}
            <div className="w-full relative h-80 bg-gray-100 rounded-lg overflow-hidden"> {/* Use gray-100 for placeholder bg */}
              {/* TODO: Add workspace image (오피스아트 자체 촬영) */}
              <Image
                src="/images/gallery/DSC07707.jpeg" // 실제 이미지 경로 적용 (작업 공간 전경)
                alt="오피스아트 작업 공간 전경"
                fill // layout="fill" 대체
                style={{ objectFit: 'cover' }} // objectFit 스타일 적용
              />
            </div>
            {/* L-shaped Desk Image */}
            {/* Add rounded corners */}
            <div className="w-full relative h-80 bg-gray-100 rounded-lg overflow-hidden"> {/* Use gray-100 for placeholder bg */}
              {/* TODO: Add L-shaped desk image (오피스아트 자체 촬영) */}
              <Image
                 src="/images/gallery/l-shape-desk.jpg.jpg" // 실제 이미지 경로 적용 (L형 책상) - 파일명 확인 필요
                 alt="160cm L형 책상 상세 이미지"
                 fill // layout="fill" 대체
                 style={{ objectFit: 'cover' }} // objectFit 스타일 적용
               />
            </div>
          </div>
          <div className="text-center mb-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">160cm L형 책상</h3>
            {/* Adjust text color */}
            <p className="text-text-secondary">가로 160cm, 세로 160cm, 높이 72cm</p>
            <p className="text-text-secondary">듀얼 모니터 설치 가능한 넓은 작업면과 수납공간</p>
          </div>
          {/* Floor Plan Section Removed */}
        </section>

        {/* 2. Concentration Enhancement Factors (4.3 집중력 향상 요소) */}
        {/* Use Card component */}
        <Card className="mb-16"> {/* Removed bg, p, rounded */}
          {/* Use SectionTitle */}
          <SectionTitle as="h2" size="xlarge" className="text-center">집중력 향상 요소</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Space */}
            {/* Use Card component */}
            <Card className="text-center flex flex-col items-center">
              {/* Adjust icon and text colors */}
              <PersonalSpaceIcon className="h-8 w-8 mb-3 text-accent-blue" />
              <h3 className="text-xl font-bold mb-3 text-text-primary">적절한 개인 공간</h3>
              <p className="text-text-secondary text-sm">넓은 L형 책상이 당신만의 집중 영역을 만들어 드립니다. 장비와 자료를 여유롭게 펼쳐놓고 마음껏 작업에 몰입하세요. 오피스아트가 응원합니다.</p>
            </Card>
            {/* Optimized Environment */}
            {/* Use Card component */}
            <Card className="text-center flex flex-col items-center">
               {/* Adjust icon and text colors */}
               <OptimizedEnvIcon className="h-8 w-8 mb-3 text-accent-blue" />
              <h3 className="text-xl font-bold mb-3 text-text-primary">업무 최적화 환경</h3>
              <p className="text-text-secondary text-sm">적절한 조명, 최적 온도 유지(풍부한 냉난방), 산소공급 시스템 및 조용한 분위기로 쾌적함을 유지합니다. 작가님의 작업 능률 향상을 위한 최고의 환경입니다.</p>
            </Card>
            {/* 24-Hour Access */}
            {/* Use Card component */}
            <Card className="text-center flex flex-col items-center">
               {/* Adjust icon and text colors */}
               <AccessIcon className="h-8 w-8 mb-3 text-accent-blue" />
              <h3 className="text-xl font-bold mb-3 text-text-primary">24시간 자유로운 이용</h3>
              <p className="text-text-secondary text-sm">지문인식 출입 시스템으로 심야/새벽 작업 등 개인 일정에 맞춰 유연하게 이용 가능합니다. 보안 문제 발생 시 KT텔레캅이 즉시 출동하여 안전을 보장합니다.</p>
            </Card>
          </div>
        </Card>

        {/* 3. Comparison with Cafes (4.3 카페와의 비교) */}
        {/* Use Card component */}
        <Card className="mb-16 overflow-x-auto"> {/* Added overflow-x-auto for table responsiveness */}
          {/* Use SectionTitle */}
          <SectionTitle as="h2" size="xlarge" className="text-center">카페 작업과의 비교</SectionTitle>
          <p className="text-sm text-text-secondary text-center mb-4 md:hidden">표를 좌우로 스크롤하여 전체 내용을 확인하세요.</p>
          {/* Adjust table styles */}
          <div className="overflow-x-auto"> {/* Keep overflow-x-auto on inner div if Card adds padding */}
            <table className="min-w-full border border-border-light text-sm">
              <thead>
                {/* Adjust header background and text color */}
                <tr className="bg-gray-50">
                  {/* Reduced padding for mobile */}
                  <th className="py-3 px-2 md:px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                  <th className="py-3 px-2 md:px-4 border-b border-border-light text-left font-semibold text-text-primary">카페</th>
                  <th className="py-3 px-2 md:px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th> {/* Use primary color */}
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '소음', icon: <NoiseIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '대화 소음, 음악, 기계 소리', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '모두가 집중하는 정숙한 분위기', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '공간 안정성', icon: <StabilityIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '자리 확보 불확실, 짐 보관 어려움', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '고정석 보장, 개인 물품 보관 가능', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '비용 효율성', icon: <CostIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '음료값 (월 8만원+) + 식사/간식', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '월 25만원 (커피, 출력 무제한 포함)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '책상 크기', icon: <DeskIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '작은 테이블', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '이용 시간', icon: <AccessIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '카페 영업시간', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '24시간', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '의자', icon: <ChairIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '불편한 카페 의자', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '180만원대 프리미엄 의자', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } }, // Updated price
                  { item: '네트워크', icon: <WifiIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '불안정할 수 있음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '안정적인 기가 인터넷', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {/* Item Column with Icon */}
                    {/* Reduced padding, allow word break */}
                    <td className="py-3 px-2 md:px-4 border-b font-medium whitespace-normal">
                      <div className="flex items-center gap-2">
                        {/* Adjust icon color */}
                        {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary" })}
                        <span>{row.item}</span>
                      </div>
                    </td>
                    {/* Cafe Column with Icon */}
                    {/* Reduced padding, allow word break */}
                    <td className="py-3 px-2 md:px-4 border-b whitespace-normal">
                      <div className="flex items-center gap-1">
                        {row.cafe.icon}
                        <span>{row.cafe.text}</span>
                      </div>
                    </td>
                    {/* Office Art Column with Icon and Highlight */}
                    {/* Adjust highlight background and text color */}
                    {/* Reduced padding, allow word break */}
                    <td className="py-3 px-2 md:px-4 border-b border-border-light bg-orange-50 whitespace-normal"> {/* Use light orange bg */}
                      <div className="flex items-center gap-1 font-bold text-primary"> {/* Use primary color */}
                        {row.officeart.icon}
                        <span>{row.officeart.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* 4. Comparison with General Coworking Spaces */}
        {/* Use Card component */}
        <Card className="mb-16 overflow-x-auto"> {/* Added overflow-x-auto */}
          {/* Use SectionTitle */}
          <SectionTitle as="h2" size="xlarge" className="text-center">일반 공유오피스와의 비교</SectionTitle>
          <p className="text-sm text-text-secondary text-center mb-4 md:hidden">표를 좌우로 스크롤하여 전체 내용을 확인하세요.</p>
          {/* Adjust table styles */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border-light text-sm">
              <thead>
                {/* Adjust header background and text color */}
                <tr className="bg-gray-50">
                  {/* Reduced padding for mobile */}
                  <th className="py-3 px-2 md:px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                  <th className="py-3 px-2 md:px-4 border-b border-border-light text-left font-semibold text-text-primary">일반 공유오피스</th>
                  <th className="py-3 px-2 md:px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th> {/* Use primary color */}
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '월 비용', icon: <CostIcon className="h-5 w-5 text-gray-500" />, general: { text: '30-40만원', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '25만원', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '의자', icon: <ChairIcon className="h-5 w-5 text-gray-500" />, general: { text: '일반 의자', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '180만원대 프리미엄', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } }, // Updated price
                  { item: '책상', icon: <DeskIcon className="h-5 w-5 text-gray-500" />, general: { text: '일반 데스크', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '커피', icon: <OptimizedEnvIcon className="h-5 w-5 text-gray-500" />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } }, // Reusing OptimizedEnvIcon for Coffee
                  { item: '출력', icon: <PrinterIcon className="h-5 w-5 text-gray-500" />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '계약 기간', icon: <CalendarIcon className="h-5 w-5 text-gray-500" />, general: { text: '최소 3-6개월', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '1개월부터 가능', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                  { item: '보증금', icon: <StabilityIcon className="h-5 w-5 text-gray-500" />, general: { text: '1-2개월치', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '없음', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } }, // Reusing StabilityIcon for Deposit
                  { item: '네트워킹', icon: <PersonalSpaceIcon className="h-5 w-5 text-gray-500" />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '웹툰/일러스트 특화', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } }, // Reusing PersonalSpaceIcon for Networking
                  { item: '특화 서비스', icon: <ServiceIcon className="h-5 w-5 text-gray-500" />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '창작자 특화 서비스', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {/* Item Column with Icon */}
                    {/* Reduced padding, allow word break */}
                    <td className="py-3 px-2 md:px-4 border-b font-medium whitespace-normal">
                      <div className="flex items-center gap-2">
                        {/* Adjust icon color */}
                        {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary" })}
                        <span>{row.item}</span>
                      </div>
                    </td>
                    {/* General Column with Icon */}
                    {/* Reduced padding, allow word break */}
                    <td className="py-3 px-2 md:px-4 border-b whitespace-normal">
                      <div className="flex items-center gap-1">
                        {row.general.icon}
                        <span>{row.general.text}</span>
                      </div>
                    </td>
                    {/* Office Art Column with Icon and Highlight */}
                    {/* Adjust highlight background and text color */}
                    {/* Reduced padding, allow word break */}
                    <td className="py-3 px-2 md:px-4 border-b border-border-light bg-orange-50 whitespace-normal"> {/* Use light orange bg */}
                      <div className="flex items-center gap-1 font-bold text-primary"> {/* Use primary color */}
                        {row.officeart.icon}
                        <span>{row.officeart.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
