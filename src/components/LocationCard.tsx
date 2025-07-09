// src/components/LocationCard.tsx
import { LocationCardProps } from '@/types/location';
import { HiMapPin, HiPhone, HiClock } from 'react-icons/hi2';
import Card from './Card';
import LinkButton from './LinkButton';

export default function LocationCard({ location, href, className = '' }: LocationCardProps) {
  return (
    <Card className={`overflow-hidden p-0 ${className}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-heading-3 font-bold text-text-primary">{location.name}</h3> {/* Using heading-3 token */}
          <span className="text-caption bg-primary/10 text-primary px-2 py-1 rounded-full"> {/* Using caption token */}
            {location.walkingTime}
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <HiMapPin className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-body-small text-text-secondary">{location.address}</p> {/* Using body-small token */}
              <p className="text-body-small font-medium text-text-primary">{location.nearbyStation} 도보 {location.walkingTime}</p> {/* Using body-small token */}
            </div>
          </div>
          
          <div className="flex items-center">
            <HiPhone className="w-4 h-4 text-primary mr-2" />
            <a href={`tel:${location.phone}`} className="text-body-small text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded"> {/* Using body-small token */}
              {location.phone}
            </a>
          </div>
          
          <div className="flex items-center">
            <HiClock className="w-4 h-4 text-primary mr-2" />
            <span className="text-body-small text-text-secondary">운영시간: {location.operatingHours.weekdays}</span> {/* Using body-small token */}
          </div>
        </div>

        <div className="bg-background-main p-4 rounded-lg mb-6 border border-border-light">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-caption text-text-secondary mb-1">정기 이용권</p> {/* Using caption token */}
              <p className="text-heading-4 font-bold text-primary">{location.pricing.monthlyDesk.toLocaleString()}원</p> {/* Using heading-4 token */}
              <p className="text-caption text-text-secondary">월</p> {/* Using caption token */}
            </div>
            <div className="text-center">
              <p className="text-caption text-text-secondary mb-1">비상주 사무실</p> {/* Using caption token */}
              <p className="text-heading-4 font-bold text-primary">{location.pricing.nonResidentOffice.price.toLocaleString()}원</p> {/* Using heading-4 token */}
              <p className="text-caption text-text-secondary">월</p> {/* Using caption token */}
            </div>
          </div>
        </div>

        <p className="text-body-small text-text-secondary mb-6 line-clamp-2"> {/* Using body-small token */}
          {location.description}
        </p>

        <LinkButton 
          href={href}
          variant="primary" 
          size="base"
          className="w-full"
        >
          자세히 보기
        </LinkButton>
      </div>
    </Card>
  );
}