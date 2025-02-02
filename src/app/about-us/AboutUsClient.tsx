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

  const counterRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [projects, setProjects] = useState(0);
  const [clientRepetence, setClientRepetence] = useState(0);
  const [clientReview, setClientReview] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stops observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is in view
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Projects Counter: Start slow, then speed up, then slow down
      const projectInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev < 50) {
            // Adjust speed based on progress
            let newSpeed = prev < 10 ? 100 : prev < 30 ? 50 : 30;
            return prev + 1;
          }
          return 50;
        });
      }, 60); // Initial slow speed, adjusted by counter value

      // Client Repetence (constant speed)
      const clientInterval = setInterval(() => {
        setClientRepetence((prev) => (prev < 100 ? prev + 1 : 100));
      }, 15);

      // Client Review (start slow, increase speed)
      const reviewInterval = setInterval(() => {
        setClientReview((prev) => {
          const newSpeed = prev < 1 ? 100 : prev < 3 ? 60 : 30;
          return prev < 4.9 ? parseFloat((prev + 0.1).toFixed(1)) : 4.9;
        });
      }, 45);

      return () => {
        clearInterval(projectInterval);
        clearInterval(clientInterval);
        clearInterval(reviewInterval);
      };
    }
  }, [isVisible]);

  return (
    <div className="bg-white overflow-x-hidden overflow-y-hidden">
      <section className="text-gray-600 body-font">
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
              className="object-cover object-center rounded-md shadow-2xl"
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
              className="font-semibold text-3xl mb-4 text-gray-900"
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
                <h2 className="text-sm font-bold text-black mb-2">
                  Seamless Management
                </h2>
                <p className="text-gray-600 text-xs">
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
                <h2 className="text-sm font-bold text-black mb-2">
                  Flawless Incorporation
                </h2>
                <p className="text-gray-600 text-xs">
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
                className="flex mb-10 p-5 rounded border shadow-xl hover:bg-gray-100 hover:text-white transition duration-300 w-full md:w-80"
              >
                <div className="flex-shrink-0 mr-4 ">
                  <img
                    src={card.logo}
                    alt={`Logo ${index + 1}`}
                    className="max-w-[40px]"
                  />
                </div>
                <div className="flex flex-col justify-center text-black">
                  <h1 className="text-sm font-bold m-0">{card.heading}</h1>
                  <p className="text-xs font-medium text-gray-500 m-0 mt-2">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="text-gray-600 body-font">
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
              className="font-semibold text-3xl mb-4 text-gray-900"
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
                <h2 className="text-sm font-bold w-full text-center md:text-left text-black mb-2">
                  Technical Assessment
                </h2>
                <p className="text-gray-600 text-xs">
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
                <h2 className="text-sm font-bold text-black mb-2">
                  Joint Collaboration
                </h2>
                <p className="text-gray-600 text-xs">
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
              className="object-cover object-center rounded-md shadow-2xl"
              alt="hero"
              src="/images/svgs/colabration.svg"
            />
          </motion.div>
        </div>
      </section>

      <section className="text-gray-600 w-100 body-font">
        <div className="container mx-auto flex py-24 md:flex-row justify-center flex-col items-center">
          <div className="lg:max-w-lg lg:w-screen md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-md shadow-2xl"
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
              className="title-font text-3xl mb-4 font-semibold text-gray-900"
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
                        expanded === item.id ? "transparent" : "white",
                      color: expanded === item.id ? "white" : "black",
                    }}
                    className="shadow-lg"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
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

      <div ref={counterRef} className="bg-slate-900 w-full p-5">
        <div className="container w-full mx-auto flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-100 text-wrap">
            Technologies & Tools We Work With
          </span>

          <div className="flex md:flex-row flex-col gap-x-3 items-center"></div>
        </div>

        <div className="container border-t-4 border-l-0 border-r-0 border-b-0 py-7 border border-white mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center">
          <span className="text-3xl text-center lg:pt-0 pt-5 lg:pb-0 pb-10 lg:text-left font-bold text-gray-100">
            Our web development journey, by the numbers
          </span>

          <div className="flex lg:flex-row items-center lg:items-start lg:justify-end flex-col lg:gap-x-3 gap-y-9 lg:gap-y-0">
            {/* Total Projects */}
            <div className="text-7xl lg:text-6xl lg:w-[180px] text-center lg:text-left font-bold">
              <span className="text-gray-400">{projects}+ </span>
              <p className="text-xl lg:text-sm text-gray-200 mt-3 lg:mt-2">
                Delivering excellence in web development
              </p>
            </div>

            {/* Client Repetence */}
            <div className="text-7xl lg:text-6xl lg:w-[180px] text-center lg:text-left font-bold">
              <span className="text-gray-400">{clientRepetence}% </span>
              <p className="text-xl lg:text-sm text-gray-200 mt-3 lg:mt-2 lg:ms-1">
                Client loyalty rate
              </p>
            </div>

            {/* Overall Client Review */}
            <div className="text-7xl lg:text-6xl lg:w-[180px] text-center lg:text-left font-bold">
              <span className="text-gray-400"> {clientReview} </span>
              <p className="text-xl lg:text-sm text-gray-200 mt-3 lg:mt-2">
                Authenticated customer satisfaction scores
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsClient;
