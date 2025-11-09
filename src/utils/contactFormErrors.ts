import { ContactFormErrorCode, FeedbackMessage } from '@/types/contactForm';

// Detect error type from EmailJS error object
export function classifyEmailJSError(error: any): ContactFormErrorCode {
  const errorText = error?.text?.toLowerCase() || '';
  const errorStatus = error?.status || 0;

  // Network errors
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return ContactFormErrorCode.OFFLINE_ERROR;
  }

  if (errorStatus === 0 || errorText.includes('network') || errorText.includes('failed to fetch')) {
    return ContactFormErrorCode.NETWORK_ERROR;
  }

  if (errorText.includes('timeout')) {
    return ContactFormErrorCode.TIMEOUT_ERROR;
  }

  // Rate limiting
  if (errorStatus === 429 || errorText.includes('rate limit') || errorText.includes('too many requests')) {
    return ContactFormErrorCode.RATE_LIMIT_ERROR;
  }

  // Configuration errors
  if (errorText.includes('service_id') || errorText.includes('service id')) {
    return ContactFormErrorCode.SERVICE_ID_ERROR;
  }

  if (errorText.includes('template_id') || errorText.includes('template id')) {
    return ContactFormErrorCode.TEMPLATE_ID_ERROR;
  }

  if (errorText.includes('user_id') || errorText.includes('public_key') || errorText.includes('unauthorized')) {
    return ContactFormErrorCode.PUBLIC_KEY_ERROR;
  }

  // Validation errors
  if (errorStatus === 400 || errorText.includes('validation') || errorText.includes('invalid')) {
    return ContactFormErrorCode.VALIDATION_ERROR;
  }

  // Server errors
  if (errorStatus >= 500 || errorText.includes('server error') || errorText.includes('internal error')) {
    return ContactFormErrorCode.SERVER_ERROR;
  }

  return ContactFormErrorCode.UNKNOWN_ERROR;
}

// Generate user-friendly feedback message based on error code
export function generateFeedbackMessage(errorCode: ContactFormErrorCode): FeedbackMessage {
  const baseContactInfo = {
    phone: '0507-1335-3128',
    email: 'contact@kosmart.org',
    kakao: 'https://open.kakao.com/me/offceart',
  };

  switch (errorCode) {
    case ContactFormErrorCode.OFFLINE_ERROR:
      return {
        title: '인터넷 연결 끊김',
        message: '인터넷 연결을 확인하고 다시 시도해주세요.',
        actionLabel: '다시 시도',
        actionType: 'retry',
      };

    case ContactFormErrorCode.NETWORK_ERROR:
      return {
        title: '네트워크 오류',
        message: '네트워크 연결이 불안정합니다. 잠시 후 다시 시도하시거나 아래 연락처로 직접 문의해주시면 신속히 도와드리겠습니다.',
        actionLabel: '다시 시도',
        actionType: 'retry',
        contactInfo: baseContactInfo,
      };

    case ContactFormErrorCode.TIMEOUT_ERROR:
      return {
        title: '요청 시간 초과',
        message: '서버 응답이 지연되고 있습니다. 다시 시도하시거나 아래 연락처로 직접 문의해주시면 빠르게 도와드리겠습니다.',
        actionLabel: '다시 시도',
        actionType: 'retry',
        contactInfo: baseContactInfo,
      };

    case ContactFormErrorCode.RATE_LIMIT_ERROR:
      return {
        title: '일시적 전송 제한',
        message: '짧은 시간 내 여러 요청이 감지되었습니다. 잠시 후 다시 시도하시거나 아래 연락처로 직접 문의해주시면 즉시 상담해드리겠습니다.',
        actionLabel: '직접 연락하기',
        actionType: 'contact',
        contactInfo: baseContactInfo,
      };

    case ContactFormErrorCode.CONFIG_ERROR:
    case ContactFormErrorCode.SERVICE_ID_ERROR:
    case ContactFormErrorCode.TEMPLATE_ID_ERROR:
    case ContactFormErrorCode.PUBLIC_KEY_ERROR:
      return {
        title: '시스템 설정 오류',
        message: '일시적인 시스템 문제가 발생했습니다. 불편을 드려 죄송합니다. 아래 연락처로 직접 문의해주시면 신속히 도와드리겠습니다.',
        actionLabel: '연락처 확인',
        actionType: 'contact',
        contactInfo: baseContactInfo,
      };

    case ContactFormErrorCode.VALIDATION_ERROR:
      return {
        title: '입력 정보 오류',
        message: '입력하신 정보를 다시 확인해주세요. 문제가 계속되면 아래 연락처로 직접 문의 바랍니다.',
        actionLabel: '다시 입력',
        actionType: 'retry',
        contactInfo: baseContactInfo,
      };

    case ContactFormErrorCode.SERVER_ERROR:
      return {
        title: '서버 오류',
        message: '서버에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도하시거나 아래 연락처로 직접 문의해주시면 빠르게 도와드리겠습니다.',
        actionLabel: '직접 연락하기',
        actionType: 'contact',
        contactInfo: baseContactInfo,
      };

    case ContactFormErrorCode.UNKNOWN_ERROR:
    default:
      return {
        title: '전송 실패',
        message: '알 수 없는 오류가 발생했습니다. 다시 시도하시거나 아래 연락처로 직접 문의해주시면 신속히 도와드리겠습니다.',
        actionLabel: '다시 시도',
        actionType: 'retry',
        contactInfo: baseContactInfo,
      };
  }
}

// Check if error is retryable
export function isRetryableError(errorCode: ContactFormErrorCode): boolean {
  const retryableErrors = [
    ContactFormErrorCode.NETWORK_ERROR,
    ContactFormErrorCode.TIMEOUT_ERROR,
    ContactFormErrorCode.OFFLINE_ERROR,
    ContactFormErrorCode.SERVER_ERROR,
    ContactFormErrorCode.VALIDATION_ERROR,
    ContactFormErrorCode.UNKNOWN_ERROR,
  ];

  return retryableErrors.includes(errorCode);
}
