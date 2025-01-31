import { PORTFOLIO_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: PORTFOLIO_PAGE_DESCRIPTION.description,
  keywords: PORTFOLIO_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Our Journey in Web & Mobile Development | Naxiums",
    description: PORTFOLIO_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/portfolio",
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
    title: "Our Journey in Web & Mobile Development | Naxiums",
    description: PORTFOLIO_PAGE_DESCRIPTION.description,
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

const Page = () => {
  return <PortfolioClient />;
};

export default Page;
