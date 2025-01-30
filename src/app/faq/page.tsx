import { FAQS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQs",
  description: FAQS_PAGE_DESCRIPTION.description,
  keywords: FAQS_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Naxiums Help Center - Your Questions, Answered",
    description: FAQS_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/faq",
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
    title: "Naxiums Help Center - Your Questions, Answered",
    description: FAQS_PAGE_DESCRIPTION.description,
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

const FAQPage = () => {
  return <FaqClient />;
};

export default FAQPage;
