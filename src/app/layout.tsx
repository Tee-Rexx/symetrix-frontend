import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Symetrix Solution",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <NextTopLoader color="#2299DD" zIndex={1600} />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
