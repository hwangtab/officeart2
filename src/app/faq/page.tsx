import type { Metadata } from 'next';
import BackButton from '@/components/BackButton';
import SectionTitle from '@/components/SectionTitle'; // SectionTitle은 현재 사용되지 않지만 추후 필요할 수 있어 유지
import Card from '@/components/Card';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import FaqCta from '@/components/FaqCta';
import RelatedPages from '@/components/RelatedPages';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ) | 오피스아트",
  description: "오피스아트 정기 이용권 월 25만원, 비상주 사무실 월 3.3만원 관련 FAQ. 운영시간, 사업자등록, 주차, 회의실, 프린터 이용 등 모든 궁금증을 해결해드립니다. 지금 문의하세요!",
  keywords: ['오피스아트 FAQ', '공유오피스 문의', '비상주 사무실 문의', '사업자등록 방법', '영등포 공유오피스', '불광 공유오피스'],
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: "자주 묻는 질문 (FAQ) | 오피스아트",
    description: "오피스아트 이용과 비상주 사무실 서비스에 대한 모든 궁금증을 해결해드립니다.",
  }
};

// 일반 FAQ 데이터
const generalFaqData = [
  {
    question: "오피스아트는 어떤 분들이 주로 이용하시나요?",
    answer: "주로 창작 작업을 하시는 분들이 많이 이용해요. 웹툰 작가님들, 유튜브 영상 제작자들, 앱 개발자님들, 스타트업 팀까지 다양한 분들이 계세요. 1인 창업자부터 5~6명의 소규모 팀까지 모두 편하게 이용하실 수 있어요!",
  },
  {
    question: "오피스아트 운영 시간은 어떻게 되나요?",
    answer: "정기 이용 회원님들은 24시간 연중무휴로 자유롭게 이용하실 수 있어요!",
  },
  {
    question: "방문 상담 없이 바로 이용 등록이 가능한가요?",
    answer: "네, 가능해요! 다만 방문 상담을 통해 시설을 직접 둘러보시고 설명을 들으시는 걸 추천드려요. 온라인이나 전화로 문의주시면 이용 등록 절차를 친절히 안내해드릴게요.",
  },
  {
    question: "주차는 어떻게 하나요?",
    answer: "건물 내 주차장을 이용하실 수 있어요. 시간당 2,000원, 월 정기주차는 10만원이에요. 가까운 영등포구청역 공영주차장(시간당 1,200원)도 이용 가능하니 참고해주세요!",
  },
  {
    question: "개인 짐 보관이 가능한가요?",
    answer: "네, 정기 이용 회원님들께는 개인 서랍장을 제공해드리고 있어요.",
  },
  {
    question: "외부 음식 반입이 가능한가요?",
    answer: "냄새가 심하지 않은 간단한 음식이나 음료는 휴게 공간에서 드실 수 있어요. 다만 다른 이용자분들께 불편을 드리지 않도록 조심해주시면 감사하겠습니다!",
  },
  {
    question: "회의 공간은 어떻게 이용하나요?",
    answer: "회의 공간은 정기 이용 회원님들께서 사전 예약을 통해 무료로 사용하실 수 있어요. 예약은 관리자에게 문의해주시면 안내해드릴게요!",
  },
  {
    question: "프린터/복합기 이용 제한이 있나요?",
    answer: "아니요, 정기 이용권 사용자분들은 A3 컬러 복합기를 용지 포함해서 무제한 무료로 사용하실 수 있어요!",
  },
  {
    question: "커피는 무제한인가요?",
    answer: "네, 정기 이용 회원님들은 원두커피를 무제한으로 이용하실 수 있어요!",
  },
];

// 비상주 사무실 FAQ 데이터
const nonResidentFaqData = [
  {
    question: "사업자등록이 정말 가능한가요?",
    answer: "네, 정식 사업장 주소로 사업자등록이 가능합니다. 국세청에서 인정하는 정식 주소이므로 안심하고 이용하실 수 있습니다.",
  },
  {
    question: "우편물은 어떻게 받나요?",
    answer: "우편물이 도착하면 안전하게 보관해드립니다. 방문하시면 언제든지 수령하실 수 있습니다.",
  },
  {
    question: "계약 기간이 있나요?",
    answer: "최소 6개월 계약이며, 이후 월 단위로 연장 가능합니다. 안정적인 사업 주소 확보를 위한 최소 기간입니다.",
  },
  {
    question: "추가 비용이 있나요?",
    answer: "월 3.3만원 외에는 추가 비용이 없습니다. 모든 기본 서비스가 포함된 요금입니다.",
  },
  {
    question: "비상주 사무실과 정기 이용권의 차이는 무엇인가요?",
    answer: "비상주 사무실은 주소 제공만 받는 서비스이고, 정기 이용권은 실제 작업공간을 이용하는 서비스입니다. 비상주 사무실 이용자도 회의실을 무료로 이용할 수 있습니다.",
  },
  {
    question: "법인 설립도 가능한가요?",
    answer: "네, 법인 설립 시에도 본점 소재지로 사용 가능합니다. 다만 법인 설립 시 추가 서류가 필요할 수 있으니 사전에 문의해주세요.",
  },
  {
    question: "세무서 신고는 어떻게 하나요?",
    answer: "일반적인 사업자등록과 동일하게 관할 세무서에 신고하시면 됩니다. 필요한 서류는 전대차계약서 사본을 제공해드립니다.",
  },
];

export default function FaqPage() {
  // Create FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      ...generalFaqData.map((item) => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer,
        },
      })),
      ...nonResidentFaqData.map((item) => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer,
        },
      })),
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      {/* JSON-LD for FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center">자주 묻는 질문 (FAQ)</SectionTitle>

        {/* 일반 FAQ 섹션 */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
            <SectionTitle as="h2" level="section" align="center" className="mb-8">일반 이용 안내</SectionTitle>
            <div className="space-y-6">
              {generalFaqData.map((item, index) => (
                <Card key={index}>
                  <details className="group">
                    <summary className="flex justify-between cursor-pointer list-none text-text-primary hover:text-primary transition-colors w-full">
                      <div className="flex items-baseline mr-2">
                        <span className="font-semibold mr-2 flex-shrink-0">Q.</span>
                        <h3 className="text-lg font-semibold leading-relaxed">
                          {item.question}
                        </h3>
                      </div>
                      <span className="transition group-open:rotate-180 flex-shrink-0">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <p className="text-text-secondary mt-3 group-open:animate-fadeIn relative pl-6">
                      <span className="absolute left-0 font-semibold">A.</span>
                      {item.answer}
                    </p>
                  </details>
                </Card>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 비상주 사무실 FAQ 섹션 */}
        <ScrollAnimationWrapper>
          <section className="mb-16">
            <div className="text-center mb-8">
              <SectionTitle as="h2" level="section" align="center">비상주 사무실 FAQ</SectionTitle>
            </div>
            <div className="space-y-6">
              {nonResidentFaqData.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <details className="group">
                    <summary className="flex justify-between cursor-pointer list-none text-text-primary hover:text-primary transition-colors w-full">
                      <div className="flex items-baseline mr-2">
                        <span className="font-semibold mr-2 flex-shrink-0">Q.</span>
                        <h3 className="text-lg font-semibold leading-relaxed">
                          {item.question}
                        </h3>
                      </div>
                      <span className="transition group-open:rotate-180 flex-shrink-0">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <p className="text-text-secondary mt-3 group-open:animate-fadeIn relative pl-6">
                      <span className="absolute left-0 font-semibold">A.</span>
                      {item.answer}
                    </p>
                  </details>
                </Card>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 하단 안내 섹션 */}
        <ScrollAnimationWrapper>
          <section className="text-center">
            <div className="bg-background-section rounded-xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">더 궁금한 점이 있으시다면?</h3>
              <p className="text-text-secondary mb-6">언제든지 편하게 문의해주세요. 친절하게 답변드리겠습니다!</p>
              <FaqCta />
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Related Pages Section */}
        <ScrollAnimationWrapper>
          <RelatedPages currentPath="/faq" className="mb-12" />
        </ScrollAnimationWrapper>

        {/* 뒤로가기 버튼 */}
        <div className="mt-12 text-center">
          <BackButton />
        </div>
      </div>
    </main>
  );
}