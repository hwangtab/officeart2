import type { Metadata } from 'next'; // Import Metadata type
// 'use client' directive removed, chart logic will be moved to a client component

// Removed unused Link import
import Image from 'next/image';
import BackButton from '@/components/BackButton'; // Import BackButton
// Import icons (remove ArrowLeftIcon)
import { HiOutlineCalendarDays as CalendarIcon, HiOutlineUserGroup as UsersIcon, HiOutlineBuildingLibrary as BuildingLibraryIcon, HiOutlineSparkles as SparklesIcon } from 'react-icons/hi2';
import CreatorCommunityClient from '@/components/CreatorCommunityClient'; // Import the client component

// Add metadata for the creator community page
export const metadata: Metadata = {
  title: "크리에이터 커뮤니티 | 오피스아트",
  description: "오피스아트의 웹툰, 일러스트, 디자인 등 다양한 분야의 입주 크리에이터 커뮤니티와 네트워킹 기회, 한국스마트협동조합 연계 혜택을 소개합니다.",
};

export default function CreatorCommunityPage() {

  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-4 bg-light-gray">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">함께 성장하는 크리에이터 커뮤니티</h1>

        {/* 1. Community Introduction (4.4 커뮤니티 소개) */}
        <section className="mb-16 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
          <h2 className="text-3xl font-bold mb-8 text-center">오피스아트 입주 크리에이터</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Creator Distribution Chart - Use dynamically imported component */}
            <CreatorCommunityClient /> {/* Use the client component */}
            {/* Community Activity Photos */}
            <div className="space-y-4">
               <p className="text-lg text-dark-gray mb-6">
                 웹툰 작가, 일러스트레이터, 디자이너 등 다양한 분야의 창작자들이 오피스아트와 함께하고 있습니다. 서로 영감을 주고받으며 시너지를 창출하는 공간입니다.
               </p>
               <h4 className="font-semibold mb-2">커뮤니티 활동 모습:</h4>
               <div className="grid grid-cols-2 gap-4">
                   {/* TODO: Replace with actual photos (한국스마트협동조합 행사 사진, 황경하 담당자) */}
                   <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <Image src="/images/gallery/networking-event.jpg" alt="네트워킹 행사 사진 1" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform"/>
                   </div>
                   <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <Image src="/images/gallery/114a0b_5a0652ec2a844e2fa7d3b2bc3371dfac~mv2.jpeg" alt="네트워킹 행사 사진 2" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform"/>
                   </div>
                   <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <Image src="/images/gallery/114a0b_6b0b9e479c004a3b8cf7f3679123365e~mv2.jpeg" alt="크리에이터 협업 사례" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform"/>
                   </div>
                    <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <Image src="/images/gallery/114a0b_f3b211e026c247109344756fc861a703~mv2.jpeg" alt="네트워킹 행사 사진 3" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform"/>
                   </div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. Networking Opportunities (4.4 네트워킹 기회) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">네트워킹 및 협업 기회</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regular Meetups */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center"><CalendarIcon className="h-5 w-5 mr-2 text-primary-blue" /> 정기 모임 및 이벤트</h3>
              <ul className="list-disc list-inside space-y-2 text-dark-gray text-sm pl-7"> {/* Indent list */}
                <li>월간 크리에이터 네트워킹 데이 (매월 마지막 금요일 저녁)</li>
                <li>분기별 포트폴리오 리뷰 세션</li>
                <li>다양한 주제의 워크샵 및 강연 (비정기)</li>
                <li>커뮤니티 보드를 통한 프로젝트 공유 및 구인/구직</li>
              </ul>
            </div>
            {/* Collaboration Opportunities */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center"><UsersIcon className="h-5 w-5 mr-2 text-primary-blue" /> 잠재적 협업 기회</h3>
              <p className="text-dark-gray mb-4 text-sm">
                다양한 분야의 전문가들과 교류하며 새로운 프로젝트 기회를 발굴하고 함께 성장할 수 있습니다.
              </p>
              <p className="font-semibold mb-2 text-sm">실제 협업 사례 (예시):</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 pl-5"> {/* Indent list */}
                 {/* TODO: Add actual collaboration examples */}
                <li>웹툰 작가 A + 일러스트레이터 B &rarr; 콜라보 굿즈 제작 및 판매</li>
                <li>그래픽 디자이너 C + 웹 개발자 D &rarr; 스타트업 웹사이트 공동 구축</li>
                <li>영상 편집자 E + 작가 F &rarr; 북 트레일러 영상 제작</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Korea Smart Cooperative Connection (4.4 한국스마트협동조합 연계) */}
        <section className="mb-16 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
          <h2 className="text-3xl font-bold mb-8 text-center">한국스마트협동조합 연계 혜택</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Cooperative Intro */}
            <div className="md:col-span-1 border-r-0 md:border-r md:pr-8 border-gray-200">
              <h3 className="text-xl font-bold mb-4 flex items-center"><BuildingLibraryIcon className="h-5 w-5 mr-2 text-primary-blue" /> 한국스마트협동조합 소개</h3>
              <p className="text-sm text-dark-gray mb-3">
                2020년 2월 19일 설립된 예술인 권익 보호 및 활동 지원 목적의 협동조합입니다.
              </p>
              <ul className="text-xs text-gray-600 space-y-1 pl-5"> {/* Indent list */}
                  <li><span className="font-medium">설립 목적:</span> 예술인 권익 보호, 생활 안정 및 예술활동 지원</li>
                  <li><span className="font-medium">조합원 규모:</span> 약 600명 (2024년 기준)</li>
              </ul>
            </div>
            {/* Provided Services */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 flex items-center"><SparklesIcon className="h-5 w-5 mr-2 text-primary-blue" /> 오피스아트 입주 시 제공 가능 부가 서비스</h3>
              <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-dark-gray text-sm pl-7"> {/* Indent list */}
                <li>예술인 저금리 대출</li>
                <li>예술활동증명 신청 지원</li>
                <li>종합소득세 신고 지원</li>
                <li>계약서 작성 법률 자문 지원</li>
                <li>사진 촬영/영상 제작 할인 연계</li>
                <li>음반/도서 제작 협력 지원</li>
              </ul>
               <p className="text-xs text-gray-500 mt-4">* 일부 서비스는 조합원 가입 또는 별도 비용이 발생할 수 있습니다. 자세한 내용은 문의 바랍니다.</p>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
