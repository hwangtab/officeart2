'use client'; // Required for Recharts

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Data for creator distribution chart (passed as props or defined here)
const creatorData = [
  { name: '웹툰 작가', value: 35 },
  { name: '일러스트레이터', value: 25 },
  { name: '그래픽 디자이너', value: 20 },
  { name: '기타 창작자', value: 20 },
];
// Define colors for the chart segments
const COLORS = ['#4A90E2', '#50E3C2', '#9013FE', '#F5A623']; // Example colors: Blue, Green, Purple, Orange

export default function CreatorChart() {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold mb-4">현재 입주 크리에이터 장르 분포</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={creatorData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name" // Add nameKey for Tooltip
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`} // Custom label
          >
            {creatorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Tooltip formatter={(value: any, name: any) => [`${value}%`, name]} /> {/* Show percentage in tooltip */}
          {/* <Legend /> */} {/* Legend can be added if needed */}
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 mt-2">(웹툰 35%, 일러스트 25%, 디자인 20%, 기타 20%)</p>
    </div>
  );
}