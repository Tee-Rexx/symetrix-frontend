"use client"; // Make sure this file is treated as client-side only

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation"; // Using next/navigation

// Function to track page load
let hasRun = false;// ✅ Track if the effect has already run
export const SendPageDataToDataLayer = (path:string, title:string) => {
    
    if(!path || path === '') {
        if (typeof window === "undefined" || hasRun) return;
    }
  
      hasRun = true; // ✅ Prevent it from running again
  
      const userAgent = navigator.userAgent.toLowerCase();
      let user_device = "desktop";
  
      if (/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        user_device = "mobile";
      } else if (/tablet|ipad/i.test(userAgent)) {
        user_device = "tablet";
      }
  
      window.dataLayer.push({
        event: "pageview",
        page_url: path ? window.location.origin + '/' + path : window.location.href,
        page_title: title ? title : document.title,
        device: user_device,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      });
};

const GTM_ID = "G-JDZLE3WYN2"; // Your GTM ID

// Load GTM (only once)
export const LoadGTM = () => {
//   if (typeof window === "undefined" || window.gtmInitialized) return;

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
  SendPageDataToDataLayer('', '')
};

// PageAnalytics component
const PageAnalytics = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Get the current pathname from next/navigation

  useEffect(() => {
    // Only execute after the component has mounted on the client
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Wait for the component to be mounted
    if (isMounted && typeof window !== "undefined") {
      // Initialize GTM only on the first page load
      LoadGTM();
      //   pageLoad();

      // Track the page load on initial load
    }
  }, [isMounted, pathname]); // Re-run effect when pathname changes

  // Only render once mounted on the client
  if (!isMounted) return null;

  return null; // This component doesn't render anything
};

export default PageAnalytics;
