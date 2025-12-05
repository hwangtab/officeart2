// src/app/services/non-resident/page.tsx
import type { Metadata } from 'next';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import SectionTitle from '@/components/SectionTitle';
import LinkButton from '@/components/LinkButton';
import Card from '@/components/Card';
import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import {
  HiHome,
  HiEnvelope,
  HiClock,
  HiCurrencyDollar,
  HiCheckCircle
} from 'react-icons/hi2';
import RelatedPages from '@/components/RelatedPages';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

// Service Schema for 비상주 사무실
const nonResidentSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': '비상주 사무실 서비스',
  'description': '월 3.3만원으로 사업자등록이 가능한 비상주 사무실. 우편물 수령, 회의실 이용 포함',
  'provider': {
    '@type': 'LocalBusiness',
    'name': '오피스아트',
    'url': siteUrl,
  },
  'areaServed': {
    '@type': 'City',
    'name': '서울',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': '영등포구',
      'addressRegion': '서울',
      'addressCountry': 'KR',
    },
  },
  'offers': {
    '@type': 'Offer',
    'price': '33000',
    'priceCurrency': 'KRW',
    'availability': 'https://schema.org/InStock',
    'url': `${siteUrl}/services/non-resident`,
    'priceValidUntil': '2025-12-31',
  },
};

export const metadata: Metadata = {
  title: '비상주 사무실 서비스 | 오피스아트',
  description: '월 3.3만원으로 사업자등록 가능! 홈오피스 창업자와 프리랜서를 위한 완벽한 솔루션. 우편물 수령, 회의실 무료 이용 포함. 영등포구청역 5분 거리. 지금 상담하세요 →',
  keywords: ['비상주 사무실', '사업자등록', '창업', '홈오피스', '프리랜서', '가상오피스', '주소제공'],
  alternates: {
    canonical: `${siteUrl}/services/non-resident`,
  },
};

export default function NonResidentOfficePage() {
  return (
    <main>
      {/* JSON-LD for Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nonResidentSchema) }}
      />
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url("/images/hero/party.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="hero-highlight-text">비상주 사무실</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            월 <span className="hero-highlight-text">3.3만원</span>으로 사업자등록하세요
          </p>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            홈오피스 창업자와 프리랜서를 위한 완벽한 솔루션.
            정식 사업장 주소를 제공하여 안전하고 신뢰할 수 있는 사업 시작을 도와드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Add urgency badge */}
            <div className="relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                💰 강남 대비 1/3 가격
              </span>
              <LinkButton
                href="/contact?service=non-resident"
                variant="primary"
                size="xl"
                className="shadow-primary-lg hover:shadow-2xl"
              >
                상담 신청하기
              </LinkButton>
            </div>
            <LinkButton
              href="#pricing"
              variant="outlineWhite"
              size="xl"
            >
              가격 확인하기
            </LinkButton>
          </div>
        </div>
      </section>

      {/* 추천 대상 */}
      <ScrollAnimationWrapper>
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <SectionTitle level="section" align="center">
              이런 분들께 추천합니다
            </SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: '홈오피스 창업자', desc: '집에서 사업을 시작하는 분', icon: '🏠' },
                { title: '프리랜서', desc: '사업자등록이 필요한 개인사업자', icon: '💼' },
                { title: '법인 주소 필요자', desc: '정식 사업장 주소가 필요한 스타트업', icon: '🏢' },
                { title: '비용 절약 중시자', desc: '초기 비용을 절약하고 싶은 창업자', icon: '💰' }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* 서비스 혜택 */}
      <ScrollAnimationWrapper>
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <SectionTitle level="section" align="center">
              서비스 혜택
            </SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: HiHome,
                  title: '사업자등록용 주소 제공',
                  description: '정식 사업장 주소로 활용 가능하며, 국세청 사업자등록에 문제없이 사용할 수 있습니다.'
                },
                {
                  icon: HiEnvelope,
                  title: '우편물 수령 및 보관',
                  description: '소중한 우편물을 안전하게 수령하고 보관해드립니다. 방문 시 언제든지 수령 가능합니다.'
                },
                {
                  icon: HiClock,
                  title: '최소 계약 기간 6개월',
                  description: '안정적인 사업 주소 확보를 위한 최소 계약 기간입니다. 이후 월 단위 연장 가능합니다.'
                },
                {
                  icon: HiCurrencyDollar,
                  title: '회의실 무료 이용',
                  description: '필요시 회의 공간을 무료로 이용할 수 있습니다. 고객 미팅이나 상담에 활용하세요.'
                },
                {
                  icon: HiCheckCircle,
                  title: '영등포구청역 접근성',
                  description: '2·5호선 환승역에서 도보 5분. 교통이 편리한 영등포 프리미엄 오피스입니다.'
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">{benefit.title}</h3>
                    <p className="text-text-secondary text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* 가격 비교 */}
      <ScrollAnimationWrapper>
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle level="section" align="center">
              합리적인 비용
            </SectionTitle>

            <Card className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-text-primary mb-4">
                  월 <span className="text-primary">3.3만원</span>의 합리적 비용
                </h3>
                <p className="text-text-secondary">
                  동일한 서비스를 강남이나 여의도에서 이용하면 월 10만원 이상!<br />
                  오피스아트에서는 3분의 1 가격으로 이용 가능합니다.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 border border-border-light rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-2">강남/여의도</h4>
                  <p className="text-2xl font-bold text-text-secondary mb-2">10만원+</p>
                  <p className="text-sm text-text-secondary">월</p>
                </div>
                <div className="p-6 border-2 border-primary rounded-lg bg-primary/5 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      추천
                    </span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">오피스아트</h4>
                  <p className="text-3xl font-bold text-primary mb-2">3.3만원</p>
                  <p className="text-sm text-text-secondary">월</p>
                </div>
                <div className="p-6 border border-border-light rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-2">기타 지역</h4>
                  <p className="text-2xl font-bold text-text-secondary mb-2">5-8만원</p>
                  <p className="text-sm text-text-secondary">월</p>
                </div>
              </div>

              <div className="mt-8 bg-background-main p-6 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-4">포함 서비스</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    '사업자등록용 주소 제공',
                    '우편물 수령 및 보관 서비스',
                    '회의실 할인 이용',
                    '24시간 고객 지원'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center">
                      <HiCheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span className="text-text-secondary text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* FAQ 섹션 */}
      <ScrollAnimationWrapper>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle level="section" align="center">
              자주 묻는 질문
            </SectionTitle>

            <div className="space-y-6">
              {[
                {
                  q: '사업자등록이 정말 가능한가요?',
                  a: '네, 정식 사업장 주소로 사업자등록이 가능합니다. 국세청에서 인정하는 정식 주소이므로 안심하고 이용하실 수 있습니다.'
                },
                {
                  q: '우편물은 어떻게 받나요?',
                  a: '우편물이 도착하면 안전하게 보관해드립니다. 방문하시면 언제든지 수령하실 수 있습니다.'
                },
                {
                  q: '계약 기간이 있나요?',
                  a: '최소 6개월 계약이며, 이후 월 단위로 연장 가능합니다. 안정적인 사업 주소 확보를 위한 최소 기간입니다.'
                },
                {
                  q: '추가 비용이 있나요?',
                  a: '월 3.3만원 외에는 추가 비용이 없습니다. 모든 기본 서비스가 포함된 요금입니다.'
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <h3 className="font-semibold text-text-primary mb-3 flex items-start">
                    <span className="text-primary mr-2">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-text-secondary ml-6">
                    <span className="text-primary mr-2">A.</span>
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* CTA 섹션 */}
      <ScrollAnimationWrapper>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-text-secondary mb-8 text-lg">
              월 3.3만원으로 안전하고 신뢰할 수 있는 사업 주소를 확보하세요.<br />
              홈오피스 창업의 첫 걸음을 오피스아트와 함께하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton
                href="/contact?service=non-resident"
                variant="primary"
                size="xl"
                className="shadow-card-lg hover:shadow-card-lg-hover animate-pulse-subtle"
              >
                상담 신청하기
              </LinkButton>
              <LinkButton
                href="/pricing"
                variant="outline"
                size="xl"
              >
                전체 요금제 보기
              </LinkButton>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Related Pages Section */}
      <ScrollAnimationWrapper>
        <div className="max-w-5xl mx-auto px-4">
          <RelatedPages currentPath="/services/non-resident" className="mb-16" />
        </div>
      </ScrollAnimationWrapper>
    </main>
  );
}