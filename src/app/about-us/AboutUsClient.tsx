"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQ_ACCORDIAN } from "@/utils/constants/accordian.constants";
import { SendPageDataToDataLayer } from "../hooks/analyticsProvider";


// Array of objects containing card data
const cardData = [
  {
    logo: "/images/pngs/Highly-Customizable-7.png",
    heading: "Business Goals",
    text: "Align objectives to drive growth and profitability",
  },
  {
    logo: "/images/pngs/Content-Strategy-1-7.png",
    heading: "Coding & Design",
    text: "Integrate seamless functionality with creative design.",
  },
  {
    logo: "/images/pngs/Technology-1-7.png",
    heading: "Technology",
    text: "Leverage innovation to enhance operational efficiency.",
  },
];

const animationVariants = {
  initialUp: { opacity: 0, y: -150 },
  animateUp: { opacity: 1, y: 0 },
  initialDown: { opacity: 0, y: 150 },
  animateDown: { opacity: 1, y: 0 },
};

const AboutUsClient = () => {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     SendPageDataToDataLayer();
  //   }, 500);
  // }, []);

  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  // for accordian color
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const [expanded, setExpanded] = useState<string | null>(null);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null);
    };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("visible");
    }
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (inView1) {
      controls1.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
    console.log(controls1);
  }, [controls1, inView1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (inView2) {
      controls2.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        x: 0, // Example starting position
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls2, inView2]);

  return (
    <div className=" text-gray-300 overflow-x-hidden overflow-y-hidden">
      <section className="text-gray-300 body-font">
        <div className="container mx-auto flex lg:px-5 py-10 md:py-24 lg:flex-row flex-col items-center">
          <motion.div
            className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            ref={ref}
            initial={{ x: 0, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -200 }, // Reduced distance from the left
              visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
            }}
          >
            <img
              className="object-cover object-center rounded-xl shadow-2xl"
              alt="hero"
              src="/images/svgs/it solutions.jpeg"
            />
          </motion.div>
          <div className="lg:flex-grow px-3 sm:px-5 lg:w-1/2 xl:pl-24 lg:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.h1
              className="text-center font-semibold text-md mb-7"
              style={{
                backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
                WebkitTextFillColor: "transparent", // Hide default text color
                WebkitBackgroundClip: "text", // Clip the gradient to the text
                color: "transparent", // Set the text color as transparent
              }}
              ref={ref}
              initial={{ y: "90%", opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 100 }, // Reduced distance from the left
                visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
              }}
            >
              About Company
            </motion.h1>
            <motion.h1
              className="font-semibold text-3xl mb-4 text-gray-300"
              ref={ref}
              initial={{ y: "90%", opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 70 }, // Adjust the starting position
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              We provide IT solutions that help you succeed
            </motion.h1>
            <motion.p
              className="text-xs"
              ref={ref}
              initial={{ y: "90%", opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 80 }, // Adjust the starting position
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              Empower your business with our innovative IT solutions designed to
              drive success and growth. We tailor our services to meet your
              unique challenges, ensuring you stay ahead in a competitive market
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start pt-8 mt-2 space-y-4 md:space-y-0 md:space-x-4 rounded-lg"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { x: "-100%", opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.9, ease: "easeInOut" },
                },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* First div with icon */}
              <motion.div
                className="flex justify-center items-center w-12 bg-gray-200 rounded-full"
                animate={isHovered ? { x: -5 } : { x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <img
                  draggable="false"
                  src="images/pngs/tick-7.png"
                  alt="Tick Icon"
                />
              </motion.div>

              {/* Second div with heading and text */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <h2 className="text-sm font-bold text-gray-300 mb-2">
                  Seamless Management
                </h2>
                <p className="text-gray-300 text-xs">
                  Effortlessly streamline operations with integrated tools for
                  smooth and efficient management. Enhance productivity through
                  consistent and cohesive processes that minimize disruptions.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start pt-8 space-y-4 md:space-y-0 md:space-x-4 rounded-lg"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { x: "-100%", opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.9, ease: "easeInOut" },
                },
              }}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              {/* First div with icon */}
              <motion.div
                className="flex justify-center items-center bg-gray-200 w-12 rounded-full"
                animate={isHovered2 ? { x: -10 } : { x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <img draggable="false" src="images/pngs/tick-7.png" />
              </motion.div>

              {/* Second div with heading and text */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <h2 className="text-sm font-bold text-gray-300 mb-2">
                  Flawless Incorporation
                </h2>
                <p className="text-gray-300 text-xs">
                  Achieve seamless integration of new systems and practices with
                  precision and ease. Ensure every element aligns perfectly for
                  a unified and effective implementation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* three hozizontal cards */}
        <div className="flex flex-col px-3 md:flex-row flex-wrap justify-center md:space-x-4 md:p-5">
          {cardData.map((card, index) => {
            let initial, animate;
            if (index === 1) {
              // 2nd card: Animate from downward to upward
              initial = animationVariants.initialDown;
              animate = animationVariants.animateDown;
            } else {
              // 1st and 3rd cards: Animate from upward to downward
              initial = animationVariants.initialUp;
              animate = animationVariants.animateUp;
            }

            return (
              <motion.div
                key={index}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.7 }} // Staggered animation
                className="flex mb-10 p-5 group rounded-xl shadow-xl bg-black/30 bg-opacity-15 hover:bg-white/60 transition duration-300 w-full md:w-80"
              >
                <div className="flex-shrink-0 mr-4 ">
                  <img
                    src={card.logo}
                    alt={`Logo ${index + 1}`}
                    className="max-w-[40px]"
                  />
                </div>
                <div className="flex flex-col justify-center  text-gray-300">
                  <h1 className="text-sm font-bold group-hover:text-black m-0">{card.heading}</h1>
                  <p className="text-xs font-medium group-hover:text-black text-gray-300 m-0 mt-2">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="text-gray-300 body-font">
        <div
          ref={ref1}
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.h1
              className="text-center font-semibold text-md my-4"
              style={{
                backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
                WebkitTextFillColor: "transparent", // Hide default text color
                WebkitBackgroundClip: "text", // Clip the gradient to the text
                color: "transparent", // Set the text color as transparent
              }}
              ref={ref1}
              initial={{ y: "100%", opacity: 0 }}
              animate={controls1}
            >
              Our History
            </motion.h1>
            <motion.h1
              className="font-semibold text-3xl mb-4 text-gray-300"
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { opacity: 0, y: 70 }, // Adjust the starting position
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              Expertise in diverse business verticals
            </motion.h1>
            <motion.p
              className="text-xs"
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={{
                hidden: { opacity: 0, y: 80 }, // Adjust the starting position
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              With deep expertise across diverse business verticals, our team
              delivers tailored solutions that drive growth and innovation.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start pt-8 mt-2 space-y-4 md:space-y-0 md:space-x-4 rounded-lg"
              ref={ref1}
              initial={{ x: "-100%", opacity: 0 }}
              animate={controls1}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              {/* First div with icon */}
              <motion.div
                className="flex justify-center items-center w-12  rounded-full"
                animate={isHovered3 ? { x: -10 } : { x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <img
                  draggable="false"
                  src="images/pngs/Ban14-7-pi6e3awnsoup6tee1emvs21jpfo2yy07g35lva0nns.png"
                />
              </motion.div>

              {/* Second div with heading and text */}
              <div className="flex flex-col items-start ">
                <h2 className="text-sm font-bold w-full text-center md:text-left text-gray-300 mb-2">
                  Technical Assessment
                </h2>
                <p className="text-gray-300 text-xs">
                  A thorough evaluation designed to assess technical skills,
                  knowledge, and problem-solving abilities, often used in hiring
                  and development processes.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start pt-8 space-y-4 md:space-y-0 md:space-x-4 rounded-lg"
              ref={ref1}
              initial={{ x: "100%", opacity: 0 }}
              animate={controls1}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              {/* First div with icon */}
              <motion.div
                className="flex justify-center items-center w-12 rounded-full"
                animate={isHovered4 ? { x: -10 } : { x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <img
                  draggable="false"
                  src="images/pngs/Ban14-7-pi6e3awnsoup6tee1emvs21jpfo2yy07g35lva0nns.png"
                />
              </motion.div>

              {/* Second div with heading and text */}
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-sm font-bold text-gray-300 mb-2">
                  Joint Collaboration
                </h2>
                <p className="text-gray-300 text-xs">
                  A partnership where multiple parties work together, sharing
                  resources and expertise to achieve a common goal, fostering
                  innovation and mutual growth.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={{
              hidden: { opacity: 0, x: 200 }, // Reduced distance from the left
              visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
            }}
          >
            <img
              className="object-cover object-center rounded-xl shadow-2xl"
              alt="hero"
              src="/images/svgs/colabration.svg"
            />
          </motion.div>
        </div>
      </section>

      <section className="text-gray-300 w-100 body-font">
        <div className="container mx-auto flex py-24 md:flex-row justify-center flex-col items-center">
          <div className="lg:max-w-lg lg:w-screen md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-xl shadow-2xl"
              alt="hero"
              src="/images/svgs/faq.svg"
            />
          </div>
          <div
            ref={ref2}
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <motion.h1
              className="text-center font-semibold text-md my-4"
              style={{
                backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
                WebkitTextFillColor: "transparent", // Hide default text color
                WebkitBackgroundClip: "text", // Clip the gradient to the text
                color: "transparent", // Set the text color as transparent
              }}
              ref={ref2}
              initial={{ y: "100%", opacity: 0 }}
              animate={controls2}
              transition={{ duration: 0.1 }}
            >
              Any Query
            </motion.h1>
            <motion.h1
              className="title-font text-3xl mb-4 font-semibold text-gray-300"
              ref={ref2}
              initial={{ y: "100%", opacity: 0 }}
              animate={controls2}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.div
              ref={ref2}
              initial={{ y: "100%", opacity: 0 }}
              animate={controls2}
              transition={{ duration: 0.8 }}
            >
              {FAQ_ACCORDIAN.map((item) => (
                <Accordion
                  key={item.id}
                  expanded={expanded === item.id}
                  onChange={handleAccordionChange(item.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${item.id}-content`}
                    id={`${item.id}-header`}
                    style={{
                      backgroundImage:
                        expanded === item.id
                          ? "linear-gradient(to right, #02f0f1, #024868)"
                          : "none",
                      backgroundColor:
                        expanded === item.id ? "transparent" : "#474646",
                      color: "white"
                    }}
                    className="shadow-lg"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-[#474646] text-gray-200">
                    <Typography className="text-justify">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsClient;
