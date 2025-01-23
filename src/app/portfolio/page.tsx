"use client";

import { updateDocumentDescription } from "@/utils/header-titles";
import "../globals.css";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { PORTFOLIO_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import Image from "next/image";
import whiteLinesImg from "../../../public/images/pngs/white-design-lines.png";
import Link from "next/link";

const Page = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    document.title = "Portfolio | Naxiums";
    updateDocumentDescription(PORTFOLIO_PAGE_DESCRIPTION);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardData = [
    {
      backgroundImage: "url(/images/pngs/petmeds.png)",
      title: "24Petmeds Store",
      body: "24Petmeds is a dynamic platform, a marketplace connecting vendors and customers for seamless transactions.",
      url: "https://shelters.24vetsupport.com/#/",
    },
    {
      backgroundImage: "url(/images/pngs/24petmeds.png)",
      title: "24Petmeds Admin Panel",
      body: "24Petmeds Admin Panel offers powerful tools for managing users, orders, and products, streamlining your administrative tasks.",
      url: "https://admin.24vetsupport.com/#/",
    },
    {
      backgroundImage: "url(/images/pngs/gopinit.png)",
      title: "GoPin It",
      body: "GoPinit is an innovative platform, a mobile app creating a HUB for outdoor advertisers and their customers to connect and do business better.",
      url: "https://gopinit.com/",
    },
  ];

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <section className="text-gray-600 body-font">
        <div className="container-fluid mx-auto our-service-bg banner-bg-specs py-32 w-full items-center justify-center flex">
          <div className="text-left container relative w-full">
            <div className="flex ms-5 md:ms-0 items-center">
              <div
                className="h-6 mb-2 w-1 mr-2"
                style={{
                  background: "linear-gradient(to right, #02f0f1, #024868)",
                }}
              ></div>
              <p className="text-3xl text-gray-900 font-medium title-font mb-2">
                Portfolio
              </p>
            </div>
          </div>
        </div>

        <div className="container w-full mx-auto">
          <div className="relative text-center px-5 sm:px-32 py-32  text-gray-100">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 mb-6">
              Crafting Memorable User Experience for Business Success
            </h2>

            <p className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-300">
              At <span className="font-bold">Naxiums</span>, we specialize in
              crafting bespoke digital solutions tailored for your business,
              enabling growth in a rapidly changing digital world.
            </p>

            <p className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-300">
              Our expert team seamlessly integrates design, development, and
              innovation to deliver mobile apps, web platforms, and enterprise
              solutions that drive results.
            </p>

            <p className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-300">
              With an agile approach, we ensure flexibility, responsiveness, and
              on-time delivery while maintaining budget efficiency.
            </p>

            <p className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-300">
              Let us build a lasting partnership through continuous support and
              maintenance to evolve your solutions as your business grows.
            </p>

            <p className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-300">
              Explore our portfolio and see how we&apos;ve helped businesses achieve
              their digital transformation goals. At Naxiums, we unlock the full
              potential of technology for your growth and innovation.
            </p>
          </div>

          <div className="w-full mx-auto my-16">
            <div className="flex flex-col px-3 sm:px-0 lg:flex-row flex-wrap gap-8 items-center md:justify-between">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="card relative max-w-sm rounded overflow-hidden mb-5 shadow-lg group"
                  style={{
                    backgroundImage: card.backgroundImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "inset 0px 10px 15px rgba(0, 0, 0, 0.07)",
                  }}
                >
                  {/* Project Name initially at the bottom */}
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-3 px-4 transition-transform transform group-hover:translate-y-full">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                  </div>

                  {/* Hover content */}
                  <div className="absolute inset-0 bg-black bg-opacity-80 p-6 flex flex-col justify-center items-center text-center transition-transform transform duration-500 translate-y-full group-hover:translate-y-0">
                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                    <p className="text-sm text-white mb-4">{card.body}</p>
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mt-56 mb-32 w-full mx-auto">
          <div className="relative flex w-full">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className="text-3xl sm:text-4xl mx-auto md:mx-0 text-center md:text-left font-extrabold text-gray-100">
                  Have An Idea About Project?
                </span>
                {/* <Image height={30} width={30} alt="white star" src={whiteStar} /> */}
              </div>

              <span className=" w-full px-3 md:px-0 text-center sm:text-left sm:mx-0 lg:w-3/6 mt-12 mb-8 md:mt-7 md:mb-3 text-gray-100">
                Turn your ideas into innovative solutions! Whether it&apos;s an app,
                a website, or a custom digital product, our passionate team is
                here to make it happen. With cutting-edge technology and a focus
                on excellence, we’ll bring your vision to life and help it
                thrive. Let’s build something extraordinary together!
              </span>

              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(to right, #02f0f1, #024868)",
                }}
                className="inline-block mx-auto md:mx-0 text-center mt-8 w-[260px] px-8 py-3 text-white font-semibold text-md rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                Let&apos;s Work Together
              </Link>
            </div>

            <img
              src="/images/pngs/white-design-lines.png"
              alt="white design lines"
              width={400}
              className="hidden lg:block lg:absolute right-4 -bottom-10 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
