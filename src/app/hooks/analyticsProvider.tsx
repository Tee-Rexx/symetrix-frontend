"use client"; // Make sure this file is treated as client-side only

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation"; // Using next/navigation

// Function to track page load
let hasRun = false; // ✅ Track if the effect has already run
export const SendPageDataToDataLayer = (path: string, title: string) => {
  if (!path || path === "") {
    if (typeof window === "undefined" || hasRun) return;
  }

  hasRun = true; // ✅ Prevent it from running again

  const userAgent = navigator.userAgent.toLowerCase();
  let user_device = "desktop";

  if (
    /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    )
  ) {
    user_device = "mobile";
  } else if (/tablet|ipad/i.test(userAgent)) {
    user_device = "tablet";
  }

  window.dataLayer.push({
    event: "pageview",
    page_url: path ? window.location.origin + "/" + path : window.location.href,
    page_title: title ? title : document.title,
    device: user_device,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
  });
};

// const GTM_ID = "G-JDZLE3WYN2"; // Your Mesurement ID
const GTM_ID = "GTM-MWM7235V"; // Your GTM ID

// Load GTM (only once)
export const LoadGTM = (GTM_ID: string) => {
  const gtmId = GTM_ID;

  if (gtmId) {
    // Load the GTM JavaScript
    (function (w: any, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement; // Cast as HTMLScriptElement
      const dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode?.insertBefore(j, f);
    })(window, document, "script", "dataLayer", gtmId);

    // Inject noscript fallback dynamically
    injectNoScriptFallback(gtmId);
  }
};

const injectNoScriptFallback = (gtmId: string) => {
  const noscriptTag = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";

  noscriptTag.appendChild(iframe);
  document.body.appendChild(noscriptTag);
  SendPageDataToDataLayer("", "");
};

// PageAnalytics component
const PageAnalytics = () => {
  useEffect(() => {
    if(window?.dataLayer[0]?.event === 'gtm.js') return
    LoadGTM(GTM_ID);
  }, []); // ✅ Runs only once when the website loads

  return null;
};

export default PageAnalytics;
