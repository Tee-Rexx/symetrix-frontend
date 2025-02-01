import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtmInitialized?: boolean;
    dataLayer: any[];
  }
}

// Function to track page load time
const trackPageLoadTime = () => {
  useEffect(() => {
    const performanceData = window.performance?.timing;
    const pageLoadTime =
      performanceData?.loadEventEnd - performanceData?.navigationStart;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_load_time",
      loadTime: (pageLoadTime || 0) / 1000, // Convert ms to seconds
      timestamp: new Date().toISOString(),
    });
  }, []);
};

// Function to track time spent on page
const trackPageStayTime = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState<number>(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const endTime = new Date().getTime();
        if (startTime) {
          setTimeSpent(timeSpent + (endTime - startTime));
        }
      } else {
        setStartTime(new Date().getTime());
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [startTime, timeSpent]);

  useEffect(() => {
    const start = new Date().getTime();
    setStartTime(start);

    return () => {
      if (startTime) {
        const timeSpentOnPage = new Date().getTime() - startTime;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "page_stay_time",
          timeSpentOnPage,
          timestamp: new Date().toISOString(),
        });
      }
    };
  }, [startTime]);
};

// Function to track referrer source
const trackReferrer = () => {
  useEffect(() => {
    const referrer = document.referrer;
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get("q"); // 'q' is the query parameter for Google search

    if (referrer.includes("google.com") && keyword) {
      window.dataLayer.push({
        event: "page_search_keywords",
        searchQuery: keyword,
        referrer: referrer,
        timestamp: new Date().toISOString(),
      });
    }
  }, []);
};

// Function to track page view
export const pageLoad = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  let user_device = "desktop";
  
  if (/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    user_device = "mobile";
  } else if (/tablet|ipad/i.test(userAgent)) {
    user_device = "tablet";
  }
  window.dataLayer.push({
    event: "pageview",
    page_url: window.location.href,
    page_title: document.title,
    device: user_device, // or 'mobile'
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    page_category: window.location.pathname.split("/")[1] || "home",
  });
};

const GTM_ID = "G-JDZLE3WYN2"; // Your GTM ID

// Load GTM
export const LoadGTM = () => {
    if (typeof window === "undefined" || window.gtmInitialized) return;

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
    window.gtmInitialized = true;
};

// Custom hook that calls all tracking functions
const usePageAnalytics = () => {
  LoadGTM(); // Load GTM only once
  // trackPageLoadTime(); // Track page load time
  // trackPageStayTime(); // Track page stay time
  
};

export default usePageAnalytics;
