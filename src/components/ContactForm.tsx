'use client'; // This component uses client-side hooks

import { useState, useCallback } from 'react';
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

export default function ContactForm() {
  // Use shared ContactFormData type
  const { register, handleSubmit: handleRHFSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // EmailJS IDs remain the same
  // Retrieve EmailJS IDs from environment variables
  // Ensure these variables are set in your .env.local file and prefixed with NEXT_PUBLIC_
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Use shared ContactFormData and EmailParams types
  const onValid: SubmitHandler<ContactFormData> = useCallback((data) => {
    // Check if environment variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set.');
      setSubmitStatus('error');
      // Optionally, provide more specific user feedback here
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams: EmailParams = {
      name: data.name,
      email: data.email,
      phone: data.contact,
      date: `${data.visitDate} ${data.visitTime || ''}`.trim(),
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
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  }, [isSubmitting, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, reset]);

  return (
    <Card className="mb-16 shadow-lg">
      <SectionTitle as="h2" size="medium" className="text-center">간편 상담 신청</SectionTitle>
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
        />

      </form>
    </Card>
  );
}