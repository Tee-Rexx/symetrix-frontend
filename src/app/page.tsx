"use client";

import { useState, useEffect, useRef } from "react";
import BlogCard from "./components/blogCard";
import Image from "next/image";
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
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { SendPageDataToDataLayer } from "./hooks/analyticsProvider";

const Data = [
  {
    card_img:
      "/images/pngs/55-creative-marketing-ideas-for-your-product-or-business.png",
    card_heading: "Creative Idea",
    card_text:
      "Innovative software solutions tailored for your business success.",
  },
  {
    card_img: "/images/svgs/700600p546EDNmainimg-project-success.jpg",
    card_heading: "Successful Project",
    card_text: "Delivering successful projects that exceed expectations.",
  },
  {
    card_img: "/images/svgs/time-management.svg",
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     SendPageDataToDataLayer();
  //   }, 500);
  // }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "mainEntityOfPage": "https://naxiums.com/",
              "headline": "Naxiums - Innovating Digital Experiences",
              "description": "Naxiums is a web and mobile app development company...",
              "video": {
                "@type": "VideoObject",
                "name": "Hero Video",
                "description": "This is the hero video on the Naxiums homepage.",
                "thumbnailUrl": "https://naxiums.com/images/video-thumbnail.jpg",  // Replace with actual thumbnail URL
                "contentUrl": "https://naxiums.com/gif/hero.mp4", // The direct URL to your video
                "uploadDate": "2025-01-01",  // Replace with the actual upload date if applicable
              },
            }),
          }}
        />
      </Head> */}

      <section className="h-[90vh] lg:h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="rounded-full sphere absolute top-0 start5 md:start-20 bg-violet-600 opacity-15"></div>
        <div className="rounded-full sphere absolute bottom-0 end-14 lg:top-10 lg:end-72 bg-violet-600 opacity-15"></div>
        <div className="h-screen w-[90%] block lg:hidden bg-black absolute opacity-15"></div>
        <div className="container px-3 lg:px-0 flex relative justify-center items-center lg:items-start h-100 flex-col">
          <span
            style={{ lineHeight: 1.25 }}
            className="text-4xl md:text-4xl sm:text-6xl text-white text-center lg:text-left h-[256px] sm:mb-16 lg:mb-24 lg:ms-8 lg:text-5xl w-full md:w-[90%] lg:w-5/12 font-extrabold"
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
          className="absolute waves hidden lg:block -bottom-28 h-[250px] opacity-10"
          alt="Blue color Waves"
        />

        {/* Gif Video here */}

        <video
          className="absolute opacity-30 lg:opacity-100 h-[80%] lg:right-0 lg:top-12 mix-blend-lighten "
          muted
          autoPlay
          loop
        >
          <source src="/gif/hero.mp4" type="video/mp4" />
        </video>

        <img
          className="absolute rotate-180 opacity-80 h-[50px] bottom-10 "
          src="/gif/mouse_scroll.gif"
        />
      </section>

      <section className="h-[530px] lg:h-[550px] 2xl:h-[550px] w-full mt-22 bg-gray-50 relative flex justify-center">
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
                  className="mt-4 carousel-card relative drop-shadow-xl hover:bg-gray-100 duration-300 bg-white rounded-md"
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

      <div className="w-full h-full py-10 relative flex-wrap flex justify-center items-center flex-col overflow-hidden">
        <div>
          <h1 className="text-center color-sub-heading font-bold text-md my-6">
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

      <ServiceProviderSection />

      <div className="bg-white relative">
        <section className="text-gray-600 relative body-font">
          <div className="container mx-auto flex lg:px-5 py-24 lg:flex-row flex-col items-center">
            <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
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

      <section className="bg-white relative body-font">
        {/* Wave Image */}
        <img
          style={{ width: "100vw" }}
          src="/images/pngs/waves1.png"
          className="absolute waves hidden lg:block z-10 -bottom-18 h-[250px] opacity-50"
          alt="Blue color Waves"
        />

        <div className="container mx-auto flex z-30 px-5 pb-16 lg:py-24 lg:flex-row flex-col items-center">
          <div className="lg:max-w-lg xl:w-full lg:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover relative z-30 object-center rounded"
              alt="hero"
              src="/images/svgs/picture_1.png"
            />
          </div>
          <div className="lg:flex-grow lg:w-1/2 xl:pl-24 lg:pl-16 pt-5 lg:pt-0 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex flex-wrap justify-center mb-3 lg:mb-0 sm:justify-start items-center">
              <h1 className="title-font text-2xl z-30 sm:text-3xl pe-2 font-medium text-black">
                Arrange a free{" "}
              </h1>
              <h1 className="font-bold text-2xl z-30 pt-1 color-sub-heading sm:text-3xl">
                {" "}
                Consultation{" "}
              </h1>
            </div>
            <p className="mb-8 leading-relaxed z-30 text-gray-600">
              Unlock the full potential of your business with a complimentary
              consultation. Our team of experts will provide valuable insights
              and recommendations tailored to your specific needs. Don’t miss
              out on this opportunity to take your business to the next level.
              Schedule your free consultancy today and discover the benefits of
              working with us.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(to right, #02f0f1, #024868)",
                }}
                className="inline-block z-30 text-center mt-8 w-fit px-8 py-3 text-white font-semibold text-md rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                Start your journey to business success
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center min-h-screen text-white mx-4 sm:mx-12 sm:px-6 lg:px-8">
        {/* Wave Image */}
        <img
          style={{ width: "100vw" }}
          src="/images/pngs/waves.png"
          className="absolute waves hidden lg:block -bottom-18 h-[250px] opacity-20"
          alt="Blue color Waves"
        />
        <h1
          className="text-3xl sm:text-4xl text-center lg:text-5xl font-bold mb-4 pb-4"
          style={{
            backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
            WebkitTextFillColor: "transparent", // Hide default text color
            WebkitBackgroundClip: "text", // Clip the gradient to the text
            color: "transparent", // Set the text color as transparent
          }}
        >
          Let’s get started
        </h1>
        <p
          style={{
            lineHeight: 1.4,
          }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-center"
        >
          Ready to embark on your technical journey ?
        </p>
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

      {/* Partners Section */}

      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> */}
      {/* Heading */}
      {/* <h1 className="text-3xl font-bold text-center mt-24 mb-10">
          Our Partners
        </h1> */}

      {/* Logo */}
      {/* <div className="mb-6">
          <Image
            src="/images/pngs/1631330600833.jpeg" // Replace with your logo image path
            alt="Partner Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div> */}

      {/* Paragraph */}
      {/* <p className="text-center text-gray-700 px-4 lg:mx-24 mb-4">
          We are proud to collaborate with our esteemed partners who help us
          achieve excellence and bring value to our community.
        </p>
        <p className="text-center text-gray-700 px-4 lg:mx-24 mb-4">
          Now more than ever, in a highly digital era, the onus falls on
          creating websites that look amazing but perform well. Here at Naxiums,
          we could not be proud to proclaim an exciting new partnership that
          will pursue value, innovation, and higher customer satisfaction: our
          new partnership with Blacksmith Agency. Its objective will be to
          ensure that businesses tap into data-driven website design for
          measurable successes through our collaborative efforts.
        </p>

        <h2 className="text-center font-semibold px-4 lg:mx-24 mb-4">
          Why Data-Driven Design Matters ?
        </h2>

        <p className="text-center text-gray-700 px-4 lg:mx-24 mb-4">
          On the other hand, the data-driven web design relies so much on
          analytics and actionable insights into users behaviors but with a
          series of accountable performance indicators at the inception of all
          decisions. Focusing on real-world concrete data, the business shall
          introduce websites capable of increasing not just user engagement but
          conversion rates for businesses. Implementing data-driven
          transformations on a business website, within three months, the
          user-engaging ratio increased by 35 %. In their purest form, this is
          how designs have to be able to affect not only the inspiration point
          of users but also the attainment of critical business objectives.
        </p>

        <h2 className="text-center font-semibold px-4 lg:mx-24 mb-4">
          A Partnership Based on Innovation
        </h2>

        <p className="text-center text-gray-700 px-4 lg:mx-24 mb-4">
          Our collaboration with Blacksmith Agency combines their expertise in
          website maintenance services with Naxiums dedication to delivering
          cutting-edge digital strategies. According to Tyler Scott, a lead
          developer at Blacksmith, tools like Figma changed how we work
          together. &quot;The ability to visualize and iterate designs in real-time
          keeps our work aligned with client goals while embracing creativity,&quot;
          he said. This partnership also addresses one important concern
          businesses have, keeping up with the fast pace of changes in design
          trends. We will be able to provide customized solutions for each
          client by leveraging data and advanced web design tools,{" "}
          <Link className="font-semibold" target="_blank" href="https://blacksmith.agency/website-maintenance-services/" passHref>
            {" "}
            view product website.{" "}
          </Link>
        </p>
        <p className="text-center text-gray-700 px-4 lg:mx-24 mb-24">
          Looking Ahead Into the future, the collaboration of Naxiums and
          Blacksmith Agency will be the reason behind the shift in industry
          standards. Be it conversion improvement or insights to maintain a
          website; rest assured, it will add value with every step. For Rachel
          Green, one of the clients who recently renovated her e-commerce
          platform, it seemed like a game-changer for her business. The future
          is bright for a company willing to take a huge leap into data-driven
          innovations. Come explore the boundaries with Naxiums in collaboration
          with Blacksmith Agency. Together, we will not just design websites
          will build the future.
        </p> */}
      {/* </div> */}
    </>
  );
};

export default Home;
