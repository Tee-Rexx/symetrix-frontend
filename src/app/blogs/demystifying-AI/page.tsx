import { DEMYSTIFYING_AI_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import DemystifyingAiClient from "./DemystifyingAiClient";

export const metadata: Metadata = {
  title: "Demystifying AI Blog",
  description: DEMYSTIFYING_AI_PAGE_DESCRIPTION.description,
  keywords: DEMYSTIFYING_AI_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title: "Artificial Intelligence Explained: Demystifying AI for Everyone ",
    description: DEMYSTIFYING_AI_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/demystifying-AI",
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
    title: "Demystifying AI: How Artificial Intelligence Impacts Our World",
    description: DEMYSTIFYING_AI_PAGE_DESCRIPTION.description,
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

const DemystifyingAi = () => {
  return <DemystifyingAiClient />;
};

export default DemystifyingAi;
