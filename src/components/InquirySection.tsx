import LinkButton from '@/components/LinkButton';
import Card from '@/components/Card'; // Import Card component
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
import { RiKakaoTalkFill } from "react-icons/ri"; // Use Remix Icon for KakaoTalk
import { HiOutlinePhone as PhoneIcon, HiOutlinePencilSquare as PencilSquareIcon, HiOutlineChatBubbleLeftEllipsis as ChatBubbleLeftEllipsisIcon } from 'react-icons/hi2'; // Added PhoneIcon, PencilSquareIcon and ChatBubbleLeftEllipsisIcon

export default function InquirySection() {
  return (
    <section className="w-full py-20 px-4"> {/* Removed bg-background-main */}
      {/* Use SectionTitle component */}
      <SectionTitle level="section" align="center">궁금한 점이 있으신가요?</SectionTitle> {/* Use level prop */}
      {/* Card Container */}
      {/* Increased max-width to potentially fit buttons horizontally */}
      <Card className="max-w-xl mx-auto shadow-lg text-center"> {/* Use Card component */}
         <SectionTitle as="h3" level="subsection" className="text-text-primary text-center">편하게 문의하세요</SectionTitle> {/* Use level prop */}
         <p className="mb-8 text-base text-text-secondary"> {/* Use secondary text color */}
          아래 버튼을 눌러 카카오톡으로 문의하시거나,<br />다른 방법을 이용해 상담을 신청하실 수 있습니다.
       </p>
       {/* Button Group - Always vertical */}
       <div className="mt-8 flex flex-col justify-center gap-4"> {/* Removed items-center */}
          {/* Use LinkButton component for Kakao */}
          <LinkButton
            href="https://open.kakao.com/me/offceart"
            variant="kakao"
            size="base"
            iconLeft={<RiKakaoTalkFill className="h-5 w-5" />}
            className="w-full" // Make button full width
            target="_blank"
            rel="noopener noreferrer"
          >
            카카오톡 상담
          </LinkButton>
          {/* Use LinkButton component for Online Inquiry */}
          <LinkButton
            href="/contact"
            variant="primary"
            size="base"
            className="w-full" // Make button full width
            iconLeft={<PencilSquareIcon className="h-5 w-5" />} // Add icon
          >
            온라인 상담 신청
          </LinkButton>
          {/* Use LinkButton component for Phone */}
          <LinkButton
            href="tel:0507-1335-3128"
            variant="secondary" // Use secondary variant (gray)
            size="base"
            iconLeft={<PhoneIcon className="h-5 w-5" />}
            className="w-full" // Make button full width
          >
            전화 문의
          </LinkButton>
          {/* Use LinkButton component for SMS */}
          <LinkButton
            href="sms:0507-1335-3128"
            variant="secondary" // Use secondary variant (gray)
            size="base"
            iconLeft={<ChatBubbleLeftEllipsisIcon className="h-5 w-5" />}
            className="w-full" // Make button full width
          >
            문자 메시지 문의
          </LinkButton>
        </div>
      </Card> {/* Close Card component */}
    </section>
  );
}