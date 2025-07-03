import React from 'react'; // Ensure React is imported
import type { Metadata } from 'next';
import OptimizedImage from '@/components/OptimizedImage';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import wrapper
import BackButton from '@/components/BackButton';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle';
import {
  HiArrowTopRightOnSquare as ExternalLinkIcon, HiOutlineCurrencyDollar as ValueIcon, HiOutlineHeart as HealthIcon,
  HiOutlineRectangleGroup as ChairIcon, HiOutlineComputerDesktop as DeskIcon, HiOutlineAdjustmentsHorizontal as FocusIcon,
  HiOutlineClock as ClockIcon, HiOutlineCheckCircle as CheckCircleIcon, HiOutlineXCircle as XCircleIcon
} from 'react-icons/hi2';
import PremiumChairsClient from '@/components/PremiumChairsClient';

export const metadata: Metadata = {
  title: "프리미엄 의자 | 오피스아트",
  description: "오피스아트에서 기본 제공하는 스틸케이스 씽크, 휴먼스케일 프리덤 등 120만원대 프리미엄 의자를 소개하고 일반 의자 및 카페 작업 환경과 비교합니다.",
};

export default function PremiumChairsPage() {
  // Data for comparison tables (needed for React.cloneElement)
  const comparisonTableData = [
    { item: '의자 편안함', icon: <ChairIcon />, cafe: { text: '낮음', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '최상', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '책상 크기', icon: <DeskIcon />, cafe: { text: '작음', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '넓음 (160cm L형)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '집중도', icon: <FocusIcon />, cafe: { text: '낮음 (소음, 시선)', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '높음 (집중 환경)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '비용 효율성', icon: <ValueIcon />, cafe: { text: '음료값 (월 8만+)', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '월 25만원 (모든 것 포함)', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
    { item: '24시간 이용성', icon: <ClockIcon />, cafe: { text: '불가', icon: <XCircleIcon className="h-5 w-5 text-error" /> }, officeart: { text: '가능', icon: <CheckCircleIcon className="h-5 w-5 text-success" /> } },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center"><span className="">프리미엄 의자</span>: 작업 효율의 시작</SectionTitle> {/* Use level prop */}

        {/* 1. Chair Introduction Section */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
          <SectionTitle as="h2" level="section" align="center">오피스아트가 제공하는 <span className="">의자</span></SectionTitle> {/* Use level prop, underline=true is default for section */}
          <Card className="mb-12 flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 w-full relative h-80 rounded-lg overflow-hidden">
               <OptimizedImage src="/images/gallery/steelcase-think.jpg" alt="스틸케이스 Think 의자 - 오피스아트에서 제공하는 120만원대 프리미엄 인체공학 의자, 4D 팔걸이와 자연스러운 반응성 제공" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="md:w-1/2 w-full">
              <SectionTitle as="h3" level="subsection" className="mb-2"><span className="">스틸케이스 씽크 (Think)</span></SectionTitle> {/* Use level prop, override margin */}
              <p className="text-text-secondary mb-2"><span className="">인체공학적 설계</span>와 뛰어난 <span className="">조절 기능</span>으로 최상의 <span className="">편안함</span>을 제공합니다.</p> {/* mb-4 -> mb-2 */}
              <SectionTitle as="h4" level="card" className="text-text-primary">주요 특징:</SectionTitle> {/* Use level prop */}
              <ul className="list-disc list-outside pl-5 mb-6 space-y-1 text-sm text-text-secondary"> {/* mb-8 -> mb-6 */}
                <li><span className="">인체공학적 설계</span>: 몸의 움직임에 맞춰 자연스럽게 반응</li>
                <li><span className="">4D 조절 팔걸이</span>: 높이, 너비, 깊이, 각도 조절 가능</li>
                <li><span className="">등받이 텐션 조절</span>: 사용자 맞춤형 지지력 설정</li>
                <li><span className="">요추 지지대</span>: 허리를 안정적으로 받쳐주는 조절식 지지대</li>
              </ul>
              <p className="mb-2 font-medium">시중 가격: 약 <span className="">120만원</span></p>
              <a href="https://www.steelcase.com/products/office-chairs/think/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded text-sm inline-flex items-center gap-1">
                 <ExternalLinkIcon className="h-4 w-4" /> 공식 홈페이지 보기
              </a>
            </div>
          </Card>
          <Card className="flex flex-col md:flex-row items-start gap-8"> {/* Removed md:flex-row-reverse */}
             <div className="md:w-1/2 w-full relative h-80 rounded-lg overflow-hidden">
               <OptimizedImage src="/images/gallery/humanscale-freedom.jpg" alt="휴먼스케일 프리덤 의자 - 180만원대 최고급 인체공학 의자, 자동 피벗 등받이와 체중 감지 시스템 기능 제공" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="md:w-1/2 w-full">
              <SectionTitle as="h3" level="subsection" className="mb-2"><span className="">휴먼스케일 프리덤 (Freedom)</span></SectionTitle> {/* Use level prop, override margin */}
              <p className="text-text-secondary mb-2"><span className="">자동 조절 시스템</span>과 <span className="">미니멀한 디자인</span>으로 직관적인 <span className="">편안함</span>을 선사합니다. 애플 CEO <span className="">팀쿡</span>이 사용하는 것으로도 유명합니다.</p> {/* mb-4 -> mb-2 */}
               <SectionTitle as="h4" level="card" className="text-text-primary">주요 특징:</SectionTitle> {/* Use level prop */}
              <ul className="list-disc list-outside pl-5 mb-6 space-y-1 text-sm text-text-secondary"> {/* Changed to list-outside and added pl-5 */}
                <li><span className="">자동 피봇 등받이</span>: 사용자의 움직임에 따라 자동으로 각도 조절</li>
                <li><span className="">인체공학적 헤드레스트</span>: 목과 머리를 편안하게 지지</li>
                <li><span className="">체중 감지 시스템</span>: 별도 조작 없이 사용자 체중에 맞게 틸팅 장력 조절</li>
                <li><span className="">무중력 틸트 기능</span>: 몸의 하중을 분산시켜 편안함 극대화</li>
              </ul>
              <p className="mb-2 font-medium">시중 가격: 약 <span className="">180만원</span></p>
              <a href="https://www.humanscale.com/products/seating/freedom-headrest-executive-chair" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded text-sm inline-flex items-center gap-1">
                 <ExternalLinkIcon className="h-4 w-4" /> 공식 홈페이지 보기
              </a>
            </div>
          </Card>
          </section>
        </ScrollAnimationWrapper>

        {/* 2. Comparison Section */}
        <ScrollAnimationWrapper> {/* Added wrapper */}
          <Card className="mb-16">
          <SectionTitle as="h2" level="section" align="center">왜 <span className="">프리미엄 의자</span>일까요?</SectionTitle> {/* Use level prop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Comparison Chart */}
            <div className="h-full flex flex-col">
              <SectionTitle as="h3" level="subsection" align="center"><span className="">일반 의자</span> vs <span className="">프리미엄 의자</span></SectionTitle> {/* Use level prop */}
              <PremiumChairsClient />
            </div>
            {/* Comparison Table - Use Card */}
            <Card className="h-full flex flex-col overflow-x-auto">
              <SectionTitle as="h3" level="subsection" align="center"><span className="">카페 작업</span> vs <span className="">오피스아트</span></SectionTitle> {/* Use level prop */}
              <div className="overflow-x-auto flex-grow h-full">
                 <table className="min-w-full border border-border-light text-sm h-full responsive-table"><thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-text-primary">항목</th>
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-text-primary">카페</th>
                      <th className="py-2 px-3 border-b border-border-light text-left font-semibold text-primary">오피스아트</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTableData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 border-b font-medium whitespace-normal" data-label="항목">
                          <div className="flex items-center gap-2">
                            {React.cloneElement(row.icon, { className: "h-5 w-5 text-text-secondary" })}
                            <span>{row.item}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 border-b whitespace-normal" data-label="카페">
                          <div className="flex items-center gap-1">
                            {row.cafe.icon}
                            <span>{row.cafe.text}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 border-b border-border-light bg-orange-50 whitespace-normal" data-label="오피스아트">
                          <div className="flex items-center gap-1  text-primary">
                            {row.officeart.icon}
                            <span>{row.officeart.text}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card> {/* Corrected: This Card closes the table section */}
          </div> {/* This div closes the grid */}
          </Card> {/* This Card closes the comparison section */}
        </ScrollAnimationWrapper> {/* Closed wrapper */}

        {/* 3. Value Section */}
        <ScrollAnimationWrapper>
          <section className="text-center mb-16">
          <SectionTitle as="h2" level="section" align="center"><span className="">월 25만원</span>으로 누리는 가치</SectionTitle> {/* Use level prop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col items-center">
              <ValueIcon className="h-8 w-8 mb-4 text-success" />
              <SectionTitle as="h3" level="card" align="center" className="text-text-primary"><span className="">180만원대 의자</span>를 <span className="">월 25만원</span>에</SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary mb-4 text-sm">
                <span className="">초기 비용 부담없이</span> 최고의 환경을 경험하세요. <span className="">카페 이용 비용</span>과 비교해 보세요. <span className="">월 25만원</span>으로 <span className="">프리미엄 의자</span>, <span className="">넓은 책상</span>, <span className="">무제한 커피/출력</span>까지, 비교할 수 없는 <span className="">가성비</span>를 제공합니다.
              </p>
            </Card>
            <Card className="flex flex-col items-center">
               <HealthIcon className="h-8 w-8 mb-4 text-error" />
              <SectionTitle as="h3" level="card" align="center" className="text-text-primary"><span className="">허리 건강</span>을 지키는 선택</SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary mb-4 text-sm">
                잘못된 자세는 <span className="">만성 통증</span>과 <span className="">생산성 저하</span>의 주요 원인입니다. <span className="">좋은 의자</span>는 <span className="">건강한 작업 습관</span>의 시작입니다. 오피스아트의 <span className="">프리미엄 의자</span>는 <span className="">바른 자세</span>를 유지하도록 도와 <span className="">장시간 작업</span>에도 <span className="">피로</span>를 덜어줍니다.
              </p>
            </Card>
          </div>
          </section>
        </ScrollAnimationWrapper>

         <BackButton />
      </div>
    </main>
  );
}
