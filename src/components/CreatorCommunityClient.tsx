'use client';

import { UnifiedButton } from '@/components/UnifiedButton';

export default function CreatorCommunityClient() {
  const handleMembershipClick = () => {
    window.location.href = '/pricing';
  };

  return (
    <div className="flex justify-center mt-8">
      <UnifiedButton
        variant="primary"
        size="lg"
        onClick={handleMembershipClick}
        className="px-8 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        멤버십 자세히 보기
      </UnifiedButton>
    </div>
  );
}
