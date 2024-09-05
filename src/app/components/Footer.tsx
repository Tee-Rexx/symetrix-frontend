"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  const { resolvedTheme } = useTheme();

  const [theme, setTheme] = useState<any>();

  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="md:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              className="flex title-font font-medium mb-6 items-center text-gray-900 "
            >
              <Image
                src="/images/website logo/logo.png"
                alt="Logo Image"
                width={50}
                height={30}
              />
              <span className="text-white ml-3 text-2xl">Naxiums</span>
            </Link>
            <p
              style={{ lineHeight: 1.7 }}
              className="mt-2 pr-4 w-full text-sm text-gray-500"
            >
              We believe in turning bold ideas into reality through innovative
              technology. We specialize in crafting tailored solutions that
              drive efficiency, enhance user experience, and empower businesses
              to reach new heights. We transform complex challenges into
              seamless, intuitive software.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full sm:px-4">
              {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"> */}
              <h2 className="text-white mb-6  text-xl">Company Info</h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 mb-2 hover:text-gray-800">
                  <Link
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="/blogs"
                    passHref
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="/contactUs"
                    passHref
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
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
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="/ourServices"
                    passHref
                  >
                    Our Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="/contactUs"
                    passHref
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
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
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    (+92)334 3739391
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="mailto:nabeelshahzad752@gmail.com"
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    infonaxiums@gmail.com
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Islamabad,Pakistan
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              COPYRIGHT©2024. All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* <!-- Facebook --> */}
              <a href="https://www.facebook.com/profile.php?id=61565556024086&mibextid=ZbWKwL" target="_blank" className="text-gray-500 hover:text-blue-600" title="Facebook">
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
              </a>

              {/* <!-- X (formerly Twitter) --> */}
              <a
              href="https://x.com/naxiums?t=leg5jDdt6ompH5fkSeSzDg&s=08" target="_blank"
                className="ml-3 text-gray-500 hover:text-black"
                title="X (Twitter)"
              >
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
              </a>

              {/* <!-- Instagram --> */}
              <a
              href="https://www.instagram.com/naxiums?igsh=cWN4aXl5Nm41YTky" target="_blank"
                className="ml-3 text-gray-500 hover:text-pink-500"
                title="Instagram"
              >
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
              </a>

              {/* <!-- LinkedIn --> */}
              <a
              href="https://www.linkedin.com/company/naxiums" target="_blank"
                className="ml-3 text-gray-500 hover:text-blue-700"
                title="LinkedIn"
              >
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
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
