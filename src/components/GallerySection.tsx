import HomeClientComponents from '@/components/HomeClientComponents'; // Import the client component wrapper

export default function GallerySection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4 bg-background-section"> {/* Set white background */}
      <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">오피스아트 공간 둘러보기</h2> {/* Ensure primary text color */}
      {/* Replace placeholder with the slider component */}
      <HomeClientComponents /> {/* Render the client component wrapper */}
    </section>
  );
}