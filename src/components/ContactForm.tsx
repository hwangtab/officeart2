'use client'; // This component uses client-side hooks

import { useState, useCallback, useEffect } from 'react'; // Import useEffect
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';
import Card from '@/components/Card'; // Import Card
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

// Import the section components
import PersonalInfoSection from './ContactFormSections/PersonalInfoSection';
import VisitInfoSection from './ContactFormSections/VisitInfoSection';
import InquiryDetailsSection from './ContactFormSections/InquiryDetailsSection';
import SubmissionSection from './ContactFormSections/SubmissionSection';

// Import shared types
import { ContactFormData, EmailParams } from '@/types/contactForm'; // Use shared types

// Remove local interface definitions

// Props no longer needed for searchParams
// interface ContactFormProps {
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

export default function ContactForm(/* { searchParams }: ContactFormProps */) { // Remove searchParams from props
  // Get searchParams using the hook
  const searchParams = useSearchParams();
  // Use shared ContactFormData type
  // Destructure setValue from useForm
  const { register, handleSubmit: handleRHFSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null); // Add state for error message

  // EmailJS IDs remain the same
  // Retrieve EmailJS IDs from environment variables
  // Ensure these variables are set in your .env.local file and prefixed with NEXT_PUBLIC_
  const SERVICE_ID = 'service_lop4659';
  const TEMPLATE_ID = 'template_wxwj093';
  const PUBLIC_KEY = 'E5wHxyFgSkrjQhYVG';

  // Use shared ContactFormData and EmailParams types
  const onValid: SubmitHandler<ContactFormData> = useCallback((data) => {
    // Check if environment variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set.');
      setSubmitStatus('error');
      setSubmitErrorMessage('설정 오류로 인해 메일을 전송할 수 없습니다. 관리자에게 문의해주세요.'); // Set specific error message for env var issue
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitErrorMessage(null); // Reset error message on new submission

    const templateParams: EmailParams = {
      name: data.name,
      email: data.email,
      phone: data.contact,
      // Handle optional visitDate and visitTime
      date: data.visitDate ? `${data.visitDate} ${data.visitTime || ''}`.trim() : '미지정',
      message: data.inquiry,
      service: Array.isArray(data.interest) ? data.interest.join(', ') : data.interest || '미선택',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus('success');
          reset();
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus('error');
          // Provide a more user-friendly error message based on common EmailJS errors if possible
          if (error.text?.includes('service_id')) {
            setSubmitErrorMessage('메일 서비스 설정에 문제가 발생했습니다. 관리자에게 문의해주세요.');
          } else if (error.text?.includes('template_id')) {
            setSubmitErrorMessage('메일 템플릿 설정에 문제가 발생했습니다. 관리자에게 문의해주세요.');
          } else if (error.text?.includes('user_id') || error.text?.includes('public_key')) {
            setSubmitErrorMessage('메일 인증 정보에 문제가 발생했습니다. 관리자에게 문의해주세요.');
          } else {
            setSubmitErrorMessage('메일 전송 중 오류가 발생했습니다. 네트워크 상태를 확인 후 다시 시도해주세요.');
          }
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  }, [isSubmitting, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, reset]);

  // useEffect to set default values based on searchParams
  useEffect(() => {
    // searchParams from the hook is guaranteed to be available in client components
    const inquiryType = searchParams.get('inquiryType');
    const duration = searchParams.get('duration');
    const pkg = searchParams.get('package'); // 'package' is a reserved word, use 'pkg'

    let defaultInquiryText = '';

      // Set interest based on inquiryType
      if (inquiryType === 'visit') {
        setValue('interest', ['visit']); // Assuming 'visit' is a value in your checkbox group
        defaultInquiryText = '[방문 상담 예약] ';
      } else if (inquiryType === 'daily') {
        setValue('interest', ['daily']); // Assuming 'daily' is a value
        defaultInquiryText = '[일일 이용권 문의] ';
      } else if (inquiryType === 'online') {
         // Optionally set a default interest for general online inquiries if needed
         // setValue('interest', ['monthly']); // Example
         defaultInquiryText = '[온라인 문의] ';
      }

      // Prepend duration or package info to inquiry text
      if (duration) {
        defaultInquiryText += `정기 ${duration}개월 이용 관련 문의합니다.\n\n`;
        // If inquiryType wasn't 'visit' or 'online', maybe set interest to 'monthly'
        if (inquiryType !== 'visit' && inquiryType !== 'online') {
             setValue('interest', ['monthly']); // Assuming 'monthly' is a value
        }
      } else if (pkg) {
         // Map package key back to label if needed, or just use the key
         const packageLabel = pkg === '1day' ? '1일' : pkg === '3days' ? '3일' : pkg === '5days' ? '5일' : pkg === '10days' ? '10일' : pkg;
        defaultInquiryText += `일일 ${packageLabel} 이용권 관련 문의합니다.\n\n`;
         if (inquiryType !== 'daily') {
             setValue('interest', ['daily']);
         }
      }

      setValue('inquiry', defaultInquiryText);

      // Optionally focus the first relevant field, e.g., name
      // document.getElementById('name')?.focus();
    // No need to check if searchParams exists, the hook handles it.
  }, [searchParams, setValue]);


  return (
    <Card className="mb-16 shadow-lg">
      {/* Use xlarge for consistency */}
      <SectionTitle as="h2" level="section" className="text-center">간편 상담 신청</SectionTitle> {/* Use level prop */}
      {/* Use react-hook-form's handleSubmit */}
      <form onSubmit={handleRHFSubmit(onValid)} className="space-y-6">

        {/* Pass register and errors typed with ContactFormData */}
        <PersonalInfoSection register={register} errors={errors} />

        {/* Pass register and errors typed with ContactFormData */}
        <VisitInfoSection register={register} errors={errors} />

        {/* Pass register and errors typed with ContactFormData */}
        <InquiryDetailsSection register={register} errors={errors} />

        {/* Pass register and errors typed with ContactFormData */}
        <SubmissionSection
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          submitErrorMessage={submitErrorMessage} // Pass the error message prop
        />

      </form>
    </Card>
  );
}