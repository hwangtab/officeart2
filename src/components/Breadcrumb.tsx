'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronRight, HiHome } from 'react-icons/hi2';

interface BreadcrumbItem {
    name: string;
    href: string;
}

// Page name mapping
const pageNames: Record<string, string> = {
    'pricing': '가격 및 멤버십',
    'facilities-services': '시설 및 서비스',
    'premium-chairs': '프리미엄 의자',
    'focus-environment': '집중 환경',
    'services': '서비스',
    'non-resident': '비상주 사무실',
    'contact': '상담 및 문의',
    'location': '오시는 길',
    'creator-community': '크리에이터 커뮤니티',
    'faq': '자주 묻는 질문',
    'ai-chat': 'AI 상담원',
    'ai-answers': 'AI 상담 FAQ',
    'search': '검색',
};

interface BreadcrumbProps {
    className?: string;
}

export default function Breadcrumb({ className = '' }: BreadcrumbProps) {
    const pathname = usePathname();

    // Don't show breadcrumb on home page
    if (pathname === '/') {
        return null;
    }

    // Build breadcrumb items from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbItems: BreadcrumbItem[] = [
        { name: '홈', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;
        const name = pageNames[segment] || segment;
        breadcrumbItems.push({
            name,
            href: currentPath,
        });
    });

    // Generate BreadcrumbList schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.name,
            'item': `https://www.officeart.co.kr${item.href}`,
        })),
    };

    return (
        <>
            {/* JSON-LD for BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Visual Breadcrumb */}
            <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;
                        const isFirst = index === 0;

                        return (
                            <li key={item.href} className="flex items-center">
                                {index > 0 && (
                                    <HiChevronRight className="w-4 h-4 text-text-secondary mx-2" />
                                )}
                                {isLast ? (
                                    <span className="text-text-primary font-medium" aria-current="page">
                                        {isFirst ? <HiHome className="w-4 h-4" /> : item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-text-secondary hover:text-primary transition-colors flex items-center"
                                    >
                                        {isFirst ? <HiHome className="w-4 h-4" /> : item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
