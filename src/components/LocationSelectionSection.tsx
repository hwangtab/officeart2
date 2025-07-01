// src/components/LocationSelectionSection.tsx
import { locations } from '@/data/locations';
import LocationCard from './LocationCard';
import SectionTitle from './SectionTitle';

export default function LocationSelectionSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle level="section" align="center">
          가까운 오피스아트를 선택하세요
        </SectionTitle>
        
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          두 지점 모두 동일한 프리미엄 시설과 서비스를 제공합니다. 
          접근성이 좋은 지점을 선택하여 최고의 작업 환경을 경험해보세요.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              href={`/locations/${location.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}