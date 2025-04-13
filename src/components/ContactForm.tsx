'use client'; // This component uses client-side hooks

import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';
// Removed unused icons: PhoneIcon, EmailIcon, VisitIcon

// Interface for form data (can be shared or redefined)
interface FormData {
  name: string;
  email: string; // Add email field
  contact: string;
  visitDate: string;
  visitTime: string;
  inquiry: string;
  interest: string[];
  privacy: boolean;
}

export default function ContactForm() {
  // react-hook-form setup
  const { register, handleSubmit: handleRHFSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // EmailJS IDs provided by user
  const SERVICE_ID = "service_lop4659";
  const TEMPLATE_ID = "template_wxwj093";
  const PUBLIC_KEY = "E5wHxyFgSkrjQhYVG"; // Assuming this is the Public Key

  // Function to run on valid form submission
  const onValid: SubmitHandler<FormData> = useCallback((data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Ensure email field exists in FormData interface and form registration later
    const templateParams = {
      name: data.name,
      email: data.email, // Add email field - REQUIRES UI and interface update
      phone: data.contact,
      date: `${data.visitDate} ${data.visitTime || ''}`.trim(),
      message: data.inquiry,
      service: data.interest?.join(', ') || '미선택',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus('success');
          reset();
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  }, [isSubmitting, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, reset]);

  return (
    <section className="mb-16 bg-white p-6 rounded-lg shadow-lg"> {/* Changed p-8 to p-6 */}
      <h2 className="text-3xl font-bold mb-8 text-center">간편 상담 신청</h2>
      {/* Use react-hook-form's handleSubmit */}
      <form onSubmit={handleRHFSubmit(onValid)} className="space-y-6">
        {/* Row 1: Name, Email & Contact */}
        {/* Changed grid columns to 3 for better alignment on medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-dark-gray">이름 <span className="text-warning-red">*</span></label>
            <input
              type="text" id="name" placeholder="홍길동"
              {...register("name", { required: "이름을 입력해주세요." })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.name ? 'border-warning-red focus:ring-warning-red' : 'border-gray-300 focus:ring-primary-blue'}`} />
            {errors.name && <span className="text-warning-red text-xs mt-1">{errors.name.message}</span>}
          </div>
          {/* Add Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-dark-gray">이메일 <span className="text-warning-red">*</span></label>
            <input
              type="email" id="email" placeholder="email@example.com"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: { value: /^\S+@\S+$/i, message: "올바른 이메일 형식이 아닙니다." }
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-warning-red focus:ring-warning-red' : 'border-gray-300 focus:ring-primary-blue'}`} />
            {errors.email && <span className="text-warning-red text-xs mt-1">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium mb-1 text-dark-gray">연락처 <span className="text-warning-red">*</span></label>
            <input
              type="tel" id="contact" placeholder="010-1234-5678"
              {...register("contact", {
                required: "연락처를 입력해주세요.",
                pattern: { value: /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, message: "올바른 연락처 형식(010-1234-5678)으로 입력해주세요." }
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.contact ? 'border-warning-red focus:ring-warning-red' : 'border-gray-300 focus:ring-primary-blue'}`} />
            {errors.contact && <span className="text-warning-red text-xs mt-1">{errors.contact.message}</span>}
          </div>
        </div>

         {/* Row 2: Visit Date & Time */}
        {/* Added margin and top border for visual grouping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-t pt-6 border-gray-200">
          <div>
            <label htmlFor="visitDate" className="block text-sm font-medium mb-1 text-dark-gray">방문희망일 <span className="text-warning-red">*</span></label>
            <input
              type="date" id="visitDate"
              min={new Date().toISOString().split('T')[0]} // Today onwards
              {...register("visitDate", { required: "방문 희망일을 선택해주세요." })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.visitDate ? 'border-warning-red focus:ring-warning-red' : 'border-gray-300 focus:ring-primary-blue'}`} />
            {/* Error Message */}
            {errors.visitDate && <span className="text-warning-red text-xs mt-1">{errors.visitDate.message}</span>}
          </div>
           <div>
            <label htmlFor="visitTime" className="block text-sm font-medium mb-1 text-dark-gray">희망 시간</label>
            <select
              id="visitTime"
              {...register("visitTime")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-blue bg-white appearance-none">
                <option value="">시간 선택</option>
                <option value="10-12">오전 10시-12시</option>
                <option value="13-15">오후 1시-3시</option>
                <option value="15-17">오후 3시-5시</option>
                <option value="17-19">오후 5시-7시</option>
            </select>
          </div>
        </div>

         {/* Group Inquiry and Interest */}
         <div className="space-y-6 mt-6 border-t pt-6 border-gray-200">
          {/* Inquiry Textarea */}
        <div>
             <label htmlFor="inquiry" className="block text-sm font-medium mb-1 text-dark-gray">문의사항</label>
             <textarea
               id="inquiry" rows={4} placeholder="궁금한 점을 남겨주세요 (최대 500자)"
               {...register("inquiry", { maxLength: { value: 500, message: "최대 500자까지 입력 가능합니다." } })}
               className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.inquiry ? 'border-warning-red focus:ring-warning-red' : 'border-gray-300 focus:ring-primary-blue'}`}></textarea>
            {/* Error Message */}
            {errors.inquiry && <span className="text-warning-red text-xs mt-1">{errors.inquiry.message}</span>}
        </div>

         {/* Service Interest Checkboxes */}
         <div>
             <label className="block text-sm font-medium mb-2 text-dark-gray">관심 서비스 (선택)</label>
             <div className="flex flex-wrap gap-x-6 gap-y-2">
                 <label className="inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="monthly" {...register("interest")}
                            className="form-checkbox h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"/>
                     <span className="ml-2 text-sm">월 정기권</span>
                 </label>
                  <label className="inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="daily" {...register("interest")}
                            className="form-checkbox h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"/>
                     <span className="ml-2 text-sm">일일권</span>
                 </label>
                  <label className="inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="tour" {...register("interest")}
                            className="form-checkbox h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"/>
                     <span className="ml-2 text-sm">견학만 원함</span>
                 </label>
             </div>
         </div>
        </div>

        {/* Group Privacy and Submit */}
        <div className="space-y-6 mt-6 border-t pt-6 border-gray-200">
         {/* Privacy Agreement */}
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" id="privacy"
                   {...register("privacy", { required: "개인정보 수집 및 이용에 동의해주세요." })}
                   className={`form-checkbox h-4 w-4 border-gray-300 rounded focus:ring-primary-blue ${errors.privacy ? 'border-warning-red text-warning-red' : 'text-primary-blue'}`} />
            <span className={`ml-2 text-sm ${errors.privacy ? 'text-warning-red' : 'text-dark-gray'}`}>개인정보 수집 및 이용에 동의합니다. <span className="text-warning-red">*</span></span>
             {/* TODO: Add link/modal for detailed policy */}
            <button type="button" onClick={() => alert('개인정보처리방침 상세 내용 표시 기능 구현 예정')} className="ml-2 text-xs text-blue-600 hover:underline">(내용보기)</button>
          </label>
          {/* Error Message */}
          {errors.privacy && <span className="text-warning-red text-xs mt-1 block">{errors.privacy.message}</span>} {/* Added block for layout */}
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4 pb-4"> {/* 상단 패딩 복구, 하단 패딩 추가 */}
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-10 rounded-lg text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed" // Use even darker blue color
            disabled={isSubmitting}
          >
            {isSubmitting ? '전송 중...' : '상담 신청 제출'} {/* Restore conditional text */}
          </button>
          {/* Submission Status Message */}
          {submitStatus === 'success' && (
            <p className="mt-4 text-center text-green-600">상담 신청이 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-warning-red">오류가 발생했습니다. 잠시 후 다시 시도하거나 다른 방법으로 문의해주세요.</p>
          )}
        </div>
       </div>
      </form>
    </section>
  );
}