"use client";

declare global {
    interface Window {
      gtmInitialized?: boolean; // ✅ Extend Window type
    }
  }

import { useEffect } from "react";

const GTM_ID = "G-JDZLE3WYN2"; // Your GTM ID

const GTM = () => {
  useEffect(() => {
    if (typeof window === "undefined" || window.gtmInitialized) return;

    window.gtmInitialized = true; // ✅ Prevent multiple executions
    window.dataLayer = window.dataLayer || [];
    
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", GTM_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default GTM;
