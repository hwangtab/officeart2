'use client';
import SectionTitle from './SectionTitle';
import { useState, useEffect } from 'react';

const creatorData = [
  { name: '웹툰 작가', value: 35 },
  { name: '일러스트레이터', value: 25 },
  { name: '그래픽 디자이너', value: 20 },
  { name: '기타 창작자', value: 20 },
];

const COLORS = [
  'url(#webtoonGradient)',
  'url(#illustGradient)',
  'url(#designGradient)',
  'url(#etcGradient)'
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
  const [rotationAngle, setRotationAngle] = useState(-90);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationProgress(1);
    }, 100);
    
    const rotationTimer = setTimeout(() => {
      setRotationAngle(0);
    }, 300);
    
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(rotationTimer);
    };
  }, []);

  const total = creatorData.reduce((sum, item) => sum + item.value, 0);
  
  let startAngle = 0;
  const paths = creatorData.map((item, index) => {
    const angle = (item.value / total) * 360 * animationProgress;
    const endAngle = startAngle + angle;
    const path = calculateArcPath(startAngle, endAngle, 80, 100, 100);
    startAngle = endAngle;
    
    return {
      path,
      color: COLORS[index % COLORS.length],
      name: item.name,
      percent: (item.value / total) * 100,
      midAngle: startAngle - angle / 2,
    };
  });

  const labelPositions = paths.map((item) => {
    const angleRad = (item.midAngle * Math.PI) / 180;
    const radius = 60;
    return {
      x: 100 + radius * Math.sin(angleRad),
      y: 100 - radius * Math.cos(angleRad),
      textAnchor: Math.abs(angleRad) > Math.PI / 2 ? 'end' : 'start',
      ...item
    };
  });

  return (
    <div className="w-full">
      <SectionTitle as="h3" level="subsection" align="center">
        현재 입주 크리에이터 장르 분포
      </SectionTitle>
      
      <div className="relative w-full h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* 그라데이션 정의 */}
          <defs>
            <linearGradient id="webtoonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="100%" stopColor="#2A60B2" />
            </linearGradient>
            <linearGradient id="illustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#50E3C2" />
              <stop offset="100%" stopColor="#30A392" />
            </linearGradient>
            <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9013FE" />
              <stop offset="100%" stopColor="#7003CE" />
            </linearGradient>
            <linearGradient id="etcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" />
              <stop offset="100%" stopColor="#D58603" />
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
              strokeWidth="1"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ 
                opacity: activeIndex === null || activeIndex === index ? 1 : 0.5,
                transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                transformOrigin: 'center',
                transform: `rotate(${rotationAngle}deg)`,
              }}
            />
          ))}

          {labelPositions.map((label, index) => (
            <text
              key={index}
              x={label.x}
              y={label.y}
              textAnchor={label.textAnchor}
              fill="#333"
              fontSize="10"
              dy="5"
              className="pointer-events-none"
            >
              <tspan 
                x={label.x}
                dy="0" 
                textAnchor="middle"
                style={{
                  paintOrder: 'stroke',
                  stroke: 'white',
                  strokeWidth: '3px',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round'
                }}
              >
                {label.name}
              </tspan>
            </text>
          ))}

          {activeIndex !== null && (
            <text
              x="100"
              y="100"
              textAnchor="middle"
              fill="#333"
              fontSize="12"
              fontWeight="bold"
            >
              {`${paths[activeIndex].name} ${paths[activeIndex].percent.toFixed(0)}%`}
            </text>
          )}
        </svg>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        웹툰 작가, 일러스트레이터, 디자이너 등 다양한 분야의 창작자들이<br />
        오피스아트와 함께하고 있습니다. 개발자, 영상 크리에이터, 스타트업까지<br />
        서로 영감을 주고받으며 시너지를 창출하는 공간입니다.
      </div>
    </div>
  );
}