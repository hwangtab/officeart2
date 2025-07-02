'use client'; // Add use client directive for useState hook

import Link from 'next/link';
import OptimizedImage from './OptimizedImage';
import { useState, useCallback, useRef, useEffect } from 'react'; // Import hooks
import { usePathname, useRouter } from 'next/navigation'; // Import usePathname and useRouter hooks
import { HiBars3 as Bars3Icon, HiXMark as XMarkIcon, HiMagnifyingGlass as MagnifyingGlassIcon } from 'react-icons/hi2'; // Import menu and search icons

// --- 데이터 구조 정의 ---
interface NavItem {
  name: string;
  href?: string;
  children?: NavItem[];
}

interface FlattenedNavItem {
  name: string;
  href?: string;
  group: string; // 속한 그룹 이름 (스타일링에 사용 가능)
}

// --- 원본 메뉴 데이터 ---
const navItems: NavItem[] = [
  { name: '지점 안내', href: '/locations' },
  { name: '비상주사무실', href: '/services/non-resident' },
  { name: '프리미엄 의자', href: '/premium-chairs' },
  { name: '집중 환경', href: '/focus-environment' },
  { name: '창작자 커뮤니티', href: '/creator-community' },
  { name: '시설 및 서비스', href: '/facilities-services' },
  { name: '가격 및 멤버십', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: '상담 및 문의', href: '/contact' },
];

// --- 메뉴 데이터 평탄화 ---
const flattenedNavItems: FlattenedNavItem[] = navItems.map(item => ({
  name: item.name,
  href: item.href,
  group: item.name, // 그룹 정보는 유지하되 단순화
  isParent: false // 모든 항목을 링크로 처리
}));


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    if (isSearchOpen) setIsSearchOpen(false); // Close search if menu opens
  }, [isSearchOpen]);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false); // Close menu if search opens
  }, [isMenuOpen]);

  // Focus search input when it opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on route change
  useEffect(() => {
   setIsSearchOpen(false);
  }, [pathname]);

  // Close menu on route change (existing logic)
  useEffect(() => {
   setIsMenuOpen(false);
  }, [pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchOpen(false);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen, isMenuOpen]);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = searchInputRef.current?.value.trim(); // Trim whitespace
    if (searchTerm) {
      // Navigate to the search results page with the query parameter
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsSearchOpen(false); // Close search panel after submission
    }
  };

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  // Helper function to determine if a link or its children are active
  const isActive = (item: FlattenedNavItem): boolean => {
    return !!item.href && pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-text-on-primary shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <OptimizedImage
                src="/images/logo/logo2.png"
                alt="오피스아트 로고 - 창의력과 집중력이 피어나는 작업 공간"
                width={150}
                height={40}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation - 가로 스크롤 방지를 위해 xl 브레이크포인트 사용 */}
          <ul className="hidden xl:flex mx-auto space-x-3 items-center">
            {flattenedNavItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={`${item.group}-${item.name}`}>
                  <Link
                    href={item.href!}
                    className={`px-2 py-2 text-sm rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white whitespace-nowrap ${
              active
                ? 'font-bold text-accent-yellow' 
                : 'font-medium hover:text-accent-yellow'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search Icon - Desktop */}
          <div className="hidden xl:flex items-center ml-4">
            <button
              aria-label="검색 열기"
              onClick={toggleSearch}
              className="p-2 rounded-md hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="xl:hidden flex items-center ml-auto">
             {/* Search Icon - Mobile */}
             <button
               aria-label="검색 열기"
               onClick={toggleSearch}
               className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white mr-2"
             >
               <MagnifyingGlassIcon className="h-6 w-6" />
             </button>
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border border-gray-200 z-50 mx-4 sm:mx-6 lg:mx-8 rounded-md">
          <form onSubmit={handleSearchSubmit} className="p-4">
            <div className="flex items-center bg-gray-50 rounded-md px-3 py-2 border border-gray-300 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="웹사이트 내 검색..."
                className="w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="button"
                aria-label="검색 닫기"
                onClick={closeSearch}
                className="p-1 ml-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Enter를 눌러 검색하거나 ESC로 닫기
            </div>
          </form>
        </div>
      )}

      {/* Mobile Menu Panel - 원래 안정적이었던 버전 */}
      {isMenuOpen && (
        <div 
          className="xl:hidden absolute top-16 left-0 w-full bg-primary shadow-md py-2 z-45 max-h-[calc(100vh-4rem)] overflow-y-auto"
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <ul className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {flattenedNavItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.name} role="none">
                  <Link
                    href={item.href!}
                    onClick={toggleMenu}
                    role="menuitem"
                    tabIndex={isMenuOpen ? 0 : -1}
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white ${
                      active ? 'bg-primary/80 font-bold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}