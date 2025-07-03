// src/components/ServicesSection.tsx
import SectionTitle from './SectionTitle';
import Card from './Card';
import Link from 'next/link';
import { HiComputerDesktop as HiDesktopComputer, HiBuildingOffice, HiSparkles } from 'react-icons/hi2';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: 'workspace' | 'business' | 'premium';
  href: string;
  isNew?: boolean;
}

function ServiceCard({ title, description, icon, href, isNew = false }: ServiceCardProps) {
  const IconComponent = {
    workspace: HiDesktopComputer,
    business: HiBuildingOffice,
    premium: HiSparkles
  }[icon];

  return (
    <Link href={href} className="block">
      <Card className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        {isNew && (
          <span className="absolute -top-2 -right-2 bg-accent-yellow text-text-primary text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <IconComponent className="w-8 h-8 text-primary" />
          </div>
          <SectionTitle as="h3" level="card" className="text-text-primary">{title}</SectionTitle>
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </div>
      </Card>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle level="section" align="center">
          다양한 서비스
        </SectionTitle>
        
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          프리랜서와 스타트업을 위한 맞춤형 서비스를 제공합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="정기 이용권"
            description="월 25만원으로 프리미엄 작업환경을 무제한 이용하세요. 추가 비용이 없습니다."
            icon="workspace"
            href="/pricing"
          />
          <ServiceCard 
            title="비상주사무실"
            description="월 3.3만원으로 사업자등록이 가능합니다. 홈오피스 창업자에게 완벽한 솔루션입니다."
            icon="business"
            href="/services/non-resident"
            isNew={true}
          />
          <ServiceCard 
            title="프리미엄 시설"
            description="최고급 의자, 넓은 L형 책상, 무제한 커피로 최고의 작업 환경을 제공합니다."
            icon="premium"
            href="/facilities-services"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-primary/5 rounded-lg px-6 py-4">
            <span className="text-2xl mr-3">💡</span>
            <div className="text-left">
              <p className="text-text-primary font-semibold">영등포구청점 • 불광점</p>
              <p className="text-text-secondary text-sm">두 지점 모두 동일한 서비스를 제공합니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}