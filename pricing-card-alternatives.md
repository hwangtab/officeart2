# 가격 카드 레이아웃 개선 대안들

## 현재 적용된 개선안 (Option 1)
```tsx
<div className="grid grid-cols-2 gap-6">
  <div className="text-center">
    {/* 중앙 정렬로 균형감 개선 */}
  </div>
</div>
```

## 추가 개선 옵션들

### Option 2: 카드 스타일 개선
```tsx
<div className="grid grid-cols-2 gap-4">
  <div className="bg-white p-3 rounded-lg border border-border-light text-center">
    <p className="text-xs text-text-secondary mb-1">정기 이용권</p>
    <p className="text-lg font-bold text-primary">{price}원</p>
    <p className="text-xs text-text-secondary">월</p>
  </div>
</div>
```

### Option 3: 플렉스 레이아웃 사용
```tsx
<div className="flex justify-between items-center">
  <div className="flex-1 text-center">
    {/* 각 항목이 동일한 너비 차지 */}
  </div>
</div>
```

### Option 4: 세로 배치
```tsx
<div className="space-y-3">
  <div className="flex justify-between items-center">
    <span className="text-sm text-text-secondary">정기 이용권</span>
    <span className="font-bold text-primary">{price}원/월</span>
  </div>
</div>
```