import Image from 'next/image';
import SectionTitle from './SectionTitle';
import LinkButton from '@/components/LinkButton';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-gray-800 overflow-x-hidden">
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
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 px-4 py-12 sm:py-16 w-full max-w-4xl mx-auto">
        <SectionTitle as="h1" level="page" underline={false} className="animate-fade-in-up text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words px-4"> {/* Use level prop */}
          <span className="text-accent-yellow">창의력과 집중력이 피어나는 작업 공간</span> <span className="">오피스아트</span>
        </SectionTitle>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 animate-fade-in-up animation-delay-200 px-4"> {/* Added animation with delay */}
          <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl break-words">
            <span className="text-accent-yellow">합리적 가격</span>으로{' '}
            <span className="md:hidden"><br/></span>
            즐기는 <span className="text-accent-yellow">프리미엄 작업 환경</span>
          </span>
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 animate-fade-in-up animation-delay-600">
          <LinkButton 
            href="/pricing" 
            variant="secondary" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            가격보기
          </LinkButton>
          <LinkButton 
            href="/contact" 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            연락하기
          </LinkButton>
        </div>
      </div>
    </section>
  );
}