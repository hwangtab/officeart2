import HomeClientComponents from '@/components/HomeClientComponents'; // Import the client component wrapper
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

export default function GallerySection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4 bg-background-main"> {/* Revert to main background color for consistency */}
      {/* Use SectionTitle component */}
      <SectionTitle className="text-center">오피스아트 공간 둘러보기</SectionTitle>
      {/* Replace placeholder with the slider component */}
      <HomeClientComponents /> {/* Render the client component wrapper */}
    </section>
  );
}