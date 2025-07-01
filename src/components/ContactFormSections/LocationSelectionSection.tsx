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
}

export default function LocationSelectionSection({ 
  register, 
  errors, 
  setValue,
  searchParams 
}: LocationSelectionSectionProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

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
      }
    }
  }, [searchParams, setValue]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setValue('selectedLocation', location.id);
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
          <p className="text-warning-red text-sm mt-2">{errors.selectedLocation.message}</p>
        )}
      </div>

      {/* 서비스 타입 선택 */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          문의 서비스 <span className="text-primary">*</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <label className="cursor-pointer">
            <input
              type="radio"
              {...register('serviceType', { required: '서비스를 선택해주세요.' })}
              value="desk"
              className="sr-only"
            />
            <div className="p-4 border rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-2 has-[:checked]:ring-primary/20">
              <div className="text-2xl mb-2">💼</div>
              <h4 className="font-semibold text-text-primary mb-1">정기 이용권</h4>
              <p className="text-sm text-text-secondary">월 25만원</p>
            </div>
          </label>
          
          <label className="cursor-pointer">
            <input
              type="radio"
              {...register('serviceType')}
              value="non-resident"
              className="sr-only"
            />
            <div className="p-4 border rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-2 has-[:checked]:ring-primary/20 relative">
              <span className="absolute -top-2 -right-2 bg-accent-yellow text-text-primary text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
              <div className="text-2xl mb-2">🏢</div>
              <h4 className="font-semibold text-text-primary mb-1">비상주사무실</h4>
              <p className="text-sm text-text-secondary">월 3.3만원</p>
            </div>
          </label>
          
          <label className="cursor-pointer">
            <input
              type="radio"
              {...register('serviceType')}
              value="general"
              className="sr-only"
            />
            <div className="p-4 border rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-2 has-[:checked]:ring-primary/20">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-semibold text-text-primary mb-1">일반 문의</h4>
              <p className="text-sm text-text-secondary">기타 문의사항</p>
            </div>
          </label>
        </div>

        {errors.serviceType && (
          <p className="text-warning-red text-sm mt-2">{errors.serviceType.message}</p>
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