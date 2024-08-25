"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientReviews from "../sections/reviews";
import ProjectsSection from "../sections/projects";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Card {
  img: string;
  title: string;
  description: string;
  button: string;
}

const Page: React.FC = () => {
  const cards: Card[] = [
    {
      img: "/images/card1.jpg",
      title: "Cloud Solutions",
      description:
        "Maximize efficiency with our cloud services. Expert migration, robust security, and scalable solutions for your business.",
      button: "Read More",
    },
    {
      img: "/images/card2.jpg",
      title: "Web Development and Optimization",
      description:
        "Enhance your online presence. Custom web development, responsive design, and seamless CMS integration.",
      button: "Read More",
    },
    {
      img: "/images/card3.jpg",
      title: "Mobile App Development",
      description:
        "Empower your business with tailored mobile solutions for iOS, Android, and cross-platform needs.",
      button: "Read More",
    },
    {
      img: "/images/card4.jpg",
      title: "IT Consulting and Strategy",
      description:
        "Strategize with our IT experts. Align technology with business goals for sustainable growth and innovation.",
      button: "Read More",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });


  return (
    <>
      <div className="container-fluid mx-auto our-service-bg py-32 w-full items-center justify-center flex">
        <div className="text-left container relative w-full">
          <div className="flex ms-5 md:ms-0 items-center">
            <div
              className="h-6 mb-2 w-1 mr-2"
              style={{
                background: "linear-gradient(to right, #02f0f1, #024868)",
              }}
            ></div>
            <p className="text-3xl text-gray-900 font-medium title-font mb-2">
              Our Services
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid flex items-center mt-32 justify-center">
        <div className="flex flex-col items-center md:flex-row justify-between container flex-wrap">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-56 py-6 min-h-[330px] mb-7 md:mb-0 rounded-lg bg-gray-200 border-opacity-60 text-center"
            >
              <div className="w-12 inline-flex items-center justify-center rounded-full text-gray-900 mt-5 flex-shrink-0">
                {card.title === "Cloud Solutions" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 -960 960 960"
                    width="50px"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" style={{ stopColor: "#02f0f1" }} />
                        <stop offset="100%" style={{ stopColor: "#024868" }} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient)"
                      d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"
                    />
                  </svg>
                ) : (
                  ""
                )}
                {card.title === "Web Development and Optimization" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 -960 960 960"
                    width="50px"
                  >
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" style={{ stopColor: "#02f0f1" }} />
                        <stop offset="100%" style={{ stopColor: "#024868" }} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient1)"
                      d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"
                    />
                  </svg>
                ) : (
                  ""
                )}
                {card.title === "Mobile App Development" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 -960 960 960"
                    width="50px"
                  >
                    <defs>
                      <linearGradient
                        id="gradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" style={{ stopColor: "#02f0f1" }} />
                        <stop offset="100%" style={{ stopColor: "#024868" }} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient2)"
                      d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"
                    />
                  </svg>
                ) : (
                  ""
                )}
                {card.title === "IT Consulting and Strategy" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60px"
                    viewBox="0 -960 960 960"
                    width="60px"
                  >
                    <defs>
                      <linearGradient
                        id="gradient3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" style={{ stopColor: "#02f0f1" }} />
                        <stop offset="100%" style={{ stopColor: "#024868" }} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient3)"
                      d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </div>
              <h2 className="text-md sm:text-md text-gray-900 font-extrabold mb-2">
                {card.title}
              </h2>
              <p className="leading-relaxed px-3 text-xs font-medium mb-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-64 pb-36 text-white px-4 sm:px-6 lg:px-8">
        <img
          style={{ width: "100vw" }}
          src="/images/pngs/waves.png"
          className="absolute -z-8 waves hidden lg:block -bottom-18 h-[250px] opacity-20"
          alt="Blue color Waves"
        />
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 pb-4"
          style={{
            backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Service
        </h1>
        <p className="text-md sm:text-xl lg:text-md font-thin text-center">
          Our Service unlimited solutions to all your business needs. in the
          installation package we prepare search engine optimization, social
          media support, we provide corporate identity and graphic design
          services.
        </p>
      </div>

      {/* <ProjectsSection /> */}

      <ClientReviews />

      {/* <div className="bg-white">
        <motion.div
          ref={ref}
          initial={{ x: "-100%", opacity: 0 }}
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-blue-500 p-10 max-w-xs mx-auto mt-40 rounded-lg"
        >
          <motion.h1
            animate={isHovered ? { x: -20 } : { x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-white text-center text-xl"
          >
            Hover over the box!
          </motion.h1>
        </motion.div>
      </div> */}
      
    </>
  );
};

export default Page;
