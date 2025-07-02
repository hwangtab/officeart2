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

// 성능 최적화된 버전 - CSS 애니메이션 사용
export default function CreatorChartOptimized() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const total = creatorData.reduce((sum, item) => sum + item.value, 0);
  
  // 정적 path 계산 (한 번만 계산)
  let cumulativeAngle = -90;
  const staticPaths = creatorData.map((item, index) => {
    const angle = (item.value / total) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;
    
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const x1 = 120 + 100 * Math.sin(startRad);
    const y1 = 120 - 100 * Math.cos(startRad);
    const x2 = 120 + 100 * Math.sin(endRad);
    const y2 = 120 - 100 * Math.cos(endRad);
    
    const largeArcFlag = angle <= 180 ? 0 : 1;
    const path = `M 120 120 L ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    
    cumulativeAngle = endAngle;
    
    return {
      path,
      color: COLORS[index],
      name: item.name,
      percent: (item.value / total) * 100,
      midAngle: startAngle + angle / 2,
      delay: index * 200, // 순차 애니메이션을 위한 지연
    };
  });

  const labelPositions = staticPaths.map((item) => {
    const angleRad = (item.midAngle * Math.PI) / 180;
    const radius = 75;
    return {
      x: 120 + radius * Math.sin(angleRad),
      y: 120 - radius * Math.cos(angleRad),
      textAnchor: Math.abs(angleRad) > Math.PI / 2 ? 'end' : 'start',
      ...item
    };
  });

  return (
    <div className="w-full">
      <SectionTitle as="h3" level="subsection" align="center">
        현재 입주 크리에이터 장르 분포
      </SectionTitle>
      
      <div className="relative w-full h-80">
        <svg viewBox="0 0 240 240" className="w-full h-full">
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
          </defs>

          {staticPaths.map((item, index) => (
            <path
              key={index}
              d={item.path}
              fill={item.color}
              stroke="#fff"
              strokeWidth="1.5"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                opacity: activeIndex === null || activeIndex === index ? 1 : 0.7,
                transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
                transformOrigin: 'center',
                transition: 'all 0.3s ease',
                filter: activeIndex === index ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' : 'none',
                // CSS 애니메이션으로 대체
                clipPath: isVisible ? 'circle(120px at 120px 120px)' : 'circle(0px at 120px 120px)',
                animationDelay: `${item.delay}ms`,
                animationDuration: '0.8s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animationFillMode: 'both',
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
              fontSize="12"
              dy="5"
              className="pointer-events-none"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.4s ease-out`,
                transitionDelay: `${1500 + index * 80}ms`,
              }}
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
              x="120"
              y="120"
              textAnchor="middle"
              fill="#333"
              fontSize="16"
              fontWeight="bold"
              style={{
                opacity: 1,
                transition: 'all 0.3s ease-in-out',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            >
              <tspan x="120" dy="-6">{staticPaths[activeIndex].name}</tspan>
              <tspan x="120" dy="18" fontSize="14" fill="#666">{`${staticPaths[activeIndex].percent.toFixed(0)}%`}</tspan>
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}