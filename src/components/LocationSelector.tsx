// src/components/LocationSelector.tsx
'use client';

import { LocationSelectorProps } from '@/types/location';
import { locations } from '@/data/locations';
import { HiMapPin, HiCheck } from 'react-icons/hi2';

export default function LocationSelector({ 
  onLocationSelect, 
  selectedLocation 
}: LocationSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-text-primary mb-2">
        방문 희망 지점 선택
      </label>
      <div className="grid md:grid-cols-2 gap-3">
        {locations.map((location) => (
          <button
            key={location.id}
            type="button"
            onClick={() => onLocationSelect(location)}
            className={`p-4 border rounded-lg transition-all duration-200 text-left ${
              selectedLocation?.id === location.id
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                : 'border-border-light hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-3">
                <HiMapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-text-primary">{location.name}</h4>
                  <p className="text-sm text-text-secondary">{location.nearbyStation} 도보 {location.walkingTime}</p>
                </div>
              </div>
              {selectedLocation?.id === location.id && (
                <HiCheck className="w-5 h-5 text-primary" />
              )}
            </div>
          </button>
        ))}
      </div>

      {selectedLocation && (
        <div className="mt-3 p-3 bg-background-main rounded-lg">
          <p className="text-sm text-text-secondary">
            선택된 지점: <span className="font-medium text-text-primary">{selectedLocation.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}