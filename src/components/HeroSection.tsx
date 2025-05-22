import Image from 'next/image';
import SectionTitle from './SectionTitle';
import LinkButton from '@/components/LinkButton';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[550px] flex items-center justify-center text-center text-white bg-gray-800 overflow-x-hidden">
      {/* TODO: Replace with actual high-quality image (정영신 담당자) */}
      <div className="absolute inset-0">
        {/* Use Next.js Image component */}
        <Image
          src="/images/hero/hero-background.jpg" // 실제 이미지 경로
          alt="넓은 L자형 책상과 스틸케이스 프리미엄 의자가 놓인 오피스아트의 밝고 쾌적한 내부 작업 공간" // Improved alt text
          fill // 부모 요소 채우기
          style={{ objectFit: 'cover' }} // CSS object-fit 적용
          priority // 중요 이미지 우선 로딩
          sizes="100vw" // Add sizes attribute for better optimization hint
        />
        <div className="absolute inset-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0)_100%)]"></div> {/* Lighter Black Gradient Overlay */}
      </div>
      <div className="relative z-10 px-4 py-8 w-full max-w-4xl mx-auto">
        <SectionTitle as="h1" level="page" underline={false} className="animate-fade-in-up text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl break-words px-4"> {/* Use level prop */}
          <span className="text-accent-yellow">창작자가 창작자를 위해 만든 작업실</span>, <span className="">오피스아트</span>
        </SectionTitle>
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl mb-6 animate-fade-in-up animation-delay-200 px-4"> {/* Added animation with delay */}
          <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl break-words">
            <span className="text-accent-yellow">합리적 가격</span>으로{' '}
            <span className="md:hidden"><br/></span>
            즐기는 <span className="text-accent-yellow">프리미엄 작업 환경</span>
          </span>
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 animate-fade-in-up animation-delay-600">
          <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
            <a
              href="/pricing"
              className="w-full sm:w-auto min-w-[100px] py-3 px-8 text-lg font-bold rounded-lg transition duration-300 bg-amber-400 hover:bg-amber-500 text-gray-900 flex items-center justify-center"
            >
              가격보기
            </a>
          </div>
          <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
            <a
              href="/contact"
              className="w-full sm:w-auto min-w-[100px] py-3 px-8 text-lg font-bold rounded-lg transition duration-300 bg-primary hover:bg-orange-600 text-white flex items-center justify-center"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}