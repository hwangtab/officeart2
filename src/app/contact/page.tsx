import type { Metadata } from 'next'; // Import Metadata type
// 'use client' directive removed, form logic will be moved to a client component

// Removed dynamic export - page will be static, searchParams read client-side in ContactForm

// Removed unused Link import
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import wrapper
// Removed unused imports: useState, useCallback, emailjs, useForm, SubmitHandler
import BackButton from '@/components/BackButton'; // Import BackButton
import LinkButton from '@/components/LinkButton'; // Import LinkButton
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import Card from '@/components/Card'; // Import Card component
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiOutlinePhone as PhoneIcon, HiOutlineEnvelope as EmailIcon, HiOutlineMapPin as VisitIcon } from 'react-icons/hi2'; // Corrected MapPin

import ContactForm from '@/components/ContactForm'; // Import the client component
import { Suspense } from 'react'; // Import Suspense

// Add metadata for the contact page
export const metadata: Metadata = {
  title: "상담 및 문의 | 오피스아트",
  description: "오피스아트 방문 상담 예약, 카카오톡 상담, 전화/이메일 문의 방법을 안내합니다.",
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ]
  }
};

// Page component no longer needs searchParams prop
export default function ContactPage() {
  // Removed form state and logic, moved to ContactForm component

  // Removed duplicated/old code block

  // Original handleChange removed

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4"> {/* Removed bg-light-gray as it's now in layout */}
      <div className="w-full max-w-5xl mx-auto"> {/* Changed max-w-4xl to max-w-5xl */}
        {/* Use SectionTitle for page title */}
        {/* Restore h1 for page title, apply styles directly */}
        <SectionTitle as="h1" level="page" align="center" underline={false} className="text-text-primary text-display">상담 및 문의</SectionTitle> {/* Use level prop - page level same as other pages - FORCE text-display */}

        {/* 2. KakaoTalk Section (4.8 카카오톡 상담) */}
        <ScrollAnimationWrapper>
          <section className="mb-16 text-center">
           {/* Ensure consistent styling with other sub-section title */}
           {/* Use SectionTitle for sub-section title - Use xlarge for consistency */}
           <SectionTitle as="h2" level="section" className="text-center">카카오톡 상담</SectionTitle> {/* Use level prop */}
           {/* KakaoTalk Button Only */}
           {/* Use LinkButton component */}
           <LinkButton
             href="https://open.kakao.com/me/offceart"
             variant="kakao"
             size="base" // Changed size to base for consistency
             iconLeft={<RiKakaoTalkFill className="h-5 w-5" />}
             target="_blank"
             rel="noopener noreferrer"
           >
             카카오톡으로 상담하기
           </LinkButton>
           </section>
         </ScrollAnimationWrapper>

        {/* 3. Direct Contact Info (4.8 직접 문의) */}
        {/* Use Card component for Direct Contact Info */}
        <ScrollAnimationWrapper>
          <Card className="mb-16"> {/* Remove bg, p, rounded, shadow from here */}
            {/* Adjust heading style */}
            {/* Use SectionTitle for sub-section title - Use xlarge for consistency */}
            <SectionTitle as="h2" level="section" className="text-center">직접 문의</SectionTitle> {/* Use level prop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-body-base"> {/* Using body-base token */}
                {/* Phone */}
                <div className="text-center md:text-left">
                    {/* Use accent-blue for icon - Use large for h3 and pass icon via prop */}
                    <SectionTitle as="h3" level="subsection" icon={<PhoneIcon className="h-5 w-5 text-accent-blue" />} className="justify-center md:justify-start text-text-primary">전화</SectionTitle> {/* Use level prop */}
                    <p className="text-text-primary">대표번호: <a href="tel:0507-1335-3128" className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded">0507-1335-3128</a></p>
                    <p className="text-caption text-text-secondary mt-1">(운영시간: 평일 10:00-19:00)</p> {/* Using caption token */}
                </div>
                {/* Email */}
                 <div className="text-center md:text-left">
                    {/* Use accent-blue for icon - Use large for h3 and pass icon via prop */}
                    <SectionTitle as="h3" level="subsection" icon={<EmailIcon className="h-5 w-5 text-accent-blue" />} className="justify-center md:justify-start text-text-primary">이메일</SectionTitle> {/* Use level prop */}
                    <p className="text-text-primary">대표: <a href="mailto:contact@kosmart.org" className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded">contact@kosmart.org</a></p>
                    <p className="text-caption text-text-secondary mt-1">(응답시간: 평일 기준 24시간 이내)</p> {/* Using caption token */}
                </div>
                {/* Visit */}
                 <div className="text-center md:text-left">
                    {/* Use accent-blue for icon - Use large for h3 and pass icon via prop */}
                    <SectionTitle as="h3" level="subsection" icon={<VisitIcon className="h-5 w-5 text-accent-blue" />} className="justify-center md:justify-start text-text-primary">방문 상담</SectionTitle> {/* Use level prop */}
                    {/* Add Naver Map link to address */}
                    <p className="text-text-primary">주소: <a href="https://naver.me/xHg9R2Ah" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded">서울특별시 영등포구 양산로 96</a></p>
                    <p className="text-text-primary">상담 시간: 평일 10:00-19:00</p>
                </div>
            </div>
          </Card>
       </ScrollAnimationWrapper>

       {/* Render the client component for the form (no searchParams prop needed) */}
       <ScrollAnimationWrapper>
         <Suspense fallback={<div>Loading...</div>}> {/* Wrap ContactForm with Suspense */}
           <ContactForm />
         </Suspense>
       </ScrollAnimationWrapper>

       {/* Back to Home Button */}
       <BackButton />
      </div>
    </main>
  );
}
