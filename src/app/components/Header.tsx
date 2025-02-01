"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Icon from "../../utils/Icons";
import { SIDEBAR_MENU } from "@/utils/constants/header.constants";
import { SendPageDataToDataLayer } from "../hooks/analyticsProvider";

const NavLink = ({
  path,
  label,
  title,
}: {
  path: string;
  label: string;
  title: string;
}) => {
  const pathname = usePathname();

  const sendData = (path: string, title: string) => {
    SendPageDataToDataLayer(path, title);
  };

  return (
    <Link href={path} onClick={() => sendData(path, title)} passHref>
      <div
        className={`text-md text-white ml-7 group relative ${
          pathname === path ? "active" : ""
        }`}
      >
        <span
          className={`group-hover:bg-gradient-to-r group-hover:from-[#02f0f1] group-hover:to-[#024868] group-hover:bg-clip-text group-hover:text-transparent ${
            pathname === path
              ? "bg-gradient-to-r from-[#02f0f1] to-[#024868] bg-clip-text text-transparent"
              : ""
          }`}
        >
          {label}
        </span>
        <span
          className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#02f0f1] to-[#024868] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            pathname === path ? "scale-x-100" : ""
          }`}
        ></span>
      </div>
    </Link>
  );
};

const Header = () => {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  const handleLinkClick = (url: string, title: string) => {
    const checkbox = document.getElementById("my-drawer-3") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
    if (url && title) {
      SendPageDataToDataLayer(url, title);
    }
  };

  const navLinks = [
    {
      path: "/",
      label: "Home",
      title: "Innovative Solutions for Web & Mobile Apps | Naxiums",
    },
    {
      path: "/our-services",
      label: "Our Services",
      title: "Our Services | Naxiums",
    },
    { path: "/portfolio", label: "Portfolio", title: "Portfolio | Naxiums" },
    { path: "/about-us", label: "About Us", title: "About Us | Naxiums" },
    { path: "/contact-us", label: "Contact Us", title: "Contact Us | Naxiums" },
  ];

  return (
    <div className="container-fluid mb-5 w-full h-12 relative z-50 mx-auto drawer lg-hidden">
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
                onClick={() => handleLinkClick("/", 'Innovative Solutions for Web & Mobile Apps | Naxiums')}
                className="flex title-font font-medium items-center text-gray-900 "
              >
                <Image
                  src="/images/website_logo/logo.png"
                  alt="Logo Image"
                  width={50}
                  height={30}
                />
                <span className="text-white ml-3 text-xl">Naxiums</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="lg:flex hidden">
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                {navLinks.map((link) => (
                  <NavLink key={link.path} {...link} />
                ))}
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar */}
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
                src="/images/website_logo/logo.png"
                alt="Logo Image"
                width={50}
                height={30}
              />
              <span className="text-white ml-3 text-lg font-bold">Naxiums</span>
            </span>

            <span onClick={() => handleLinkClick("", "")}>
              <Icon
                iconName={"chevron_left"}
                height={34}
                width={34}
                color={"#afafaf"}
              />
            </span>
          </div>

          {/* Sidebar Menu Items */}
          {SIDEBAR_MENU.map((menu, index) => (
            <li key={index}>
              <Link
                className={`py-4 flex ${
                  pathname === menu.menu_url
                    ? "bg-slate-700"
                    : "hover:bg-slate-500"
                }`}
                href={menu.menu_url}
                passHref
                onClick={() => handleLinkClick(menu.menu_url, menu.menu)}
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
