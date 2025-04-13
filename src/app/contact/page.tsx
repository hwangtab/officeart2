import type { Metadata } from 'next'; // Import Metadata type
// 'use client' directive removed, form logic will be moved to a client component

// Removed unused Link import
// Removed unused imports: useState, useCallback, emailjs, useForm, SubmitHandler
import BackButton from '@/components/BackButton'; // Import BackButton
import LinkButton from '@/components/LinkButton'; // Import LinkButton
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import Card from '@/components/Card'; // Import Card component
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiOutlinePhone as PhoneIcon, HiOutlineEnvelope as EmailIcon, HiOutlineMapPin as VisitIcon } from 'react-icons/hi2'; // Corrected MapPin

import ContactForm from '@/components/ContactForm'; // Import the client component

// Add metadata for the contact page
export const metadata: Metadata = {
  title: "상담 및 문의 | 오피스아트",
  description: "오피스아트 방문 상담 예약, 카카오톡 상담, 전화/이메일 문의 방법을 안내합니다.",
};

export default function ContactPage() {
  // Removed form state and logic, moved to ContactForm component

  // Removed duplicated/old code block

  // Original handleChange removed

  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-4"> {/* Removed bg-light-gray as it's now in layout */}
      <div className="w-full max-w-5xl mx-auto"> {/* Changed max-w-4xl to max-w-5xl */}
        {/* Use SectionTitle for page title */}
        {/* Restore h1 for page title, apply styles directly */}
        <h1 className="text-4xl font-bold text-center mb-12 text-text-primary">상담 및 문의</h1>

        {/* Render the client component for the form */}
        <ContactForm />

        {/* 2. KakaoTalk Section (4.8 카카오톡 상담) */}
        <section className="mb-16 text-center">
           {/* Ensure consistent styling with other sub-section title */}
           {/* Use SectionTitle for sub-section title */}
           <SectionTitle as="h2" size="medium" className="text-center">카카오톡 상담</SectionTitle>
           {/* KakaoTalk Button Only */}
           {/* Use LinkButton component */}
           <LinkButton
             href="https://open.kakao.com/o/sLXWztZg"
             variant="kakao"
             size="lg" // Keep large size for this section's main CTA
             iconLeft={<RiKakaoTalkFill className="h-5 w-5" />}
             target="_blank"
             rel="noopener noreferrer"
           >
             카카오톡으로 상담하기
           </LinkButton>
        </section>

        {/* 3. Direct Contact Info (4.8 직접 문의) */}
        {/* Use Card component for Direct Contact Info */}
        <Card className="mb-16"> {/* Remove bg, p, rounded, shadow from here */}
            {/* Adjust heading style */}
            {/* Use SectionTitle for sub-section title */}
            <SectionTitle as="h2" size="medium" className="text-center">직접 문의</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                {/* Phone */}
                <div className="text-center md:text-left">
                    {/* Use accent-blue for icon */}
                    <h3 className="font-bold mb-2 flex items-center justify-center md:justify-start text-text-primary"><PhoneIcon className="h-4 w-4 mr-1 text-accent-blue" /> 전화</h3>
                    <p className="text-text-primary">대표번호: <a href="tel:02-764-3114" className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded">02-764-3114</a></p>
                    <p className="text-xs text-text-secondary mt-1">(운영시간: 평일 10:00-19:00)</p>
                </div>
                {/* Email */}
                 <div className="text-center md:text-left">
                    {/* Use accent-blue for icon */}
                    <h3 className="font-bold mb-2 flex items-center justify-center md:justify-start text-text-primary"><EmailIcon className="h-4 w-4 mr-1 text-accent-blue" /> 이메일</h3>
                    <p className="text-text-primary">대표: <a href="mailto:contact@kosmart.org" className="text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-offset-primary focus:ring-white rounded">contact@kosmart.org</a></p>
                    <p className="text-xs text-text-secondary mt-1">(응답시간: 평일 기준 24시간 이내)</p>
                </div>
                {/* Visit */}
                 <div className="text-center md:text-left">
                    {/* Use accent-blue for icon */}
                    <h3 className="font-bold mb-2 flex items-center justify-center md:justify-start text-text-primary"><VisitIcon className="h-4 w-4 mr-1 text-accent-blue" /> 방문 상담</h3>
                    <p className="text-text-primary">주소: 서울특별시 영등포구 양산로 96</p>
                    <p className="text-text-primary">상담 시간: 평일 10:00-19:00</p>
                </div>
            </div>
        </Card>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
