# UnifiedButton 스타일 가이드라인

이 문서는 `UnifiedButton` 컴포넌트의 시각적 일관성과 재사용성을 보장하기 위한 스타일 가이드라인을 정의합니다. Tailwind CSS 클래스를 사용하여 각 variant, size, 상태별 스타일을 명시합니다.

## 1. 기본 스타일 (Base Styles)

모든 버튼 variant와 size에 공통적으로 적용되는 기본 스타일입니다.

```typescript
const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
```

*   **`inline-flex items-center justify-center`**: 내부 요소(텍스트, 아이콘)를 중앙 정렬합니다.
*   **`font-bold`**: 기본 폰트 두께를 bold로 설정합니다. (필요시 variant별로 재정의 가능)
*   **`rounded-lg`**: 버튼 모서리를 둥글게 처리합니다.
*   **`transition duration-300 ease-in-out`**: Hover 및 Focus 상태 전환 시 부드러운 애니메이션 효과를 적용합니다.
*   **`focus:outline-none`**: 기본 브라우저 포커스 아웃라인을 제거합니다. (커스텀 포커스 스타일 사용)
*   **`disabled:opacity-50 disabled:cursor-not-allowed`**: 비활성화 상태일 때 투명도를 낮추고 커서를 변경합니다.

## 2. 크기별 스타일 (Size Styles)

버튼의 크기를 정의합니다. 패딩과 폰트 크기를 조절합니다.

| Size   | Tailwind CSS Classes        | 설명                                   |
| :----- | :-------------------------- | :------------------------------------- |
| `sm`   | `py-1.5 px-4 text-sm`       | 작은 크기 버튼 (기존보다 약간 작게 조정) |
| `base` | `py-2.5 px-6 text-base`     | 기본 크기 버튼 (기존보다 약간 작게 조정) |
| `lg`   | `py-3 px-8 text-lg`         | 큰 크기 버튼                           |

## 3. 아이콘 간격 (Icon Gap)

`iconLeft` 또는 `iconRight` prop이 사용될 경우, 아이콘과 텍스트 사이의 간격을 정의합니다.

*   **`gap-2`**: 모든 버튼 크기에서 아이콘과 텍스트 사이에 `0.5rem` (8px) 간격을 적용합니다. `baseStyles`에 `gap-2`를 추가하거나, `cva` 구현 시 아이콘 존재 여부에 따라 조건부로 적용할 수 있습니다.

## 4. Variant 및 상태별 스타일 (Variant & State Styles)

각 버튼 variant의 기본 상태 및 상호작용(Hover, Focus, Disabled, Loading) 상태에 따른 스타일을 정의합니다.

| Variant        | Default State                                                                 | Hover State                                         | Focus State                                                              | Disabled State                               | Loading State (구현 제안)                                                                                                |
| :------------- | :---------------------------------------------------------------------------- | :-------------------------------------------------- | :----------------------------------------------------------------------- | :------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **`primary`**  | `bg-primary text-text-on-primary`                                             | `hover:bg-orange-600`                               | `focus:ring-2 focus:ring-primary focus:ring-offset-2`                    | `disabled:bg-primary`                        | `bg-primary text-text-on-primary` (Spinner: `text-text-on-primary`, 텍스트 숨김/투명도)                               |
| **`secondary`**| `bg-gray-200 text-text-primary`                                               | `hover:bg-gray-300`                               | `focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`                   | `disabled:bg-gray-200`                       | `bg-gray-200 text-text-primary` (Spinner: `text-text-primary`, 텍스트 숨김/투명도)                                    |
| **`outline`**  | `border border-border-light text-text-primary bg-transparent`                 | `hover:bg-gray-100`                               | `focus:ring-2 focus:ring-primary focus:ring-offset-2`                    | `disabled:border-border-light`               | `border border-border-light text-text-primary bg-transparent` (Spinner: `text-text-primary`, 텍스트 숨김/투명도)         |
| **`outlineWhite`**| `border border-white text-white bg-background-section`                      | `hover:bg-gray-100 hover:text-text-primary`         | `focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background-section` | `disabled:border-white disabled:text-white/50` | `border border-white text-white bg-background-section` (Spinner: `text-white`, 텍스트 숨김/투명도)                     |
| **`ghost`**    | `text-text-primary bg-transparent`                                            | `hover:bg-gray-100`                               | `focus:ring-2 focus:ring-primary focus:ring-offset-2`                    | `disabled:text-text-primary`                 | `text-text-primary bg-transparent` (Spinner: `text-text-primary`, 텍스트 숨김/투명도)                                |
| **`link`**     | `text-accent-blue bg-transparent underline underline-offset-4 font-medium`    | `hover:text-blue-600 hover:no-underline`            | `focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:rounded-sm` | `disabled:text-accent-blue`                  | `text-accent-blue bg-transparent` (Spinner: `text-accent-blue`, 텍스트 숨김/투명도)                                   |
| **`kakao`**    | `bg-kakao text-black`                                                         | `hover:brightness-95`                               | `focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2`                 | `disabled:bg-kakao`                          | `bg-kakao text-black` (Spinner: `text-black`, 텍스트 숨김/투명도)                                                      |
| **`naver`**    | `bg-naver-green text-white`                                                   | `hover:bg-naver-green-dark`                         | `focus:ring-2 focus:ring-naver-green focus:ring-offset-2`                | `disabled:bg-naver-green`                    | `bg-naver-green text-white` (Spinner: `text-white`, 텍스트 숨김/투명도)                                                |

**참고:**

*   **Focus Ring:** `focus:ring-2 focus:ring-offset-2`를 사용하여 접근성을 위한 명확한 포커스 상태를 제공합니다. `ring-offset-2`는 배경색과의 대비를 확보합니다. `outlineWhite`와 `link` variant는 배경 및 텍스트 색상에 맞춰 `ring` 및 `ring-offset` 색상을 조정했습니다.
*   **Loading 상태:** `isLoading` prop이 `true`일 때, 버튼 내부에 스피너 컴포넌트를 표시하는 것을 권장합니다. 이때 기존 `children` (텍스트 및 아이콘)은 시각적으로 숨기거나 (`opacity-0` 또는 `invisible`) 스피너 뒤로 배치하여 사용자가 로딩 중임을 인지할 수 있도록 합니다. 스피너의 색상은 각 variant의 텍스트 색상과 일치시키는 것이 좋습니다 (위 표의 'Loading State' 열 참고). `cva` 구현 시 `isLoading` 상태에 대한 복합 variant(compound variant) 또는 조건부 스타일링을 추가해야 합니다.
*   **`link` Variant:** `font-bold` 대신 `font-medium`을 사용하고, `hover` 시 밑줄을 제거하는 등 링크의 일반적인 스타일에 맞게 조정했습니다. 포커스 링도 약간 다르게 적용했습니다 (`focus:rounded-sm`).
*   **`outlineWhite` Variant:** `bg-background-section` (`#FFFFFF`)을 기본 배경색으로 지정하여 흰색 테두리가 보이도록 했습니다. 포커스 링 오프셋 색상도 배경색에 맞춰 조정했습니다.