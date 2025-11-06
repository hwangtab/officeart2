import HomeClientComponents from '@/components/HomeClientComponents'; // Import the client component wrapper
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

interface GallerySectionProps {
  images?: string[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    // Apply max-width only on md screens and up
    <section id="facilities" className="w-full md:max-w-5xl md:mx-auto py-20"> {/* Removed bg-background-main */}
      {/* Added px-4 back to title wrapper for consistent padding */}
      <div className="px-4 mb-8">
          <SectionTitle level="section" align="center">오피스아트 공간 둘러보기</SectionTitle> {/* Use level prop */}
      </div>
      {/* Slider itself doesn't need padding */}
      <HomeClientComponents images={images} />
    </section>
  );
}