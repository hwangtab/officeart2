import Link from 'next/link';
import { getRelatedPages, type PageInfo } from '@/lib/relatedPages';
import Card from '@/components/Card';
import { HiArrowRight } from 'react-icons/hi2';

interface RelatedPagesProps {
    currentPath: string;
    className?: string;
}

export default function RelatedPages({ currentPath, className = '' }: RelatedPagesProps) {
    const relatedPages = getRelatedPages(currentPath);

    if (relatedPages.length === 0) {
        return null;
    }

    return (
        <section className={`${className}`}>
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
                관련 서비스
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                {relatedPages.map((page: PageInfo) => (
                    <Link key={page.href} href={page.href} className="group">
                        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30">
                            <div className="flex flex-col h-full">
                                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                                    {page.title}
                                </h3>
                                <p className="text-sm text-text-secondary mb-4 flex-grow">
                                    {page.description}
                                </p>
                                <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                                    자세히 보기
                                    <HiArrowRight className="ml-1 w-4 h-4" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
