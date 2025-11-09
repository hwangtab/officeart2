import LinkButton from '@/components/LinkButton';
import { HiOutlineMagnifyingGlass, HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

interface SearchEmptyStateProps {
  searchTerm: string;
}

export default function SearchEmptyState({ searchTerm }: SearchEmptyStateProps) {
  return (
    <div className="text-center py-12 px-4">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-gray-100 rounded-full">
          <HiOutlineMagnifyingGlass className="h-12 w-12 text-gray-400" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-2">
        '{searchTerm}'에 대한 검색 결과가 없습니다
      </h3>

      <p className="text-text-secondary mb-6">
        다른 검색어를 시도해보시거나 아래 도움말을 참고해주세요.
      </p>

      {/* Search tips */}
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-background-section rounded-lg p-6 text-left border border-border-light">
          <p className="font-semibold text-text-primary mb-3 flex items-center gap-2">
            <HiOutlineQuestionMarkCircle className="h-5 w-5" />
            검색 도움말
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>다른 키워드나 유사한 단어로 검색해보세요</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>맞춤법을 확인해주세요</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>더 일반적인 검색어를 사용해보세요</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>FAQ 페이지에서 자주 묻는 질문을 확인해보세요</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Popular searches */}
      <div className="mb-8">
        <p className="text-sm text-text-secondary mb-3">인기 검색어</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['프리미엄 의자', '가격', '시설', '상담', '오시는 길'].map((term) => (
            <a
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="px-3 py-1.5 bg-white border border-border-light rounded-full text-sm text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              {term}
            </a>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <LinkButton
        href="/faq"
        variant="primary"
        size="base"
        className="shadow-card-lg hover:shadow-card-lg-hover"
      >
        FAQ 페이지 방문하기
      </LinkButton>
    </div>
  );
}
