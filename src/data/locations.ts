// src/data/locations.ts
import { Location } from '@/types/location';

export const locations: Location[] = [
  {
    id: 'yeongdeungpo',
    name: '영등포구청점',
    address: '서울특별시 영등포구 양산로 96 A213호',
    phone: '0507-1335-3128',
    email: 'contact@officeart.co.kr',
    nearbyStation: '영등포구청역',
    walkingTime: '5분',
    coordinates: {
      lat: 37.523806772049696,
      lng: 126.89100097651672
    },
    transportation: {
      subway: {
        station: '영등포구청역',
        lines: ['2호선', '5호선'],
        exit: '6번 출구',
        walkingTime: '5분',
        description: '6번 출구에서 도보 약 5분 거리입니다.'
      },
      bus: {
        stopName: '영등포구청',
        stopId: '19852',
        walkingTime: '3분',
        description: '도보로 약 3분 거리입니다.'
      }
    },
    parking: {
      building: {
        hourly: '2,000원',
        monthly: '10만원'
      },
      nearby: [
        {
          name: '영등포구청역 공영주차장',
          rate: '시간당 1,200원',
          walkingTime: '5분'
        }
      ]
    },
    nearbyFacilities: {
      restaurants: [
        { name: '스타벅스 영등포구청역점', walkingTime: '3분' },
        { name: '다양한 한식/분식/중식당', walkingTime: '5분 이내' },
        { name: '맥도날드, 서브웨이 등 패스트푸드', walkingTime: '5-7분' }
      ],
      convenience: [
        { name: 'GS25, CU 편의점', walkingTime: '1분' },
        { name: '영등포전통시장', walkingTime: '10분' },
        { name: '롯데마트 양평점', walkingTime: '15분' }
      ],
      services: [
        { name: '주요 은행 (국민, 신한, 우리 등)', walkingTime: '5분 이내' },
        { name: '약국', walkingTime: '3분 이내' },
        { name: '영등포구청', walkingTime: '5분' },
        { name: '우체국', walkingTime: '7분' }
      ]
    },
    pricing: {
      monthlyDesk: 250000,
      nonResidentOffice: {
        price: 33000,
        minimumContract: '6개월'
      }
    },
    operatingHours: {
      weekdays: '24시간'
    },
    images: {
      hero: '/images/hero/hero-background.jpg',
      gallery: [
        '/images/gallery/main-hero-bg.jpeg',
        '/images/gallery/premium-chair.jpg',
        '/images/gallery/l-shape-desk.jpg',
        '/images/gallery/focus-environment.jpg',
        '/images/gallery/creator-community.jpg'
      ]
    },
    features: [
      '180만원 프리미엄 의자 (스틸케이스 Think, 휴먼스케일 Freedom)',
      'L형 책상 (160cm × 120cm)',
      '무제한 커피 및 음료',
      '24시간 출입 가능',
      '복합기 무제한 사용',
      '회의실 이용 가능',
      '고속 Wi-Fi',
      '개인 사물함 제공'
    ],
    description: '영등포구청역에서 도보 5분 거리에 위치한 프리미엄 공유오피스입니다. 180만원대 프리미엄 의자와 넓은 L형 책상으로 최적의 작업 환경을 제공합니다.'
  },
  {
    id: 'bulgwang',
    name: '불광점',
    address: '서울 은평구 통일로 68길 4, 302호',
    phone: '0507-1335-3128',
    email: 'contact@kosmart.org',
    nearbyStation: '불광역',
    walkingTime: '2분',
    coordinates: {
      lat: 37.610691,
      lng: 126.929888
    },
    transportation: {
      subway: {
        station: '불광역',
        lines: ['3호선', '6호선'],
        exit: '2번 출구',
        walkingTime: '2분',
        description: '2번 출구에서 도보 약 2분 거리입니다.'
      },
      bus: {
        stopName: '불광역',
        stopId: '12021',
        walkingTime: '2분',
        description: '도보로 약 2분 거리입니다.'
      }
    },
    parking: {
      building: {
        hourly: '골목주차 가능',
        monthly: '골목주차 가능'
      },
      nearby: [
        {
          name: '서울혁신파크 주차장',
          rate: '1시간 3,000원',
          walkingTime: '5분'
        },
        {
          name: '서울기록원 주차장',
          rate: '1시간 1,500원',
          walkingTime: '7분'
        },
        {
          name: 'NC백화점 주차장',
          rate: '1시간 2,000원',
          walkingTime: '5분'
        }
      ]
    },
    nearbyFacilities: {
      restaurants: [
        { name: '스타벅스 불광역점', walkingTime: '1분' },
        { name: '다양한 한식/일식/중식당', walkingTime: '3분 이내' },
        { name: '버거킹', walkingTime: '1분' }
      ],
      convenience: [
        { name: 'GS25, 세븐일레븐 편의점', walkingTime: '1분' },
        { name: '대조시장', walkingTime: '5분' },
        { name: '연서시장', walkingTime: '10분' }
      ],
      services: [
        { name: '주요 은행 (국민, 신한, 우리 등)', walkingTime: '3분 이내' },
        { name: '약국', walkingTime: '2분 이내' },
        { name: '은평구청', walkingTime: '10분' },
        { name: '우체국', walkingTime: '5분' }
      ]
    },
    pricing: {
      monthlyDesk: 250000,
      nonResidentOffice: {
        price: 33000,
        minimumContract: '6개월'
      }
    },
    operatingHours: {
      weekdays: '24시간'
    },
    images: {
      hero: '/images/hero/hero-background.jpg',
      gallery: [
        '/images/gallery/main-hero-bg.jpeg',
        '/images/gallery/premium-chair.jpg',
        '/images/gallery/l-shape-desk.jpg',
        '/images/gallery/focus-environment.jpg',
        '/images/gallery/creator-community.jpg'
      ]
    },
    features: [
      '180cm 초대형 책상',
      '넓고 안락한 작업 환경',
      '무제한 커피 및 음료',
      '24시간 출입 가능',
      '복합기 무제한 사용',
      '회의실 이용 가능',
      '고속 Wi-Fi',
      '개인 사물함 제공'
    ],
    description: '불광역에서 도보 2분 거리에 위치한 프리미엄 공유오피스입니다. 180cm 초대형 책상과 안락한 환경을 제공합니다.'
  }
];

export const getLocationById = (id: string): Location | undefined => {
  return locations.find(location => location.id === id);
};

export const getDefaultLocation = (): Location => {
  return locations[0]; // 영등포구청점을 기본값으로
};