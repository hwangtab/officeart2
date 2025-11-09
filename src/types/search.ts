// Search-related type definitions

// Search category types for filtering
export type SearchCategory = 'all' | 'services' | 'facilities' | 'faq' | 'other';

// Extended searchable item interface with category
export interface SearchableItem {
  path: string;
  title: string;
  description: string;
  category: SearchCategory;
}

// Filter state for search results
export interface SearchFilterState {
  activeCategory: SearchCategory;
  resultCount: number;
}

// Category display information
export interface CategoryInfo {
  id: SearchCategory;
  label: string;
  icon?: string;
}

// Category configuration
export const SEARCH_CATEGORIES: CategoryInfo[] = [
  { id: 'all', label: '전체' },
  { id: 'services', label: '서비스' },
  { id: 'facilities', label: '시설' },
  { id: 'faq', label: 'FAQ' },
];
