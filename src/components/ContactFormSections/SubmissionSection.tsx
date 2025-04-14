import React, { useState } from 'react'; // Import useState
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ContactFormData } from '@/types/contactForm'; // Import shared type
import Modal from '@/components/Modal'; // Import the Modal component

// Updated Privacy Policy Content
const PrivacyPolicyContent = () => (
  <div className="prose prose-sm max-w-none text-text-secondary">
    <p className="font-bold">개인정보처리방침</p>
    <p>한국스마트협동조합(이하 '조합')은 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하며, 상담 신청자의 개인정보 보호에 최선을 다하고 있습니다.</p>

    <p className="font-semibold mt-4">1. 수집하는 개인정보 항목 및 수집 목적</p>
    <ul className="list-disc list-inside space-y-1">
      <li>수집 항목: 이름, 이메일, 연락처, 방문 희망일, 희망 시간, 문의사항, 관심 서비스</li>
      <li>수집 목적: 상담 신청 접수 및 처리, 방문 상담 진행, 문의 응대, 서비스 이용 안내</li>
    </ul>

    <p className="font-semibold mt-4">2. 개인정보의 보유 및 이용 기간</p>
    <ul className="list-disc list-inside space-y-1">
      <li>원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</li>
      <li>단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 조합은 아래와 같이 관계 법령에서 정한 일정한 기간 동안 회원 정보를 보관합니다.
        <ul className="list-disc list-inside ml-4">
          <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
          <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
          <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
        </ul>
      </li>
    </ul>

     <p className="font-semibold mt-4">3. 개인정보의 파기 절차 및 방법</p>
     <ul className="list-disc list-inside space-y-1">
       <li>조합은 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기 절차 및 방법은 다음과 같습니다.
         <ul className="list-disc list-inside ml-4">
           <li>파기 절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용 기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</li>
           <li>파기 방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
         </ul>
       </li>
     </ul>

     <p className="font-semibold mt-4">4. 정보주체의 권리, 의무 및 행사방법</p>
     <ul className="list-disc list-inside space-y-1">
       <li>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 삭제를 요청할 수도 있습니다.</li>
       <li>개인정보 조회, 수정을 위해서는 조합에 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</li>
       <li>이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.</li>
     </ul>

     <p className="font-semibold mt-4">5. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</p>
     <p>조합은 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용하지 않습니다.</p>

     <p className="font-semibold mt-4">6. 개인정보 보호책임자 및 담당부서</p>
     <ul className="list-disc list-inside space-y-1">
       <li>성명: 황경하</li>
       <li>소속/직위: 조직국/국장</li>
       <li>연락처: 02-764-3114 / contact@kosmart.org</li> {/* Updated contact info */}
     </ul>

     <p className="font-semibold mt-4">7. 개인정보처리방침 변경</p>
     <p>본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>

     <p className="font-semibold mt-4">부칙</p>
     <p>본 방침은 2025년 4월 14일부터 시행됩니다.</p> {/* Updated effective date */}
     {/* Removed the warning about sample content */}
  </div>
);


interface SubmissionSectionProps {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  isSubmitting: boolean;
  submitStatus: 'success' | 'error' | null;
}

const SubmissionSection = ({ register, errors, isSubmitting, submitStatus }: SubmissionSectionProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  return (
    <> {/* Use Fragment to return multiple elements */}
      <div className="space-y-6 mt-6 border-t pt-6 border-border-light">
        {/* Privacy Agreement */}
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" id="privacy"
                   {...register("privacy", { required: "개인정보 수집 및 이용에 동의해주세요." })}
                   className={`form-checkbox h-4 w-4 border-border-light rounded focus:ring-primary ${errors.privacy ? 'border-warning-red text-warning-red' : 'text-primary'}`} />
            <span className={`ml-2 text-sm ${errors.privacy ? 'text-warning-red' : 'text-text-secondary'}`}>개인정보 수집 및 이용에 동의합니다. <span className="text-warning-red">*</span></span>
            {/* Open modal on button click */}
            <button type="button" onClick={() => setIsModalOpen(true)} className="ml-2 text-xs text-accent-blue hover:underline">(내용보기)</button>
          </label>
          {/* Error Message */}
          {errors.privacy && <span className="text-warning-red text-xs mt-1 block">{errors.privacy.message}</span>}
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4 pb-4">
          <button
            type="submit"
            className="bg-primary hover:bg-orange-500 text-text-on-primary font-bold py-3 px-10 rounded-lg text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-main"
            disabled={isSubmitting}
          >
            {isSubmitting ? '전송 중...' : '상담 신청 제출'}
          </button>
          {/* Submission Status Message */}
          {submitStatus === 'success' && (
            <p className="mt-4 text-center text-success-green">상담 신청이 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-warning-red">오류가 발생했습니다. 잠시 후 다시 시도하거나 다른 방법으로 문의해주세요.</p>
          )}
        </div>
      </div>

      {/* Render the Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="개인정보처리방침">
        <PrivacyPolicyContent />
      </Modal>
    </>
  );
};

export default SubmissionSection;