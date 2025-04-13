import React from 'react'; // Import React
import type { Metadata } from 'next';
import Link from 'next/link';
import LinkButton from '@/components/LinkButton';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import {
  HiOutlineDocumentText as ContractIcon, HiOutlineCreditCard as PaymentIcon, HiOutlinePhone as PhoneIcon,
  HiOutlineCurrencyDollar as CurrencyDollarIcon, HiOutlineRectangleGroup as ChairIcon, HiOutlineComputerDesktop as DeskIcon,
  HiOutlineSparkles as CoffeeIcon, HiOutlinePrinter as PrinterIcon, HiOutlineCalendarDays as CalendarDaysIcon,
  HiOutlineLockClosed as LockClosedIcon, HiOutlineUserGroup as UsersIcon, HiOutlineWrenchScrewdriver as WrenchIcon,
  HiOutlineWifi as WifiIcon, HiOutlineNoSymbol as NoSymbolIcon, HiOutlineClock as ClockIcon,
  HiOutlineCheckCircle as CheckCircleIcon, HiOutlineXCircle as XCircleIcon
} from 'react-icons/hi2';
import { RiKakaoTalkFill } from "react-icons/ri";
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: "가격 및 멤버십 | 오피스아트",
  description: "오피스아트의 정기 이용권(월 25만원)과 일일 이용권 가격, 포함된 서비스(프리미엄 의자, 커피, 출력 등) 및 결제 방법을 안내합니다.",
};

export default function PricingPage() {
  // Data for comparison tables
  const coworkingComparison = [
    { item: '월 비용', icon: <CurrencyDollarIcon />, general: { text: '30-40만원', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '25만원', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
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
    { item: '월 비용', icon: <CurrencyDollarIcon />, cafe: { text: '커피값 약 8만원 + α', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '25만원 고정', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '의자', icon: <ChairIcon />, cafe: { text: '불편한 카페 의자', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '180만원대 프리미엄', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '책상', icon: <DeskIcon />, cafe: { text: '작은 테이블', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '160cm L형 책상', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '소음', icon: <NoSymbolIcon />, cafe: { text: '높음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '낮음 (집중 환경)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '자리 확보', icon: <UsersIcon />, cafe: { text: '불확실', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '항상 보장', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '이용 시간', icon: <ClockIcon />, cafe: { text: '카페 영업시간', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '24시간', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '짐 보관', icon: <LockClosedIcon />, cafe: { text: '불가능', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '가능', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '출력 서비스', icon: <PrinterIcon />, cafe: { text: '없음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '무제한 무료', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
    { item: '네트워크', icon: <WifiIcon />, cafe: { text: '불안정', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '안정적인 기가 인터넷', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">가격 및 멤버십 안내</h1>

        {/* 1. Pricing Plans */}
        <section className="mb-16">
          <SectionTitle as="h2" size="xlarge" className="text-center">요금제 안내</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <Card className="shadow-lg border-2 border-primary flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-center text-primary">정기 이용권</h3>
              <p className="text-5xl font-bold text-center mb-6 text-text-primary">월 25만원</p>
              <p className="text-center text-text-secondary mb-6">(VAT 별도)</p>
              <h4 className="font-semibold mb-3 text-center">포함 사항:</h4>
              <ul className="list-disc list-inside space-y-2 mb-6 text-text-secondary flex-grow">
                <li>고정석 (160cm L형 책상)</li>
                <li>프리미엄 의자 (스틸케이스/휴먼스케일)</li>
                <li>24시간 자유 이용 (지문 인식)</li>
                <li>JURA 프리미엄 커피 무제한</li>
                <li>EPSON A3 컬러 복합기 무제한 (용지 제공)</li>
                <li>초고속 유/무선 인터넷 (KT 1Gbps + 백업 회선)</li>
                <li>냉난방 및 공기청정 시스템</li>
                <li>휴게 공간 이용</li>
              </ul>
              <p className="text-sm text-center text-text-secondary mb-4">* 최소 계약 기간 없음 / 보증금 없음</p>
              <div className="text-center mt-auto">
                 <LinkButton href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                   상담 신청하기
                 </LinkButton>
              </div>
            </Card>
            {/* Daily Pass */}
            <Card className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-center text-text-primary">일일 이용권</h3>
              <p className="text-center mb-6 text-text-secondary">단기 이용 또는 체험을 원하시는 분들을 위한 플랜입니다.</p>
              <ul className="space-y-3 mb-10 text-text-secondary text-center border-t border-b border-border-light py-8">
                <li><span className="font-bold">1일 이용:</span> 2만원</li>
                <li><span className="font-bold">3일 패키지:</span> 5만원</li>
                <li><span className="font-bold">5일 패키지:</span> 8만원</li>
                <li><span className="font-bold">10일 패키지:</span> 15만원</li>
              </ul>
              <p className="text-center text-sm text-text-secondary mb-8">
                * 일일 이용권은 유동석으로 제공됩니다.<br/>
                * 모든 시설(커피, 출력 등) 이용 가능합니다.
              </p>
              <div className="text-center mt-6">
                <div className="flex flex-col items-center gap-3">
                  <LinkButton href="tel:02-764-3114" variant="outline" size="sm" iconLeft={<PhoneIcon className="h-5 w-5" />} className="w-full max-w-xs">
                    전화 문의 (02-764-3114)
                  </LinkButton>
                   <LinkButton href="https://open.kakao.com/o/sLXWztZg" variant="kakao" size="sm" iconLeft={<RiKakaoTalkFill className="h-5 w-5" />} className="w-full max-w-xs" target="_blank" rel="noopener noreferrer">
                     카카오톡 문의
                   </LinkButton>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 2. Payment Methods */}
        <section className="mb-16">
           <SectionTitle as="h2" size="xlarge" className="text-center">결제 방법</SectionTitle>
           <Card className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Removed mb-16 from Card */}
               <div>
                   <h3 className="text-xl font-bold mb-4 flex items-center text-text-primary"><ContractIcon className="h-5 w-5 mr-2 text-accent-blue" /> 계약 방식</h3>
                   <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm pl-7">
                       <li>전자계약 (카카오톡으로 간편하게)</li>
                       <li>계약 담당: 김성은 팀장</li>
                   </ul>
               </div>
               <div>
                   <h3 className="text-xl font-bold mb-4 flex items-center text-text-primary"><PaymentIcon className="h-5 w-5 mr-2 text-accent-blue" /> 결제 수단</h3>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm pl-7">
                       <li>계좌이체: 기업은행 301-101031-01-050 (예금주: 한국스마트협동조합)</li>
                       <li>카드 결제: 현장 방문 결제 또는 정기결제 신청 가능</li>
                       <li>세금계산서 발행: 사업자 회원 요청 시 발행 (VAT 별도)</li>
                    </ul>
               </div>
           </Card> {/* Corrected closing tag position */}
        </section>

        {/* 3. Benefit Comparison */}
        <section className="mb-16">
          <SectionTitle as="h2" size="xlarge" className="text-center">혜택 비교</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Comparison Table 1 */}
            <Card className="overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-text-primary">일반 공유오피스 vs 오피스아트</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border-light text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-text-primary">일반 공유오피스</th>
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coworkingComparison.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 border-b font-medium">
                          <div className="flex items-center gap-2">
                            {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary" })}
                            <span>{row.item}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 border-b">
                          <div className="flex items-center gap-1">
                            {row.general.icon}
                            <span>{row.general.text}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 border-b border-border-light bg-orange-50">
                          <div className="flex items-center gap-1 font-bold text-primary">
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
            {/* Comparison Table 2 */}
            <Card className="overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-text-primary">카페 작업 vs 오피스아트</h3>
              <div className="overflow-x-auto">
                 <table className="min-w-full border border-border-light text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-text-primary">카페 작업</th>
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                    </tr>
                  </thead>
                  <tbody>
                     {cafeComparison.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 border-b font-medium">
                          <div className="flex items-center gap-2">
                            {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary" })}
                            <span>{row.item}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 border-b">
                          <div className="flex items-center gap-1">
                            {row.cafe.icon}
                            <span>{row.cafe.text}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 border-b border-border-light bg-orange-50">
                          <div className="flex items-center gap-1 font-bold text-primary">
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
          </div>
        </section>

        <BackButton />
      </div>
    </main>
  );
}
