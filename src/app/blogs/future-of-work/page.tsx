import { FUTURE_OF_WORK_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import FutureOfWorkClient from "./FutureOfWorkClient";

export const metadata: Metadata = {
  title: "Future Of Work Blog",
  description: FUTURE_OF_WORK_PAGE_DESCRIPTION.description,
  keywords: FUTURE_OF_WORK_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title: "The Future of Work: Preparing for a New Era of Business",
    description: FUTURE_OF_WORK_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/future-of-work",
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
    title: "Revolutionizing the Future of Work: What to Expect",
    description: FUTURE_OF_WORK_PAGE_DESCRIPTION.description,
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

const FutureOfWork = () => {
  return <FutureOfWorkClient />;
};

export default FutureOfWork;
