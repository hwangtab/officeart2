import type { Metadata } from 'next'; // Import Metadata type
// 'use client' directive removed, chart logic will be moved to a client component

import Image from 'next/image';
// Removed unused Link import
// Removed dynamic import, moved to client component
import BackButton from '@/components/BackButton'; // Import BackButton
// Import icons (remove ArrowLeftIcon)
import {
  HiArrowTopRightOnSquare as ExternalLinkIcon, HiOutlineCurrencyDollar as ValueIcon, HiOutlineHeart as HealthIcon,
  HiOutlineRectangleGroup as ChairIcon, HiOutlineComputerDesktop as DeskIcon, HiOutlineAdjustmentsHorizontal as FocusIcon,
  HiOutlineClock as ClockIcon, HiOutlineCheckCircle as CheckCircleIcon, HiOutlineXCircle as XCircleIcon
} from 'react-icons/hi2';

import PremiumChairsClient from '@/components/PremiumChairsClient'; // Import the client component

// Add metadata for the premium chairs page
export const metadata: Metadata = {
  title: "프리미엄 의자 | 오피스아트",
  description: "오피스아트에서 기본 제공하는 스틸케이스 씽크, 휴먼스케일 프리덤 등 120만원대 프리미엄 의자를 소개하고 일반 의자 및 카페 작업 환경과 비교합니다.",
};

export default function PremiumChairsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">프리미엄 의자: 작업 효율의 시작</h1>

        {/* 1. Chair Introduction Section (4.2 의자 소개 섹션) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">오피스아트가 제공하는 의자</h2>

          {/* Steelcase Think */}
          <div className="mb-12 flex flex-col md:flex-row items-start gap-8 bg-white p-6 rounded-lg shadow">
            <div className="md:w-1/2 w-full relative h-80 rounded-lg overflow-hidden">
              {/* TODO: Add Steelcase Think image (제조사 or 자체 촬영) */}
               <Image
                 src="/images/gallery/steelcase-think.jpg" // 실제 이미지 경로 적용
                 alt="스틸케이스 씽크 의자"
                 fill // layout="fill" 대체
                 style={{ objectFit: 'contain' }} // objectFit 스타일 적용
               />
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-bold mb-4">스틸케이스 씽크 (Think)</h3>
              <p className="text-dark-gray mb-4">인체공학적 설계와 뛰어난 조절 기능으로 최상의 편안함을 제공합니다.</p>
              <h4 className="font-semibold mb-2">주요 특징:</h4>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm text-gray-700">
                <li>인체공학적 설계: 몸의 움직임에 맞춰 자연스럽게 반응</li>
                <li>4D 조절 팔걸이: 높이, 너비, 깊이, 각도 조절 가능</li>
                <li>등받이 텐션 조절: 사용자 맞춤형 지지력 설정</li>
                <li>요추 지지대: 허리를 안정적으로 받쳐주는 조절식 지지대</li>
              </ul>
              <p className="mb-4 font-medium">시중 가격: 약 120만원</p>
              <a
                href="https://www.steelcase.com/products/office-chairs/think/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:underline text-sm inline-flex items-center gap-1"
              >
                 <ExternalLinkIcon className="h-4 w-4" />
                 공식 홈페이지 보기
              </a>
            </div>
          </div>

          {/* Humanscale Freedom */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8 bg-white p-6 rounded-lg shadow">
             <div className="md:w-1/2 w-full relative h-80 rounded-lg overflow-hidden">
              {/* TODO: Add Humanscale Freedom image (제조사 or 자체 촬영) */}
               <Image
                 src="/images/gallery/humanscale-freedom.jpg" // 실제 이미지 경로 적용
                 alt="휴먼스케일 프리덤 의자"
                 fill // layout="fill" 대체
                 style={{ objectFit: 'contain' }} // objectFit 스타일 적용
               />
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-bold mb-4">휴먼스케일 프리덤 (Freedom)</h3>
              <p className="text-dark-gray mb-4">자동 조절 시스템과 미니멀한 디자인으로 직관적인 편안함을 선사합니다.</p>
               <h4 className="font-semibold mb-2">주요 특징:</h4>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm text-gray-700">
                <li>자동 피봇 등받이: 사용자의 움직임에 따라 자동으로 각도 조절</li>
                <li>인체공학적 헤드레스트: 목과 머리를 편안하게 지지</li>
                <li>체중 감지 시스템: 별도 조작 없이 사용자 체중에 맞게 틸팅 장력 조절</li>
                <li>무중력 틸트 기능: 몸의 하중을 분산시켜 편안함 극대화</li>
              </ul>
              <p className="mb-4 font-medium">시중 가격: 약 180만원</p>
              <a
                href="https://www.humanscale.com/products/seating/freedom-headrest-executive-chair"
                target="_blank"
                rel="noopener noreferrer"
                 className="text-primary-blue hover:underline text-sm inline-flex items-center gap-1"
              >
                 <ExternalLinkIcon className="h-4 w-4" />
                 공식 홈페이지 보기
              </a>
            </div>
          </div>
        </section>

        {/* 2. Comparison Section (4.2 비교 섹션) */}
        <section className="mb-16 bg-light-gray p-6 rounded-lg"> {/* Changed p-8 to p-6 */}
          <h2 className="text-3xl font-bold mb-8 text-center">왜 프리미엄 의자일까요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Comparison Chart */}
            <div className="h-full flex flex-col"> {/* Add flex, flex-col */}
              <h3 className="text-xl font-bold mb-4 text-center">일반 의자 vs 프리미엄 의자</h3>
              {/* Implement comparison radar chart - Use dynamically imported component */}
              <PremiumChairsClient /> {/* Use the client component */}
            </div>
            {/* Comparison Table */}
            <div className="h-full flex flex-col"> {/* Add flex, flex-col */}
              <h3 className="text-xl font-bold mb-4 text-center">카페 작업 vs 오피스아트</h3>
              <div className="overflow-x-auto bg-white rounded shadow flex-grow h-full"> {/* Add h-full */}
                 <table className="min-w-full border border-gray-200 text-sm h-full">{/* Add h-full */}<thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-3 border-b text-left font-semibold">항목</th>
                      <th className="py-2 px-3 border-b text-left font-semibold">카페</th>
                      <th className="py-2 px-3 border-b text-left font-semibold text-primary-blue">오피스아트</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: '의자 편안함', icon: <ChairIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '낮음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '최상', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                      { item: '책상 크기', icon: <DeskIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '작음', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '넓음 (160cm L형)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                      { item: '집중도', icon: <FocusIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '낮음 (소음, 시선)', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '높음 (집중 환경)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                      { item: '비용 효율성', icon: <ValueIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '음료값 (월 8만+)', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '월 25만원 (모든 것 포함)', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                      { item: '24시간 이용성', icon: <ClockIcon className="h-5 w-5 text-gray-500" />, cafe: { text: '불가', icon: <XCircleIcon className="h-5 w-5 text-warning-red" /> }, officeart: { text: '가능', icon: <CheckCircleIcon className="h-5 w-5 text-success-green" /> } },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {/* Item Column with Icon */}
                        <td className="py-2 px-3 border-b font-medium">
                          <div className="flex items-center gap-2">
                            {row.icon}
                            <span>{row.item}</span>
                          </div>
                        </td>
                        {/* Cafe Column with Icon */}
                        <td className="py-2 px-3 border-b">
                          <div className="flex items-center gap-1">
                            {row.cafe.icon}
                            <span>{row.cafe.text}</span>
                          </div>
                        </td>
                        {/* Office Art Column with Icon and Highlight */}
                        <td className="py-2 px-3 border-b bg-blue-50"> {/* Added subtle background */}
                          <div className="flex items-center gap-1 font-bold text-primary-blue">
                            {row.officeart.icon}
                            <span>{row.officeart.text}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Value Section (4.2 가치 섹션) */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">월 25만원으로 누리는 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <ValueIcon className="h-8 w-8 mb-3 text-secondary-green" />
              <h3 className="text-xl font-bold mb-3">180만원대 의자를 월 25만원에</h3>
              <p className="text-dark-gray mb-4 text-sm">
                초기 비용 부담없이 최고의 환경을 경험하세요. 카페 이용 비용과 비교해 보세요. 월 25만원으로 프리미엄 의자, 넓은 책상, 무제한 커피/출력까지, 비교할 수 없는 가성비를 제공합니다.
              </p>
               {/* TODO: Add calculation details if needed */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
               <HealthIcon className="h-8 w-8 mb-3 text-warning-red" />
              <h3 className="text-xl font-bold mb-3">허리 건강을 지키는 선택</h3>
              <p className="text-dark-gray mb-4 text-sm">
                잘못된 자세는 만성 통증과 생산성 저하의 주요 원인입니다. 좋은 의자는 건강한 작업 습관의 시작입니다. 오피스아트의 프리미엄 의자는 바른 자세를 유지하도록 도와 장시간 작업에도 피로를 덜어줍니다.
              </p>
               {/* 출처 제거 */}
            </div>
          </div>
        </section>

         {/* Back to Home Button */}
         <BackButton />
      </div>
    </main>
  );
}
