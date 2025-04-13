import Image from 'next/image';
import LinkButton from '@/components/LinkButton';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white bg-gray-800">
      {/* TODO: Replace with actual high-quality image (정영신 담당자) */}
      <div className="absolute inset-0">
        {/* Use Next.js Image component */}
        <Image
          src="/images/hero/hero-background.jpg" // 실제 이미지 경로
          alt="오피스아트 내부 전경 (L형 책상과 프리미엄 의자)"
          fill // 부모 요소 채우기
          style={{ objectFit: 'cover' }} // CSS object-fit 적용
          priority // 중요 이미지 우선 로딩
          sizes="100vw" // Add sizes attribute for better optimization hint
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          작업실의 본질은 &apos;의자&apos;입니다
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          월 25만원으로 프리미엄 작업환경에서 몰입하세요
        </p>
        {/* Use LinkButton component directly */}
        <LinkButton href="/contact" variant="primary" size="lg">
          방문 상담 예약하기
        </LinkButton>
      </div>
    </section>
  );
}