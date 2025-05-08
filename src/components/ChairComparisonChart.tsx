'use client'; // Required for Recharts

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Data for the comparison radar chart
const comparisonData = [
  { subject: '등 지지력', A: 60, B: 90, fullMark: 100 }, // A: 일반 의자, B: 프리미엄 의자
  { subject: '자세 교정', A: 40, B: 85, fullMark: 100 },
  { subject: '장시간 편안함', A: 50, B: 95, fullMark: 100 },
  { subject: '내구성', A: 70, B: 90, fullMark: 100 },
  { subject: '조절 가능성', A: 30, B: 80, fullMark: 100 },
];

export default function ChairComparisonChart() {
  return (
    <div className="bg-white p-4 rounded shadow h-[300px] flex-grow">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={comparisonData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} /> {/* Smaller font size for ticks */}
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} /> {/* Hide radius axis */}
          <Radar name="일반 의자" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="프리미엄 의자" dataKey="B" stroke="#4A90E2" fill="#4A90E2" fillOpacity={0.6} /> {/* 색상 변경: primary-blue */}
          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} /> {/* Smaller legend font and padding */}
          <Tooltip contentStyle={{ fontSize: '12px' }} /> {/* Smaller tooltip font */}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}