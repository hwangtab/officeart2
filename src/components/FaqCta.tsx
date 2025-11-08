'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function FaqCta() {
  const handleContactClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'faq_contact_click', {
        event_category: 'conversion',
        event_label: 'online_inquiry',
        value: 1
      });
    }
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'faq_phone_click', {
        event_category: 'conversion',
        event_label: 'phone_inquiry',
        value: 1
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact?utm_source=faq&utm_medium=button&utm_campaign=inquiry"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
        onClick={handleContactClick}
      >
        온라인 문의하기
      </a>
      <a
        href="tel:02-123-4567"
        className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
        onClick={handlePhoneClick}
      >
        전화 문의하기
      </a>
    </div>
  );
}
