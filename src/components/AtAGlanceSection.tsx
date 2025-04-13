import { HiMapPin as MapPinIcon, HiCurrencyDollar as CurrencyDollarIcon, HiBuildingOffice2 as BuildingOffice2Icon, HiClock as ClockIcon } from 'react-icons/hi2';

export default function AtAGlanceSection() {
  return (
    <section className="w-full bg-light-gray py-20 px-4"> {/* Restore original color */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"> {/* Changed max-w-4xl to max-w-5xl */}
        <div className="flex flex-col items-center">
          <MapPinIcon className="h-10 w-10 mb-3 text-primary-blue" aria-hidden="true" /> {/* Restore original color */}
          <h4 className="text-lg font-bold mb-1">위치</h4>
          <p>영등포구청역 5분</p>
          <p className="text-sm text-gray-600">서울특별시 영등포구 양산로 96</p> {/* Restore original color */}
        </div>
        <div className="flex flex-col items-center">
           <CurrencyDollarIcon className="h-10 w-10 mb-3 text-primary-blue" aria-hidden="true" /> {/* Restore original color */}
          <h4 className="text-lg font-bold mb-1">가격</h4>
          <p>정가 25만원</p>
          <p className="text-sm text-gray-600">(모든 시설 무료 이용 포함)</p> {/* Restore original color */}
        </div>
        <div className="flex flex-col items-center">
           <BuildingOffice2Icon className="h-10 w-10 mb-3 text-primary-blue" aria-hidden="true" /> {/* Restore original color */}
          <h4 className="text-lg font-bold mb-1">시설</h4>
          <p>커피머신(JURA X9) 무료</p>
          <p className="text-sm text-gray-600">복합기(EPSON) 무료</p> {/* Restore original color */}
        </div>
        <div className="flex flex-col items-center">
           <ClockIcon className="h-10 w-10 mb-3 text-primary-blue" aria-hidden="true" /> {/* Restore original color */}
          <h4 className="text-lg font-bold mb-1">이용</h4>
          <p>24시간 자유 출입</p>
          <p className="text-sm text-gray-600">(지문 인식 시스템)</p> {/* Restore original color */}
        </div>
      </div>
    </section>
  );
}