'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import SectionTitle from '@/components/SectionTitle';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Fuse from 'fuse.js';
// Import types using 'import type'
import type { FuseResult, IFuseOptions } from 'fuse.js';

// 검색 대상 데이터 정의 (임시)
// TODO: 실제 검색 대상 데이터를 정의하거나 API로부터 가져오도록 수정해야 합니다.
const searchableContent = [
  { path: '/premium-chairs', title: '프리미엄 의자', description: '허먼밀러, 스틸케이스, 휴먼스케일 등 최고급 사무용 의자 소개' },
  { path: '/focus-environment', title: '집중 환경', description: '업무 몰입도를 높이는 독립 공간 및 L자형 데스크 안내' },
  { path: '/creator-community', title: '크리에이터 커뮤니티', description: '다양한 분야의 전문가들과 교류하고 성장하는 커뮤니티' },
  { path: '/facilities-services', title: '시설 및 서비스', description: '프리미엄 커피, 복합기, 회의 공간 등 편의 시설 안내' },
  { path: '/location', title: '오시는 길', description: '영등포구청역 인근 위치, 교통편, 주차 정보 안내' },
  { path: '/pricing', title: '가격 및 멤버십', description: '합리적인 월 멤버십 및 일일 이용권 가격 안내' },
  { path: '/faq', title: 'FAQ', description: '자주 묻는 질문과 답변 모음' },
  { path: '/contact', title: '상담 및 문의', description: '방문 상담 예약 및 기타 문의 안내' },
  { path: '/', title: '오피스아트 홈', description: '영등포구청역 프리미엄 공유오피스' },
];

// Define the type for searchable items
type SearchableItem = {
  path: string;
  title: string;
  description: string;
};

// Suspense 내부에서 실제 검색 로직을 처리할 컴포넌트
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  // Use imported types directly
  const [results, setResults] = useState<FuseResult<SearchableItem>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fuse.js 인스턴스 생성 (useMemo로 최적화)
  const fuse = useMemo(() => {
    // Use imported types directly
    const options: IFuseOptions<SearchableItem> = {
      keys: ['title', 'description'], // 검색 대상 필드
      includeScore: true, // 점수 포함 여부
      threshold: 0.4, // 검색 민감도 (0.0 ~ 1.0, 낮을수록 정확히 일치)
      minMatchCharLength: 2, // 최소 검색어 길이
    };
    return new Fuse(searchableContent, options);
  }, []);

  useEffect(() => {
    if (!query || query.length < 2) { // Add minimum query length check
      setResults([]);
      setIsLoading(false); // Ensure loading state is reset
      return;
    }

    setIsLoading(true);
    // Use Fuse.js for searching
    const searchResults = fuse.search(query);

    // Simulate loading delay for demonstration
    const timer = setTimeout(() => {
      setResults(searchResults);
      setIsLoading(false);
    }, 300); // 300ms 지연

    return () => clearTimeout(timer); // Cleanup timer on unmount or query change

  }, [query, fuse]); // Add fuse to dependency array

  return (
    <div className="w-full max-w-3xl mx-auto">
      <SectionTitle as="h1" level="section" className="text-center"> {/* Use level prop */}
        '{query}' 검색 결과
      </SectionTitle>

      {isLoading ? (
        <div className="text-center text-text-secondary">검색 중...</div>
      ) : results.length > 0 ? (
        <ul className="space-y-6">
          {/* Display score for debugging/tuning */}
          {results.map(({ item, score }) => (
            <li key={item.path} className="border border-border-light rounded-lg p-4 hover:shadow-md transition-shadow">
              <Link href={item.path}>
                <SectionTitle as="h2" level="subsection" underline={false} className="text-accent-blue hover:underline mb-1">{item.title} <span className="text-xs text-gray-400">(Score: {score?.toFixed(2)})</span></SectionTitle> {/* Use level prop, override underline and margin */}
                <p className="text-sm text-text-secondary">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.path}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-text-secondary">
          '{query}'에 대한 검색 결과가 없습니다. (검색어는 2자 이상 입력해주세요)
        </p>
      )}

      <div className="mt-12">
        <BackButton />
      </div>
    </div>
  );
}

// 페이지 컴포넌트
export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      {/* Suspense로 감싸서 useSearchParams 사용 */}
      <Suspense fallback={<div className="text-center text-text-secondary">검색 결과 로딩 중...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}