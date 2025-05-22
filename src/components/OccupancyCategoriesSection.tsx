import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

interface CategoryItem {
  id: number;
  name: string;
  subItems: string[];
}

const OccupancyCategoriesSection = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      name: '웹툰/웹소설 작가',
      subItems: [
        '웹툰 작가',
        '웹소설 작가',
        '만화가',
        '시나리오 작가'
      ]
    },
    {
      id: 2,
      name: '일러스트레이터',
      subItems: [
        '디지털 일러스트레이터',
        '캐릭터 디자이너',
        '게임 원화가',
        '북커버 아티스트'
      ]
    },
    {
      id: 3,
      name: '콘텐츠 크리에이터',
      subItems: [
        '영상 크리에이터',
        'SNS 콘텐츠 제작자',
        '포토그래퍼',
        '인플루언서'
      ]
    },
    {
      id: 4,
      name: '기술 전문가',
      subItems: [
        '소프트웨어 개발자',
        'AI/머신러닝 엔지니어',
        '디지털 마케터',
        'UX/UI 디자이너'
      ]
    },
    {
      id: 5,
      name: '초기 창업가',
      subItems: [
        '스타트업 창업자',
        '소상공인',
        '1인 창업자',
        '소자본 창업자'
      ]
    },
    {
      id: 6,
      name: '금융 전문가',
      subItems: [
        '주식 트레이더',
        '부동산 투자자',
        '크립토 투자자',
        '재테크 전문가'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle level="section" align="center">
          오피스아트 입주 가능한 업종
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" data-testid="occupancy-categories">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.subItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccupancyCategoriesSection;