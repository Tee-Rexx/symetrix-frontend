import { BLOCKCHAIN_BEYOND_BITCOIN_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import BlockchainBeyondBitcoindClient from "./BlockchainBeyondBitcoindClient";

export const metadata: Metadata = {
  title: "Blockchain Beyond Bitcoin Blog",
  description: BLOCKCHAIN_BEYOND_BITCOIN_PAGE_DESCRIPTION.description,
  keywords: BLOCKCHAIN_BEYOND_BITCOIN_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title: "Blockchain Beyond Bitcoin: The Revolution is Just Beginning",
    description: BLOCKCHAIN_BEYOND_BITCOIN_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/blockchain-beyond-bitcoin",
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
    title:
      "Blockchain Beyond Bitcoin: A Deep Dive into Its Real-World Applications",
    description: BLOCKCHAIN_BEYOND_BITCOIN_PAGE_DESCRIPTION.description,
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

const BlockchainBeyondBitcoin = () => {
  return <BlockchainBeyondBitcoindClient />;
};

export default BlockchainBeyondBitcoin;
