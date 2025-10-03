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
         <p className="mb-6 text-base text-text-secondary"> {/* Use secondary text color */}
          가장 빠른 카카오톡 상담을 추천드려요. 문의 유형에 따라 맞춤형 안내를 도와드립니다.
       </p>
       <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-left">
         <p className="flex items-center justify-center gap-2 text-sm font-semibold text-primary">
           <span className="inline-flex items-center rounded-full bg-primary text-text-on-primary px-3 py-1 text-caption">추천</span>
           카카오톡 실시간 상담 시 평균 10분 내 응답
         </p>
       </div>
       {/* Button Group */}
       <div className="flex flex-col justify-center gap-4">
          <LinkButton
            href="https://open.kakao.com/me/offceart"
            variant="kakao"
            size="lg"
            iconLeft={<RiKakaoTalkFill className="h-5 w-5" />}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            카카오톡으로 가장 빠른 상담 받기
          </LinkButton>
          <p className="text-caption text-text-secondary">업무 시간 외 접수 시 다음 영업일 오전 중 회신 드립니다.</p>
          <details className="rounded-lg border border-border-light bg-white text-left">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-text-primary">다른 상담 방법도 보고 싶어요</summary>
            <div className="flex flex-col gap-3 px-4 pb-4 pt-2">
              <LinkButton
                href="/contact"
                variant="primary"
                size="base"
                className="w-full"
                iconLeft={<PencilSquareIcon className="h-5 w-5" />}
              >
                온라인 상담 신청서 작성
              </LinkButton>
              <LinkButton
                href="tel:0507-1335-3128"
                variant="secondary"
                size="base"
                iconLeft={<PhoneIcon className="h-5 w-5" />}
                className="w-full"
              >
                전화로 문의하기
              </LinkButton>
              <LinkButton
                href="sms:0507-1335-3128"
                variant="secondary"
                size="base"
                iconLeft={<ChatBubbleLeftEllipsisIcon className="h-5 w-5" />}
                className="w-full"
              >
                문자 메시지 남기기
              </LinkButton>
            </div>
          </details>
        </div>
      </Card> {/* Close Card component */}
    </section>
  );
}
