import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle
export default function CoreValuesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4 bg-background-main"> {/* Revert to main background to avoid white-on-white */}
      {/* Use SectionTitle component */}
      <SectionTitle className="text-center">오피스아트 핵심 가치</SectionTitle>
      {/* Added items-stretch to make cards same height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Card 1: Premium Chairs */}
        {/* Add aria-label to the link */}
        <Link href="/premium-chairs" aria-label="프리미엄 의자 자세히 보기">
          {/* Use Card component - Add h-full, flex, flex-col */}
          {/* Added hover shadow and focus ring */}
          <Card className="overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl group h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-main rounded-lg"> {/* Ensure rounded-lg for ring */}
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden"> {/* Add rounded top corners and overflow hidden */}
               {/* Use Next.js Image component */}
               <Image
                 src="/images/values/premium-chair.jpg" // 실제 이미지 경로
                 alt="스틸케이스 또는 휴먼스케일 의자"
                 fill
                 style={{ objectFit: 'cover' }}
                 className="group-hover:scale-105 transition-transform duration-300"
                 sizes="(min-width: 768px) 33vw, 100vw" // Updated responsive sizes
               />
            </div>
            {/* p-6 is now handled by Card component - Add flex-grow */}
            <div className="flex-grow flex flex-col justify-center pt-4">
              <h3 className="text-xl font-bold mb-2">프리미엄 의자</h3>
              <p className="text-text-secondary">180만원대 프리미엄 의자를 기본 제공합니다</p> {/* Use secondary text color */}
            </div>
          </Card>
        </Link>
        {/* Card 2: Focus Environment */}
        {/* Add aria-label to the link */}
        <Link href="/focus-environment" aria-label="집중이 잘 되는 공간 자세히 보기">
           {/* Use Card component - Add h-full */}
           {/* Added flex flex-col for height alignment */}
           {/* Added hover shadow and focus ring */}
           <Card className="overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-main rounded-lg"> {/* Ensure rounded-lg for ring */}
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden"> {/* Add rounded top corners and overflow hidden */}
               {/* Use Next.js Image component */}
               <Image
                 src="/images/values/focus-environment.jpg" // 실제 이미지 경로
                 alt="집중이 잘 되는 작업 환경"
                 fill
                 style={{ objectFit: 'cover' }}
                 className="group-hover:scale-105 transition-transform duration-300"
                 sizes="(min-width: 768px) 33vw, 100vw" // Updated responsive sizes
               />
            </div>
            {/* p-6 is now handled by Card component */}
            {/* Added flex-grow to make text content fill available space */}
            <div className="flex-grow flex flex-col justify-center pt-4">
              <h3 className="text-xl font-bold mb-2">집중이 잘 되는 공간</h3>
              <p className="text-text-secondary">모든 요소가 집중을 위해 설계되었습니다</p> {/* Use secondary text color */}
            </div>
          </Card>
        </Link>
        {/* Card 3: Creator Community */}
        {/* Add aria-label to the link */}
        <Link href="/creator-community" aria-label="크리에이터 커뮤니티 자세히 보기">
           {/* Use Card component - Add h-full */}
           {/* Added flex flex-col for height alignment */}
           {/* Added flex flex-col for height alignment */}
           {/* Added hover shadow and focus ring */}
           <Card className="overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-main rounded-lg"> {/* Ensure rounded-lg for ring */}
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden"> {/* Add rounded top corners and overflow hidden */}
               {/* Use Next.js Image component */}
               <Image
                 src="/images/values/creator-community.jpg" // 실제 이미지 경로
                 alt="크리에이터 커뮤니티 활동"
                 fill
                 style={{ objectFit: 'cover' }}
                 className="group-hover:scale-105 transition-transform duration-300"
                 sizes="(min-width: 768px) 33vw, 100vw" // Updated responsive sizes
               />
            </div>
            {/* p-6 is now handled by Card component */}
            {/* Added flex-grow to make text content fill available space */}
            {/* Added flex-grow to make text content fill available space */}
            <div className="flex-grow flex flex-col justify-center pt-4">
              <h3 className="text-xl font-bold mb-2">웹툰/일러스트레이터가 함께합니다</h3>
              <p className="text-text-secondary">같은 분야 크리에이터와 함께하는 공간</p> {/* Use secondary text color */}
            </div>
          </Card>
        </Link>
      </div>
    </section>
  );
}