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
    default :"Home | Naxiums",
    template : "%s | Naxiums"
  } ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
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
