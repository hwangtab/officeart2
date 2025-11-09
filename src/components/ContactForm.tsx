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
import { ContactFormData, EmailParams, SubmitStatus, FeedbackMessage, ContactFormErrorCode } from '@/types/contactForm'; // Use shared types
import { classifyEmailJSError, generateFeedbackMessage, isRetryableError } from '@/utils/contactFormErrors';

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
  const { register, handleSubmit: handleRHFSubmit, formState: { errors }, reset, setValue, watch, trigger } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: 'idle',
    retryCount: 0,
  });
  const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage | null>(null);

  // EmailJS IDs from environment variables
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Use shared ContactFormData and EmailParams types
  const onValid: SubmitHandler<ContactFormData> = useCallback((data) => {
    // Check if environment variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set.');
      const errorCode = ContactFormErrorCode.CONFIG_ERROR;
      setSubmitStatus({
        type: 'error',
        errorCode,
        errorMessage: 'Configuration error',
        timestamp: Date.now(),
        canRetry: false,
      });
      setFeedbackMessage(generateFeedbackMessage(errorCode));
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(prev => ({
      type: 'submitting',
      retryCount: prev.retryCount || 0,
    }));
    setFeedbackMessage(null);

    const templateParams: EmailParams = {
      name: data.name,
      email: data.email,
      phone: data.contact,
      // Handle optional visitDate and visitTime
      date: data.visitDate ? `${data.visitDate} ${data.visitTime || ''}`.trim() : '미지정',
      message: data.inquiry,
      service: Array.isArray(data.interest) ? data.interest.join(', ') : data.interest || '미선택',
      location: '영등포구청점',
      serviceType: data.serviceType || '일반 문의',
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
      utmTerm: data.utmTerm,
      utmContent: data.utmContent,
      referrer: data.referrer,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus({
            type: 'success',
            timestamp: Date.now(),
          });
          setFeedbackMessage({
            title: '상담 신청 완료',
            message: '상담 신청이 성공적으로 접수되었습니다. 영업일 기준 24시간 이내에 담당자가 연락드리겠습니다.',
            contactInfo: {
              phone: '0507-1335-3128',
              email: 'contact@kosmart.org',
            },
          });

          // Track conversion event
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'conversion_complete', {
              event_category: 'Contact',
              event_label: data.serviceType || 'general_inquiry',
              value: 1
            });
          }

          reset();
          const persistedTrackingFields: Partial<ContactFormData> = {
            utmSource: data.utmSource || '',
            utmMedium: data.utmMedium || '',
            utmCampaign: data.utmCampaign || '',
            utmTerm: data.utmTerm || '',
            utmContent: data.utmContent || '',
            referrer: data.referrer || '',
          };
          Object.entries(persistedTrackingFields).forEach(([key, value]) => {
            setValue(key as keyof ContactFormData, value as string);
          });
      })
      .catch((error) => {
          console.error('EmailJS Error:', error);

          // Classify the error
          const errorCode = classifyEmailJSError(error);
          const feedback = generateFeedbackMessage(errorCode);
          const canRetry = isRetryableError(errorCode);

          setSubmitStatus(prev => ({
            type: 'error',
            errorCode,
            errorMessage: error.text || 'Unknown error',
            errorDetails: JSON.stringify(error),
            timestamp: Date.now(),
            retryCount: prev.retryCount || 0,
            canRetry,
          }));

          setFeedbackMessage(feedback);

          // Track error event
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'form_submission_error', {
              event_category: 'Contact',
              event_label: errorCode,
              value: 0
            });
          }
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  }, [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, isSubmitting, reset, setValue]);

  // 자동 입력 텍스트 병합 함수
  const handleAutoFillInquiry = useCallback((newText: string) => {
    console.log('handleAutoFillInquiry called with:', newText); // 디버깅용
    const currentInquiry = watch('inquiry') || '';
    console.log('Current inquiry:', currentInquiry); // 디버깅용
    
    // 중복 텍스트 방지
    if (currentInquiry.includes(newText)) {
      console.log('Duplicate text detected, skipping'); // 디버깅용
      return;
    }
    
    // 텍스트 병합 로직
    let mergedText = '';
    if (currentInquiry.trim()) {
      mergedText = `${currentInquiry}\n\n${newText}`;
    } else {
      mergedText = newText;
    }
    
    console.log('Setting merged text:', mergedText); // 디버깅용
    setValue('inquiry', mergedText);
    
    // 폼 필드 업데이트 트리거
    trigger('inquiry');
    
    // 텍스트 에리어로 스크롤 이동
    setTimeout(() => {
      const inquiryTextArea = document.getElementById('inquiry') as HTMLTextAreaElement;
      if (inquiryTextArea) {
        inquiryTextArea.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        inquiryTextArea.focus();
      }
    }, 100);
  }, [setValue, watch, trigger]);

  // useEffect to set default values based on searchParams
  useEffect(() => {
    // searchParams from the hook is guaranteed to be available in client components
    const inquiryType = searchParams.get('inquiryType');
    const duration = searchParams.get('duration');
    const pkg = searchParams.get('package'); // 'package' is a reserved word, use 'pkg'
    const service = searchParams.get('service');
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmTerm = searchParams.get('utm_term');
    const utmContent = searchParams.get('utm_content');
    // const location = searchParams.get('location'); // Will be handled by LocationSelectionSection

    let defaultInquiryText = '';

    // Set service type based on URL parameter
    if (service === 'non-resident') {
      setValue('serviceType', 'non-resident');
      defaultInquiryText = '[비상주 사무실 문의] ';
    } else if (service === 'desk') {
      setValue('serviceType', 'desk');
      defaultInquiryText = '[정기 이용권 문의] ';
    }

      // Set interest based on inquiryType
      if (inquiryType === 'visit') {
        setValue('interest', ['visit']); // Assuming 'visit' is a value in your checkbox group
        defaultInquiryText += '[방문 상담 예약] ';
      } else if (inquiryType === 'daily') {
        setValue('interest', ['daily']); // Assuming 'daily' is a value
        defaultInquiryText += '[일일 이용권 문의] ';
      } else if (inquiryType === 'online') {
         // Optionally set a default interest for general online inquiries if needed
         // setValue('interest', ['monthly']); // Example
         defaultInquiryText += '[온라인 문의] ';
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
      setValue('utmSource', utmSource || '');
      setValue('utmMedium', utmMedium || '');
      setValue('utmCampaign', utmCampaign || '');
      setValue('utmTerm', utmTerm || '');
      setValue('utmContent', utmContent || '');
      if (typeof document !== 'undefined') {
        setValue('referrer', document.referrer || '');
      }

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
          feedbackMessage={feedbackMessage}
          onRetry={() => handleRHFSubmit(onValid)()}
        />

        <input type="hidden" {...register('utmSource')} />
        <input type="hidden" {...register('utmMedium')} />
        <input type="hidden" {...register('utmCampaign')} />
        <input type="hidden" {...register('utmTerm')} />
        <input type="hidden" {...register('utmContent')} />
        <input type="hidden" {...register('referrer')} />

      </form>
    </Card>
  );
}
