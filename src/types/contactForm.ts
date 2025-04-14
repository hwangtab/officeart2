// src/types/contactForm.ts

// Interface for the complete contact form data
export interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  visitDate: string;
  visitTime: string;
  inquiry: string;
  interest: string[];
  privacy: boolean;
}

// Interface for EmailJS template parameters
export interface EmailParams {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
  service: string;
  [key: string]: string; // Index signature for compatibility
}