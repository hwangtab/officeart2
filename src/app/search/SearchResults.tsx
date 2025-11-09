'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import BackButton from '@/components/BackButton';
import SearchFilter from '@/components/SearchFilter';
import SearchEmptyState from '@/components/SearchEmptyState';
import { HighlightedText } from '@/utils/searchHighlight';
import { SearchableItem, SearchCategory } from '@/types/search';
import Fuse from 'fuse.js';
import type { FuseResult, IFuseOptions } from 'fuse.js';

// Enhanced searchable content with categories
const searchableContent: SearchableItem[] = [
  { path: '/premium-chairs', title: '프리미엄 의자', description: '허먼밀러, 스틸케이스, 휴먼스케일 등 최고급 사무용 의자 소개', category: 'facilities' },
  { path: '/focus-environment', title: '집중 환경', description: '업무 몰입도를 높이는 독립 공간 및 L자형 데스크 안내', category: 'facilities' },
  { path: '/creator-community', title: '크리에이터 커뮤니티', description: '다양한 분야의 전문가들과 교류하고 성장하는 커뮤니티', category: 'services' },
  { path: '/facilities-services', title: '시설 및 서비스', description: '프리미엄 커피, 복합기, 회의 공간 등 편의 시설 안내', category: 'facilities' },
  { path: '/location', title: '오시는 길', description: '영등포구청역 인근 위치, 교통편, 주차 정보 안내', category: 'other' },
  { path: '/pricing', title: '가격 및 멤버십', description: '합리적인 월 멤버십 가격 안내', category: 'services' },
  { path: '/faq', title: 'FAQ', description: '자주 묻는 질문과 답변 모음', category: 'faq' },
  { path: '/contact', title: '상담 및 문의', description: '방문 상담 예약 및 기타 문의 안내', category: 'services' },
  { path: '/', title: '오피스아트 홈', description: '영등포구청역 프리미엄 공유오피스', category: 'other' },
];

// Loading skeleton component
function SearchSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border border-border-light rounded-lg p-4">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-100 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-100 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<FuseResult<SearchableItem>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SearchCategory>('all');

  // Initialize Fuse.js
  const fuse = useMemo(() => {
    const options: IFuseOptions<SearchableItem> = {
      keys: ['title', 'description'],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2,
    };
    return new Fuse(searchableContent, options);
  }, []);

  // Perform search
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const searchResults = fuse.search(query);

    const timer = setTimeout(() => {
      setResults(searchResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, fuse]);

  // Filter results by category
  const filteredResults = useMemo(() => {
    if (activeCategory === 'all') {
      return results;
    }
    return results.filter(({ item }) => item.category === activeCategory);
  }, [results, activeCategory]);

  // Calculate result counts for each category
  const resultCounts = useMemo(() => {
    const counts: Record<SearchCategory, number> = {
      all: results.length,
      services: 0,
      facilities: 0,
      faq: 0,
      other: 0,
    };

    results.forEach(({ item }) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });

    return counts;
  }, [results]);

  // Show empty state if query is too short
  const shouldShowEmptyState = query.length > 0 && query.length < 2;
  const hasNoResults = !isLoading && query.length >= 2 && filteredResults.length === 0;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <SectionTitle as="h1" level="section" className="text-center mb-6">
        {query ? `'${query}' 검색 결과` : '검색 결과'}
      </SectionTitle>

      {/* Show filter only when there are results */}
      {results.length > 0 && !isLoading && (
        <>
          <SearchFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            resultCounts={resultCounts}
          />
          <p className="text-sm text-text-secondary mb-6" aria-live="polite">
            총 <span className="font-bold text-primary">{filteredResults.length}</span>개의 검색 결과
          </p>
        </>
      )}

      {/* Loading state */}
      {isLoading && <SearchSkeleton />}

      {/* Empty state for short query */}
      {shouldShowEmptyState && (
        <p className="text-center text-text-secondary py-8">
          검색어는 2자 이상 입력해주세요
        </p>
      )}

      {/* No results state */}
      {hasNoResults && <SearchEmptyState searchTerm={query} />}

      {/* Search results */}
      {!isLoading && filteredResults.length > 0 && (
        <ul className="space-y-6">
          {filteredResults.map(({ item }) => (
            <li
              key={item.path}
              className="border border-border-light rounded-lg p-6 hover:shadow-card transition-shadow bg-white"
            >
              <Link href={item.path} className="block group">
                <SectionTitle
                  as="h2"
                  level="subsection"
                  underline={false}
                  className="text-accent-blue group-hover:underline mb-2"
                >
                  <HighlightedText text={item.title} searchTerm={query} />
                </SectionTitle>
                <p className="text-sm text-text-secondary">
                  <HighlightedText text={item.description} searchTerm={query} />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-12">
        <BackButton />
      </div>
    </div>
  );
}
