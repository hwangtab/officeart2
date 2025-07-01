// src/app/services/non-resident/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
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
  HiCheckCircle,
  HiArrowRight
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: '비상주사무실 서비스 | 오피스아트',
  description: '월 3.3만원으로 사업자등록이 가능한 비상주사무실 서비스. 홈오피스 창업자와 프리랜서를 위한 완벽한 솔루션을 제공합니다.',
  keywords: ['비상주사무실', '사업자등록', '창업', '홈오피스', '프리랜서', '가상오피스', '주소제공'],
};

export default function NonResidentOfficePage() {
  return (
    <main>
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
            비상주사무실
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            월 <span className="text-accent-yellow font-bold">3.3만원</span>으로 사업자등록하세요
          </p>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            홈오피스 창업자와 프리랜서를 위한 완벽한 솔루션. 
            정식 사업장 주소를 제공하여 안전하고 신뢰할 수 있는 사업 시작을 도와드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton 
              href="/contact"
              variant="primary"
              size="lg"
            >
              상담 신청하기
            </LinkButton>
            <LinkButton 
              href="#pricing"
              variant="outlineWhite"
              size="lg"
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
                  title: '두 지점 선택 가능',
                  description: '영등포구청점 또는 불광점 중 원하는 지점을 선택할 수 있습니다.'
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
                  동일한 서비스를 강남이나 여의도에서 이용하면 월 10만원 이상!<br/>
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

      {/* 지점 선택 */}
      <ScrollAnimationWrapper>
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <SectionTitle level="section" align="center">
              지점 선택
            </SectionTitle>
            
            <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
              두 지점 중 원하는 곳을 선택하세요. 서비스 내용과 가격은 동일합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  href={`/locations/${location.id}`}
                  className="h-full"
                />
              ))}
            </div>
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
                  q: '두 지점 중 어디를 선택해야 하나요?',
                  a: '접근성이 좋은 곳을 선택하시면 됩니다. 서비스 내용과 가격은 동일하며, 우편물 수령 등을 고려하여 편리한 지점을 선택하세요.'
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
              월 3.3만원으로 안전하고 신뢰할 수 있는 사업 주소를 확보하세요.<br/>
              홈오피스 창업의 첫 걸음을 오피스아트와 함께하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton 
                href="/contact?service=non-resident"
                variant="primary"
                size="lg"
              >
                상담 신청하기
              </LinkButton>
              <LinkButton 
                href="/locations"
                variant="outline"
                size="lg"
              >
                지점 둘러보기
              </LinkButton>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </main>
  );
}