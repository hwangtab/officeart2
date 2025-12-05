import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import LinkButton from '@/components/LinkButton';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import BackButton from '@/components/BackButton';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

export const metadata: Metadata = {
    title: 'AI 상담 FAQ | 오피스아트',
    description: '오피스아트 AI 상담원이 자주 받는 질문과 답변 모음. 정기 이용권, 비상주 사무실, 시설 이용, 가격 정보 등을 한눈에 확인하세요. 더 궁금한 점은 AI 상담으로 문의하세요!',
    keywords: ['오피스아트 FAQ', 'AI 상담', '자주 묻는 질문', '공유오피스 정보', '비상주 사무실 안내'],
    alternates: {
        canonical: `${siteUrl}/ai-answers`,
    },
    openGraph: {
        title: 'AI 상담 FAQ | 오피스아트',
        description: 'AI 상담원이 자주 받는 질문과 답변을 확인하세요.',
    },
};

// Popular Q&A data
const popularQA = [
    {
        question: '오피스아트 정기 이용권은 어떤 혜택이 있나요?',
        answer: '월 25만원으로 프리미엄 스틸케이스 의자, 160cm L형 책상, 무제한 커피(JURA X9), A3 컬러 프린터 무료 이용, 24시간 접근 권한, 회의실 무료 예약을 제공합니다. 개인 서랍장도 제공되어 업무 물품을 안전하게 보관하실 수 있습니다.',
        slug: 'regular-membership',
    },
    {
        question: '비상주 사무실로 사업자등록이 가능한가요?',
        answer: '네, 가능합니다! 월 3.3만원으로 정식 사업장 주소를 제공하며, 영등포구청과 인접하여 빠른 사업자등록이 가능합니다. 우편물 수령 서비스와 회의실 무료 이용 혜택도 포함되어 있습니다.',
        slug: 'non-resident-registration',
    },
    {
        question: '주차는 어떻게 이용하나요?',
        answer: '건물 내 주차장을 이용하실 수 있습니다. 시간당 2,000원이며, 월 정기주차는 10만원입니다. 인근 영등포구청 공영주차장(시간당 1,200원)도 도보 2분 거리에 있어 편리하게 이용하실 수 있습니다.',
        slug: 'parking',
    },
    {
        question: '회의실은 어떻게 예약하나요?',
        answer: '정기 이용 회원님은 회의실을 무료로 이용하실 수 있습니다. 고해상도 프로젝터와 화이트보드가 설치되어 있으며, 사전 예약을 통해 이용 가능합니다. 예약은 관리자에게 문의해주시면 됩니다.',
        slug: 'meeting-room',
    },
    {
        question: '운영 시간은 어떻게 되나요?',
        answer: '정기 이용 회원님들은 24시간 연중무휴로 자유롭게 출입하실 수 있습니다. 관리 데스크 운영 시간은 평일 10:00-19:00이며, 이 시간 외에도 자유롭게 이용하실 수 있습니다.',
        slug: 'operating-hours',
    },
    {
        question: 'AI 상담원은 어떻게 이용하나요?',
        answer: '웹사이트 우측 하단의 채팅 아이콘을 클릭하시면 AI 상담원과 대화를 시작하실 수 있습니다. 24시간 운영되며, 오피스아트 이용, 가격, 시설에 대한 모든 질문에 실시간으로 답변해드립니다.',
        slug: 'ai-chat-usage',
    },
    {
        question: '방문 상담은 어떻게 예약하나요?',
        answer: '카카오톡 채널, 전화(0507-1335-3128), 이메일(contact@kosmart.org)로 예약하실 수 있습니다. 영등포구청역 6번 출구에서 도보 5분 거리에 위치하고 있으며, 평일 10:00-19:00에 방문 상담이 가능합니다.',
        slug: 'visit-consultation',
    },
    {
        question: '계약 기간은 얼마나 되나요?',
        answer: '정기 이용권은 1개월 단위로 신청 가능하며, 비상주 사무실은 최소 6개월 계약입니다. 비상주 사무실은 안정적인 사업 주소 확보를 위한 최소 계약 기간이며, 이후 월 단위로 연장하실 수 있습니다.',
        slug: 'contract-period',
    },
];

export default function AIAnswersPage() {
    return (
        <main className="flex min-h-screen flex-col items-center py-20 px-4">
            <div className="w-full max-w-4xl mx-auto">
                <SectionTitle as="h1" level="page" align="center">
                    AI 상담 자주 묻는 질문
                </SectionTitle>

                <ScrollAnimationWrapper>
                    <div className="text-center mb-12">
                        <p className="text-lg text-text-secondary">
                            오피스아트 AI 상담원이 자주 받는 질문과 답변을 정리했습니다.
                            <br />
                            더 궁금한 점이 있으시면 AI 상담원과 직접 대화해보세요!
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                {/* Q&A List */}
                <div className="space-y-6 mb-16">
                    {popularQA.map((qa, index) => (
                        <ScrollAnimationWrapper key={qa.slug}>
                            <Card>
                                <article>
                                    <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-start">
                                        <span className="text-primary mr-3 flex-shrink-0">Q.</span>
                                        <span>{qa.question}</span>
                                    </h2>
                                    <div className="pl-8">
                                        <p className="text-text-secondary leading-relaxed">
                                            <span className="text-primary font-semibold mr-2">A.</span>
                                            {qa.answer}
                                        </p>
                                    </div>
                                </article>
                            </Card>
                        </ScrollAnimationWrapper>
                    ))}
                </div>

                {/* CTA Section */}
                <ScrollAnimationWrapper>
                    <section className="text-center mb-16">
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                더 궁금한 점이 있으신가요?
                            </h3>
                            <p className="text-text-secondary mb-6">
                                AI 상담원과 실시간으로 대화하거나, 직접 상담을 예약하세요!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <LinkButton href="/ai-chat" variant="primary" size="lg">
                                    AI 상담 시작하기
                                </LinkButton>
                                <LinkButton href="/contact" variant="outline" size="lg">
                                    상담 예약하기
                                </LinkButton>
                            </div>
                        </div>
                    </section>
                </ScrollAnimationWrapper>

                {/* Related Links */}
                <ScrollAnimationWrapper>
                    <Card className="mb-16">
                        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
                            관련 페이지
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                            <LinkButton href="/faq" variant="outline" size="base">
                                전체 FAQ 보기
                            </LinkButton>
                            <LinkButton href="/pricing" variant="outline" size="base">
                                가격 안내
                            </LinkButton>
                            <LinkButton href="/facilities-services" variant="outline" size="base">
                                시설 안내
                            </LinkButton>
                        </div>
                    </Card>
                </ScrollAnimationWrapper>

                <BackButton />
            </div>
        </main>
    );
}
