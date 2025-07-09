# OfficeArt 웹사이트 프로젝트 개요

## 프로젝트 설명
이 프로젝트는 공유 오피스 "OfficeArt"를 위한 공식 웹사이트입니다. Next.js와 TypeScript를 기반으로 구축되었으며, 사용자에게 지점 정보, 가격 정책, 서비스 소개 및 문의 기능을 제공합니다.

## 기술 스택
- **프레임워크**: Next.js (^15.3.2)
- **언어**: TypeScript (^5)
- **UI 라이브러리**: React (^18.2.0)
- **스타일링**: Tailwind CSS (^3.4.0)
- **상태 관리 및 애니메이션**: Framer Motion (^12.12.1)
- **테스팅**: Jest (^29.7.0) with React Testing Library
- **린팅**: ESLint (^9.24.0)
- **폼 관리**: React Hook Form (^7.55.0)
- **아이콘**: Heroicons, React Icons

## 주요 디렉토리 구조
- `src/app`: Next.js의 App Router를 사용한 페이지 및 라우팅 구조. 각 디렉토리가 URL 경로에 해당합니다.
- `src/components`: 페이지 전반에서 사용되는 재사용 가능한 React 컴포넌트들 (예: `Header`, `Footer`, `Card`, `Modal`).
- `src/data`: `locations.ts`와 같이 애플리케이션에서 사용하는 정적 데이터.
- `public`: 이미지, 폰트, `robots.txt` 등 정적 에셋.
- `src/lib`: 외부 서비스(OpenRouter)와의 연동을 위한 라이브러리 코드.
- `src/types`: TypeScript 타입 정의 (`contactForm.ts`, `location.ts`).

## 핵심 기능
- **지점 안내**: 여러 지점의 상세 정보 및 위치(카카오맵 연동) 제공.
- **가격 정보**: 서비스별 가격 정책 안내.
- **온라인 문의**: EmailJS를 연동한 방문 및 제휴 문의 기능.
- **AI 챗봇**: OpenRouter API를 활용한 AI 채팅 위젯.
- **반응형 디자인**: 다양한 디바이스에 최적화된 UI.

## 주요 개발 스크립트
- `npm run dev`: 개발 서버를 실행합니다.
- `npm run build`: 프로덕션용으로 애플리케이션을 빌드합니다.
- `npm run start`: 빌드된 애플리케이션을 실행합니다.
- `npm run lint`: ESLint를 사용하여 코드 스타일을 검사하고 수정합니다.
- `npm run test`: Jest를 사용하여 단위/컴포넌트 테스트를 실행합니다.
