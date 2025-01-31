import React from "react";
import { OUR_SERVICES_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import OurServiceClient from "./OurServiceClient";

export const metadata: Metadata = {
  title: "Our Services",
  description: OUR_SERVICES_PAGE_DESCRIPTION.description,
  keywords: OUR_SERVICES_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Innovative Web & App Solutions Tailored for You | Naxiums",
    description: OUR_SERVICES_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/our-services",
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
    title: "Innovative Web & App Solutions Tailored for You | Naxiums",
    description: OUR_SERVICES_PAGE_DESCRIPTION.description,
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

const Page: React.FC = () => {
  return <OurServiceClient />;
};

export default Page;
