"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SIDEBAR_MENU } from "@/utils/constants/header.constants";
import Icon  from '../../utils/Icons'

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<any>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [activeLink, setActiveLink] = useState<string>('');
  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    getActiveLink()
  }, []);

  const getActiveLink = () => {
    setActiveLink(window.location.pathname ?? '/')
  }

  const handleLinkClick = (url: string) => {
    const checkbox = document.getElementById("my-drawer-3") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    if(url){
      setActiveLink(url); // Set the active link when a link is clicked
    }
  };


  return (
    <div className="container-fluid mb-5 w-full h-12 relative z-10 mx-auto drawer lg-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div
        className={`drawer-content bg-black w-full shadow-2xl fixed flex flex-col`}
      >
        <header className="text-gray-600 relative body-font">
          <div className="container-fluid mx-auto px-0 md:px-20 flex flex-wrap py-3 sm:p-5 justify-between flex-row items-center">
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
                onClick={() => handleLinkClick('/')}
                className="flex title-font font-medium items-center text-gray-900 "
              >
                <Image
                  src="/images/website logo/logo.png"
                  alt="Logo Image"
                  width={50}
                  height={30}
                />
                <span className="text-white ml-3 text-xl">Symetrix</span>
              </Link>
            </div>

            <div className="lg:flex hidden ">
              <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
                <Link href="/aboutUS" passHref>
                  <div className="text-white text-md">About</div>
                </Link>
                <Link href="/ourServices" passHref>
                  <div className="text-white ml-7 text-md">Services</div>
                </Link>
                <Link href="/contactUs" passHref>
                  <div className="text-white ml-7 text-md">Contact</div>
                </Link>
                <Link href="/portfolio" passHref>
                  <div className="text-white ml-7 text-md">Portfolio</div>
                </Link>
              </nav>
              {/* <ThemeSwitch /> */}
            </div>
          </div>
        </header>
      </div>
      <div className="drawer-side">
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
            backgroundColor: "#191e24f2",
            height: "100%",
            width: "70%",
            position: "absolute",
            zIndex: 99999999,
          }}
        >
          <div className="flex ps-3 mb-12 mt-3 flex-row flex-nowrap justify-between items-center">

            <span className="flex items-center">

            <Image
              src="/images/website logo/logo.png"
              alt="Logo Image"
              width={50}
              height={30}
              />
              <span className="text-white ml-3 text-md">Symetrix</span>
              </span>

            <span onClick={() => handleLinkClick('')}> 
            <Icon iconName={'chevron_left'} height={34} width={34} color={"#afafaf"} />
              </span>
          </div>

          {/* Sidebar content here */}

          {SIDEBAR_MENU.map((menu, index) => (
            <li key={index}>
              <Link
                className={`py-4 flex ${activeLink === menu.menu_url ? 'bg-slate-700' : 'hover:bg-slate-500'}`}
                href={menu.menu_url}
                passHref
                onClick={() => handleLinkClick(menu.menu_url)}
              >
                <Icon iconName={menu.icon} height={34} width={34} color={"#afafaf"} />
                {menu.menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
