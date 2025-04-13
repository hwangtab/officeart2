import { HiMapPin as MapPinIcon, HiCurrencyDollar as CurrencyDollarIcon, HiBuildingOffice2 as BuildingOffice2Icon, HiClock as ClockIcon } from 'react-icons/hi2';

export default function AtAGlanceSection() {
  return (
    <section className="w-full bg-background-main py-20 px-4"> {/* Revert to main background color */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"> {/* Changed max-w-4xl to max-w-5xl */}
        <div className="flex flex-col items-center">
          <MapPinIcon className="h-10 w-10 mb-3 text-accent-blue" aria-hidden="true" /> {/* Use accent-blue */}
          <h4 className="text-lg font-bold mb-1 text-text-primary">위치</h4> {/* Ensure primary text color */}
          <p>영등포구청역 5분</p>
          <p className="text-sm text-text-secondary">서울특별시 영등포구 양산로 96</p> {/* Use secondary text color */}
        </div>
        <div className="flex flex-col items-center">
           <CurrencyDollarIcon className="h-10 w-10 mb-3 text-accent-blue" aria-hidden="true" /> {/* Use accent-blue */}
          <h4 className="text-lg font-bold mb-1 text-text-primary">가격</h4> {/* Ensure primary text color */}
          <p>정가 25만원</p>
          <p className="text-sm text-text-secondary">(모든 시설 무료 이용 포함)</p> {/* Use secondary text color */}
        </div>
        <div className="flex flex-col items-center">
           <BuildingOffice2Icon className="h-10 w-10 mb-3 text-accent-blue" aria-hidden="true" /> {/* Use accent-blue */}
          <h4 className="text-lg font-bold mb-1 text-text-primary">시설</h4> {/* Ensure primary text color */}
          <p>커피머신(JURA X9) 무료</p>
          <p className="text-sm text-text-secondary">복합기(EPSON) 무료</p> {/* Use secondary text color */}
        </div>
        <div className="flex flex-col items-center">
           <ClockIcon className="h-10 w-10 mb-3 text-accent-blue" aria-hidden="true" /> {/* Use accent-blue */}
          <h4 className="text-lg font-bold mb-1 text-text-primary">이용</h4> {/* Ensure primary text color */}
          <p>24시간 자유 출입</p>
          <p className="text-sm text-text-secondary">(지문 인식 시스템)</p> {/* Use secondary text color */}
        </div>
      </div>
    </section>
  );
}