"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SetStateAction, useEffect, useState } from "react";
import { SIDEBAR_MENU } from "@/utils/constants/header.constants";
import Icon from "../../utils/Icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<any>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [activeLink, setActiveLink] = useState<string>("");
  

  const handleLinkClick1 = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  const pathname = usePathname();

  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    getActiveLink();
  }, []);

  const getActiveLink = () => {
    setActiveLink(window.location.pathname ?? "/");
  };

  const handleLinkClick = (url: string) => {
    const checkbox = document.getElementById("my-drawer-3") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    if (url) {
      setActiveLink(url); // Set the active link when a link is clicked
    }
  };

  return (
    <div className="container-fluid mb-5 w-full h-12 relative z-10 mx-auto drawer lg-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div
        className={`drawer-content bg-black/80 backdrop-blur-md w-full shadow-2xl fixed flex flex-col`}
      >
        <header className="text-gray-600 relative body-font">
          <div className="container-fluid mx-auto container flex flex-wrap py-6 justify-between flex-row items-center">
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
                onClick={() => handleLinkClick("/")}
                className="flex title-font font-medium items-center text-gray-900 "
              >
                <Image
                  src="/images/website logo/logo.png"
                  alt="Logo Image"
                  width={50}
                  height={30}
                />
                <span className="text-white ml-3 text-xl">Naxiums</span>
              </Link>
            </div>

            {/* <div className="lg:flex hidden">
              <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
                <Link href="/about-us" passHref>
                  <div
                    className={`text-md text-white group relative ${
                      pathname === "/about-us" ? "active" : ""
                    }`}
                  >
                    <span
                      className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent`}
                    >
                      About
                    </span>
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></span>
                  </div>
                </Link>
                <Link href="/our-services" passHref>
                  <div className="text-md text-white ml-7 group relative">
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent">
                      Services
                    </span>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link href="/contact-us" passHref>
                  <div className="text-md text-white ml-7 group relative">
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent">
                      Contact
                    </span>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link href="/portfolio" passHref>
                  <div className="text-md text-white ml-7 group relative">
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent">
                      Portfolio
                    </span>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
              </nav>
            </div> */}
            <div className="lg:flex hidden">
      <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
        
        <Link href="/" passHref onClick={() => handleLinkClick1('home')}>
          <div className={`text-md text-white ml-7 group relative ${activeLink === 'home' ? 'active' : ''}`}>
            <span className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent ${activeLink === 'home' ? 'bg-gradient-to-r from-[#02f0f1] to-[#024868] bg-clip-text text-transparent' : ''}`}>
             Home
            </span>
            <span className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${activeLink === 'home' ? 'scale-x-100' : ''}`}></span>
          </div>
        </Link>
        <Link href="/our-services" passHref onClick={() => handleLinkClick1('our-services')}>
          <div className={`text-md text-white ml-7 group relative ${activeLink === 'our-services' ? 'active' : ''}`}>
            <span className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent ${activeLink === 'our-services' ? 'bg-gradient-to-r from-[#02f0f1] to-[#024868] bg-clip-text text-transparent' : ''}`}>
             Our Services
            </span>
            <span className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${activeLink === 'our-services' ? 'scale-x-100' : ''}`}></span>
          </div>
        </Link>
        <Link href="/portfolio" passHref onClick={() => handleLinkClick1('portfolio')}>
          <div className={`text-md text-white ml-7 group relative ${activeLink === 'portfolio' ? 'active' : ''}`}>
            <span className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent ${activeLink === 'portfolio' ? 'bg-gradient-to-r from-[#02f0f1] to-[#024868] bg-clip-text text-transparent' : ''}`}>
              Portfolio
            </span>
            <span className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${activeLink === 'portfolio' ? 'scale-x-100' : ''}`}></span>
          </div>
        </Link>
        <Link href="/about-us" passHref onClick={() => handleLinkClick1('about-us')}>
          <div className={`text-md text-white ml-7 group relative ${activeLink === 'about-us' ? 'active' : ''}`}>
            <span className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent ${activeLink === 'about-us' ? 'bg-gradient-to-r from-[#02f0f1] to-[#024868] bg-clip-text text-transparent' : ''}`}>
              About
            </span>
            <span className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${activeLink === 'about-us' ? 'scale-x-100' : ''}`}></span>
          </div>
        </Link>
        <Link href="/contact-us" passHref onClick={() => handleLinkClick1('contact-us')}>
          <div className={`text-md text-white ml-7 group relative ${activeLink === 'contact-us' ? 'active' : ''}`}>
            <span className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent ${activeLink === 'contact-us' ? 'bg-gradient-to-r from-[#02f0f1] to-[#024868] bg-clip-text text-transparent' : ''}`}>
              Contact
            </span>
            <span className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${activeLink === 'contact-us' ? 'scale-x-100' : ''}`}></span>
          </div>
        </Link>
        
      </nav>
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
              <span className="text-white ml-3 text-lg font-bold">Naxiums</span>
            </span>

            <span onClick={() => handleLinkClick("")}>
              <Icon
                iconName={"chevron_left"}
                height={34}
                width={34}
                color={"#afafaf"}
              />
            </span>
          </div>

          {/* Sidebar content here */}

          {SIDEBAR_MENU.map((menu, index) => (
            <li key={index}>
              <Link
                className={`py-4 flex ${
                  activeLink === menu.menu_url
                    ? "bg-slate-700"
                    : "hover:bg-slate-500"
                }`}
                href={menu.menu_url}
                passHref
                onClick={() => handleLinkClick(menu.menu_url)}
              >
                <Icon
                  iconName={menu.icon}
                  height={34}
                  width={34}
                  color={"#afafaf"}
                />
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
