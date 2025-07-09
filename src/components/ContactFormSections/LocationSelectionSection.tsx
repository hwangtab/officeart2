// src/components/ContactFormSections/LocationSelectionSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { locations, getLocationById } from '@/data/locations';
import { Location } from '@/types/location';
import { ContactFormData } from '@/types/contactForm';
import { HiMapPin, HiCheck } from 'react-icons/hi2';

interface LocationSelectionSectionProps {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  setValue: UseFormSetValue<ContactFormData>;
  searchParams?: URLSearchParams | null;
  onAutoFillInquiry?: (text: string) => void;
}

export default function LocationSelectionSection({ 
  register, 
  errors, 
  setValue,
  searchParams,
  onAutoFillInquiry
}: LocationSelectionSectionProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');

  // URL 파라미터에서 location과 service 정보 읽기
  useEffect(() => {
    if (searchParams) {
      const locationId = searchParams.get('location');
      const service = searchParams.get('service');
      
      if (locationId) {
        const location = getLocationById(locationId);
        if (location) {
          setSelectedLocation(location);
          setValue('selectedLocation', locationId);
        }
      }
      
      if (service) {
        setValue('serviceType', service as 'desk' | 'non-resident' | 'general');
        setSelectedService(service);
      }
    }
  }, [searchParams, setValue]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setValue('selectedLocation', location.id);
    
    // 자동 입력 텍스트 생성
    if (onAutoFillInquiry) {
      const autoText = `${location.name} 방문 희망합니다.`;
      onAutoFillInquiry(autoText);
    }
  };

  const handleServiceSelect = (serviceType: string) => {
    console.log('Service selected:', serviceType); // 디버깅용
    setSelectedService(serviceType);
    setValue('serviceType', serviceType as 'desk' | 'non-resident' | 'general');
    
    // 자동 입력 텍스트 생성
    if (onAutoFillInquiry) {
      let autoText = '';
      switch (serviceType) {
        case 'desk':
          autoText = '정기 이용권(월 25만원)에 대해 문의드립니다.';
          break;
        case 'non-resident':
          autoText = '비상주 사무실(월 3.3만원)에 대해 문의드립니다.';
          break;
        case 'general':
          autoText = '일반 문의사항이 있습니다.';
          break;
      }
      console.log('Auto text:', autoText); // 디버깅용
      onAutoFillInquiry(autoText);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          방문 희망 지점 <span className="text-primary">*</span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {locations.map((location) => (
            <label key={location.id} className="cursor-pointer">
              <input
                type="radio"
                {...register('selectedLocation', { required: '지점을 선택해주세요.' })}
                value={location.id}
                checked={selectedLocation?.id === location.id}
                onChange={() => handleLocationSelect(location)}
                className="sr-only"
              />
              <div className={`p-4 border rounded-lg transition-all duration-200 ${
                selectedLocation?.id === location.id
                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                  : 'border-border-light hover:border-primary/50 hover:bg-primary/5'
              }`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    <HiMapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-text-primary">{location.name}</h4>
                      <p className="text-sm text-text-secondary mb-2">{location.nearbyStation} 도보 {location.walkingTime}</p>
                      <p className="text-xs text-text-secondary">{location.address}</p>
                    </div>
                  </div>
                  {selectedLocation?.id === location.id && (
                    <HiCheck className="w-5 h-5 text-primary" />
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>

        {errors.selectedLocation && (
          <p className="text-error text-sm mt-2">{errors.selectedLocation.message}</p>
        )}
      </div>

      {/* 서비스 타입 선택 */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          문의 서비스 <span className="text-primary">*</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <label className="cursor-pointer" onClick={() => handleServiceSelect('desk')}>
            <input
              type="radio"
              {...register('serviceType', { required: '서비스를 선택해주세요.' })}
              value="desk"
              checked={selectedService === 'desk'}
              className="sr-only"
            />
            <div className={`p-4 border rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 ${
              selectedService === 'desk' 
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                : 'border-border-light'
            }`}>
              <div className="text-2xl mb-2">💼</div>
              <h4 className="font-semibold text-text-primary mb-1">정기 이용권</h4>
              <p className="text-sm text-text-secondary">월 25만원</p>
            </div>
          </label>
          
          <label className="cursor-pointer" onClick={() => handleServiceSelect('non-resident')}>
            <input
              type="radio"
              {...register('serviceType')}
              value="non-resident"
              checked={selectedService === 'non-resident'}
              className="sr-only"
            />
            <div className={`p-4 border rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 relative ${
              selectedService === 'non-resident' 
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                : 'border-border-light'
            }`}>
              <span className="absolute -top-2 -right-2 bg-accent-yellow text-text-primary text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
              <div className="text-2xl mb-2">🏢</div>
              <h4 className="font-semibold text-text-primary mb-1">비상주 사무실</h4>
              <p className="text-sm text-text-secondary">월 3.3만원</p>
            </div>
          </label>
          
          <label className="cursor-pointer" onClick={() => handleServiceSelect('general')}>
            <input
              type="radio"
              {...register('serviceType')}
              value="general"
              checked={selectedService === 'general'}
              className="sr-only"
            />
            <div className={`p-4 border rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 ${
              selectedService === 'general' 
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                : 'border-border-light'
            }`}>
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-semibold text-text-primary mb-1">일반 문의</h4>
              <p className="text-sm text-text-secondary">기타 문의사항</p>
            </div>
          </label>
        </div>

        {errors.serviceType && (
          <p className="text-error text-sm mt-2">{errors.serviceType.message}</p>
        )}
      </div>

      {selectedLocation && (
        <div className="mt-4 p-4 bg-background-main rounded-lg">
          <h4 className="font-semibold text-text-primary mb-2">선택된 지점 정보</h4>
          <div className="text-sm text-text-secondary space-y-1">
            <p><span className="font-medium">지점:</span> {selectedLocation.name}</p>
            <p><span className="font-medium">주소:</span> {selectedLocation.address}</p>
            <p><span className="font-medium">연락처:</span> {selectedLocation.phone}</p>
            <p><span className="font-medium">운영시간:</span> 평일 {selectedLocation.operatingHours.weekdays}</p>
          </div>
        </div>
      )}
    </div>
  );
}