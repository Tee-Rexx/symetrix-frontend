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
  title: "Home | Naxiums",
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
        <meta
          name="description"
          content="Naxiums is a leading IT company specializing in creating innovative website and mobile applications. We develop mobile apps using Kotlin and React Native, and websites using Angular, React, Next.js, and Vue.js."
        />
        <meta
          name="keywords"
          content="Naxiums, IT services, website development, mobile app development, Kotlin, React Native, Angular, React, Next.js, Vue.js, web applications, mobile applications"
        />
        <meta name="author" content="Naxiums" />
        {/* You can also include other meta tags or link tags here */}
        {/* <!-- Open Graph Meta Tags (for social media sharing) --> */}
        <meta property="og:title" content="Naxiums - Innovative IT Solutions" />
        <meta
          property="og:description"
          content="Naxiums offers cutting-edge IT services, including mobile app development with Kotlin and React Native, and website development with Angular, React, Next.js, and Vue.js."
        />
        <meta property="og:url" content="https://www.naxiums.com/" />
        <meta
          property="og:image"
          content="../../public/images/share_link_card_image/card_image.jpg"
        />{" "}
        {/* <!-- Ensure you have an appropriate image --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Naxiums" />

        {/* Twitter share card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Naxiums - Innovative IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Naxiums provides advanced IT services, including mobile and web application development using Kotlin, React Native, Angular, React, Next.js, and Vue.js."
        />
        <meta
          name="twitter:image"
          content="../../public/images/share_link_card_image/card_image.jpg"
        />
        <meta name="twitter:site" content="@Naxiums" />
        <meta name="twitter:creator" content="@Naxiums" />
        
        
        {/* Instagram share card meta tags */}
        <meta name="instagram:card" content="summary_large_image" />
        <meta
          name="instagram:title"
          content="Naxiums - Innovative IT Solutions"
        />
        <meta
          name="instagram:description"
          content="Naxiums provides advanced IT services, including mobile and web application development using Kotlin, React Native, Angular, React, Next.js, and Vue.js."
        />
        <meta
          name="instagram:image"
          content="../../public/images/share_link_card_image/card_image.jpg"
        />
        <meta name="instagram:site" content="@Naxiums" />
        <meta name="instagram:creator" content="@Naxiums" />



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
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
