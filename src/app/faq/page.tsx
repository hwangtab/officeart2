import type { Metadata } from 'next';
import BackButton from '@/components/BackButton';
import SectionTitle from '@/components/SectionTitle'; // SectionTitle은 현재 사용되지 않지만 추후 필요할 수 있어 유지
import Card from '@/components/Card';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ) | 오피스아트",
  description: "오피스아트 이용 관련 자주 묻는 질문과 답변을 확인하세요. (운영 시간, 예약, 시설, 주차 등)",
};

// 임시 FAQ 데이터 (추후 실제 내용으로 교체 필요)
const faqData = [
  {
    question: "오피스아트 운영 시간은 어떻게 되나요?",
    answer: "정기 이용 회원은 24시간 연중무휴로 이용 가능합니다.",
  },
  {
    question: "방문 상담 없이 바로 이용 등록이 가능한가요?",
    answer: "네, 가능합니다. 다만, 방문 상담을 통해 시설을 직접 둘러보시고 설명을 들으시는 것을 권장합니다. 온라인 또는 전화로 문의주시면 이용 등록 절차를 안내해 드립니다.",
  },
  {
    question: "주차는 어떻게 하나요?",
    answer: "건물 내 주차가 가능하며, 시간당 2,000원, 월 정기주차는 10만원입니다. 인근 영등포구청역 공영주차장(시간당 1,200원)도 이용 가능합니다.",
  },
  {
    question: "개인 짐 보관이 가능한가요?",
    answer: "네, 정기 이용 회원에게는 개인 서랍장이 제공됩니다. 일일 이용권 사용자는 빈 서랍장을 임시로 사용하실 수 있으나, 퇴실 시 모든 짐을 가져가셔야 합니다.",
  },
  {
    question: "외부 음식 반입이 가능한가요?",
    answer: "냄새가 심하지 않은 간단한 음식 및 음료는 휴게 공간에서 취식 가능합니다. 다만, 다른 이용자에게 방해가 되지 않도록 주의 부탁드립니다.",
  },
  {
    question: "회의 공간은 어떻게 이용하나요?",
    answer: "회의 공간은 정기 이용 회원의 경우 사전 예약을 통해 무료로 이용 가능합니다. 예약은 관리자에게 문의해주세요.",
  },
  {
    question: "프린터/복합기 이용 제한이 있나요?",
    answer: "아니요, 정기 및 일일 이용권 사용자 모두 A3 컬러 복합기를 용지 포함하여 무제한 무료로 이용하실 수 있습니다.",
  },
  // TODO: 더 많은 FAQ 항목 추가 (예: 와이파이 정보, 보안 시스템, 커뮤니티 이벤트 등)
];

export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center">자주 묻는 질문 (FAQ)</SectionTitle> {/* Use level prop */}

        <ScrollAnimationWrapper>
          <section className="space-y-6">
            {faqData.map((item, index) => (
              <Card key={index}>
                {/* Using <details> and <summary> for native accordion behavior */}
                <details className="group">
                  {/* Apply flex to summary, remove font-semibold */}
                  {/* Apply flex items-center to align Q. and the question text vertically */}
                  {/* Adjust vertical padding for better alignment */}
                  {/* Q. 아이콘과 질문 텍스트를 div로 감싸고 flex items-center 적용 */}
                  <summary className="flex justify-between cursor-pointer list-none text-text-primary hover:text-primary transition-colors w-full">
                    {/* 새로 추가된 div: Q. 아이콘과 질문 텍스트를 포함하며 세로 중앙 정렬 */}
                    {/* items-baseline으로 변경하고 SectionTitle에 leading-normal 추가 */}
                    {/* items-baseline에서 items-center로 변경하여 수직 중앙 정렬 시도 */}
                    <div className="flex items-baseline mr-2"> {/* flex-grow 제거 */}
                      {/* Q. 아이콘 */}
                      <span className="font-semibold mr-2 flex-shrink-0">Q.</span>
                      {/* 질문 텍스트 */}
                      {/* 불필요한 클래스 제거됨 */}
                      {/* verticalCenter prop 추가 */}
                      <SectionTitle as="h3" level="subsection" align="left" className="mb-0"> {/* Use level prop, override margin */}
                        {item.question}
                      </SectionTitle>
                    </div>
                    {/* Chevron 아이콘 */}
                    <span className="transition group-open:rotate-180 flex-shrink-0">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  {/* Answer appears with a fade-in animation */}
                  {/* Answer appears with a fade-in animation and hanging indent */}
                  <p className="text-text-secondary mt-3 group-open:animate-fadeIn relative pl-6">
                    <span className="absolute left-0 font-semibold">A.</span>
                    {item.answer}
                  </p>
                </details>
              </Card>
            ))}
          </section>
        </ScrollAnimationWrapper>

        {/* Back button */}
        <div className="mt-12">
          <BackButton />
        </div>
      </div>
    </main>
  );
}