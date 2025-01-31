import { DATA_GOVERNANCE_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import DataGovernanceClient from "./DataGovernanceClient";

export const metadata: Metadata = {
  title: "Data Governance Blog",
  description: DATA_GOVERNANCE_PAGE_DESCRIPTION.description,
  keywords: DATA_GOVERNANCE_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title: "Data Governance: Ensuring Integrity and Security in Your Data",
    description: DATA_GOVERNANCE_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/data-governance",
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
    title: "Master Data Governance: How to Manage and Secure Your Data",
    description: DATA_GOVERNANCE_PAGE_DESCRIPTION.description,
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

const DataGovernance = () => {
  return <DataGovernanceClient />;
};

export default DataGovernance;
