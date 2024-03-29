"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="container-fluid mx-auto drawer lg-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
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

              <a className="flex title-font font-medium items-center text-gray-900 ">
                <Image
                  src="/images/website logo/logo.png"
                  alt="Logo Image"
                  width={50}
                  height={30}
                />
                <span
                  className={
                    resolvedTheme === "dark"
                      ? "text-white ml-3 text-xl"
                      : "text-black ml-3 text-xl"
                  }
                >
                  Symmetrix
                </span>
              </a>
            </div>

            <div className="lg:flex hidden ">
              <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
                <Link href="/firstPage" passHref>
                  <div
                    className={
                      resolvedTheme === "dark"
                        ? "text-white mr-5 hover:text-gray-400"
                        : "text-black mr-5 hover:text-gray-600"
                    }
                  >
                    First Link
                  </div>
                </Link>
                <Link href="/secondPage" passHref>
                  <div
                    className={
                      resolvedTheme === "dark"
                        ? "text-white mr-5 hover:text-gray-400"
                        : "text-black mr-5 hover:text-gray-600"
                    }
                  >
                    Second Link
                  </div>
                </Link>
                <Link href="/thirdPage" passHref>
                  <div
                    className={
                      resolvedTheme === "dark"
                        ? "text-white mr-5 hover:text-gray-400"
                        : "text-black mr-5 hover:text-gray-600"
                    }
                  >
                    Third Link
                  </div>
                </Link>
                <Link href="/fourthPage" passHref>
                  <div
                    className={
                      resolvedTheme === "dark"
                        ? "text-white mr-5 hover:text-gray-400"
                        : "text-black mr-5 hover:text-gray-600"
                    }
                  >
                    Fourth Link
                  </div>
                </Link>
              </nav>
              <ThemeSwitch />
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
          className="menu p-4 w-80 min-h-full text-white"
          style={{ backgroundColor: "#191e24" }}
        >
          {/* Sidebar content here */}
          <li>
            <a>First Link</a>
          </li>
          <li>
            <a>Second Link</a>
          </li>
          <li>
            <a>Third Link</a>
          </li>
          <li>
            <a>Fourth Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
