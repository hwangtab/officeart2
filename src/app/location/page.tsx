import type { Metadata } from 'next';
import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import SectionTitle from '@/components/SectionTitle';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: '오시는 길 | 오피스아트',
  description: '오피스아트 각 지점의 위치 및 교통 정보를 확인하세요. 영등포구청점과 불광점의 상세한 오시는 길 안내.',
};

export default function LocationIndexPage() {
  return (
    <main className="pt-20">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle level="page" align="center">
            오시는 길
          </SectionTitle>
          
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto text-lg">
            각 지점의 상세한 위치 및 교통 정보를 확인하세요.
            지하철, 버스, 주차장 및 주변 편의시설 정보를 제공합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                href={`/location/${location.id}`}
                className="h-full"
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-text-secondary text-sm">
              각 지점 카드를 클릭하면 상세한 위치 및 교통 정보를 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <BackButton />
    </main>
  );
}
