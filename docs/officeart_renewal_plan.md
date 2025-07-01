# 오피스아트 웹사이트 리뉴얼 계획서

## 📋 개요

### 현재 상황
- **기존**: 영등포구청점만 소개하는 단일 지점 웹사이트
- **목표**: 영등포구청점 + 불광점을 포함한 다중 지점 웹사이트로 확장
- **추가 서비스**: 비상주사무실 서비스 및 사업자등록 가능 정보 추가

### 리뉴얼 목표
1. 다중 지점 지원 아키텍처 구축
2. 위치 선택 기능 제공
3. 비상주사무실 서비스 소개
4. 사업자등록 서비스 강조
5. 통합된 브랜드 경험 제공

## 🏗 아키텍처 변경 계획

### 1. 데이터 구조 개선

#### 지점 정보 데이터 모델
```typescript
interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  nearbyStation: string;
  walkingTime: string;
  pricing: {
    monthlyDesk: number;
    nonResidentOffice: {
      price: number;
      minimumContract: string;
    };
  };
  operatingHours: {
    weekdays: string;
    weekends?: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
}
```

#### 지점별 데이터 정의
```typescript
// src/data/locations.ts
export const locations: Location[] = [
  {
    id: 'yeongdeungpo',
    name: '영등포구청점',
    address: '서울특별시 영등포구 당산로 120 (당산동3가)',
    phone: '02-764-3114',
    email: 'contact@officeart.co.kr',
    nearbyStation: '영등포구청역',
    walkingTime: '5분',
    pricing: {
      monthlyDesk: 250000,
      nonResidentOffice: {
        price: 33000,
        minimumContract: '6개월'
      }
    },
    operatingHours: {
      weekdays: '09:00-18:00'
    },
    images: {
      hero: '/images/hero/yeongdeungpo-hero.jpg',
      gallery: ['/images/gallery/yeongdeungpo/...']
    }
  },
  {
    id: 'bulgwang',
    name: '불광점',
    address: '서울 은평구 통일로 68길4, 302호',
    phone: '02-764-3114',
    email: 'contact@kosmart.org',
    nearbyStation: '불광역',
    walkingTime: '2분',
    pricing: {
      monthlyDesk: 250000,
      nonResidentOffice: {
        price: 33000,
        minimumContract: '6개월'
      }
    },
    operatingHours: {
      weekdays: '09:00-18:00'
    },
    images: {
      hero: '/images/hero/bulgwang-hero.jpg',
      gallery: ['/images/gallery/bulgwang/...']
    }
  }
];
```

### 2. 라우팅 구조 개선

#### 새로운 페이지 구조
```
/                          # 메인 페이지 (지점 선택 포함)
/locations                 # 지점 선택 페이지
/locations/yeongdeungpo    # 영등포구청점 (기존 콘텐츠 활용)
/locations/bulgwang        # 불광점 (동일한 구조)
/services/non-resident     # 비상주사무실 서비스
/premium-chairs           # 기존 유지
/focus-environment        # 기존 유지
/creator-community        # 기존 유지
/facilities-services      # 기존 유지
/pricing                  # 비상주사무실 정보 추가
/faq                      # 비상주사무실 FAQ 추가
/contact                  # 지점 선택 기능 추가
```

## 🎨 UI/UX 개선 계획

### 1. 메인 페이지 개선

#### Location Selection Section (새로운 섹션)
```tsx
// HeroSection 다음에 추가
<LocationSelectionSection>
  <SectionTitle level="section">
    가까운 오피스아트를 선택하세요
  </SectionTitle>
  <div className="grid md:grid-cols-2 gap-8">
    <LocationCard 
      location={locations.yeongdeungpo}
      href="/locations/yeongdeungpo"
    />
    <LocationCard 
      location={locations.bulgwang}
      href="/locations/bulgwang"
    />
  </div>
</LocationSelectionSection>
```

#### Services Highlights Section (새로운 섹션)
```tsx
<ServicesSection>
  <SectionTitle level="section">
    다양한 서비스
  </SectionTitle>
  <div className="grid md:grid-cols-3 gap-6">
    <ServiceCard 
      title="정기 이용권"
      description="월 25만원으로 프리미엄 작업환경 이용"
      icon="workspace"
    />
    <ServiceCard 
      title="비상주사무실"
      description="월 3.3만원, 사업자등록 가능"
      icon="business"
      isNew={true}
    />
    <ServiceCard 
      title="프리미엄 시설"
      description="180만원 의자, L형 책상, 무제한 커피"
      icon="premium"
    />
  </div>
</ServicesSection>
```

### 2. 지점별 페이지 구조

#### 기존 콘텐츠 재활용
```tsx
// src/app/locations/[locationId]/page.tsx
export default function LocationPage({ params }) {
  const location = getLocationById(params.locationId);
  
  return (
    <>
      {/* 기존 섹션들을 지점 정보로 동적화 */}
      <CoreValuesSection />
      <OccupancyCategoriesSection />
      <AtAGlanceSection location={location} />
      <GallerySection location={location} />
      <InquirySection location={location} />
    </>
  );
}
```

### 3. 비상주사무실 서비스 페이지

#### 새로운 페이지 구성
```tsx
// src/app/services/non-resident/page.tsx
export default function NonResidentOfficePage() {
  return (
    <>
      <HeroSection 
        title="비상주사무실"
        subtitle="월 3.3만원으로 사업자등록하세요"
      />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <LocationOptionsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
```

## 🔧 기술적 구현 계획

### 1. 컴포넌트 개발

#### LocationCard 컴포넌트
```tsx
// src/components/LocationCard.tsx
interface LocationCardProps {
  location: Location;
  href: string;
}

export default function LocationCard({ location, href }: LocationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{location.name}</h3>
        <p className="text-gray-600 mb-4">{location.address}</p>
        <div className="flex items-center mb-4">
          <MapPinIcon className="w-4 h-4 mr-2" />
          <span>{location.nearbyStation} {location.walkingTime}</span>
        </div>
        <LinkButton href={href} variant="primary">
          상세보기
        </LinkButton>
      </div>
    </Card>
  );
}
```

#### LocationSelector 컴포넌트
```tsx
// src/components/LocationSelector.tsx
export default function LocationSelector({ 
  onLocationSelect,
  selectedLocation 
}: LocationSelectorProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {locations.map(location => (
        <button
          key={location.id}
          onClick={() => onLocationSelect(location)}
          className={`p-4 border rounded-lg ${
            selectedLocation?.id === location.id 
              ? 'border-primary bg-primary/10' 
              : 'border-gray-200'
          }`}
        >
          <div className="text-left">
            <h4 className="font-semibold">{location.name}</h4>
            <p className="text-sm text-gray-600">{location.nearbyStation} {location.walkingTime}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
```

### 2. 기존 컴포넌트 수정

#### AtAGlanceSection 수정
```tsx
// src/components/AtAGlanceSection.tsx
interface AtAGlanceSectionProps {
  location?: Location;
}

export default function AtAGlanceSection({ location }: AtAGlanceSectionProps) {
  const currentLocation = location || locations[0]; // 기본값
  
  return (
    <section>
      {/* 기존 콘텐츠 */}
      <div className="location-info">
        <h3>위치 정보</h3>
        <p>{currentLocation.address}</p>
        <p>{currentLocation.nearbyStation} {currentLocation.walkingTime}</p>
      </div>
    </section>
  );
}
```

#### ContactForm 수정
```tsx
// src/components/ContactForm.tsx
export default function ContactForm() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  
  return (
    <form>
      <div className="mb-6">
        <label className="block mb-2">방문 희망 지점</label>
        <LocationSelector 
          onLocationSelect={setSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </div>
      {/* 기존 폼 필드들 */}
    </form>
  );
}
```

### 3. Pricing 페이지 개선

#### 기존 가격 정보에 비상주사무실 추가
```tsx
// src/components/PricingClient.tsx 수정
const pricingPlans = [
  {
    name: '정기 이용권',
    price: '25만원',
    period: '월',
    description: '프리미엄 작업공간 무제한 이용',
    features: [
      '180만원 프리미엄 의자',
      'L형 책상 (160cm)',
      '무제한 커피',
      '무제한 복합기 사용',
      '회의실 이용',
      '24시간 출입'
    ]
  },
  {
    name: '비상주사무실',
    price: '3.3만원',
    period: '월',
    description: '사업자등록 가능한 주소 제공',
    features: [
      '사업자등록용 주소 제공',
      '우편물 수령 서비스',
      '최소 6개월 계약',
      '회의실 할인 이용',
      '전화응답 서비스 (옵션)'
    ],
    isHighlighted: true,
    badge: 'NEW'
  }
];
```

## 📊 콘텐츠 개선 계획

### 1. 비상주사무실 서비스 상세 내용

#### 서비스 소개
```markdown
# 비상주사무실 서비스

## 이런 분들께 추천합니다
- 홈오피스 창업자
- 프리랜서 사업자등록 필요자  
- 법인 주소가 필요한 스타트업
- 비용 절약이 중요한 초기 창업자

## 서비스 내용
- **사업자등록용 주소 제공**: 정식 사업장 주소로 활용 가능
- **우편물 수령 및 보관**: 소중한 우편물을 안전하게 보관
- **최소 계약 기간**: 6개월 (안정적인 사업 주소 확보)
- **회의실 할인 이용**: 필요시 회의 공간 저렴하게 이용
- **양 지점 선택 가능**: 영등포구청점 또는 불광점 선택

## 월 3.3만원의 합리적 비용
동일한 서비스를 강남이나 여의도에서 이용하면 월 10만원 이상!
오피스아트에서는 3분의 1 가격으로 이용 가능합니다.
```

### 2. FAQ 섹션 추가

#### 비상주사무실 관련 FAQ
```markdown
## 비상주사무실 FAQ

**Q. 사업자등록이 정말 가능한가요?**
A. 네, 정식 사업장 주소로 사업자등록이 가능합니다.

**Q. 우편물은 어떻게 받나요?**
A. 우편물이 도착하면 연락드리며, 직접 방문하여 수령하시거나 택배 발송도 가능합니다.

**Q. 계약 기간이 있나요?**
A. 최소 6개월 계약이며, 이후 월 단위 연장 가능합니다.

**Q. 두 지점 중 어디를 선택해야 하나요?**
A. 접근성이 좋은 곳을 선택하시면 됩니다. 서비스 내용은 동일합니다.
```

## 🗓 구현 일정

### Phase 1: 기반 구조 (1주)
- [ ] 지점 데이터 모델 설계 및 구현
- [ ] LocationCard, LocationSelector 컴포넌트 개발
- [ ] 라우팅 구조 변경

### Phase 2: 페이지 개발 (2주)
- [ ] 메인 페이지에 지점 선택 섹션 추가
- [ ] 지점별 상세 페이지 구현 (기존 콘텐츠 재활용)
- [ ] 비상주사무실 서비스 페이지 개발
- [ ] Contact 폼에 지점 선택 기능 추가

### Phase 3: 콘텐츠 및 기능 보완 (1주)
- [ ] Pricing 페이지에 비상주사무실 정보 추가
- [ ] FAQ 섹션에 비상주사무실 관련 내용 추가
- [ ] SEO 메타데이터 업데이트

### Phase 4: 테스트 및 배포 (1주)
- [ ] 기능 테스트
- [ ] 반응형 디자인 검증
- [ ] 성능 최적화
- [ ] 프로덕션 배포

## 🎯 성공 지표

### 사용자 경험
- 두 지점 페이지 방문률 균형
- 비상주사무실 문의 증가
- 평균 세션 시간 유지

### 비즈니스 목표
- 불광점 인지도 상승
- 비상주사무실 서비스 문의 증가
- 전체 매출 증대

### 기술적 목표
- 페이지 로딩 속도 유지
- SEO 점수 개선
- 코드 재사용성 향상

## 🔍 추가 고려사항

### 1. 운영 효율성
- 지점별 문의 자동 분류 시스템
- 통합 관리자 패널에서 두 지점 운영 현황 확인

### 2. 향후 확장성
- 추가 지점 확장을 고려한 확장 가능한 구조
- 서비스 종류 확장을 위한 유연한 데이터 모델

### 3. 사용자 편의성
- 지점 간 이동 시 일관된 사용자 경험
- 모바일에서도 편리한 지점 선택 인터페이스

이 계획을 통해 오피스아트의 두 지점과 새로운 비상주사무실 서비스를 효과적으로 소개하면서도 기존의 우수한 사용자 경험을 유지할 수 있습니다.