import { ABOUT_US_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us",
  description: ABOUT_US_PAGE_DESCRIPTION.description,
  keywords: ABOUT_US_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Discover Naxiums - Transforming Ideas into Digital Success",
    description: ABOUT_US_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/about-us",
    siteName: "Naxiums",
    images: [
      {
        url: "https://naxiums.com/images/share_link_card_image/dark-naxiums-large-og-image.jpg", // Change to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dark Naxiums Large OG Card Background",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Discover Naxiums - Transforming Ideas into Digital Success",
    description: ABOUT_US_PAGE_DESCRIPTION.description,
    images: [
      {
        url: "https://naxiums.com/images/share_link_card_image/dark-naxiums-large-og-image.jpg", // Change to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dark Naxiums Large OG Card Background",
      },
    ],
  },
};

const Page = () => {
  return <AboutUsClient />;
};

export default Page;
