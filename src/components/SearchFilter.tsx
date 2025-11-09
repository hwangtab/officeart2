'use client';

import { SearchCategory, SEARCH_CATEGORIES } from '@/types/search';

interface SearchFilterProps {
  activeCategory: SearchCategory;
  onCategoryChange: (category: SearchCategory) => void;
  resultCounts: Record<SearchCategory, number>;
}

export default function SearchFilter({
  activeCategory,
  onCategoryChange,
  resultCounts,
}: SearchFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
        {SEARCH_CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          const count = resultCounts[category.id] || 0;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                flex items-center gap-2
                ${
                  isActive
                    ? 'bg-primary text-white shadow-card-lg'
                    : 'bg-background-section text-text-secondary hover:bg-gray-200 hover:text-text-primary'
                }
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `}
              aria-pressed={isActive}
              aria-label={`${category.label} 필터 (${count}개 결과)`}
            >
              <span>{category.label}</span>
              <span
                className={`
                  px-2 py-0.5 rounded-full text-xs font-bold
                  ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-300 text-text-secondary'
                  }
                `}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
