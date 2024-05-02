"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme]= useState<any>()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(()=>{
    setTheme(resolvedTheme)
  },[resolvedTheme])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Check if scroll position is greater than 5% of viewport height
      if (position > window.innerHeight * 0.10) {
        setBgColor('black');
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid mb-5 w-full h-full relative mx-auto drawer lg-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className={`drawer-content bg-${bgColor} w-full bg-opacity-80 shadow-2xl -top-1 fixed flex flex-col transition-colors duration-300`}>
        <header className="text-gray-600 body-font">
          <div className="container-fluid mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
            <div className="flex items-center">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <Link
                href="/"
                className="flex title-font font-medium items-center text-gray-900 "
              >
                <Image
                  src="/images/website logo/logo.png"
                  alt="Logo Image"
                  width={50}
                  height={30}
                />
                <span
                  className="text-white ml-3 text-xl"
                >
                  Symetrix
                </span>
              </Link>
            </div>

            <div className="lg:flex hidden ">
              <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
                <Link href="/blogs" passHref>
                  <div
                    className="text-white ml-3 text-md"
                  >
                    First Link
                  </div>
                </Link>
                <Link href="/secondPage" passHref>
                  <div
                    className="text-white ml-3 text-md"
                  >
                    Second Link
                  </div>
                </Link>
                <Link href="/contactUs" passHref>
                  <div
                   className="text-white ml-3 text-md"
                  >
                    Contact Us
                  </div>
                </Link>
                <Link href="/fourthPage" passHref>
                  <div
                    className="text-white ml-3 text-md"
                  >
                    Fourth Link
                  </div>
                </Link>
              </nav>
              {/* <ThemeSwitch /> */}
            </div>
          </div>
        </header>
      </div>
      <div
        className="drawer-side"
      >
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="menu shadow-xl p-4 w-80 text-white"
          style={{
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "#191e24",
            top: "calc(50% - 215px)",
            height: "auto",
            position:'absolute',
            zIndex:99999
          }}
        >
          {/* Sidebar content here */}
          <li className="py-2">
            <Link href="/">First Link</Link>
          </li>
          <li className="py-2">
            <Link href="/fourthPage">Second Link</Link>
          </li>
          <li className="py-2">
            <Link href="/fourthPage">Third Link</Link>
          </li>
          <li className="py-2">
            <Link href="/fourthPage">Fourth Link</Link>
          </li>
          <li className="py-2">
          {/* <ThemeSwitch /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
