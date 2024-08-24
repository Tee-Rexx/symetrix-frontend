"use client";

import { useState, useEffect } from "react";
import BlogCard from "./components/blogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextButton, PrevButton } from "./components/carouselButtons";
import {
  FiBox,
  FiGlobe,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiArrowUpRight,
} from "react-icons/fi";
import Link from "next/link";
import ClientReviews from "./sections/reviews";
import "./globals.css";
import ServiceProviderSection from "./sections/service-provide";
import { motion, useAnimation } from 'framer-motion';
import React from "react";
import { useInView } from 'react-intersection-observer';

const Data = [
  {
    card_img: "/images/svgs/06-img-7.svg",
    card_heading: "Creative Idea",
    card_text:
      "Innovative software solutions tailored for your business success.",
  },
  {
    card_img: "/images/svgs/07-img-7.svg",
    card_heading: "Successful Project",
    card_text: "Delivering successful projects that exceed expectations.",
  },
  {
    card_img: "/images/svgs/08-img-7.svg",
    card_heading: "Time Management",
    card_text: "Efficient time management to meet every deadline.",
  },
];

const someBlogs = [
  {
    id: 1,
    heading: "Blockchain Beyond Bitcoin",
    route: "blockchain-beyond-bitcoin",
    para: "Blockchain technology, initially popularized by Bitcoin, has transcended its origins ...",
    icon_name: FiBox,
  },
  {
    id: 2,
    heading: "Cybersecurity In The Remote Work Era",
    route: "cybersecurity-in-the-remote-work-era",
    para: "In recent years, remote work has transformed the landscape, shifting traditional office ...",
    icon_name: FiGlobe,
  },
  {
    id: 3,
    heading: "Data Governance",
    route: "data-governance",
    para: "Data emerges as a paramount asset, driving organizational strategies across diverse ...",
    icon_name: FiCpu,
  },
  {
    id: 4,
    heading: "Demystifying AI",
    route: "demystifying-AI",
    para: "Artificial Intelligence (AI) is heralded as a transformative force, with the potential to ...",
    icon_name: FiDatabase,
  },
  {
    id: 5,
    heading: "Digital Transformation",
    route: "digital-transformation",
    para: "In today's dynamic business landscape, marked by rapid change and innovation, digital transformation ...",
    icon_name: FiCloud,
  },
];

const Home = () => {
  const phrases: string[] = [
    "groundbreaking advancements.",
    "revolutionary solutions.",
    "infinite possibilities.",
    "limitless growth.",
    "boundless creativity.",
  ];
  const [text, setText] = useState<string>("");
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };

  useEffect(() => {
    const type = () => {
      if (isTyping) {
        if (text.length === phrases[phraseIndex].length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
          setTimeout(() => {
            setIsDeleting(false);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setIsTyping(true);
            setText("");
          }, 2000); // Pause between phrases
        } else {
          const id = setTimeout(() => {
            setText(
              (prevText) => prevText + phrases[phraseIndex][prevText.length]
            );
          }, 100); // Typing speed
          setTimeoutId(id);
        }
      } else if (isDeleting && text.length > 0) {
        const id = setTimeout(() => {
          setText((prevText) => prevText.slice(0, -1));
        }, 25); // Deleting speed
        setTimeoutId(id);
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, isTyping, isDeleting]); // Use only one dependency

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <section className="h-[90vh] lg:h-screen w-full -z-50 relative flex items-center justify-center overflow-hidden">
        <div className="rounded-full sphere absolute top-0 start5 md:start-20 bg-violet-600 opacity-15"></div>
        <div className="rounded-full sphere absolute bottom-0 end-14 lg:top-10 lg:end-72 bg-violet-600 opacity-15"></div>
        <div className="h-screen w-[90%] block lg:hidden bg-black absolute opacity-15"></div>
        <div className="container px-3 lg:px-0 flex relative justify-center items-center lg:items-start h-100 flex-col">
          <span
            style={{ lineHeight: 1.25 }}
            className="text-4xl md:text-4xl sm:text-6xl z-0 text-white text-center lg:text-left h-[256px] sm:mb-16 lg:mb-24 lg:ms-8 lg:text-5xl w-full md:w-[90%] lg:w-5/12 font-extrabold"
          >
            Learn how to use technology in order to{" "}
            <p
              style={{
                backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 1.25,
              }}
              className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-extrabold overflow-hidden"
            >
              {text}|
            </p>
          </span>
        </div>

        {/* Wave Image */}
        <img
          style={{ width: "100vw" }}
          src="/images/pngs/waves.png"
          className="absolute -z-30 waves hidden lg:block -bottom-28 h-[250px] opacity-10"
          alt="Blue color Waves"
        />

        {/* Gif Video here */}

        <video
          className="absolute opacity-30 lg:opacity-100 h-[80%] lg:right-0 -z-50 lg:top-12 mix-blend-lighten "
          muted
          autoPlay
          loop
        >
          <source src="/gif/hero.mp4" type="video/mp4" />
        </video>

        <img
          className="absolute rotate-180 opacity-80 h-[50px] z-10 bottom-10 "
          src="/gif/mouse_scroll.gif"
        />
      </section>

      <section className="h-[530px] lg:h-[550px] 2xl:h-[550px] w-full mt-22 bg-gray-50 relative flex -z-10 justify-center">
        <div className="w-full items-center flex flex-col ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 container mt-16 ">
            <h4 className=" text-2xl px-3 sm:text-4xl sm:px-3 text-center lg:text-left font-bold ">
              We specialize in providing cutting-edge technology solutions to a
              variety of industries
            </h4>

            <div className="px-3 hidden lg:block">
              <div
                className="w-full h-[10px] mt-2 rounded-xl"
                style={{
                  background: "linear-gradient(to right, #02f0f1, #024868)",
                }}
              ></div>

              <p className="text-lg w-[92%] mt-10">
                Facilitating our clients journey towards realizing their
                aspirations through the deployment of innovative solutions
                tailored to their unique requirements, thus paving the way for
                their remarkable accomplishments.
              </p>
            </div>
          </div>

          <div className="container mt-20 sm:mt-20  lg:mt-16 flex items-start ">
            <Slider
              className="flex w-full items-start text-left "
              {...settings}
            >
              {someBlogs.map((data, index) => (
                <div
                  key={index}
                  className="mt-4 carousel-card relative drop-shadow-xl hover:bg-gray-300 duration-300 bg-white rounded-md"
                >
                  <span className="px-4 pt-4 content-between flex flex-col">
                    <span className="flex flex-col">
                      <span className="w-full items-center flex justify-between">
                        <h4 className="text-lg pe-1 h-[50px] items-center flex font-semibold leading-tight m-0 p-0">
                          {data.heading}
                        </h4>
                        <span className="mini_blogs_icon_container">
                          <data.icon_name />
                        </span>
                      </span>
                      <p className="pt-4 text-sm">{data.para}</p>
                    </span>

                    <Link
                      href={"/blogs/" + data.route}
                      className="flex absolute items-center bottom-8 cursor-pointer duration-100 top-36"
                    >
                      <p className="border-b-2 border-black text-sm mt-12">
                        Read More
                      </p>
                      <span className="readmore_icon ms-1 mt-12">
                        <FiArrowUpRight />
                      </span>
                    </Link>
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <ClientReviews />

      <div className="w-full h-full py-10 relative -z-40 flex-wrap flex justify-center items-center flex-col overflow-hidden">
        <div>
          <h1
            className="text-center color-sub-heading font-bold text-md my-6"
          >
            Featured Services
          </h1>
          <h2 className="text-white text-center font-normal px-3 sm:px-0 text-3xl sm:text-4xl mt-4">
            Engaging Creative Minds via Technology
          </h2>
        </div>
        <div className="container flex-wrap flex justify-around">
          {Data.map((item, index) => (
            <BlogCard
              key={index}
              card_heading={item.card_heading}
              card_text={item.card_text}
              card_img={item.card_img}
            />
          ))}
        </div>
      </div>

      <ServiceProviderSection/>

      <div className="bg-white relative -z-10">
        <section className="text-gray-600 relative z-20 body-font">
          <div className="container mx-auto flex lg:px-5 py-24 lg:flex-row flex-col items-center">
            <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover z-50 object-center rounded"
                alt="hero"
                src="/images/svgs/19-min-7-600x624.svg"
              />
            </div>
            <div className="lg:flex-grow px-3 sm:px-5 lg:w-1/2 xl:pl-24 lg:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1
                className="text-center font-semibold text-md my-6"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #02f0f1, #024868)",
                  WebkitTextFillColor: "transparent", // Hide default text color
                  WebkitBackgroundClip: "text", // Clip the gradient to the text
                  color: "transparent", // Set the text color as transparent
                }}
              >
                Corporate Ideas
              </h1>
              <h1 className="title-font font-semibold sm:text-4xl text-xl mb-4 text-gray-900">
                Perfect Technology solution for all medium business
              </h1>
              <p className="text-xs">
                Discover the perfect technology solution designed to streamline
                operations and boost efficiency for medium-sized businesses. Our
                tailored services ensure seamless integration and scalable
                growth, making success attainable
              </p>
              <div className="container1">
                <div className="skill-box">
                  <span className="title">Business Goal</span>
                  <div className="skill-bar">
                    <span className="skill-per html">
                      <span className="tooltip">85%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <span className="title">Traffic Growth</span>
                  <div className="skill-bar">
                    <span className="skill-per css">
                      <span className="tooltip">90%</span>
                    </span>
                  </div>
                </div>
                <div className="skill-box">
                  <span className="title">Competitor Research</span>
                  <div className="skill-bar">
                    <span className="skill-per javascript">
                      <span className="tooltip">75%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


        <section className="bg-white relative -z-10 body-font">
        {/* Wave Image */}
        <img
          style={{ width: "100vw" }}
          src="/images/pngs/waves1.png"
          className="absolute -z-22 waves hidden lg:block -bottom-18 h-[250px] opacity-50"
          alt="Blue color Waves"
        />

          <div className="container mx-auto flex px-5 pb-16 lg:py-24 lg:flex-row flex-col items-center">
            <div className="lg:max-w-lg xl:w-full lg:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover  z-30 relative object-center rounded"
                alt="hero"
                src="/images/svgs/picture_1.png"
              />
            </div>
            <div className="lg:flex-grow lg:w-1/2 xl:pl-24 lg:pl-16 pt-5 lg:pt-0 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="flex flex-wrap justify-center mb-3 lg:mb-0 sm:justify-start items-center">

              <h1 className="title-font text-2xl sm:text-3xl pe-2 font-medium text-black z-10">
                Arrange a free{" "}
              </h1>
                <h1
                  className="font-bold text-2xl pt-1 color-sub-heading sm:text-3xl">
                  {" "}
                  Consultation{" "}
                </h1>
                    </div>
              <p className="mb-8 leading-relaxed text-gray-600">
                Unlock the full potential of your business with a complimentary
                consultation. Our team of experts will provide valuable insights
                and recommendations tailored to your specific needs. Don’t miss
                out on this opportunity to take your business to the next level.
                Schedule your free consultancy today and discover the benefits
                of working with us.
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <Link href="/contactUs" passHref>
                  <button
                    style={{
                      background: "linear-gradient(to right, #02f0f1, #024868)",
                    }}
                    className="inline-flex text-white border-0 py-2 px-5 focus:outline-none rounded text-lg"
                  >
                    Start your journey to business success
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      <div className="flex flex-col items-center justify-center min-h-screen text-white mx-12 sm:px-6 lg:px-8">
        {/* Wave Image */}
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
            WebkitTextFillColor: "transparent", // Hide default text color
            WebkitBackgroundClip: "text", // Clip the gradient to the text
            color: "transparent", // Set the text color as transparent
          }}
        >
          Let’s get started
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-center">
          Ready to embark on your technical journey?
        </h2>
        <p className="text-md sm:text-xl lg:text-md font-thin text-center">
          Take the first step towards success, reach out to us today and let’s
          schedule a consultation to discuss your vision.
        </p>
        <div
          className="w-full sm:h-1 lg:h-2 mt-8"
          style={{
            background: "linear-gradient(to right, #02f0f1, #024868)",
          }}
        ></div>
      </div>

      <motion.button
        style={{
          background: "linear-gradient(to right, #02f0f1, #024868)",
          zIndex:10000
        }}
        onClick={scrollToTop}
        className={`${
          isVisible ? "block" : "hidden"
        } fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-xl flex items-center justify-center`}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
        }}
        whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </>
  );
};

export default Home;
