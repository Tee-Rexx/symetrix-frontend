import { CYBERSECURITY_REMOTE_WORK_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { useEffect } from "react";
import { Metadata } from "next";
import CybersecurityClient from "./CybersecurityClient";

export const metadata: Metadata = {
  title: "Cybersecurity In The Remote Work Era Blog",
  description: CYBERSECURITY_REMOTE_WORK_PAGE_DESCRIPTION.description,
  keywords: CYBERSECURITY_REMOTE_WORK_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title:
      "Securing Your Remote Workforce: Cybersecurity Strategies for Success",
    description: CYBERSECURITY_REMOTE_WORK_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/cybersecurity-in-the-remote-work-era",
    siteName: "Naxiums",
    images: [
      {
        url: "https://naxiums.com/images/share_link_card_image/dark-naxiums-large-og-image.jpg", // Change to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dark Naxiums Large OG Card Background",
      },
      {
        url: "https://naxiums.com/images/share_link_card_image/dark-naxiums-small-og-image.jpg", // Change to your OG image URL
        width: 600,
        height: 315,
        alt: "Dark Naxiums Small OG Card Background",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Remote Work Era: Ensuring Cybersecurity in Your Workforce",
    description: CYBERSECURITY_REMOTE_WORK_PAGE_DESCRIPTION.description,
    images: [
      {
        url: "https://naxiums.com/images/share_link_card_image/dark-naxiums-large-og-image.jpg", // Change to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dark Naxiums Large OG Card Background",
      },
      {
        url: "https://naxiums.com/images/share_link_card_image/dark-naxiums-small-og-image.jpg", // Change to your OG image URL
        width: 600,
        height: 315,
        alt: "Dark Naxiums Small OG Card Background",
      },
    ],
  },
};

const CyberSecurityInTheRemoteWorkEra = () => {
  return <CybersecurityClient />;
};

export default CyberSecurityInTheRemoteWorkEra;
