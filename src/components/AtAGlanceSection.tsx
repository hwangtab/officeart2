import { HiMapPin as MapPinIcon, HiCurrencyDollar as CurrencyDollarIcon, HiBuildingOffice2 as BuildingOffice2Icon, HiClock as ClockIcon } from 'react-icons/hi2';
import SectionTitle from './SectionTitle';

export default function AtAGlanceSection() {
  return (
    <section className="w-full py-20 px-4"> {/* Removed bg-background-main */}
      <div className="max-w-5xl mx-auto"> {/* Changed max-w-4xl to max-w-5xl */}
        <div className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-body-small font-semibold text-primary">
            이용 만족도 4.8 / 5.0
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-yellow/10 px-4 py-2 text-body-small font-semibold text-accent-yellow">
            누적 630+명 창작자 커뮤니티 운영
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <MapPinIcon className="h-8 w-8 mb-3 text-accent-purple" aria-hidden="true" /> {/* Changed to purple for variety */}
          <SectionTitle as="h4" level="card" className="text-text-primary">위치</SectionTitle> {/* Use level prop */}
          <p className="text-body-base font-semibold text-text-primary">영등포구청역 5분</p>
          <p className="text-body-small text-text-secondary">서울특별시 영등포구 양산로 96</p> {/* Use secondary text color - using body-small token */}
        </div>
        <div className="flex flex-col items-center">
           <CurrencyDollarIcon className="h-8 w-8 mb-3 text-accent-green" aria-hidden="true" /> {/* Changed to green for price */}
          <SectionTitle as="h4" level="card" className="text-text-primary">가격</SectionTitle> {/* Use level prop */}
          <p className="text-body-base text-text-primary">
            <del className="mr-2 text-body-small text-text-secondary">정가 45만원</del>
            <span className="font-semibold text-primary">특가 25만원</span>
          </p>
          <p className="text-body-small text-text-secondary">(모든 시설 무료 이용 포함)</p> {/* Use secondary text color - using body-small token */}
          <p className="text-caption text-error mt-1">(한정 좌석 특가, 조기 마감될 수 있음)</p> {/* Using caption token */}
        </div>
        <div className="flex flex-col items-center">
           <BuildingOffice2Icon className="h-8 w-8 mb-3 text-accent-yellow" aria-hidden="true" /> {/* Use existing accent token */}
          <SectionTitle as="h4" level="card" className="text-text-primary">시설</SectionTitle> {/* Use level prop */}
          <p className="text-body-base font-semibold text-text-primary">커피머신(JURA X9) 무료</p>
          <p className="text-body-small text-text-secondary">복합기(EPSON) 무료</p> {/* Use secondary text color - using body-small token */}
        </div>
        <div className="flex flex-col items-center">
           <ClockIcon className="h-8 w-8 mb-3 text-accent-blue" aria-hidden="true" /> {/* Use accent-blue */}
          <SectionTitle as="h4" level="card" className="text-text-primary">이용</SectionTitle> {/* Use level prop */}
          <p className="text-body-base font-semibold text-text-primary">24시간 자유 출입</p>
          <p className="text-body-small text-text-secondary">(지문 인식 시스템)</p> {/* Use secondary text color - using body-small token */}
        </div>
        </div>
      </div>
    </section>
  );
}
