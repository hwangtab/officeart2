// Removed unused Link import
import type { Metadata } from 'next'; // Import Metadata type
import Image from 'next/image';
// Import icons
import { HiOutlineSparkles as CoffeeIcon, HiOutlinePrinter as PrinterIcon, HiOutlineWifi as WifiIcon, HiOutlineBuildingStorefront as FacilitiesIcon } from 'react-icons/hi2'; // Corrected BuildingStorefront, Removed ArrowLeftIcon
import BackButton from '@/components/BackButton'; // Import BackButton
import Card from '@/components/Card'; // Import Card component
// Add metadata for the facilities & services page
export const metadata: Metadata = {
  title: "시설 및 서비스 | 오피스아트",
  description: "오피스아트에서 제공하는 프리미엄 커피머신(JURA X9), 고성능 복합기(EPSON), 초고속 네트워크, 보안 시스템 등 다양한 시설과 서비스를 안내합니다.",
};

export default function FacilitiesServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16 px-4 bg-light-gray">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">시설 및 서비스 안내</h1>

        {/* 1. Coffee Machine (4.5 커피머신) */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-12 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
          <div className="md:w-1/3 w-full relative h-64 rounded-lg overflow-hidden">
            {/* TODO: Add JURA X9 image (JURA 공식 or 자체 촬영) */}
            <Image
              src="/images/gallery/jura-x9.jpg" // 실제 이미지 경로 적용 (커피머신)
              alt="JURA X9 프리미엄 커피머신"
              fill // layout="fill" 대체
              style={{ objectFit: 'contain' }} // objectFit 스타일 적용
            />
          </div>
          <div className="md:w-2/3 w-full">
            <h2 className="text-3xl font-bold mb-4 flex items-center"><CoffeeIcon className="h-7 w-7 mr-2 text-primary-blue" /> 프리미엄 커피 무제한</h2>
            <h3 className="text-xl font-semibold mb-2">JURA X9 (스위스 프리미엄 브랜드)</h3>
            <p className="text-dark-gray mb-4 text-sm">
              원터치 자동 추출 방식으로 아메리카노, 에스프레소, 라떼, 카푸치노 등 12가지 이상의 다양한 스페셜티 커피 메뉴를 24시간 무료로 즐기실 수 있습니다. (테이크아웃 컵 무료 제공)
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-5"> {/* Indent list */}
                <li>최고급 원두 사용 및 자동 분쇄 시스템</li>
                <li>원터치 자동 추출 및 세척</li>
                <li>다양한 메뉴 선택 가능</li>
                <li>24시간 이용 가능</li>
            </ul>
          </div>
        </section>

        {/* 2. Printer/Copier (4.5 복합기/출력 서비스) */}
        <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-12 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
           <div className="md:w-1/3 w-full relative h-64 rounded-lg overflow-hidden">
            {/* TODO: Add EPSON WF-C8690 image (제조사 공식 or 자체 촬영) */}
             <Image
              src="/images/gallery/epson-wf-c8690.jpg" // 실제 이미지 경로 적용 (복합기)
              alt="EPSON WF-C8690 A3 컬러 복합기"
              fill // layout="fill" 대체
              style={{ objectFit: 'contain' }} // objectFit 스타일 적용
            />
          </div>
          <div className="md:w-2/3 w-full">
            <h2 className="text-3xl font-bold mb-4 flex items-center"><PrinterIcon className="h-7 w-7 mr-2 text-primary-blue" /> A3 컬러 복합기 무료 이용</h2>
            <h3 className="text-xl font-semibold mb-2">EPSON WF-C8690</h3>
             <p className="text-dark-gray mb-4 text-sm">
              고해상도 A3 컬러/흑백 출력, 복사, 스캔이 가능한 전문가용 복합기를 24시간 무료로 이용하세요. A4, A3 용지가 기본 제공되며, 고급 용지(코팅지, 두꺼운 종이 등)는 별도 요청 시 이용 가능합니다.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-5"> {/* Indent list */}
                <li>A3 컬러/흑백 출력 (분당 24매)</li>
                <li>자동 양면 인쇄/스캔 기능</li>
                <li>고해상도: 4800 x 1200 dpi</li>
                <li>A4/A3 용지 무료 제공</li>
                <li>24시간 이용 가능</li>
            </ul>
          </div>
        </section>

        {/* 3. Network/Internet (4.5 네트워크/인터넷) */}
        <section className="mb-16 bg-white p-6 rounded-lg shadow"> {/* Changed p-8 to p-6 */}
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center"><WifiIcon className="h-7 w-7 mr-2 text-primary-blue" /> 초고속 네트워크 환경</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Speed */}
            <div className="border-r-0 md:border-r border-gray-200 pr-0 md:pr-4">
              <h3 className="text-xl font-semibold mb-2">1Gbps 기가 인터넷</h3>
              <p className="text-dark-gray text-sm">KT 기가 오피스 전용선으로 빠르고 안정적인 유선 인터넷 환경을 제공합니다. (각 좌석별 기가비트 이더넷 포트)</p>
            </div>
            {/* WiFi */}
             <div className="border-r-0 md:border-r border-gray-200 pr-0 md:pr-4">
              <h3 className="text-xl font-semibold mb-2">안정적인 Wi-Fi</h3>
              <p className="text-dark-gray text-sm">802.11ac 듀얼밴드(5GHz/2.4GHz) Wi-Fi를 WPA3 암호화 및 개별 네트워크 격리로 안전하게 이용할 수 있습니다.</p>
            </div>
            {/* Stability */}
             <div>
              <h3 className="text-xl font-semibold mb-2">백업 회선 구비</h3>
              <p className="text-dark-gray text-sm">LG U+ 백업 회선을 통해 예기치 못한 인터넷 장애 발생 시에도 끊김 없는 업무 환경을 보장합니다.</p>
            </div>
          </div>
        </section>

        {/* 4. Additional Facilities (4.5 추가 시설) */}
        <section className="mb-16">
           <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center"><FacilitiesIcon className="h-7 w-7 mr-2 text-primary-blue" /> 추가 편의 시설</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Rest Area */}
               {/* Use Card component */}
               <Card>
                   <h3 className="text-xl font-semibold mb-3">회의 공간</h3>
                   <div className="w-full relative h-48 bg-gray-200 rounded mb-3 overflow-hidden group">
                       {/* TODO: Add Rest Area image */}
                       <Image src="/images/gallery/gallery-7.jpg" alt="회의 공간 사진" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform"/>
                   </div>
                   <p className="text-dark-gray text-sm">
                        고해상도 프로젝터와 화이트보드가 설치되어 있어 회의, 레슨, 강연 등 다양한 용도로 무료 이용이 가능합니다.
                    </p>
               </Card>
               {/* Rooftop */}
                {/* Use Card component */}
                <Card>
                   <h3 className="text-xl font-semibold mb-3">옥상 공간</h3>
                    <div className="w-full relative h-48 bg-gray-200 rounded mb-3 overflow-hidden group">
                        <Image src="/images/gallery/gallery-5.jpg" alt="옥상 공간 활용 계획" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform"/>
                   </div>
                   <p className="text-dark-gray text-sm">
                       건물 옥상(바로 위층)에 테이블, 의자, 파라솔 등이 설치되어 있어 휴식, 네트워킹, 야외 미팅 공간으로 활용할 수 있습니다.
                   </p>
               </Card>
           </div>
           {/* TODO: Add other 부가 서비스 정보 if any */}
        </section>


        {/* Back to Home Button */}
        <BackButton />
      </div>
    </main>
  );
}
