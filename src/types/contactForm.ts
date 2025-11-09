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

// Error code enumeration for structured error handling
export enum ContactFormErrorCode {
  // Network errors
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  OFFLINE_ERROR = 'OFFLINE_ERROR',

  // Configuration errors
  CONFIG_ERROR = 'CONFIG_ERROR',
  SERVICE_ID_ERROR = 'SERVICE_ID_ERROR',
  TEMPLATE_ID_ERROR = 'TEMPLATE_ID_ERROR',
  PUBLIC_KEY_ERROR = 'PUBLIC_KEY_ERROR',

  // EmailJS API errors
  RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',

  // Unknown errors
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

// Enhanced submit status with detailed metadata
export interface SubmitStatus {
  type: 'idle' | 'submitting' | 'success' | 'error';
  errorCode?: ContactFormErrorCode;
  errorMessage?: string;
  errorDetails?: string; // Technical details for debugging
  timestamp?: number;
  retryCount?: number;
  canRetry?: boolean;
}

// Configuration for feedback messages
export interface FeedbackMessage {
  title: string;
  message: string;
  actionLabel?: string;
  actionType?: 'retry' | 'contact' | 'external';
  contactInfo?: {
    phone?: string;
    email?: string;
    kakao?: string;
  };
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
