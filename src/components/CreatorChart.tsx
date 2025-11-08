'use client';
import SectionTitle from './SectionTitle';
import { useState } from 'react';
import { motion } from 'framer-motion';

const creatorData = [
  { name: '웹툰 작가', value: 35 },
  { name: '일러스트레이터', value: 25 },
  { name: '그래픽 디자이너', value: 22 },
  { name: '기타 창작자', value: 18 },
];

// 시각적으로 더 자연스러운 색상 순서로 재배열
const COLORS = [
  'url(#webtoonGradient)',    // 파란색 (35% - 가장 큰 섹션)
  'url(#illustGradient)',     // 청록색 (25%)
  'url(#designGradient)',     // 보라색 (22%)
  'url(#etcGradient)'         // 주황색 (18% - 가장 작은 섹션)
];

function calculateArcPath(
  startAngle: number,
  endAngle: number,
  radius: number,
  centerX: number,
  centerY: number
): string {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  
  const x1 = centerX + radius * Math.sin(startRad);
  const y1 = centerY - radius * Math.cos(startRad);
  const x2 = centerX + radius * Math.sin(endRad);
  const y2 = centerY - radius * Math.cos(endRad);
  
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  
  return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
}

export default function CreatorChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const total = creatorData.reduce((sum, item) => sum + item.value, 0);

  // 시계방향으로 시작점을 12시 방향(-90도)으로 설정
  let cumulativeAngle = -90;
  const paths = creatorData.map((item, index) => {
    const fullAngle = (item.value / total) * 360;
    const endAngle = cumulativeAngle + fullAngle;
    const path = calculateArcPath(cumulativeAngle, endAngle, 100, 130, 130);

    const result = {
      path,
      color: COLORS[index % COLORS.length],
      name: item.name,
      percent: (item.value / total) * 100,
      midAngle: cumulativeAngle + fullAngle / 2,
    };

    cumulativeAngle += fullAngle;
    return result;
  });

  const labelPositions = paths.map((item) => {
    const angleRad = (item.midAngle * Math.PI) / 180;
    const radius = 75; // 차트와 안전한 거리 확보
    const x = 130 + radius * Math.sin(angleRad);
    const y = 130 - radius * Math.cos(angleRad);

    // 각도 기반 텍스트 정렬
    const angleDeg = item.midAngle;
    let textAnchor: 'start' | 'middle' | 'end' = 'middle';

    // 실제 섹션 위치에 맞춘 텍스트 정렬
    if (angleDeg >= -90 && angleDeg < 30) {
      textAnchor = 'middle'; // 위쪽 영역
    } else if (angleDeg >= 30 && angleDeg < 150) {
      textAnchor = 'start'; // 오른쪽 영역
    } else if (angleDeg >= 150 && angleDeg < 210) {
      textAnchor = 'middle'; // 아래쪽 영역
    } else {
      textAnchor = 'end'; // 왼쪽 영역
    }

    // 상하 라벨 위치 미세 조정
    let dy = 0;
    if (angleDeg >= -60 && angleDeg < 60) {
      dy = -5; // 위쪽 라벨 살짝 위로
    } else if (angleDeg >= 120 && angleDeg < 240) {
      dy = 5; // 아래쪽 라벨 살짝 아래로
    }

    return {
      x,
      y: y + dy,
      textAnchor,
      ...item
    };
  });

  return (
    <div className="w-full">
      <SectionTitle as="h3" level="subsection" align="center">
        현재 입주 크리에이터 장르 분포
      </SectionTitle>
      
      <div className="relative w-full h-80">
        <svg viewBox="0 0 260 260" className="w-full h-full">
          {/* 그라데이션 정의 */}
          <defs>
            <linearGradient id="webtoonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="50%" stopColor="#357ABD" />
              <stop offset="100%" stopColor="#2A60B2" />
            </linearGradient>
            <linearGradient id="illustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#50E3C2" />
              <stop offset="50%" stopColor="#40C9A7" />
              <stop offset="100%" stopColor="#30A392" />
            </linearGradient>
            <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9013FE" />
              <stop offset="50%" stopColor="#7E0BE6" />
              <stop offset="100%" stopColor="#7003CE" />
            </linearGradient>
            <linearGradient id="etcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8A65" />
              <stop offset="50%" stopColor="#FF7043" />
              <stop offset="100%" stopColor="#FF5722" />
            </linearGradient>
            
            {/* 툴팁 필터 */}
            <filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)" />
            </filter>
          </defs>

          {paths.map((item, index) => (
            <motion.path
              key={index}
              d={item.path}
              fill={item.color}
              stroke="#fff"
              strokeWidth="1.5"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: activeIndex === null || activeIndex === index ? 1 : 0.7,
                scale: activeIndex === index ? 1.03 : 1,
              }}
              transition={{
                opacity: { delay: 0.3 + index * 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                scale: { duration: 0.2 },
              }}
              onAnimationComplete={() => {
                if (index === paths.length - 1) {
                  setIsAnimationComplete(true);
                }
              }}
              style={{
                transformOrigin: 'center',
                filter: activeIndex === index ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' : 'none',
              }}
            />
          ))}

          {labelPositions.map((label, index) => (
            <motion.text
              key={index}
              x={label.x}
              y={label.y}
              textAnchor={label.textAnchor}
              fill="#2D3748"
              fontSize="13"
              fontWeight="600"
              className="pointer-events-none"
              initial={{
                opacity: 0,
                y: label.y + 10,
              }}
              animate={isAnimationComplete ? {
                opacity: 1,
                y: label.y,
              } : {}}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: 'easeOut',
              }}
              style={{
                paintOrder: 'stroke',
                stroke: 'white',
                strokeWidth: '4px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              }}
            >
              {label.name}
            </motion.text>
          ))}

          {activeIndex !== null && (
            <g
              style={{
                opacity: 1,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {/* 배경 원형 */}
              <circle
                cx="130"
                cy="130"
                r="35"
                fill="rgba(255, 255, 255, 0.95)"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="1"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                }}
              />
              
              {/* 메인 텍스트 */}
              <text
                x="130"
                y="125"
                textAnchor="middle"
                fill="#2D3748"
                fontSize="15"
                fontWeight="bold"
              >
                {paths[activeIndex].name}
              </text>
              
              {/* 퍼센트 텍스트 */}
              <text
                x="130"
                y="140"
                textAnchor="middle"
                fill="#4A5568"
                fontSize="18"
                fontWeight="800"
              >
                {`${paths[activeIndex].percent.toFixed(0)}%`}
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}