import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ContactFormData } from '@/types/contactForm'; // Import shared type

// Remove local FormData interface definition

interface PersonalInfoSectionProps {
  // Use shared ContactFormData type
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}

// React.FC 제거하고 직접 타입 명시 (이미 적용됨)
const PersonalInfoSection = ({ register, errors }: PersonalInfoSectionProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-text-secondary">이름 <span className="text-warning-red">*</span></label>
        <input
          type="text" id="name" placeholder="홍길동"
          {...register("name", { required: "이름을 입력해주세요." })}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.name ? 'border-warning-red focus:ring-warning-red' : 'border-border-light focus:ring-primary'}`} />
        {errors.name && <span className="text-warning-red text-xs mt-1">{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-text-secondary">이메일 <span className="text-warning-red">*</span></label>
        <input
          type="email" id="email" placeholder="email@example.com"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: { value: /^\S+@\S+$/i, message: "올바른 이메일 형식이 아닙니다." }
          })}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-warning-red focus:ring-warning-red' : 'border-border-light focus:ring-primary'}`} />
        {errors.email && <span className="text-warning-red text-xs mt-1">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium mb-1 text-text-secondary">연락처 <span className="text-warning-red">*</span></label>
        <input
          type="tel" id="contact" placeholder="0507-1335-3128"
          {...register("contact", {
            required: "연락처를 입력해주세요.",
            pattern: { value: /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, message: "올바른 연락처 형식(010-1234-5678)으로 입력해주세요." }
          })}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.contact ? 'border-warning-red focus:ring-warning-red' : 'border-border-light focus:ring-primary'}`} />
        {errors.contact && <span className="text-warning-red text-xs mt-1">{errors.contact.message}</span>}
      </div>
    </div>
  );
};

export default PersonalInfoSection;