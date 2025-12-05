import type { Metadata } from 'next';
import AIChatWidget from '@/components/AIChatWidget';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import LinkButton from '@/components/LinkButton';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import BackButton from '@/components/BackButton';
import { HiSparkles, HiClock, HiChatBubbleLeftRight } from 'react-icons/hi2';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

// WebApplication Schema for AI Chat
const aiChatSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': '오피스아트 AI 상담원',
    'description': '24시간 운영되는 AI 상담원이 오피스아트 이용, 가격, 시설에 대한 모든 질문에 실시간으로 답변해드립니다.',
    'url': `${siteUrl}/ai-chat`,
    'applicationCategory': 'CommunicationApplication',
    'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'KRW',
    },
    'featureList': [
        '24시간 실시간 상담',
        '오피스아트 정보 안내',
        '가격 및 이용 문의',
        '시설 정보 제공',
    ],
};

export const metadata: Metadata = {
    title: 'AI 상담원 | 오피스아트',
    description: '오피스아트 AI 상담원과 24시간 실시간 채팅 상담. 정기 이용권, 비상주 사무실, 시설 안내, 가격 문의 등 모든 질문에 즉시 답변해드립니다. 지금 바로 문의하세요!',
    keywords: ['오피스아트 상담', 'AI 상담원', '실시간 상담', '채팅 상담', '공유오피스 문의', '24시간 상담'],
    alternates: {
        canonical: `${siteUrl}/ai-chat`,
    },
    openGraph: {
        title: 'AI 상담원 | 오피스아트',
        description: '24시간 운영되는 AI 상담원이 모든 질문에 답변해드립니다.',
    },
};

export default function AIChatPage() {
    return (
        <main className="flex min-h-screen flex-col items-center py-20 px-4">
            {/* JSON-LD for WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aiChatSchema) }}
            />

            <div className="w-full max-w-5xl mx-auto">
                <SectionTitle as="h1" level="page" align="center">
                    AI 상담원과 대화하기
                </SectionTitle>

                {/* Introduction Section */}
                <ScrollAnimationWrapper>
                    <Card className="mb-16 text-center">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg text-text-primary mb-6">
                                오피스아트의 AI 상담원이 24시간 대기 중입니다.
                                <br />
                                이용 관련 궁금한 점을 자유롭게 물어보세요!
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                <div className="flex flex-col items-center">
                                    <div className="bg-primary/10 p-3 rounded-lg mb-3">
                                        <HiClock className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-text-primary mb-2">24시간 운영</h3>
                                    <p className="text-sm text-text-secondary">언제든지 상담 가능</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="bg-primary/10 p-3 rounded-lg mb-3">
                                        <HiSparkles className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-text-primary mb-2">즉시 답변</h3>
                                    <p className="text-sm text-text-secondary">질문에 바로 응답</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="bg-primary/10 p-3 rounded-lg mb-3">
                                        <HiChatBubbleLeftRight className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-text-primary mb-2">친절한 안내</h3>
                                    <p className="text-sm text-text-secondary">상세한 정보 제공</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </ScrollAnimationWrapper>

                {/* AI Chat Instructions */}
                <ScrollAnimationWrapper>
                    <Card className="mb-16">
                        <SectionTitle as="h2" level="section" align="center">
                            자주 묻는 질문 예시
                        </SectionTitle>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-background-section p-4 rounded-lg">
                                <h4 className="font-semibold text-text-primary mb-2">💰 가격 문의</h4>
                                <ul className="list-disc list-inside text-text-secondary space-y-1">
                                    <li>정기 이용권 가격이 얼마인가요?</li>
                                    <li>비상주 사무실 비용은 어떻게 되나요?</li>
                                    <li>장기 이용 할인이 있나요?</li>
                                </ul>
                            </div>

                            <div className="bg-background-section p-4 rounded-lg">
                                <h4 className="font-semibold text-text-primary mb-2">🏢 시설 문의</h4>
                                <ul className="list-disc list-inside text-text-secondary space-y-1">
                                    <li>어떤 시설을 이용할 수 있나요?</li>
                                    <li>회의실은 무료인가요?</li>
                                    <li>주차는 어떻게 하나요?</li>
                                </ul>
                            </div>

                            <div className="bg-background-section p-4 rounded-lg">
                                <h4 className="font-semibold text-text-primary mb-2">📋 이용 문의</h4>
                                <ul className="list-disc list-inside text-text-secondary space-y-1">
                                    <li>운영 시간은 어떻게 되나요?</li>
                                    <li>방문 상담 예약 가능한가요?</li>
                                    <li>계약 기간은 얼마나 되나요?</li>
                                </ul>
                            </div>

                            <div className="bg-background-section p-4 rounded-lg">
                                <h4 className="font-semibold text-text-primary mb-2">📍 위치 문의</h4>
                                <ul className="list-disc list-inside text-text-secondary space-y-1">
                                    <li>어떻게 찾아가나요?</li>
                                    <li>지하철역에서 얼마나 걸리나요?</li>
                                    <li>주변에 어떤 편의시설이 있나요?</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </ScrollAnimationWrapper>

                {/* CTA Section */}
                <ScrollAnimationWrapper>
                    <section className="mb-16 text-center">
                        <div className="bg-background-section rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                더 자세한 상담이 필요하신가요?
                            </h3>
                            <p className="text-text-secondary mb-6">
                                직접 상담을 원하시면 언제든지 연락주세요!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <LinkButton href="/contact" variant="primary" size="lg">
                                    상담 예약하기
                                </LinkButton>
                                <LinkButton href="/faq" variant="outline" size="lg">
                                    FAQ 보기
                                </LinkButton>
                            </div>
                        </div>
                    </section>
                </ScrollAnimationWrapper>

                {/* Note about AI chat widget */}
                <div className="text-center text-sm text-text-secondary mb-8">
                    <p className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
                        💡 <strong>팁:</strong> 우측 하단의 채팅 버튼을 클릭하면 AI 상담원과 대화를 시작할 수 있습니다.
                    </p>
                </div>

                <BackButton />
            </div>
        </main>
    );
}
