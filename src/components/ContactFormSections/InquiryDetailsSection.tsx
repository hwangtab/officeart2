import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ContactFormData } from '@/types/contactForm'; // Import shared type

// Remove local FormData interface definition

interface InquiryDetailsSectionProps {
  // Use shared ContactFormData type
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}

// React.FC 제거하고 직접 타입 명시 (이미 적용됨)
const InquiryDetailsSection = ({ register, errors }: InquiryDetailsSectionProps): JSX.Element => {
  return (
    <div className="space-y-6 mt-6 border-t pt-6 border-border-light">
      {/* Inquiry Textarea */}
      <div>
        <label htmlFor="inquiry" className="block text-sm font-medium mb-1 text-text-secondary">문의사항</label>
        <textarea
          id="inquiry" rows={4} placeholder="궁금한 점을 남겨주세요 (최대 500자)"
          {...register("inquiry", { maxLength: { value: 500, message: "최대 500자까지 입력 가능합니다." } })}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.inquiry ? 'border-error focus:ring-error' : 'border-border-light focus:ring-primary'}`}></textarea>
        {/* Error Message */}
        {errors.inquiry && <span className="text-error text-xs mt-1">{errors.inquiry.message}</span>}
      </div>

      {/* Service Interest Checkboxes */}
      <div>
        <label className="block text-sm font-medium mb-2 text-text-secondary">관심 서비스 (선택)</label>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="monthly" {...register("interest")}
                       className="form-checkbox h-4 w-4 text-primary border-border-light rounded focus:ring-primary"/>
                <span className="ml-2 text-sm">월 정기권</span>
            </label>
             
             <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="tour" {...register("interest")}
                       className="form-checkbox h-4 w-4 text-primary border-border-light rounded focus:ring-primary"/>
                <span className="ml-2 text-sm">견학만 원함</span>
            </label>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetailsSection;