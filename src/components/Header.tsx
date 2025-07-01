'use client'; // Add use client directive for useState hook

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
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
  // const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null); // 드롭다운 상태 제거
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  // const leaveTimerRef = useRef<NodeJS.Timeout | null>(null); // 드롭다운 타이머 제거

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

  // 컴포넌트 언마운트 시 타이머 정리 (드롭다운 관련 제거)
  // useEffect(() => {
  //   return () => {
  //     if (leaveTimerRef.current) {
  //       clearTimeout(leaveTimerRef.current);
  //     }
  //   };
  // }, []);


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
  // isActive 함수 수정: FlattenedNavItem 타입 사용 및 로직 단순화
  const isActive = (item: FlattenedNavItem): boolean => {
    return !!item.href && pathname === item.href;
  };

  // --- 드롭다운 이벤트 핸들러 제거 ---
  // const handleMouseEnter = ...
  // const handleMouseLeave = ...


  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-text-on-primary shadow-md"> {/* Use new primary color */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apply Grid layout for better centering on desktop */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo/logo2.png" // 새로운 로고 이미지 경로
                alt="오피스아트 로고"
                width={150} // 로고 너비 설정 (적절히 조절)
                height={40} // 로고 높이 설정 (비율에 맞게 조절)
                priority // 헤더 로고는 중요하므로 우선 로딩
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation with Dropdowns */}
          {/* Desktop Navigation with Dropdowns - Apply flex-grow and justify-center */}
          {/* Apply justify-self-center for grid centering, remove flex-grow/justify-center */}
          {/* Apply mx-auto for balanced spacing and increase space-x */}
          {/* Desktop Navigation - Flattened */}
          <ul className="hidden lg:flex md:mx-auto md:space-x-4 items-center"> {/* Adjusted space-x, changed xxl:flex -> lg:flex */}
            {flattenedNavItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={`${item.group}-${item.name}`}>
                  <Link
                    href={item.href!}
                    className={`px-1 py-2 text-base rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white whitespace-nowrap ${
              active
                ? 'font-bold text-accent-yellow' // Active style
                : 'font-medium hover:text-accent-yellow' // Medium weight with hover
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>


          {/* Search Icon - Desktop */}
          {/* Search Icon - Desktop - Removed ml-4 */}
          <div className="hidden lg:flex items-center ml-4"> {/* Added ml-4 for separation, changed xxl:flex -> lg:flex */}
            <button
              aria-label="검색 열기"
              onClick={toggleSearch}
              className="p-2 rounded-md hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white" // Added hover style
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu & Search Buttons */}
          {/* Mobile Menu & Search Buttons - Added ml-auto */}
          {/* Mobile Menu & Search Buttons - Added ml-auto */}
          <div className="lg:hidden flex items-center ml-auto"> {/* changed xxl:hidden -> lg:hidden */}
             {/* Search Icon - Mobile */}
             <button
               aria-label="검색 열기"
               onClick={toggleSearch}
               className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white mr-2" // Added margin-right
             >
               <MagnifyingGlassIcon className="h-6 w-6" />
             </button>
            {/* Mobile Menu Button */}
            <button
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white" // Adjust focus ring offset
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

      {/* Search Input Panel */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full h-16 bg-primary shadow-md z-50 flex items-center px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearchSubmit} className="flex-grow flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-text-secondary mr-2 flex-shrink-0" />
            <input
              ref={searchInputRef}
              type="search"
              placeholder="웹사이트 내 검색..."
              className="w-full bg-transparent text-text-on-primary placeholder-text-secondary focus:outline-none"
            />
          </form>
          <button
            aria-label="검색 닫기"
            onClick={closeSearch}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white ml-2"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Mobile Menu Panel - Simplified */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-primary shadow-md py-2 z-40">
          <ul className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {flattenedNavItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href!}
                    onClick={toggleMenu}
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
