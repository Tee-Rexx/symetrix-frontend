declare global {
    interface Window {
      dataLayer: any[];
    }
  }

export function pushEvent(event: any): void {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(event);
    }
  }