import { EXPLORING_EDGE_COMPUTING_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import ExploringEdgeComputingClient from "./ExploringEdgeComputingClient";

export const metadata: Metadata = {
  title: "Exploring Edge Computing Blog",
  description: EXPLORING_EDGE_COMPUTING_PAGE_DESCRIPTION.description,
  keywords: EXPLORING_EDGE_COMPUTING_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title: "Exploring Edge Computing: The Future of Data Processing",
    description: EXPLORING_EDGE_COMPUTING_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/exploring-edge-computing",
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
    title: "The Power of Edge Computing: Transforming Data Processing",
    description: EXPLORING_EDGE_COMPUTING_PAGE_DESCRIPTION.description,
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

const ExploringEdgeComputing = () => {
  return <ExploringEdgeComputingClient />;
};

export default ExploringEdgeComputing;
