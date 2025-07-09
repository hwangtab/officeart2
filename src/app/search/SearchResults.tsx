'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import BackButton from '@/components/BackButton';
import Fuse from 'fuse.js';
import type { FuseResult, IFuseOptions } from 'fuse.js';

// 검색 대상 데이터 정의 (임시)
const searchableContent = [
  { path: '/premium-chairs', title: '프리미엄 의자', description: '허먼밀러, 스틸케이스, 휴먼스케일 등 최고급 사무용 의자 소개' },
  { path: '/focus-environment', title: '집중 환경', description: '업무 몰입도를 높이는 독립 공간 및 L자형 데스크 안내' },
  { path: '/creator-community', title: '크리에이터 커뮤니티', description: '다양한 분야의 전문가들과 교류하고 성장하는 커뮤니티' },
  { path: '/facilities-services', title: '시설 및 서비스', description: '프리미엄 커피, 복합기, 회의 공간 등 편의 시설 안내' },
  { path: '/location', title: '오시는 길', description: '영등포구청역 인근 위치, 교통편, 주차 정보 안내' },
  { path: '/pricing', title: '가격 및 멤버십', description: '합리적인 월 멤버십 가격 안내' },
  { path: '/faq', title: 'FAQ', description: '자주 묻는 질문과 답변 모음' },
  { path: '/contact', title: '상담 및 문의', description: '방문 상담 예약 및 기타 문의 안내' },
  { path: '/', title: '오피스아트 홈', description: '영등포구청역 프리미엄 공유오피스' },
];

type SearchableItem = {
  path: string;
  title: string;
  description: string;
};

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<FuseResult<SearchableItem>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fuse = useMemo(() => {
    const options: IFuseOptions<SearchableItem> = {
      keys: ['title', 'description'],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2,
    };
    return new Fuse(searchableContent, options);
  }, []);

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

  return (
    <div className="w-full max-w-3xl mx-auto">
      <SectionTitle as="h1" level="section" className="text-center">
        &apos;{query}&apos; 검색 결과
      </SectionTitle>

      {isLoading ? (
        <div className="text-center text-text-secondary">검색 중...</div>
      ) : results.length > 0 ? (
        <ul className="space-y-6">
          {results.map(({ item, score }) => (
            <li key={item.path} className="border border-border-light rounded-lg p-4 hover:shadow-md transition-shadow">
              <Link href={item.path}>
                <SectionTitle as="h2" level="subsection" underline={false} className="text-accent-blue hover:underline mb-1">
                  {item.title} <span className="text-xs text-gray-400">(Score: {score?.toFixed(2)})</span>
                </SectionTitle>
                <p className="text-sm text-text-secondary">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.path}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-text-secondary">
          &apos;{query}&apos;에 대한 검색 결과가 없습니다. (검색어는 2자 이상 입력해주세요)
        </p>
      )}

      <div className="mt-12">
        <BackButton />
      </div>
    </div>
  );
}