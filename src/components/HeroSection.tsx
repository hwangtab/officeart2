import OptimizedImage from './OptimizedImage';
import SectionTitle from './SectionTitle';
import LinkButton from '@/components/LinkButton';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center text-white bg-gray-800 overflow-x-hidden">
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
        <SectionTitle as="h1" level="page" underline={false} className="animate-fade-in-up text-center hero-dynamic-title text-balance"> {/* Dynamic scaling font size */}
          <span className="hero-highlight-text block sm:inline">월 25만원 특가로 누리는</span>{' '}
          <span className="block sm:inline mt-2 sm:mt-0">창작자 전용 프리미엄 오피스</span>
        </SectionTitle>
        <p className="mb-4 animate-fade-in-up animation-delay-200 hero-dynamic-subtitle text-text-on-primary/90 text-balance"> {/* Dynamic scaling subtitle */}
          <span className="block sm:inline">영등포구청역 5분 · 선착순 10석 한정</span>
          <span className="block sm:inline sm:ml-1">참가비 환급 지원 사업 진행 중</span>
        </p>
        <div className="animate-fade-in-up animation-delay-400 flex flex-wrap justify-center gap-3 text-sm text-white/90">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">180만원대 스틸케이스 의자</span>
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">160cm L형 집중석</span>
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">24시간 출입 &amp; 무제한 커피</span>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 animate-fade-in-up animation-delay-600">
          <LinkButton 
            href="https://open.kakao.com/me/offceart" 
            variant="kakao" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            카카오톡으로 바로 상담
          </LinkButton>
          <LinkButton 
            href="/pricing" 
            variant="outlineWhite" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            가격 &amp; 혜택 살펴보기
          </LinkButton>
        </div>
        <p className="mt-6 text-sm text-white/80 animate-fade-in-up animation-delay-800 text-balance">
          신청 후 24시간 이내 상담 연락 · 사업자등록 및 세무 서류 지원
        </p>
      </div>
    </section>
  );
}
