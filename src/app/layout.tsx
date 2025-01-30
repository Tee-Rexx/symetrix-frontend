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
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Naxiums",
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
        url: "https://c044-223-123-92-234.ngrok-free.app/images/share_link_card_image/dark-naxiums-large-og-image.jpg", // Change to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dark Naxiums Large OG Card Background",
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
        url: "https://c044-223-123-92-234.ngrok-free.app/images/share_link_card_image/dark-naxiums-large-og-image.jpg", // Change to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dark Naxiums Large OG Card Background",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="uGCL4ABi-ogOn9cCTFy0Nzv5UEpOJ_oMixjP9Cq7wZw"
        />
        {/* <!-- Additional Meta Tags --> */}
        <meta name="robots" content="index, follow" />{" "}
        {/* <!-- Ensure search engines index your site and follow the links --> */}
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />{" "}
        {/* <!-- Provides more control over snippets shown in search results --> */}
        <meta name="googlebot" content="index, follow" />
      </Head>
      <body style={{ backgroundColor: "#000" }} className={inter.className}>
        <Providers>
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
