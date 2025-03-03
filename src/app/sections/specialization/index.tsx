import React from "react";
import { NextButton, PrevButton } from "../../components/carouselButtons";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FiBox,
  FiGlobe,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiArrowUpRight,
} from "react-icons/fi";
import Link from "next/link";
const Specialization = () => {
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

  const someBlogs = [
    {
      id: 1,
      heading: "Blockchain Beyond Bitcoin",
      route: "blockchain-beyond-bitcoin",
      para: "Blockchain technology, initially popularized by Bitcoin, has transcended its origins as a cryptocurrency backbone. While Bitcoin remains the most recognizable use case of blockchain, the technology itself holds immense potential far beyond the realm of digital currencies. From supply chain management to healthcare, blockchain is reshaping industries by enhancing security, transparency, and efficiency.",
      icon_name: FiBox,
    },
    {
      id: 2,
      heading: "Cybersecurity In The Remote Work Era",
      route: "cybersecurity-in-the-remote-work-era",
      para: "In recent years, the landscape of work has undergone a significant transformation with the rise of remote work. Enabled by advances in technology and driven by factors such as globalization and the COVID-19 pandemic, remote work has become the new norm for millions of employees worldwide. While remote work offers numerous benefits, including increased flexibility and productivity",
      icon_name: FiGlobe,
    },
    {
      id: 3,
      heading: "Data Governance",
      route: "data-governance",
      para: "In today&apos;s digital age, data has become one of the most valuable assets for organizations across all industries. From customer information and financial records to product inventory and market insights, organizations rely on data to make informed decisions, drive innovation, and gain a competitive edge in the marketplace. However, the increasing volume, velocity, and variety of data present significant challenges for organizations in terms of data management, privacy, security, and compliance.",
      icon_name: FiCpu,
    },
    {
      id: 4,
      heading: "Demystifying AI",
      route: "demystifying-AI",
      para: "In recent years, Artificial Intelligence (AI) has emerged as a transformative technology with the potential to revolutionize industries, reshape economies, and redefine the way we live and work. Despite its increasing prevalence and impact, AI remains a concept that is often misunderstood and shrouded in mystery for many.",
      icon_name: FiDatabase,
    },
    {
      id: 5,
      heading: "Digital Transformation",
      route: "digital-transformation",
      para: "In today&apos;s rapidly evolving business landscape, digital transformation has become a critical imperative for organizations seeking to remain competitive, agile, and innovative. From adopting new technologies to reimagining business processes and customer experiences, digital transformation represents a fundamental shift in how businesses operate and deliver value in the digital age.",
      icon_name: FiCloud,
    },
  ];
  return (
    <section className="h-[530px] lg:h-[550px] 2xl:h-[550px] w-full mt-16 md:mt-36 mb-32 md:mb-64 lg:mb-64 xl:mb-56 relative flex justify-center">
      <div className="w-full items-center flex flex-col ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 container mt-16 ">
          <h4 className=" text-2xl text-white px-3 sm:text-4xl sm:px-3 text-center lg:text-left font-bold ">
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

            <p className="text-lg w-[92%] text-white mt-10">
              Facilitating our clients journey towards realizing their
              aspirations through the deployment of innovative solutions
              tailored to their unique requirements, thus paving the way for
              their remarkable accomplishments.
            </p>
          </div>
        </div>

        <div className="container mt-20 sm:mt-20  lg:mt-16 flex items-start ">
          <Slider className="flex w-full items-start text-left " {...settings}>
            {someBlogs.map((data, index) => (
              <div
                key={index}
                className="mt-4 carousel-card relative drop-shadow-xl hover:bg-gray-100 duration-300 bg-white rounded-xl"
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
                    <p className="pt-4 text-sm line-clamp-6">{data.para}</p>
                  </span>

                  <Link
                    href={"/blogs/" + data.route}
                    className="flex absolute items-center bottom-8 cursor-pointer duration-100"
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
  );
};

export default Specialization;
