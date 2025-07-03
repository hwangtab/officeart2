import OptimizedImage from './OptimizedImage';
import SectionTitle from './SectionTitle';
import LinkButton from '@/components/LinkButton';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-gray-800 overflow-x-hidden">
      {/* TODO: Replace with actual high-quality image (정영신 담당자) */}
      <div className="absolute inset-0">
        {/* Use Next.js Image component */}
        <OptimizedImage
          src="/images/hero/hero-background.jpg"
          alt="오피스아트 메인 훐 - 넓은 L자형 책상과 스틸케이스 프리미엄 의자가 놓인 밝고 쾌적한 내부 작업 공간, 창의력과 집중력이 피어나는 환경"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 px-4 py-12 sm:py-16 w-full max-w-4xl mx-auto">
        <SectionTitle as="h1" level="page" underline={false} className="animate-fade-in-up text-center px-4 text-2xl md:text-5xl lg:text-6xl leading-tight"> {/* Enhanced responsive font size */}
          <span className="hero-highlight-text block sm:inline">창의력과 집중력이 피어나는<br className="sm:hidden"/> 작업 공간</span>{' '}
          <span className="block sm:inline mt-2 sm:mt-0">오피스아트</span>
        </SectionTitle>
        <p className="text-base md:text-xl lg:text-2xl mb-6 animate-fade-in-up animation-delay-200 px-4 leading-relaxed"> {/* Enhanced responsive subtitle */}
          <span className="font-bold break-words">
            <span className="hero-highlight-text">합리적 가격</span>으로{' '}
            <span className="block sm:inline">즐기는 <span className="hero-highlight-text">프리미엄 작업 환경</span></span>
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