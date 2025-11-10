'use client'; // Make this a client component

import React from 'react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import LinkButton from '@/components/LinkButton';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import ComparisonCtaGroup from '@/components/ComparisonCtaGroup';
import InquirySection from '@/components/InquirySection';
import {
  HiOutlineDocumentText as ContractIcon, HiOutlineCreditCard as PaymentIcon,
  HiOutlineCurrencyDollar as CurrencyDollarIcon, HiOutlineRectangleGroup as ChairIcon, HiOutlineComputerDesktop as DeskIcon,
  HiOutlineSparkles as CoffeeIcon, HiOutlinePrinter as PrinterIcon, HiOutlineCalendarDays as CalendarDaysIcon,
  HiOutlineLockClosed as LockClosedIcon, HiOutlineUserGroup as UsersIcon, HiOutlineWrenchScrewdriver as WrenchIcon,
  HiOutlineWifi as WifiIcon, HiOutlineNoSymbol as NoSymbolIcon, HiOutlineClock as ClockIcon,
  HiOutlineCheckCircle as CheckCircleIcon, HiOutlineXCircle as XCircleIcon, HiOutlineCalendar as CalendarIcon, // Added for Visit Booking
} from 'react-icons/hi2';
import { RiKakaoTalkFill } from "react-icons/ri";
import BackButton from '@/components/BackButton';

// Define types for pricing options if needed later
// interface MonthlyOption { ... }
// Define price constants and types

export default function PricingClient() {
  // --- State for Interactivity ---

  // --- Data (Keep existing data) ---
  const coworkingComparison = [
    { item: '월 비용', icon: <CurrencyDollarIcon />, general: { text: '30-40만원', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '특가 25만원 (정가 45만원)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '의자', icon: <ChairIcon />, general: { text: '일반 의자', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '180만원대 프리미엄', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '책상', icon: <DeskIcon />, general: { text: '일반 데스크', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '커피', icon: <CoffeeIcon />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '출력', icon: <PrinterIcon />, general: { text: '유료 또는 제한적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '계약 기간', icon: <CalendarDaysIcon />, general: { text: '최소 3-6개월', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '1개월부터 가능', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '보증금', icon: <LockClosedIcon />, general: { text: '1-2개월치', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '없음', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '네트워킹', icon: <UsersIcon />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '웹툰/일러스트 특화', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '특화 서비스', icon: <WrenchIcon />, general: { text: '일반적', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '창작자 특화 서비스', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
  ];

  const cafeComparison = [
    { item: '월 비용', icon: <CurrencyDollarIcon />, cafe: { text: '커피값 약 8만원 + α', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '특가 25만원 고정 (정가 45만원)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '의자', icon: <ChairIcon />, cafe: { text: '불편한 카페 의자', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '180만원대 프리미엄', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '책상', icon: <DeskIcon />, cafe: { text: '작은 테이블', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '소음', icon: <NoSymbolIcon />, cafe: { text: '높음', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '낮음 (집중 환경)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '자리 확보', icon: <UsersIcon />, cafe: { text: '불확실', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '항상 보장', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '이용 시간', icon: <ClockIcon />, cafe: { text: '카페 영업시간', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '24시간', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '짐 보관', icon: <LockClosedIcon />, cafe: { text: '불가능', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '가능', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '출력 서비스', icon: <PrinterIcon />, cafe: { text: '없음', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '네트워크', icon: <WifiIcon />, cafe: { text: '불안정', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '안정적인 기가 인터넷', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <SectionTitle as="h1" level="page" align="center"><span className="">가격</span> 및 <span className="">멤버십 안내</span></SectionTitle> {/* Use level prop */}

      {/* 1. Pricing Plans */}
      <ScrollAnimationWrapper>
        <section className="mb-16">
        <SectionTitle as="h2" level="section" align="center"><span className="">요금제 안내</span></SectionTitle> {/* Use level prop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-6xl mx-auto">
          {/* Monthly Plan Card */}
          <Card className="shadow-lg border-2 border-primary flex flex-col h-full">
            <div className="text-center p-6">
              <SectionTitle as="h3" level="subsection" className="text-text-primary mb-2">정기 이용권</SectionTitle>
              <p className="text-body-small text-text-secondary mb-4">프리미엄 작업공간 무제한 이용</p> {/* Using body-small token */}
              <p className="text-display font-bold text-primary mb-2">월 25만원</p> {/* Using display token for pricing */}
              <p className="text-caption text-error mb-4">(한정 좌석 특가, 소진 시 조기 마감)</p> {/* Using caption token */}
            </div>

            <div className="px-6 mb-6">
              <ul className="list-disc list-outside pl-5 space-y-2 text-text-secondary text-body-small flex-grow"> {/* Using body-small token */}
                <li>지정석 (160cm L형 책상)</li>
                <li>프리미엄 의자 (스틸케이스/휴먼스케일)</li>
                <li>24시간 자유 이용 (지문 인식)</li>
                <li>JURA 프리미엄 커피 무제한</li>
                <li>EPSON A3 컬러 복합기 무제한 (용지 제공)</li>
                <li>초고속 유/무선 인터넷 (KT 1Gbps + 백업 회선)</li>
                <li>냉난방 및 공기청정 시스템</li>
                <li>휴게 공간 이용</li>
              </ul>
            </div>
            
            <div className="text-center px-6 pb-6 mt-auto space-y-3">
              {/* Add urgency text */}
              <p className="text-sm text-error font-semibold flex items-center justify-center gap-2 animate-pulse-subtle">
                <ClockIcon className="h-5 w-5" />
                선착순 10석 한정 - 조기 마감 임박
              </p>
              <LinkButton href="/contact?service=desk" variant="primary" size="xl" className="w-full shadow-card-lg hover:shadow-card-lg-hover" iconLeft={<CalendarIcon className="h-6 w-6"/>}>
                방문 상담 예약
              </LinkButton>
              <LinkButton href="https://open.kakao.com/me/offceart" variant="kakao" size="lg" iconLeft={<RiKakaoTalkFill className="h-5 w-5" />} className="w-full" target="_blank" rel="noopener noreferrer">
                카카오톡 문의
              </LinkButton>
            </div>
          </Card>

          {/* Non-Resident Office Card */}
          <Card className="shadow-lg border-2 border-primary flex flex-col h-full relative">
            <div className="absolute -top-3 -right-3 bg-accent-yellow text-text-primary text-sm font-bold px-3 py-1 rounded-full">
              NEW
            </div>
            
            <div className="text-center p-6">
              <SectionTitle as="h3" level="subsection" className="text-text-primary mb-2">비상주 사무실</SectionTitle>
              <p className="text-body-small text-text-secondary mb-4">사업자등록용 주소 제공 서비스</p> {/* Using body-small token */}
              <p className="text-display font-bold text-primary mb-2">월 3.3만원</p> {/* Using display token for pricing */}
              <p className="text-caption text-text-secondary mb-4">최소 6개월 계약</p> {/* Using caption token */}
            </div>

            <div className="px-6 mb-6">
              <ul className="list-disc list-outside pl-5 space-y-2 text-text-secondary text-body-small flex-grow"> {/* Using body-small token */}
                <li>사업자등록용 주소 제공</li>
                <li>우편물 수령 및 보관 서비스</li>
                <li>회의실 무료 이용</li>
                <li>강남/여의도 대비 1/3 가격</li>
                <li>월 단위 연장 가능 (6개월 후)</li>
                <li>양 지점 선택 가능</li>
                <li>홈오피스 창업자 최적</li>
              </ul>
            </div>
            
            <div className="text-center px-6 pb-6 mt-auto space-y-3">
              {/* Add value proposition with proper z-index */}
              <div className="relative group">
                <span className="absolute -top-3 left-1/2 z-10 w-max -translate-x-1/2 transform rounded-full bg-accent-green px-3 py-1 text-xs font-bold text-white transition-all duration-300 ease-out group-hover:-top-4 group-hover:scale-105 flex items-center gap-1">
                  <CheckCircleIcon className="h-4 w-4" />
                  💰 강남 대비 1/3 가격
                </span>
                <LinkButton href="/contact?service=non-resident" variant="primary" size="xl" className="w-full shadow-card-lg hover:shadow-card-lg-hover transition-shadow" iconLeft={<CalendarIcon className="h-6 w-6"/>}>
                  상담 신청하기
                </LinkButton>
              </div>
              <LinkButton href="/services/non-resident" variant="outline" size="base" className="w-full">
                자세히 보기
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
                 <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary text-body-small"> {/* Changed list-inside to list-outside, pl-7 to pl-8 - using body-small token */}
                     <li><span className="">전자계약</span> (카카오톡으로 간편하게)</li>
                     <li>계약 담당: 김성은 팀장</li>
                 </ul>
             </div>
             <div>
                 {/* Pass icon via prop */}
                 <SectionTitle as="h3" level="card" icon={<PaymentIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"><span className="">결제 수단</span></SectionTitle> {/* Use level prop */}
                  <ul className="list-disc list-outside pl-8 space-y-1 text-text-secondary text-body-small"> {/* Changed list-inside to list-outside, pl-5 to pl-8 - using body-small token */}
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
              <table className="min-w-full border border-border-light text-body-small responsive-table"> {/* Using body-small token */}
                <thead>
                  <tr className="bg-background-main">
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">일반 공유오피스</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                  </tr>
                </thead>
                <tbody>
                  {coworkingComparison.map((row, index) => (<tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-background-main'}>
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
                          {React.cloneElement(row.general.icon, { className: "h-5 w-5 text-error flex-shrink-0" })}
                          <span>{row.general.text}</span>
                        </div>
                      </td>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b border-border-light bg-primary/10" data-label="오피스아트">
                        <div className="flex items-center gap-1  text-primary">
                          {React.cloneElement(row.officeart.icon, { className: "h-5 w-5 text-success flex-shrink-0" })}
                          <span>{row.officeart.text}</span>
                        </div>
                      </td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* CTA immediately after coworking comparison */}
            <ComparisonCtaGroup />
          </Card>
          {/* Comparison Table 2 */}
          <Card className="overflow-x-auto">
            <SectionTitle as="h3" level="subsection" align="center" className="text-text-primary"><span className="">카페 작업</span> vs <span className="">오피스아트</span></SectionTitle> {/* Use level prop */}
            <div className="overflow-x-auto">
               <table className="min-w-full border border-border-light text-body-small responsive-table"> {/* Using body-small token */}
                <thead>
                  <tr className="bg-background-main">
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-text-primary">카페 작업</th>
                    <th className="py-3 px-4 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                  </tr>
                </thead>
                <tbody>
                   {cafeComparison.map((row, index) => (<tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-background-main'}>
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
                          {React.cloneElement(row.cafe.icon, { className: "h-5 w-5 text-error flex-shrink-0" })}
                          <span>{row.cafe.text}</span>
                        </div>
                      </td>
                      {/* Apply border-b only on sm+ screens */}
                      <td className="py-3 px-4 sm:border-b border-border-light bg-primary/10" data-label="오피스아트">
                        <div className="flex items-center gap-1  text-primary">
                          {React.cloneElement(row.officeart.icon, { className: "h-5 w-5 text-success flex-shrink-0" })}
                          <span>{row.officeart.text}</span>
                        </div>
                      </td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* CTA immediately after cafe comparison */}
            <ComparisonCtaGroup />
          </Card>
        </div>
        </section>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <InquirySection />
      </ScrollAnimationWrapper>

      <BackButton />
    </div>
  );
}
