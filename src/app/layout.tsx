import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";
import ScrollToTopButton from "./components/scrollToTopButton";
import Head from "next/head";
import { HOME_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import AnalyticsProvider from "./hooks/analyticsProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Innovative Solutions for Web & Mobile Apps | Naxiums",
    template: "%s | Naxiums",
  },
  description: HOME_PAGE_DESCRIPTION.description,
  keywords: HOME_PAGE_DESCRIPTION.keywords,

  openGraph: {
    title: "Naxiums - Web & Mobile App Development Experts",
    description: HOME_PAGE_DESCRIPTION.description,
    url: "https://naxiums.com",
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
    title: "Naxiums - Web & Mobile App Development Experts",
    description: HOME_PAGE_DESCRIPTION.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Naxiums",
    url: "https://naxiums.com",
    logo: "https://naxiums.com/images/website_logo/logo.png",
    sameAs: [
      "https://web.facebook.com/people/Naxiums/61565556024086/?mibextid=ZbWKwL",
      "https://x.com/naxiums?t=leg5jDdt6ompH5fkSeSzDg&s=08",
    ],
    description: `${HOME_PAGE_DESCRIPTION.description}`,
    department: [
      {
        "@type": "Department",
        name: "About Us",
        description: "About Naxiums, who we are and our mission.",
      },
      {
        "@type": "Department",
        name: "Our Services",
        description:
          "Offering innovative technology solutions across multiple domains.",
      },
      {
        "@type": "Department",
        name: "Portfolio",
        description: "Showcasing our successful projects and client work.",
      },
      {
        "@type": "Department",
        name: "Blogs",
        description: "Read the latest articles and updates from Naxiums.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "About Us",
        item: "https://naxiums.com/about-us",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://naxiums.com/contact-us",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Our Services",
        item: "https://naxiums.com/our-services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Portfolio",
        item: "https://naxiums.com/portfolio",
      },
    ],
  };

  return (
    <html lang="en">
      <Head>
        {/* Add Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="uGCL4ABi-ogOn9cCTFy0Nzv5UEpOJ_oMixjP9Cq7wZw"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <!-- Additional Meta Tags --> */}
        <meta name="robots" content="index, follow" />{" "}
        {/* <!-- Ensure search engines index your site and follow the links --> */}
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />{" "}
        {/* <!-- Provides more control over snippets shown in search results --> */}
        <meta name="googlebot" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}{" "}
        </script>
        <script type="application/ld+json">
          {" "}
          {JSON.stringify(breadcrumbSchema)}{" "}
        </script>
      </Head>
      <body style={{ backgroundColor: "#000" }} className={inter.className}>
        <Providers>
          <AnalyticsProvider /> 
          <NextTopLoader color="#2299DD" zIndex={1600} />
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
