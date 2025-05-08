'use client'; // Make this a client component

import React, { useState } from 'react'; // Import useState for interactivity
import Image from 'next/image';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import LinkButton from '@/components/LinkButton';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import {
  HiOutlineDocumentText as ContractIcon, HiOutlineCreditCard as PaymentIcon, HiOutlinePhone as PhoneIcon,
  HiOutlineCurrencyDollar as CurrencyDollarIcon, HiOutlineRectangleGroup as ChairIcon, HiOutlineComputerDesktop as DeskIcon,
  HiOutlineSparkles as CoffeeIcon, HiOutlinePrinter as PrinterIcon, HiOutlineCalendarDays as CalendarDaysIcon,
  HiOutlineLockClosed as LockClosedIcon, HiOutlineUserGroup as UsersIcon, HiOutlineWrenchScrewdriver as WrenchIcon,
  HiOutlineWifi as WifiIcon, HiOutlineNoSymbol as NoSymbolIcon, HiOutlineClock as ClockIcon,
  HiOutlineCheckCircle as CheckCircleIcon, HiOutlineXCircle as XCircleIcon, HiOutlineCalendar as CalendarIcon, // Added for Visit Booking
  HiOutlineChatBubbleLeftRight as ChatIcon // Added for Online Inquiry
} from 'react-icons/hi2';
import { RiKakaoTalkFill } from "react-icons/ri";
import BackButton from '@/components/BackButton';

// Define types for pricing options if needed later
// interface MonthlyOption { ... }
// Define price constants and types
const MONTHLY_BASE_PRICE = 250000; // 오픈 특가
const DAILY_PRICES: { [key: string]: number } = {
  '1day': 20000,
  '3days': 50000,
  '5days': 80000,
  '10days': 150000,
};
const DAILY_PACKAGE_LABELS: { [key: string]: string } = {
  '1day': '1일 이용',
  '3days': '3일 패키지',
  '5days': '5일 패키지',
  '10days': '10일 패키지',
};

export default function PricingClient() {
  // --- State for Interactivity ---
  const [dailyPackage, setDailyPackage] = useState<string>('1day');
  const [selectedDailyPrice, setSelectedDailyPrice] = useState<number>(DAILY_PRICES['1day']);

  // --- Data (Keep existing data) ---
  const coworkingComparison = [
    { item: '월 비용', icon: <CurrencyDollarIcon />, general: { text: '30-40만원', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '특가 25만원 (정가 45만원)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '의자', icon: <ChairIcon />, general: { text: '일반 의자', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '180만원대 프리미엄', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '책상', icon: <DeskIcon />, general: { text: '일반 데스크', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '커피', icon: <CoffeeIcon />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '출력', icon: <PrinterIcon />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '계약 기간', icon: <CalendarDaysIcon />, general: { text: '최소 3-6개월', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '1개월부터 가능', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '보증금', icon: <LockClosedIcon />, general: { text: '1-2개월치', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '없음', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '네트워킹', icon: <UsersIcon />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '웹툰/일러스트 특화', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '특화 서비스', icon: <WrenchIcon />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '창작자 특화 서비스', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
  ];

  const cafeComparison = [
    { item: '월 비용', icon: <CurrencyDollarIcon />, cafe: { text: '커피값 약 8만원 + α', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '특가 25만원 고정 (정가 45만원)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '의자', icon: <ChairIcon />, cafe: { text: '불편한 카페 의자', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '180만원대 프리미엄', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '책상', icon: <DeskIcon />, cafe: { text: '작은 테이블', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '소음', icon: <NoSymbolIcon />, cafe: { text: '높음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '낮음 (집중 환경)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '자리 확보', icon: <UsersIcon />, cafe: { text: '불확실', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '항상 보장', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '이용 시간', icon: <ClockIcon />, cafe: { text: '카페 영업시간', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '24시간', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '짐 보관', icon: <LockClosedIcon />, cafe: { text: '불가능', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '가능', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '출력 서비스', icon: <PrinterIcon />, cafe: { text: '없음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '네트워크', icon: <WifiIcon />, cafe: { text: '불안정', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '안정적인 기가 인터넷', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
  ];

  // --- Calculation Logic ---
  React.useEffect(() => {
    setSelectedDailyPrice(DAILY_PRICES[dailyPackage]);
  }, [dailyPackage]);

  // Helper to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <SectionTitle as="h1" level="page" align="center"><span className="">가격</span> 및 <span className="">멤버십 안내</span></SectionTitle> {/* Use level prop */}

      {/* 1. Pricing Plans */}
      <ScrollAnimationWrapper>
        <section className="mb-16">
        <SectionTitle as="h2" level="section" align="center"><span className="">요금제 안내</span></SectionTitle> {/* Use level prop */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:max-w-5xl mx-auto">
          {/* Monthly Plan Card - Added h-full */}
          <Card className="shadow-lg border-2 border-primary flex flex-col"> {/* Removed h-full */}
            <p className="text-3xl  text-center mt-4 mb-1 text-text-secondary"><del>정가 45만원</del></p> {/* mt-4 추가 */}
            <p className="text-5xl font-bold text-center mb-2 text-accent-orange"><span className="">오픈 특가 월 25만원</span></p>
            <p className="text-sm text-center text-warning-red mb-6">(<span className="">한정 좌석 특가</span>, 소진 시 조기 마감)</p>

            {/* Image Section */}
            <div className="relative w-full h-40 my-6 overflow-hidden rounded-md group">
              <Image
                src="/images/hero/hero-background.jpg"
                alt="오피스아트 메인 배경"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 mb-6 text-text-secondary text-sm flex-grow mx-auto max-w-md"> {/* Removed pl-8, added mx-auto max-w-md for centering, added pl-5 for left padding */}
              <li><span className="">고정석</span> (<span className="">160cm L형 책상</span>)</li>
              <li><span className="">프리미엄 의자</span> (스틸케이스/휴먼스케일)</li>
              <li><span className="">24시간 자유 이용</span> (지문 인식)</li>
              <li><span className="">JURA 프리미엄 커피 무제한</span></li>
              <li><span className="">EPSON A3 컬러 복합기 무제한</span> (용지 제공)</li>
              <li><span className="">초고속 유/무선 인터넷</span> (KT 1Gbps + 백업 회선)</li>
              <li><span className="">냉난방</span> 및 <span className="">공기청정 시스템</span></li>
              <li><span className="">휴게 공간 이용</span></li>
            </ul>
            {/* Updated CTAs */}
            <div className="text-center px-4 pb-4 space-y-3 flex flex-col gap-2"> {/* Added flex flex-col gap-4 for button spacing */}
               <LinkButton href="/contact?inquiryType=visit&plan=monthly" variant="primary" size="lg" className="w-full max-w-sm mx-auto" iconLeft={<CalendarIcon className="h-5 w-5"/>}>
                 방문 상담 예약
               </LinkButton>
              <LinkButton href="https://open.kakao.com/me/offceart" variant="kakao" size="lg" iconLeft={<RiKakaoTalkFill className="h-5 w-5" />} className="w-full max-w-sm mx-auto" target="_blank" rel="noopener noreferrer">
                카카오톡 문의
              </LinkButton>
            </div>
          </Card>

        </div>
        </section>
      </ScrollAnimationWrapper>

      {/* 2. Payment Methods (Keep as is) */}
      <ScrollAnimationWrapper>
        <section className="mb-16">
         <SectionTitle as="h2" level="section" align="center"><span className="">결제 방법</span></SectionTitle> {/* Use level prop */}
         <Card className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div>
                 {/* Pass icon via prop */}
                 <SectionTitle as="h3" level="card" icon={<ContractIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"><span className="">계약 방식</span></SectionTitle> {/* Use level prop */}
                 <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary text-sm"> {/* Changed list-inside to list-outside, pl-7 to pl-8 */}
                     <li><span className="">전자계약</span> (카카오톡으로 간편하게)</li>
                     <li>계약 담당: 김성은 팀장</li>
                 </ul>
             </div>
             <div>
                 {/* Pass icon via prop */}
                 <SectionTitle as="h3" level="card" icon={<PaymentIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"><span className="">결제 수단</span></SectionTitle> {/* Use level prop */}
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary text-sm"> {/* Changed list-inside to list-outside, pl-5 to pl-8 */}
                     <li><span className="">계좌이체</span>: 기업은행 301-101031-01-050 (예금주: 한국스마트협동조합)</li>
                     <li><span className="">카드 결제</span>: 현장 방문 결제 또는 <span className="">정기결제 신청</span> 가능</li>
                     <li><span className="">세금계산서 발행</span>: 사업자 회원 요청 시 발행 (VAT 별도)</li>
                  </ul>
             </div>
         </Card>
         </section>
       </ScrollAnimationWrapper>

      {/* 3. Benefit Comparison (Keep as is) */}
      <ScrollAnimationWrapper>
        <section className="mb-16">
        <SectionTitle as="h2" level="section" align="center"><span className="">혜택 비교</span></SectionTitle> {/* Use level prop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Comparison Table 1 */}
          <Card className="overflow-x-auto">
            <SectionTitle as="h3" level="subsection" align="center" className="text-text-primary"><span className="">일반 공유오피스</span> vs <span className="">오피스아트</span></SectionTitle> {/* Use level prop */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border-light text-sm responsive-table">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">일반 공유오피스</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                  </tr>
                </thead>
                <tbody>
                  {coworkingComparison.map((row, index) => (<tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b font-medium" data-label="항목">
                        <div className="flex items-center gap-1">
                          {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary flex-shrink-0" })}
                          <span>{row.item}</span>
                        </div>
                      </td>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b" data-label="일반 공유오피스">
                        <div className="flex items-center gap-1">
                          {React.cloneElement(row.general.icon, { className: "h-5 w-5 text-warning-red flex-shrink-0" })}
                          <span>{row.general.text}</span>
                        </div>
                      </td>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b border-border-light bg-orange-50" data-label="오피스아트">
                        <div className="flex items-center gap-1  text-primary">
                          {React.cloneElement(row.officeart.icon, { className: "h-5 w-5 text-success-green flex-shrink-0" })}
                          <span>{row.officeart.text}</span>
                        </div>
                      </td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          {/* Comparison Table 2 */}
          <Card className="overflow-x-auto">
            <SectionTitle as="h3" level="subsection" align="center" className="text-text-primary"><span className="">카페 작업</span> vs <span className="">오피스아트</span></SectionTitle> {/* Use level prop */}
            <div className="overflow-x-auto">
               <table className="min-w-full border border-border-light text-sm responsive-table">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">카페 작업</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                  </tr>
                </thead>
                <tbody>
                   {cafeComparison.map((row, index) => (<tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b font-medium" data-label="항목">
                        <div className="flex items-center gap-1">
                          {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary flex-shrink-0" })}
                          <span>{row.item}</span>
                        </div>
                      </td>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b" data-label="카페 작업">
                        <div className="flex items-center gap-1">
                          {React.cloneElement(row.cafe.icon, { className: "h-5 w-5 text-warning-red flex-shrink-0" })}
                          <span>{row.cafe.text}</span>
                        </div>
                      </td>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b border-border-light bg-orange-50" data-label="오피스아트">
                        <div className="flex items-center gap-1  text-primary">
                          {React.cloneElement(row.officeart.icon, { className: "h-5 w-5 text-success-green flex-shrink-0" })}
                          <span>{row.officeart.text}</span>
                        </div>
                      </td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        </section>
      </ScrollAnimationWrapper>

      <BackButton />
    </div>
  );
}