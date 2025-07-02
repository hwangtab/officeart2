import type { Metadata } from 'next'; // Import Metadata type
// 'use client' directive removed, chart logic will be moved to a client component

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import wrapper
// Removed unused Link import
import OptimizedImage from '@/components/OptimizedImage';
import BackButton from '@/components/BackButton'; // Import BackButton
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import Card from '@/components/Card'; // Import Card
import { HiOutlineCalendarDays as CalendarIcon, HiOutlineUserGroup as UsersIcon, HiOutlineBuildingLibrary as BuildingLibraryIcon, HiOutlineSparkles as SparklesIcon } from 'react-icons/hi2';
import CreatorCommunityClient from '@/components/CreatorCommunityClient'; // Import the client component

// Add metadata for the creator community page
export const metadata: Metadata = {
  title: "크리에이터 커뮤니티 | 오피스아트",
  description: "오피스아트의 웹툰, 일러스트, 디자인 등 다양한 분야의 입주 크리에이터 커뮤니티와 네트워킹 기회, 한국스마트협동조합 연계 혜택을 소개합니다.",
};

export default function CreatorCommunityPage() {

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center">함께 성장하는 <span className="">창작자 커뮤니티</span></SectionTitle> {/* Use level prop */}

        {/* 1. Community Introduction (4.4 커뮤니티 소개) */}
        {/* Use Card and SectionTitle */}
        <ScrollAnimationWrapper>
          <Card className="mb-16">
          <SectionTitle as="h2" level="section" align="center"><span className="">오피스아트 입주 크리에이터</span></SectionTitle> {/* Use level prop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Creator Distribution Chart - Use dynamically imported component */}
            <CreatorCommunityClient /> {/* Use the client component */}
            {/* Community Activity Photos */}
            <div className="space-y-4">
               <p className="text-lg text-text-primary mb-6"> {/* Use primary text color */}
                 <span className="">웹툰 작가</span>, <span className="">일러스트레이터</span>, <span className="">디자이너</span> 등 다양한 분야의 <span className="">창작자</span>들이 오피스아트와 함께하고 있습니다. 서로 <span className="">영감</span>을 주고받으며 <span className="">시너지</span>를 창출하는 공간입니다.
               </p>
               <SectionTitle as="h4" level="card"><span className="">커뮤니티 활동 모습</span></SectionTitle> {/* Use level prop */}
               <div className="grid grid-cols-2 gap-4">
                   {/* TODO: Replace with actual photos (한국스마트협동조합 행사 사진, 황경하 담당자) */}
                   <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <OptimizedImage src="/images/gallery/networking-event.jpg" alt="오피스아트 창작자 커뮤니티 네트워킹 행사 - 다양한 분야의 창작자들이 교류하고 영감을 주고받는 모습" fill className="group-hover:scale-105 transition-transform object-cover" sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"/>
                   </div>
                   <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <OptimizedImage src="/images/gallery/114a0b_5a0652ec2a844e2fa7d3b2bc3371dfac~mv2.jpeg" alt="오피스아트 창작자 네트워킹 행사 2 - 협동조합 네트워크 활동으로 시너지를 창출하는 에생" fill className="group-hover:scale-105 transition-transform object-cover" sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"/>
                   </div>
                   <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <OptimizedImage src="/images/gallery/114a0b_6b0b9e479c004a3b8cf7f3679123365e~mv2.jpeg" alt="오피스아트 내 창작자 협업 사례 - 웹툰, 일러스트, 디자인 등 다양한 분야의 전문가들이 함께 작업하는 모습" fill className="group-hover:scale-105 transition-transform object-cover" sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"/>
                   </div>
                    <div className="relative h-40 bg-gray-200 rounded overflow-hidden group">
                       <OptimizedImage src="/images/gallery/114a0b_f3b211e026c247109344756fc861a703~mv2.jpeg" alt="오피스아트 창작자 네트워킹 행사 3 - 다양한 분야의 전문가들이 모여 아이디어를 공유하고 협업 기회를 탐색하는 소중한 시간" fill className="group-hover:scale-105 transition-transform object-cover" sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"/>
                   </div>
               </div>
            </div>
          </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 2. Networking Opportunities (4.4 네트워킹 기회) */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
          {/* Use SectionTitle */}
          <SectionTitle as="h2" level="section" align="center"><span className="">네트워킹</span> 및 <span className="">협업 기회</span></SectionTitle> {/* Use level prop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Regular Meetups - Use Card */}
            <Card className="h-full flex flex-col">
              {/* Use accent-blue for icon, primary text color, pass icon via prop */}
              <SectionTitle as="h3" level="card" icon={<CalendarIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary mb-4"><span className="">정기 모임</span> 및 <span className="">이벤트</span></SectionTitle> {/* Use level prop */}
              
              <div className="flex-grow flex flex-col justify-between">
                {/* Use secondary text color */}
                <ul className="list-disc list-outside pl-5 space-y-3 text-text-secondary text-sm mb-4"> {/* space-y-2 → space-y-3 */}
                  <li><span className="">월간 크리에이터 네트워킹 데이</span><br/>
                      <span className="text-xs text-gray-500">(매월 마지막 금요일 저녁)</span></li>
                  <li><span className="">분기별 포트폴리오 리뷰 세션</span><br/>
                      <span className="text-xs text-gray-500">전문가 피드백과 성장 기회 제공</span></li>
                  <li>다양한 주제의 <span className="">워크샵</span> 및 <span className="">강연</span><br/>
                      <span className="text-xs text-gray-500">(비정기, 실무 중심 교육)</span></li>
                  <li><span className="">커뮤니티 보드</span>를 통한 <span className="">프로젝트 공유</span><br/>
                      <span className="text-xs text-gray-500">구인/구직 및 협업 파트너 매칭</span></li>
                </ul>
                
                <div className="bg-accent-blue/5 p-3 rounded-lg mt-auto">
                  <p className="text-xs text-accent-blue font-medium">💡 모든 정기 모임은 무료로 참여 가능하며, 사전 예약이 필요합니다.</p>
                </div>
              </div>
            </Card>
            
            {/* Collaboration Opportunities - Use Card */}
            <Card className="h-full flex flex-col">
              {/* Use accent-blue for icon, primary text color, pass icon via prop */}
              <SectionTitle as="h3" level="card" icon={<UsersIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary mb-4">잠재적 <span className="">협업 기회</span></SectionTitle> {/* Use level prop */}
              
              <div className="flex-grow flex flex-col">
                {/* Use secondary text color */}
                <p className="text-text-secondary mb-4 text-sm">
                  다양한 분야의 <span className="">전문가</span>들과 교류하며 새로운 <span className="">프로젝트 기회</span>를 발굴하고 함께 <span className="">성장</span>할 수 있습니다.
                </p>
                
                {/* Use primary text color */}
                <p className="font-semibold mb-3 text-sm text-text-primary">실제 협업 사례 (예시):</p>
                {/* Use secondary text color */}
                <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-text-secondary mb-4"> {/* text-xs → text-sm */}
                   {/* TODO: Add actual collaboration examples */}
                  <li><span className="">웹툰 작가</span> A + <span className="">일러스트레이터</span> B → <span className="">콜라보 굿즈</span> 제작 및 판매</li>
                  <li><span className="">그래픽 디자이너</span> C + <span className="">웹 개발자</span> D → <span className="">스타트업 웹사이트</span> 공동 구축</li>
                  <li><span className="">영상 편집자</span> E + <span className="">작가</span> F → <span className="">북 트레일러 영상</span> 제작</li>
                </ul>
                
                <div className="bg-green-50 p-3 rounded-lg mt-auto">
                  <p className="text-xs text-green-700 font-medium">🤝 협업 성공률 80% 이상! 전담 매니저가 프로젝트 매칭을 도와드립니다.</p>
                </div>
              </div>
            </Card>
          </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 3. Korea Smart Cooperative Connection (4.4 한국스마트협동조합 연계) */}
        {/* Use Card and SectionTitle */}
        <ScrollAnimationWrapper>
          <Card className="mb-16">
          <SectionTitle as="h2" level="section" align="center"><span className="">한국스마트협동조합 연계 혜택</span></SectionTitle> {/* Use level prop */}
          {/* Change to 1:1 ratio grid on medium screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Cooperative Intro - Remove col-span and border */}
            <div>
              {/* Use accent-blue for icon, primary text color, pass icon via prop */}
              <SectionTitle as="h3" level="card" icon={<BuildingLibraryIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"><span className="">한국스마트협동조합 소개</span></SectionTitle> {/* Use level prop */}
              {/* Use secondary text color */}
              <p className="text-sm text-text-secondary mb-3">
                2020년 2월 19일 설립된 <span className="">예술인 권익 보호</span> 및 <span className="">활동 지원</span> 목적의 <span className="">협동조합</span>입니다.
              </p>
              {/* Use secondary text color */}
              <ul className="text-xs text-text-secondary space-y-1 pl-5">
                  <li><span className="font-medium">설립 목적:</span> <span className="">예술인 권익 보호</span>, <span className="">생활 안정</span> 및 <span className="">예술활동 지원</span></li>
                  <li><span className="font-medium">조합원 규모:</span> 약 <span className="">600명</span> (2024년 기준)</li>
              </ul>
            </div>
            {/* Provided Services - Remove col-span */}
            <div>
              {/* Use accent-blue for icon, primary text color, pass icon via prop - Shortened title */}
              <SectionTitle as="h3" level="card" icon={<SparklesIcon className="h-5 w-5 text-accent-blue" />} className="text-text-primary"><span className="">오피스아트 부가 서비스</span></SectionTitle> {/* Use level prop */}
              {/* Use secondary text color - Use list-inside for better alignment */}
              <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-text-secondary text-sm"> {/* Changed list-outside to list-inside */}
                <li><span className="">예술인 저금리 대출</span></li>
                <li><span className="">예술활동증명 신청 지원</span></li>
                <li><span className="">종합소득세 신고 지원</span></li>
                <li><span className="">계약서 작성 법률 자문 지원</span></li>
                <li><span className="">사진 촬영/영상 제작 할인 연계</span></li>
                <li><span className="">음반/도서 제작 협력 지원</span></li>
              </ul>
              {/* Use secondary text color */}
               <p className="text-xs text-text-secondary mt-4">* 일부 서비스는 조합원 가입 또는 별도 비용이 발생할 수 있습니다. 자세한 내용은 문의 바랍니다.</p>
            </div>
          </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* 4. Reserved Seats Section */}
        <ScrollAnimationWrapper>
          <Card className="mb-16">
            <SectionTitle as="h2" level="section" align="center"><span className="">프리미엄 지정석</span> 혜택</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <SectionTitle as="h3" level="card" className="text-text-primary"><span className="">지정석 전용 혜택</span></SectionTitle>
                <ul className="list-disc list-outside pl-5 space-y-2 text-text-secondary text-sm">
                  <li><span className="">개인 전용 수납공간</span> - 안전한 개인 물품 보관 가능</li>
                  <li><span className="">프리미엄 에르고노믹 의자</span> - 건강한 작업 환경 제공</li>
                  <li><span className="">24시간 출입 가능</span> - 유연한 작업 시간 보장</li>
                  <li><span className="">우선 예약권</span> - 회의실 및 장비 사용 우선권</li>
                  <li><span className="">커뮤니티 멤버십</span> - 네트워킹 이벤트 초대 및 할인</li>
                </ul>
              </div>
              <div>
                <SectionTitle as="h3" level="card" className="text-text-primary"><span className="">커뮤니티 멤버십</span></SectionTitle>
                <ul className="list-disc list-outside pl-5 space-y-2 text-text-secondary text-sm mb-4">
                  <li><span className="">월간 크리에이터 미팅</span> 초대</li>
                  <li><span className="">포트폴리오 리뷰 세션</span> 참여 기회</li>
                  <li><span className="">협업 프로젝트</span> 매칭 지원</li>
                  <li><span className="">전문가 워크샵</span> 할인</li>
                </ul>
                {/* 버튼은 이제 CreatorCommunityClient 내부에 포함됨 */}
              </div>
            </div>
          </Card>
        </ScrollAnimationWrapper>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
