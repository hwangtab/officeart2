'use client'; // Add use client directive for useState hook

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { useState, useCallback } from 'react'; // Import hooks
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { HiBars3 as Bars3Icon, HiXMark as XMarkIcon } from 'react-icons/hi2'; // Import menu icons
const navItems = [
  { name: '프리미엄 의자', href: '/premium-chairs' },
  { name: '집중 환경', href: '/focus-environment' },
  { name: '크리에이터 커뮤니티', href: '/creator-community' },
  { name: '시설 및 서비스', href: '/facilities-services' },
  { name: '위치 및 교통', href: '/location' },
  { name: '가격 및 멤버십', href: '/pricing' },
  { name: '상담 및 문의', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Helper function to determine if a link is active
  const isActive = (href: string) => pathname === href;
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-800 shadow-md"> {/* Restore original color */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* Replace text logo with Image component */}
              <Image
                src="/images/logo/logo.png" // 실제 로고 이미지 경로
                alt="오피스아트 로고"
                width={150} // 로고 너비 설정 (적절히 조절)
                height={40} // 로고 높이 설정 (비율에 맞게 조절)
                priority // 헤더 로고는 중요하므로 우선 로딩
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation - Use ul/li for semantic list */}
          <ul className="hidden md:flex md:space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  {/* Add focus styles for keyboard navigation */}
                  {/* Apply active styles conditionally */}
                  <span className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
                    isActive(item.href)
                      ? 'text-white font-bold' // Active state style
                      : 'text-gray-300 hover:text-white' // Default state style
                  }`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden">
            {/* Add aria-label for accessibility */}
            {/* Toggle button with dynamic icon and aria attributes */}
            <button
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-md py-2">
          <ul className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <span
                    onClick={toggleMenu} // Close menu on item click
                    // Apply active styles conditionally for mobile
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                      isActive(item.href)
                        ? 'bg-gray-900 text-white font-bold' // Active state style for mobile
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white' // Default state style for mobile
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
