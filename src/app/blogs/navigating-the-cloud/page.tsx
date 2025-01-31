import { NAVIGATING_THE_CLOUD_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import NavigatingTheCloudClient from "./NavigatingTheCloudClient";

export const metadata: Metadata = {
  title: "Navigating The Cloud Blog",
  description: NAVIGATING_THE_CLOUD_PAGE_DESCRIPTION.description,
  keywords: NAVIGATING_THE_CLOUD_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title: "Navigating the Cloud: A Guide to Cloud Computing and Its Benefits",
    description: NAVIGATING_THE_CLOUD_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/navigating-the-cloud",
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
    title: "Cloud Computing: Your Guide to Successfully Navigating the Cloud",
    description: NAVIGATING_THE_CLOUD_PAGE_DESCRIPTION.description,
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

const NavigatingTheCloud = () => {
  return <NavigatingTheCloudClient />;
};

export default NavigatingTheCloud;
