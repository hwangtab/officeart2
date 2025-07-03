import { HiMapPin as MapPinIcon, HiCurrencyDollar as CurrencyDollarIcon, HiBuildingOffice2 as BuildingOffice2Icon, HiClock as ClockIcon } from 'react-icons/hi2';
import SectionTitle from './SectionTitle';

export default function AtAGlanceSection() {
  return (
    <section className="w-full py-20 px-4"> {/* Removed bg-background-main */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"> {/* Changed max-w-4xl to max-w-5xl */}
        <div className="flex flex-col items-center">
          <MapPinIcon className="h-8 w-8 mb-3 text-accent-purple" aria-hidden="true" /> {/* Changed to purple for variety */}
          <SectionTitle as="h4" level="card" className="text-text-primary">위치</SectionTitle> {/* Use level prop */}
          <p><span className="">영등포구청역 5분</span></p>
          <p className="text-body-small text-text-secondary">서울특별시 영등포구 양산로 96</p> {/* Use secondary text color - using body-small token */}
        </div>
        <div className="flex flex-col items-center">
           <CurrencyDollarIcon className="h-8 w-8 mb-3 text-accent-green" aria-hidden="true" /> {/* Changed to green for price */}
          <SectionTitle as="h4" level="card" className="text-text-primary">가격</SectionTitle> {/* Use level prop */}
          <p><del>정가 45만원</del> <span className="text-primary font-semibold"><span className="">특가 25만원</span></span></p>
          <p className="text-body-small text-text-secondary">(<span className="">모든 시설 무료 이용</span> 포함)</p> {/* Use secondary text color - using body-small token */}
          <p className="text-caption text-error mt-1">(<span className="">한정 좌석 특가</span>, 조기 마감될 수 있음)</p> {/* Using caption token */}
        </div>
        <div className="flex flex-col items-center">
           <BuildingOffice2Icon className="h-8 w-8 mb-3 text-accent-warm" aria-hidden="true" /> {/* Changed to warm for facilities */}
          <SectionTitle as="h4" level="card" className="text-text-primary">시설</SectionTitle> {/* Use level prop */}
          <p><span className="">커피머신(JURA X9) 무료</span></p>
          <p className="text-body-small text-text-secondary"><span className="">복합기(EPSON) 무료</span></p> {/* Use secondary text color - using body-small token */}
        </div>
        <div className="flex flex-col items-center">
           <ClockIcon className="h-8 w-8 mb-3 text-accent-blue" aria-hidden="true" /> {/* Use accent-blue */}
          <SectionTitle as="h4" level="card" className="text-text-primary">이용</SectionTitle> {/* Use level prop */}
          <p><span className="">24시간 자유 출입</span></p>
          <p className="text-body-small text-text-secondary">(<span className="">지문 인식 시스템</span>)</p> {/* Use secondary text color - using body-small token */}
        </div>
      </div>
    </section>
  );
}