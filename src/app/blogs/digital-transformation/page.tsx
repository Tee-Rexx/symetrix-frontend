import { DIGITAL_TRANSFORMATION_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import DigitalTransformationClient from "./DigitalTransformationClient";

export const metadata: Metadata = {
  title: "Digital Transformation Blog",
  description: DIGITAL_TRANSFORMATION_PAGE_DESCRIPTION.description,
  keywords: DIGITAL_TRANSFORMATION_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Digital Transformation: Unlocking Innovation and Growth",
    description: DIGITAL_TRANSFORMATION_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs/digital-transformation",
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
    title: "Digital Transformation: Driving Business Innovation and Growth",
    description: DIGITAL_TRANSFORMATION_PAGE_DESCRIPTION.description,
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

const DigitalTransformation = () => {
  return <DigitalTransformationClient />;
};

export default DigitalTransformation;
