"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SendPageDataToDataLayer } from "../hooks/analyticsProvider";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [theme, setTheme] = useState<any>();

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61565556024086&mibextid=ZbWKwL",
      icon: (
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      ),
      title: "Facebook",
      colorClass: "text-gray-500 hover:text-blue-600",
    },
    {
      href: "https://x.com/naxiums?t=leg5jDdt6ompH5fkSeSzDg&s=08",
      icon: (
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M3 2l8 10L3 22h3l8-10 8 10h3L13 12l8-10h-3l-8 10L6 2H3z"></path>
        </svg>
      ),
      title: "X (Twitter)",
      colorClass: "ml-3 text-gray-500 hover:text-white",
    },
    {
      href: "https://www.instagram.com/naxiums?igsh=cWN4aXl5Nm41YTky",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      ),
      title: "Instagram",
      colorClass: "ml-3 text-gray-500 hover:text-pink-500",
    },
    {
      href: "https://www.linkedin.com/company/naxiums",
      icon: (
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      ),
      title: "LinkedIn",
      colorClass: "ml-3 text-gray-500 hover:text-blue-700",
    },
  ];

  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <footer className="xl:container-fluid bg-black 2xl:container relative mx-auto flex items-center flex-col overflow-hidden">
      <div className="rounded-full sphere h-[300px] w-[300px] absolute top-14 lg:bottom-5 -start-10 lg:start-8 sm:start-16 2xl:start-16 bg-violet-600 opacity-20"></div>
      <div className="rounded-full sphere h-[450px] w-[450px] absolute -bottom-32 lg:-bottom-44 -end-12 sm:end-14 lg:end-0 2xl:end-16 bg-violet-600 opacity-25"></div>
 
      <div className="lg:items-start lg:flex-row w-full flex-col items-center flex py-24 flex-wrap">
        <div className="md:w-[60%] lg:w-96 z-10 px-8 sm:px-0 lg:ps-20 text-center md:text-left">
          <div className="flex w-full justify-center lg:justify-start lg:items-start">
            <Link
              href="/"
              className="flex title-font font-medium mb-6 items-center text-gray-900 "
            >
              <Image
                src="/images/website_logo/logo.png"
                alt="Logo Image"
                width={50}
                height={30}
              />
              <span className="text-white pe-5 md:pe-0 ml-3 text-2xl">
                Naxiums
              </span>
            </Link>
          </div>
          <p
            style={{ lineHeight: 1.7 }}
            className="mt-2 px-2 lg:px-0 lg:pr-4 w-full text-wrap text-sm text-gray-400"
          >
            We believe in turning bold ideas into reality through innovative
            technology. We specialize in crafting tailored solutions that drive
            efficiency, enhance user experience, and empower businesses to reach
            new heights. We transform complex challenges into seamless,
            intuitive software.
          </p>
        </div>
        
        <div className="flex-grow flex z-10 flex-wrap md:pl-20 -mb-10 lg:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full sm:px-4">
            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"> */}
            <h2 className="text-white mb-6  text-xl">Company Info</h2>
            <nav className="list-none mb-10">
              <li className="text-gray-600 mb-2 hover:text-gray-800">
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer("/about-us", "About Us | Naxiums")
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/about-us"
                  passHref
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer("/blogs", "Blogs | Naxiums")
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/blogs"
                  passHref
                >
                  Blogs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer(
                      "/contact-us",
                      "Contact Us | Naxiums"
                    )
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/contact-us"
                  passHref
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer("/faq", "Faq | Naxiums")
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/faq"
                  passHref
                >
                  FAQs
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full sm:px-4">
            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"> */}
            <h2 className="text-white mb-6  text-xl">Quick Links</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer(
                      "/contact-us",
                      "Contact Us | Naxiums"
                    )
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/contact-us"
                  passHref
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer(
                      "/our-services",
                      "Our Services | Naxiums"
                    )
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/our-services"
                  passHref
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    SendPageDataToDataLayer("/portfolio", "Portfolio | Naxiums")
                  }
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                  href="/portfolio"
                  passHref
                >
                  Portfolio
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full sm:px-4">
            <h2 className="text-white mb-6  text-xl">Contact</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a
                  href="tel:+923343739391"
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                >
                  (+92)334 3739391
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:nabeelshahzad752@gmail.com"
                  className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer"
                >
                  infonaxiums@gmail.com
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-200 transition ease-in-out duration-200 cursor-pointer">
                  Islamabad,Pakistan
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-black/60 w-full bg-opacity-20">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              COPYRIGHT©{currentYear}. All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {socialLinks.map(({ href, icon, title, colorClass }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className={`${colorClass} z-10 duration-200 ease-in-out`}
                  title={title}
                >
                  {icon}
                </a>
              ))}
            </span>
          </div>
        </div>
    </footer>
  );
};
export default Footer;
