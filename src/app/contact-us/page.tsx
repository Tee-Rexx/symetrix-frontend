import { CONTACTUS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: CONTACTUS_PAGE_DESCRIPTION.description,
  keywords: CONTACTUS_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Start Your Digital Journey - Reach Out to Naxiums",
    description: CONTACTUS_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/contact-us",
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
    title: "Start Your Digital Journey - Reach Out to Naxiums",
    description: CONTACTUS_PAGE_DESCRIPTION.description,
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

const ContactPage = () => {
  return <ContactUsClient />;
};

export default ContactPage;
