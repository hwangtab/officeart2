'use client';

import LinkButton from '@/components/LinkButton';
import { HiOutlineSparkles } from 'react-icons/hi2';

export default function CreatorCommunityClient() {
  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {/* Add context about benefits */}
      <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-lg px-6 py-3 text-center max-w-md">
        <p className="text-sm font-semibold text-accent-blue">
          멤버십 가입 시 월간 네트워킹 이벤트 무료 참여
        </p>
      </div>

      <LinkButton
        href="/pricing"
        variant="primary"
        size="xl"
        iconLeft={<HiOutlineSparkles className="h-6 w-6" />}
        className="shadow-card-lg hover:shadow-card-lg-hover min-w-[280px]"
      >
        멤버십 자세히 보기
      </LinkButton>
    </div>
  );
}
