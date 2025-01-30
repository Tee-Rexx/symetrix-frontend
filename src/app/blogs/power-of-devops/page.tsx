import { POWER_OF_DEVOPS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import PowerOfDevOpsClient from "./PowerOfDevOpsClient";

export const metadata: Metadata = {
  title: "Power Of Dev Ops Blog",
  description: POWER_OF_DEVOPS_PAGE_DESCRIPTION.description,
  keywords: POWER_OF_DEVOPS_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title:
      "The Power of DevOps: Revolutionizing the Way Teams Build and Deploy",
    description: POWER_OF_DEVOPS_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/power-of-devops",
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
    title: "DevOps: How It Revolutionizes Software Development and Deployment",
    description: POWER_OF_DEVOPS_PAGE_DESCRIPTION.description,
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

const PowerOfDevOps = () => {
  return <PowerOfDevOpsClient />;
};

export default PowerOfDevOps;
