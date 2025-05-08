import HomeClientComponents from '@/components/HomeClientComponents'; // Import the client component wrapper
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

export default function GallerySection() {
  return (
    // Apply max-width only on md screens and up
    <section className="w-full md:max-w-5xl md:mx-auto py-20 bg-background-main">
      {/* Added px-4 back to title wrapper for consistent padding */}
      <div className="px-4 mb-8">
          <SectionTitle level="section" className="text-center">오피스아트 공간 둘러보기</SectionTitle> {/* Use level prop */}
      </div>
      {/* Slider itself doesn't need padding */}
      <HomeClientComponents />
    </section>
  );
}