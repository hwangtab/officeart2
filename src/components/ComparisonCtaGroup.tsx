import LinkButton from '@/components/LinkButton';
import { HiOutlineClock } from 'react-icons/hi2';
import { RiKakaoTalkFill } from 'react-icons/ri';

/**
 * Reusable CTA button group for pricing comparison tables
 * Displays Kakao consultation and trial experience buttons
 */
export default function ComparisonCtaGroup() {
  return (
    <div className="mt-6 space-y-4">
      {/* Add urgency indicator */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-center">
        <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2">
          <HiOutlineClock className="h-5 w-5 animate-pulse-subtle" />
          지금 상담하고 특별 할인 받으세요
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <LinkButton
          href="https://open.kakao.com/me/offceart"
          variant="kakao"
          size="lg"
          iconLeft={<RiKakaoTalkFill className="h-5 w-5" />}
          className="shadow-card-lg hover:shadow-card-lg-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          지금 카카오톡 상담
        </LinkButton>
        <LinkButton
          href="/contact"
          variant="outline"
          size="lg"
          className="shadow-sm hover:shadow-card"
        >
          하루 체험 예약
        </LinkButton>
      </div>
    </div>
  );
}
