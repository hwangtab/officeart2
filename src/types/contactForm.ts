// src/types/contactForm.ts

// Interface for the complete contact form data
export interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  visitDate?: string; // Made optional
  visitTime?: string; // Made optional
  inquiry: string;
  interest: string[];
  privacy: boolean;
  selectedLocation?: string; // 지점 선택 추가
  serviceType?: 'desk' | 'non-resident' | 'general'; // 서비스 타입 추가
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
}

// Interface for EmailJS template parameters
export interface EmailParams {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  service: string;
  location?: string; // 지점 정보 추가
  serviceType?: string; // 서비스 타입 추가
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  [key: string]: string | undefined; // Index signature for compatibility with optional fields
}
