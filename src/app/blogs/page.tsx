import { BLOGS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blogs",
  description: BLOGS_PAGE_DESCRIPTION.description,
  keywords: BLOGS_PAGE_DESCRIPTION.keywords,
  openGraph: {
    title:
      "Explore Our Blogs: Insights on Technology, Business, and Innovation",
    description: BLOGS_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com/blogs",
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
      "Stay Updated with Naxiums Blogs: Cutting-Edge Tech and Business Trends",
    description: BLOGS_PAGE_DESCRIPTION.description,
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

export default function BlogPage() {
  return <BlogsClient />;
}
