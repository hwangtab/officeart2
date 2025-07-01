// src/types/location.ts

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  nearbyStation: string;
  walkingTime: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  transportation: {
    subway: {
      station: string;
      lines: string[];
      exit: string;
      walkingTime: string;
      description: string;
    };
    bus: {
      stopName: string;
      stopId: string;
      walkingTime: string;
      description: string;
    };
  };
  parking: {
    building: {
      hourly: string;
      monthly: string;
    };
    nearby: {
      name: string;
      rate: string;
      walkingTime: string;
    }[];
  };
  nearbyFacilities: {
    restaurants: {
      name: string;
      walkingTime: string;
    }[];
    convenience: {
      name: string;
      walkingTime: string;
    }[];
    services: {
      name: string;
      walkingTime: string;
    }[];
  };
  pricing: {
    monthlyDesk: number;
    nonResidentOffice: {
      price: number;
      minimumContract: string;
    };
  };
  operatingHours: {
    weekdays: string;
    weekends?: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  features: string[];
  description: string;
}

export interface LocationSelectorProps {
  onLocationSelect: (location: Location) => void;
  selectedLocation: Location | null;
}

export interface LocationCardProps {
  location: Location;
  href: string;
  className?: string;
}