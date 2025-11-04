interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
  hadRecentInput: boolean;
}

interface LayoutShift extends PerformanceEntry {
  entryType: 'layout-shift';
  hadRecentInput: boolean;
  lastInputTime: DOMHighResTimeStamp;
  sources: LayoutShiftAttribution[];
  value: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  entryType: 'first-input' | 'event';
  cancelable: boolean;
  processingStart: DOMHighResTimeStamp;
  processingEnd: DOMHighResTimeStamp;
  duration: DOMHighResTimeStamp;
  interactionId?: number;
}

// Google Analytics gtag function
interface Window {
  gtag?: (...args: unknown[]) => void;
}