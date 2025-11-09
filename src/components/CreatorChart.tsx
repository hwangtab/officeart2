'use client';
import SectionTitle from './SectionTitle';

const creatorData = [
  { name: '웹툰 작가', value: 35, color: '#4A90E2' },
  { name: '일러스트레이터', value: 25, color: '#50E3C2' },
  { name: '그래픽 디자이너', value: 22, color: '#9013FE' },
  { name: '기타 창작자', value: 18, color: '#FF8A65' },
];

export default function CreatorChart() {
  const total = creatorData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full">
      <SectionTitle as="h3" level="subsection" align="center">
        현재 입주 크리에이터 장르 분포
      </SectionTitle>

      <div className="max-w-2xl mx-auto space-y-6 mt-8">
        {creatorData.map((item, index) => {
          const percentage = (item.value / total) * 100;

          return (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* 헤더: 이름과 퍼센트 */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-semibold text-gray-800 text-lg">
                    {item.name}
                  </span>
                </div>
                <span className="text-2xl font-bold text-gray-700">
                  {percentage.toFixed(0)}%
                </span>
              </div>

              {/* 진행 바 */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
