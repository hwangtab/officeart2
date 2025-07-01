import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ContactFormData } from '@/types/contactForm'; // Import shared type

// Remove local FormData interface definition

interface VisitInfoSectionProps {
  // Use shared ContactFormData type
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}

// React.FC 제거하고 직접 타입 명시 (이미 적용됨)
const VisitInfoSection = ({ register, errors }: VisitInfoSectionProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-t pt-6 border-border-light">
      <div>
        <label htmlFor="visitDate" className="block text-sm font-medium mb-1 text-text-secondary">방문희망일</label> {/* Removed required asterisk */}
        <input
          type="date" id="visitDate"
          min={new Date().toISOString().split('T')[0]} // Today onwards
          {...register("visitDate", {})}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${errors.visitDate ? 'border-warning-red focus:ring-warning-red' : 'border-border-light focus:ring-primary'}`} />
        {/* Error Message */}
        {errors.visitDate && <span className="text-warning-red text-xs mt-1">{errors.visitDate.message}</span>}
      </div>
      <div>
        <label htmlFor="visitTime" className="block text-sm font-medium mb-1 text-text-secondary">희망 시간</label>
        <select
          id="visitTime"
          {...register("visitTime")}
          className="w-full px-4 py-2 border border-border-light rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white appearance-none">
            <option value="">시간 선택</option>
            <option value="10-12">오전 10시-12시</option>
            <option value="13-15">오후 1시-3시</option>
            <option value="15-17">오후 3시-5시</option>
            <option value="17-19">오후 5시-7시</option>
        </select>
      </div>
    </div>
  );
};

export default VisitInfoSection;