import type { Metadata } from 'next'; // Import Metadata type
// 'use client' directive removed, form logic will be moved to a client component

// Removed unused Link import
// Removed unused imports: useState, useCallback, emailjs, useForm, SubmitHandler
import BackButton from '@/components/BackButton'; // Import BackButton
// Removed unused Button import
import LinkButton from '@/components/LinkButton'; // Import LinkButton
// Import icons (remove ArrowLeftIcon)
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
        <h1 className="text-4xl font-bold text-center mb-12">상담 및 문의</h1>

        {/* Render the client component for the form */}
        <ContactForm />

        {/* 2. KakaoTalk Section (4.8 카카오톡 상담) */}
        <section className="mb-16 text-center">
           <h2 className="text-2xl font-bold mb-6">카카오톡 상담</h2>
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
        <section className="mb-16 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
            <h2 className="text-2xl font-bold mb-6 text-center">직접 문의</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                {/* Phone */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2 flex items-center justify-center md:justify-start"><PhoneIcon className="h-4 w-4 mr-1 text-primary-blue" /> 전화</h3>
                    <p>대표번호: <a href="tel:02-764-3114" className="hover:underline">02-764-3114</a></p>
                    
                    <p className="text-xs text-gray-600 mt-1">(운영시간: 평일 10:00-19:00)</p>
                </div>
                {/* Email */}
                 <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2 flex items-center justify-center md:justify-start"><EmailIcon className="h-4 w-4 mr-1 text-primary-blue" /> 이메일</h3>
                    <p>대표: <a href="mailto:contact@kosmart.org" className="hover:underline">contact@kosmart.org</a></p>

                     <p className="text-xs text-gray-600 mt-1">(응답시간: 평일 기준 24시간 이내)</p>
                </div>
                {/* Visit */}
                 <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2 flex items-center justify-center md:justify-start"><VisitIcon className="h-4 w-4 mr-1 text-primary-blue" /> 방문 상담</h3>
                    <p>주소: 서울특별시 영등포구 양산로 96</p>
                    <p>상담 시간: 평일 10:00-19:00</p>
                    
                </div>
            </div>
        </section>

        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
