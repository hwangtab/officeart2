'use client';

import React, { ErrorInfo, ReactNode } from 'react';
import Card from './Card';
import LinkButton from './LinkButton';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로깅 (production에서도 중요한 정보)
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 커스텀 fallback UI가 제공된 경우 사용
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 기본 에러 UI
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <Card className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                문제가 발생했습니다
              </h2>
              <p className="text-text-secondary mb-6">
                예상치 못한 오류가 발생했습니다. 페이지를 새로고침하거나 홈으로 돌아가세요.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton
                href="/"
                variant="primary"
                size="base"
              >
                홈으로 돌아가기
              </LinkButton>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 border border-border-light rounded-md hover:bg-background-main transition-colors text-text-primary"
              >
                페이지 새로고침
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-text-secondary hover:text-text-primary">
                  개발자 정보 (개발 환경에서만 표시)
                </summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;