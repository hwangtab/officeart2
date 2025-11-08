'use client';
import SectionTitle from './SectionTitle';
import { useState } from 'react';

const creatorData = [
  { name: '웹툰 작가', value: 35, color: '#4A90E2' },
  { name: '일러스트레이터', value: 25, color: '#50E3C2' },
  { name: '그래픽 디자이너', value: 22, color: '#9013FE' },
  { name: '기타 창작자', value: 18, color: '#FF8A65' },
];

interface PieSlice {
  startAngle: number;
  endAngle: number;
  midAngle: number;
  percent: number;
  name: string;
  color: string;
  path: string;
  labelX: number;
  labelY: number;
  textAnchor: 'start' | 'middle' | 'end';
}

export default function CreatorChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const total = creatorData.reduce((sum, item) => sum + item.value, 0);
  const centerX = 130;
  const centerY = 130;
  const radius = 100;
  const labelRadius = 130;

  // 파이 슬라이스 계산
  const slices: PieSlice[] = [];
  let currentAngle = -90; // 12시 방향부터 시작

  creatorData.forEach((item) => {
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const midAngle = currentAngle + angle / 2;

    // SVG 경로 계산
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArcFlag = angle > 180 ? 1 : 0;
    const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

    // 라벨 위치 계산
    const midRad = (midAngle * Math.PI) / 180;
    const labelX = centerX + labelRadius * Math.cos(midRad);
    const labelY = centerY + labelRadius * Math.sin(midRad);

    // 텍스트 정렬 결정
    let textAnchor: 'start' | 'middle' | 'end';
    if (midAngle >= -90 && midAngle < -30) {
      textAnchor = 'middle'; // 위쪽
    } else if (midAngle >= -30 && midAngle < 90) {
      textAnchor = 'start'; // 오른쪽
    } else if (midAngle >= 90 && midAngle < 150) {
      textAnchor = 'end'; // 오른쪽 아래
    } else if (midAngle >= 150 && midAngle < 210) {
      textAnchor = 'middle'; // 아래쪽
    } else {
      textAnchor = 'end'; // 왼쪽
    }

    slices.push({
      startAngle,
      endAngle,
      midAngle,
      percent: (item.value / total) * 100,
      name: item.name,
      color: item.color,
      path,
      labelX,
      labelY,
      textAnchor,
    });

    currentAngle += angle;
  });

  return (
    <div className="w-full">
      <SectionTitle as="h3" level="subsection" align="center">
        현재 입주 크리에이터 장르 분포
      </SectionTitle>

      <div className="relative w-full h-80">
        <svg viewBox="0 0 260 260" className="w-full h-full">
          {/* 파이 슬라이스 */}
          {slices.map((slice, index) => (
            <path
              key={`slice-${index}`}
              d={slice.path}
              fill={slice.color}
              stroke="#fff"
              strokeWidth="2"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                opacity: activeIndex === null || activeIndex === index ? 1 : 0.6,
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
            />
          ))}

          {/* 라벨 */}
          {slices.map((slice, index) => (
            <text
              key={`label-${index}`}
              x={slice.labelX}
              y={slice.labelY}
              textAnchor={slice.textAnchor}
              fill="#2D3748"
              fontSize="14"
              fontWeight="600"
              className="pointer-events-none"
              style={{
                paintOrder: 'stroke',
                stroke: 'white',
                strokeWidth: '3px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }}
            >
              {slice.name}
            </text>
          ))}

          {/* 중앙 툴팁 (호버 시) */}
          {activeIndex !== null && (
            <g>
              <circle
                cx={centerX}
                cy={centerY}
                r="40"
                fill="rgba(255, 255, 255, 0.95)"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="1"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                }}
              />

              <text
                x={centerX}
                y={centerY - 8}
                textAnchor="middle"
                fill="#2D3748"
                fontSize="14"
                fontWeight="bold"
              >
                {slices[activeIndex].name}
              </text>

              <text
                x={centerX}
                y={centerY + 12}
                textAnchor="middle"
                fill="#4A5568"
                fontSize="20"
                fontWeight="800"
              >
                {slices[activeIndex].percent.toFixed(0)}%
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
