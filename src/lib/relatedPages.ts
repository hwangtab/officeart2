/**
 * Related Pages Utility
 * Maps each page to its related pages for internal linking
 */

export interface PageInfo {
    title: string;
    description: string;
    href: string;
}

// Define related pages mapping
export const relatedPagesMap: Record<string, string[]> = {
    '/pricing': ['/facilities-services', '/contact', '/ai-chat'],
    '/facilities-services': ['/pricing', '/premium-chairs', '/focus-environment'],
    '/premium-chairs': ['/focus-environment', '/facilities-services', '/pricing'],
    '/focus-environment': ['/premium-chairs', '/facilities-services', '/pricing'],
    '/services/non-resident': ['/pricing', '/contact', '/location'],
    '/contact': ['/pricing', '/services/non-resident', '/location', '/ai-chat'],
    '/location': ['/contact', '/services/non-resident', '/facilities-services'],
    '/creator-community': ['/pricing', '/facilities-services', '/contact'],
    '/faq': ['/contact', '/ai-chat', '/ai-answers'],
    '/ai-chat': ['/ai-answers', '/faq', '/contact'],
    '/ai-answers': ['/ai-chat', '/faq', '/pricing'],
};

// Page information database
const pageInfoDatabase: Record<string, PageInfo> = {
    '/pricing': {
        title: '가격 및 멤버십',
        description: '정기 이용권과 비상주 사무실 가격 안내',
        href: '/pricing',
    },
    '/facilities-services': {
        title: '시설 및 서비스',
        description: '프리미엄 커피, 복합기, 초고속 네트워크',
        href: '/facilities-services',
    },
    '/premium-chairs': {
        title: '프리미엄 의자',
        description: '스틸케이스 시리즈2 에어 의자',
        href: '/premium-chairs',
    },
    '/focus-environment': {
        title: '집중 환경',
        description: '최적의 업무 집중 공간',
        href: '/focus-environment',
    },
    '/services/non-resident': {
        title: '비상주 사무실',
        description: '월 3.3만원 사업자등록 가능',
        href: '/services/non-resident',
    },
    '/contact': {
        title: '상담 및 문의',
        description: '방문 상담 예약 및 문의',
        href: '/contact',
    },
    '/location': {
        title: '오시는 길',
        description: '영등포구청역 5분 거리',
        href: '/location',
    },
    '/creator-community': {
        title: '크리에이터 커뮤니티',
        description: '창작자들의 네트워킹 공간',
        href: '/creator-community',
    },
    '/faq': {
        title: '자주 묻는 질문',
        description: '이용 관련 FAQ',
        href: '/faq',
    },
    '/ai-chat': {
        title: 'AI 상담원',
        description: '24시간 실시간 상담',
        href: '/ai-chat',
    },
    '/ai-answers': {
        title: 'AI 상담 FAQ',
        description: '자주 받는 질문 모음',
        href: '/ai-answers',
    },
};

/**
 * Get related pages for a given path
 */
export function getRelatedPages(currentPath: string): PageInfo[] {
    const relatedPaths = relatedPagesMap[currentPath] || [];
    return relatedPaths
        .map(path => pageInfoDatabase[path])
        .filter((info): info is PageInfo => info !== undefined);
}

/**
 * Get page information
 */
export function getPageInfo(path: string): PageInfo | undefined {
    return pageInfoDatabase[path];
}

/**
 * Get page title
 */
export function getPageTitle(path: string): string {
    return pageInfoDatabase[path]?.title || '페이지';
}
