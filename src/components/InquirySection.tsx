import LinkButton from '@/components/LinkButton';
import Card from '@/components/Card'; // Import Card component
import { RiKakaoTalkFill } from "react-icons/ri"; // Use Remix Icon for KakaoTalk
import { HiOutlinePhone as PhoneIcon, HiOutlinePencilSquare as PencilSquareIcon } from 'react-icons/hi2'; // Added PhoneIcon and PencilSquareIcon

export default function InquirySection() {
  return (
    <section className="w-full bg-background-main py-20 px-4"> {/* Revert to main background color */}
      <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">궁금한 점이 있으신가요?</h2> {/* Ensure primary text color */}
      {/* Card Container */}
      {/* Increased max-width to potentially fit buttons horizontally */}
      <Card className="max-w-xl mx-auto shadow-lg text-center"> {/* Use Card component */}
         <h3 className="text-xl font-semibold mb-4 text-text-primary">편하게 문의하세요</h3> {/* Use primary text color */}
         <p className="mb-8 text-base text-text-secondary"> {/* Use secondary text color */}
          아래 버튼을 눌러 카카오톡으로 문의하시거나,<br />다른 방법을 이용해 상담을 신청하실 수 있습니다.
       </p>
       {/* Button Group - Always vertical */}
       <div className="mt-8 flex flex-col justify-center gap-4"> {/* Removed items-center */}
          {/* Use LinkButton component for Kakao */}
          <LinkButton
            href="https://open.kakao.com/o/sLXWztZg"
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
            href="tel:02-764-3114"
            variant="secondary" // Use secondary variant (gray)
            size="base"
            iconLeft={<PhoneIcon className="h-5 w-5" />}
            className="w-full" // Make button full width
          >
            전화 문의 (02-764-3114)
          </LinkButton>
        </div>
      </Card> {/* Close Card component */}
    </section>
  );
}