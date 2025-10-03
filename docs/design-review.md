# 웹사이트 디자인 코드 리뷰

## 주요 발견 사항
- **[중] 색상 토큰 누락으로 아이콘 색상이 표시되지 않음**  
  - 위치: `src/components/AtAGlanceSection.tsx:22`  
  - 내용: `text-accent-warm` 클래스가 Tailwind 설정에 존재하지 않아 시설 아이콘이 기본색으로 렌더링됩니다.  
  - 제안: `accent-yellow` 같은 기존 토큰을 사용하거나 `tailwind.config.js`에 `accent-warm`을 추가해 톤을 고정하세요.

- **[중] 네이버 버튼 호버 상태가 정의되지 않음**  
  - 위치: `src/components/LinkButton.tsx:44`, `src/app/globals.css:53`  
  - 내용: `hover:bg-naver-green-dark` 유틸리티 정의가 주석 처리되면서 Tailwind가 해당 클래스를 생성하지 않습니다.  
  - 제안: `tailwind.config.js`에 `naver-green-dark` 색상을 등록하고 버튼 변형을 그 토큰으로 연결하세요.

- **[중] 브랜드 톤과 다른 CTA 호버 컬러**  
  - 위치: `src/components/LinkButton.tsx:41`  
  - 내용: 기본 CTA가 `hover:bg-orange-600`을 사용해 활성화 시 주황색으로 바뀌며 헤더/배경의 블루 톤과 충돌합니다.  
  - 제안: `primary-dark` 토큰으로 호버 색을 맞춰 일관된 브랜드 경험을 유지하세요.

- **[중] 인터렉션 애니메이션이 무조건 적용돼 접근성 저하**  
  - 위치: `src/components/ScrollAnimationWrapper.tsx:29`  
  - 내용: `scroll-animate` 기본값이 `opacity:0`라서 인터섹션 옵저버가 동작하지 않거나 사용자 설정이 `prefers-reduced-motion`일 때 콘텐츠가 숨겨진 채 남습니다.  
  - 제안: 모션 축소 환경에서는 애니메이션을 비활성화하고, JS 실패 시 기본 가시성을 보장하는 클래스를 제공하세요.

- **[하] 갤러리 스켈레톤 높이 과도**  
  - 위치: `src/components/HomeClientComponents.tsx:8`  
  - 내용: 로딩 상태가 `h-96` 고정값을 사용해 모바일 위에서 384px 공백을 남깁니다.  
  - 제안: `aspect-[4/3]` 또는 `min-h-[14rem]` 등 화면 크기에 비례한 컨테이너를 사용해 레이아웃 점프를 줄이세요.

## 적용 결과
- At-a-Glance 카드의 주요 문구를 `text-body-base` 토큰으로 맞춰 강조 텍스트 가독성을 통일했습니다 (`src/components/AtAGlanceSection.tsx`).
- 시설 아이콘 색상을 `text-accent-yellow`로 교체해 누락된 토큰 의존성을 제거했습니다 (`src/components/AtAGlanceSection.tsx`).
- Tailwind 팔레트에 `naver-green-dark`를 추가하고 CTA 기본 버튼 호버를 `primary-dark`로 통일해 브랜드 톤을 유지합니다 (`tailwind.config.js`, `src/components/LinkButton.tsx`).
- 스크롤 애니메이션이 모션 축소 환경을 존중하도록 미디어 쿼리와 런타임 감지를 추가하고, 초기 렌더링 시 콘텐츠가 숨겨진 채 남지 않도록 보강했습니다 (`src/components/ScrollAnimationWrapper.tsx`, `src/app/globals.css`).
- 갤러리 스켈레톤을 가변 비율로 조정해 모바일에서 과도한 공백이 생기지 않도록 처리했습니다 (`src/components/HomeClientComponents.tsx`).
- 카드 컴포넌트의 호버 변형에서 수직 이동을 제거해 격자 배치에서도 안정적으로 보이도록 정리했습니다 (`src/components/Card.tsx`).
