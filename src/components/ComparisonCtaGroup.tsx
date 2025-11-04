import LinkButton from '@/components/LinkButton';

/**
 * Reusable CTA button group for pricing comparison tables
 * Displays Kakao consultation and trial experience buttons
 */
export default function ComparisonCtaGroup() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <LinkButton
        href="https://open.kakao.com/me/offceart"
        variant="kakao"
        size="base"
        target="_blank"
        rel="noopener noreferrer"
      >
        지금 카카오톡 상담
      </LinkButton>
      <LinkButton href="/contact" variant="outline" size="base">
        하루 체험 예약
      </LinkButton>
    </div>
  );
}
