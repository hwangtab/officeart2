// src/app/locations/page.tsx
import type { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: '지점 안내 | 오피스아트',
  description: '영등포구청점과 불광점, 가까운 오피스아트 지점을 선택하여 프리미엄 작업 환경을 경험하세요.',
};

export default function LocationsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <SectionTitle as="h1" level="page" align="center" className="text-text-primary text-display">
          오피스아트 지점 안내
        </SectionTitle>
        
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto text-lg">
          서울 두 지점에서 동일한 프리미엄 시설과 서비스를 제공합니다. 
          가까운 지점을 선택하여 최고의 작업 환경을 경험해보세요.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              href={`/locations/${location.id}`}
              className="h-full"
            />
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            어느 지점을 선택하든 동일한 서비스
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🪑</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">넓은 책상과 고급 의자</h4>
              <p className="text-sm text-text-secondary">듀얼 모니터로 편안한 작업 환경</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">합리적 가격</h4>
              <p className="text-sm text-text-secondary">정기권 25만원, 비상주사무실 3.3만원</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">교통 편의</h4>
              <p className="text-sm text-text-secondary">영등포구청역 5분, 불광역 2분</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}