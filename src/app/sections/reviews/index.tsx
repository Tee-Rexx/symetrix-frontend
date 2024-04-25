"use client"
import { NextButton, PrevButton } from "@/app/components/carouselButtons";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

const client_reviews_arr = [
    {
        "client_name": "Jonathan Nguyen",
        "client_company": "InnovateTech Solutions",
        "review": "Symetrix Solutions revolutionized our healthcare systems, providing seamless integration and enhanced data security. Their expertise in healthcare IT made our transition smooth and efficient. Highly recommended for medical institutions!"
    },
    {
        "client_name": "Mark Thompson",
        "client_company": "PetTech Dynamics",
        "review": "Transformed our outdated systems into a seamless network of efficiency. Symetrix Solutions' team's dedication and expertise exceeded our expectations. Highly recommended!"
    },
    {
        "client_name": "Sarah Patel",
        "client_company": "CyberSphere Solutions",
        "review": "Symetrix Solutions provided cutting-edge solutions to optimize our agricultural data management. Their expertise in agri-tech helped us streamline operations and increase productivity on the farm. Highly impressed!"
    },
    {
        "client_name": "David Roberts",
        "client_company": "Nexus Technologies",
        "review": "Provided unparalleled support throughout our project. Symetrix Solutions' team's expertise and professionalism were evident in every interaction. We're thrilled with the outcome!"
    },
    {
        "client_name": "Olivia Baker",
        "client_company": "FreshFlour Bakery",
        "review": "Symetrix Solutions helped us modernize our bakery operations, from inventory management to customer ordering. Their intuitive solutions and responsive support have been instrumental in our success. Highly recommended for bakeries!"
    },
    {
        "client_name": "Ryan Garcia",
        "client_company": "FitFusion Dynamics",
        "review": "Provided innovative technology solutions that transformed our fitness studio operations. Symetrix Solutions' tailored approach and strategic insights helped us streamline our services and attract more clients. Highly recommended for fitness businesses!"
    },
    {
        "client_name": "Rachel Clark",
        "client_company": "PillBox Pharmacy",
        "review": "Understood the unique challenges of our pharmacy operations and provided customized solutions that improved efficiency and compliance. Symetrix Solutions' dedication to quality and customer satisfaction sets them apart. Highly recommended for pharmacies!"
    },
    {
        "client_name": "Amanda Wilson",
        "client_company": "Visionary Technologies",
        "review": "Delivered exceptional technology solutions that streamlined our biomedical research processes. Symetrix Solutions' expertise in data management and analysis significantly accelerated our research projects. Highly recommended for biomedical companies!"
    },
    {
        "client_name": "Emily Johnson",
        "client_company": "TechPro Innovations",
        "review": "Symetrix Solutions exceeded our expectations in every way. From the initial consultation to the final implementation, their team demonstrated professionalism and expertise. We're thrilled with the results!"
    },
    {
        "client_name": "Daniel Brown",
        "client_company": "Quantum Innovations",
        "review": "Symetrix Solutions helped us implement a comprehensive inventory management system for our pharmacy, improving accuracy and efficiency. Their attention to detail and commitment to delivering quality solutions made them a valuable partner. Highly recommend their services!"
    }
]

const ClientReviews = () => {

  return (
    <section className="h-full mt-48 lg:mt-64 xl:mt-56 border-2 border-white w-full">
      <Slider className="flex w-full items-start text-left " {...settings}>
        {client_reviews_arr?.map((data, index):any => (
          <div
            key={index}
            className="carousel-card relative drop-shadow-xl hover:bg-gray-300 duration-300 bg-white rounded-md"
          >
            <span className="px-4 pt-4 content-between flex flex-col">
              <span className="flex flex-col">
                <span className="w-full items-center flex justify-between">
                  <h4 className="text-lg pe-1 h-[50px] items-center flex font-semibold">
                    {data.client_name}
                  </h4>
=
                </span>
                <p className="pt-2 text-sm">{data.review}</p>
              </span>

              <span
                className="flex absolute items-center bottom-8 cursor-pointer duration-100"
              >
                <p className="border-b-2 border-black text-sm">Read More</p>
                <span className="readmore_icon ms-1">
                  <FiArrowUpRight />
                </span>
              </span>
            </span>
          </div>
        ))}
      </Slider>
    </section>

  );
};

export default ClientReviews;