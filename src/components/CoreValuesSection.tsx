import OptimizedImage from './OptimizedImage';
import Link from 'next/link';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

export default function CoreValuesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4"> {/* Removed bg-background-main */}
      {/* Use SectionTitle component */}
      <SectionTitle level="section" align="center"><span className="">오피스아트 핵심 가치</span></SectionTitle> {/* Use level prop */}
      {/* Added items-stretch to make cards same height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Card 1: Premium Chairs */}
        <Link href="/premium-chairs" aria-label="프리미엄 의자 자세히 보기" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-lg block">
          <Card className="overflow-hidden group h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-main rounded-lg">
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <OptimizedImage
                src="/images/values/premium-chair.jpg"
                alt="스틸케이스 Think 또는 휴먼스케일 Freedom 프리미엄 의자 - 오피스아트에서 제공하는 180만원대 고급 의자"
                fill
                className="group-hover:scale-105 transition-transform duration-300"
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="p-8 space-y-3">
              <SectionTitle as="h3" level="card"><span className="">프리미엄 의자</span></SectionTitle>
              <p className="text-text-secondary leading-relaxed"><span className="">180만원대 프리미엄 의자</span>를 기본 제공합니다</p>
            </div>
          </Card>
        </Link>
        {/* Card 2: Focus Environment */}
        {/* Add aria-label to the link */}
        <Link href="/focus-environment" aria-label="집중이 잘 되는 공간 자세히 보기" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-lg block">
           {/* Use Card component - Add h-full */}
           {/* Added flex flex-col for height alignment */}
           {/* Added hover shadow and focus ring */}
           <Card className="overflow-hidden group flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-main rounded-lg"> {/* Ensure rounded-lg for ring */}
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden"> {/* Add rounded top corners and overflow hidden */}
               {/* Use Next.js Image component */}
               <OptimizedImage
                 src="/images/values/focus-environment.jpg"
                 alt="집중이 잘 되는 작업 환경 - 업무와 창작 활동에 최적화된 공간"
                 fill
                 className="group-hover:scale-105 transition-transform duration-300"
                 sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
               />
            </div>
            {/* p-6 is now handled by Card component */}
            {/* Added flex-grow to make text content fill available space */}
            <div className="p-8 space-y-3">
              <SectionTitle as="h3" level="card"><span className="">집중이 잘 되는 넓은 지정석</span></SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary leading-relaxed">모든 요소가 <span className="">업무와 창작 활동</span>을 위해 설계되었습니다</p> {/* Use secondary text color */}
            </div>
          </Card>
        </Link>
        {/* Card 3: Creator Community */}
        {/* Add aria-label to the link */}
        <Link href="/creator-community" aria-label="크리에이터 커뮤니티 자세히 보기" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-lg block">
           {/* Use Card component - Add h-full */}
           {/* Added flex flex-col for height alignment */}
           {/* Added flex flex-col for height alignment */}
           {/* Added hover shadow and focus ring */}
           <Card className="overflow-hidden group flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background-main rounded-lg"> {/* Ensure rounded-lg for ring */}
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden"> {/* Add rounded top corners and overflow hidden */}
               {/* Use Next.js Image component */}
               <OptimizedImage
                 src="/images/values/creator-community.jpg"
                 alt="오피스아트 창작자 커뮤니티 - 630명의 다양한 분야 창작자들이 활동하는 협동조합 네트워크"
                 fill
                 className="group-hover:scale-105 transition-transform duration-300"
                 sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
               />
            </div>
            {/* p-6 is now handled by Card component */}
            {/* Added flex-grow to make text content fill available space */}
            {/* Added flex-grow to make text content fill available space */}
            <div className="p-8 space-y-3">
              <SectionTitle as="h3" level="card"><span className="">약 630명 창작자 네트워크</span></SectionTitle> {/* Use level prop */}
              <p className="text-text-secondary leading-relaxed">다양한 분야 <span className="">창작자</span>들이 활동하는 협동조합이 운영합니다</p> {/* Use secondary text color */}
            </div>
          </Card>
        </Link>
      </div>
    </section>
  );
}