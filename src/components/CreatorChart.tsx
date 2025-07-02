'use client';
import SectionTitle from './SectionTitle';
import { useState, useEffect } from 'react';

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
  const [animationProgress, setAnimationProgress] = useState(0);
  const [labelsVisible, setLabelsVisible] = useState(false);

  useEffect(() => {
    // 부드러운 원형 진행 애니메이션
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const duration = 1500; // 1.5초
      
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic 곡선 적용
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setAnimationProgress(easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // 애니메이션 완료 후 라벨 표시
        setTimeout(() => setLabelsVisible(true), 200);
      }
    };
    
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300); // 초기 지연
    
    return () => clearTimeout(timer);
  }, []);

  const total = creatorData.reduce((sum, item) => sum + item.value, 0);
  
  // 시계방향으로 시작점을 12시 방향(-90도)으로 설정
  let cumulativeAngle = -90;
  const paths = creatorData.map((item, index) => {
    const fullAngle = (item.value / total) * 360;
    
    // 현재 섹션이 그려져야 할 진행도 계산
    const sectionStart = index / creatorData.length;
    const sectionEnd = (index + 1) / creatorData.length;
    
    let currentAngle = 0;
    if (animationProgress > sectionStart) {
      const sectionProgress = Math.min((animationProgress - sectionStart) / (sectionEnd - sectionStart), 1);
      // 각 섹션에 easeOutQuart 적용
      const easedSectionProgress = 1 - Math.pow(1 - sectionProgress, 4);
      currentAngle = fullAngle * easedSectionProgress;
    }
    
    const endAngle = cumulativeAngle + currentAngle;
    const path = calculateArcPath(cumulativeAngle, endAngle, 100, 130, 130);
    
    const result = {
      path,
      color: COLORS[index % COLORS.length],
      name: item.name,
      percent: (item.value / total) * 100,
      midAngle: cumulativeAngle + fullAngle / 2,
      opacity: animationProgress > sectionStart ? 1 : 0,
    };
    
    cumulativeAngle += fullAngle;
    return result;
  });

  const labelPositions = paths.map((item) => {
    const angleRad = (item.midAngle * Math.PI) / 180;
    const radius = 90; // 75 → 90으로 증가하여 더 넉넉한 간격
    const x = 130 + radius * Math.sin(angleRad);
    const y = 130 - radius * Math.cos(angleRad);
    
    // 더 정확한 텍스트 정렬 계산
    let textAnchor: 'start' | 'middle' | 'end' = 'middle';
    if (x < 120) textAnchor = 'end';      // 왼쪽
    else if (x > 140) textAnchor = 'start'; // 오른쪽
    else textAnchor = 'middle';            // 상하단
    
    return {
      x,
      y,
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
            <path
              key={index}
              d={item.path}
              fill={item.color}
              stroke="#fff"
              strokeWidth="1.5"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ 
                opacity: item.opacity * (activeIndex === null || activeIndex === index ? 1 : 0.7),
                transition: 'opacity 0.3s ease, transform 0.2s ease',
                transformOrigin: 'center',
                transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
                filter: activeIndex === index ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' : 'none',
              }}
            />
          ))}

          {labelPositions.map((label, index) => (
            <text
              key={index}
              x={label.x}
              y={label.y}
              textAnchor={label.textAnchor}
              fill="#2D3748"
              fontSize="13"
              fontWeight="600"
              className="pointer-events-none"
              style={{
                opacity: labelsVisible ? 1 : 0,
                transition: 'all 0.4s ease-out',
                transitionDelay: `${index * 0.08}s`,
                transform: labelsVisible ? 'translateY(0)' : 'translateY(10px)',
                paintOrder: 'stroke',
                stroke: 'white',
                strokeWidth: '4px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              }}
            >
              {label.name}
            </text>
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