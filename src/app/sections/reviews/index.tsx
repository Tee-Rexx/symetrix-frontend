"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FeedbackPreviousButton,
  FeedbackNextButton,
} from "@/app/components/carouselButtons";
import Slider from "react-slick";
import BlockQuoteImg from '../../../../public/images/pngs/blockquote_2.png'
import Image from "next/image";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <FeedbackNextButton />,
  prevArrow: <FeedbackPreviousButton />,
  duration: 500,
};

const client_reviews_arr = [
  {
    client_name: "Jonathan Nguyen",
    client_company: "InnovateTech Solutions",
    review:
      "Naxiums revolutionized our healthcare systems, providing seamless integration and enhanced data security. Their expertise in healthcare IT made our transition smooth and efficient. Highly recommended for medical institutions!",
  },
  {
    client_name: "Mark Thompson",
    client_company: "PetTech Dynamics",
    review:
      "Transformed our outdated systems into a seamless network of efficiency. Naxiums team's dedication and expertise exceeded our expectations. Highly recommended!",
  },
  {
    client_name: "Sarah Patel",
    client_company: "CyberSphere Solutions",
    review:
      "Naxiums provided cutting-edge solutions to optimize our agricultural data management. Their expertise in agri-tech helped us streamline operations and increase productivity on the farm. Highly impressed!",
  },
  {
    client_name: "David Roberts",
    client_company: "Nexus Technologies",
    review:
      "Provided unparalleled support throughout our project. Naxiums team's expertise and professionalism were evident in every interaction. We're thrilled with the outcome!",
  },
  {
    client_name: "Olivia Baker",
    client_company: "FreshFlour Bakery",
    review:
      "Naxiums helped us modernize our bakery operations, from inventory management to customer ordering. Their intuitive solutions and responsive support have been instrumental in our success. Highly recommended for bakeries!",
  },
  {
    client_name: "Ryan Garcia",
    client_company: "FitFusion Dynamics",
    review:
      "Provided innovative technology solutions that transformed our fitness studio operations. Naxiums tailored approach and strategic insights helped us streamline our services and attract more clients. Highly recommended for fitness businesses!",
  },
  {
    client_name: "Rachel Clark",
    client_company: "PillBox Pharmacy",
    review:
      "Understood the unique challenges of our pharmacy operations and provided customized solutions that improved efficiency and compliance. Naxiums dedication to quality and customer satisfaction sets them apart. Highly recommended for pharmacies!",
  },
  {
    client_name: "Amanda Wilson",
    client_company: "Visionary Technologies",
    review:
      "Delivered exceptional technology solutions that streamlined our biomedical research processes. Naxiums expertise in data management and analysis significantly accelerated our research projects. Highly recommended for biomedical companies!",
  },
  {
    client_name: "Emily Johnson",
    client_company: "TechPro Innovations",
    review:
      "Naxiums exceeded our expectations in every way. From the initial consultation to the final implementation, their team demonstrated professionalism and expertise. We're thrilled with the results!",
  },
  {
    client_name: "Daniel Brown",
    client_company: "Quantum Innovations",
    review:
      "Naxiums helped us implement a comprehensive inventory management system for our pharmacy, improving accuracy and efficiency. Their attention to detail and commitment to delivering quality solutions made them a valuable partner. Highly recommend their services!",
  },
];

const ClientReviews = () => {
  return (
    <section className="h-full container-fluid flex items-center justify-center overflow-hidden relative md:mb-64 lg:mb-64 xl:mb-40">
      <div className="container pt-5 relative">
        <div className="flex flex-col ms-16 md:ms-16  w-full relative">
          <Image 
          src={BlockQuoteImg}
          alt="A large, stylized turquoise quotation mark symbol, suggesting a focus on communication or a notable quote."
          className="absolute -z-10 -top-5 -start-12"
          style={{filter:'brightness(0.75)'}}
          height={55}
          />
          <h1 className="text-gray-200 font-extrabold md:text-4xl text-4xl">
            Our Client Words
          </h1>

          <p className="mt-5 text-gray-300 w-[70%] md:w-[90%] text-wrap font-normal">Hear what our clients have to say about their experience with us. Their feedback drives our commitment to excellence.</p>
        </div>
        <Slider className="flex flex-col" {...settings}>
          {client_reviews_arr?.map((data, index): any => (
            <div key={index} className="flex flex-col items-center">
              <section className="text-gray-600 body-font flex flex-col">
                <div className="container px-5 mt-8 mb-20 mx-auto">
                  <div className="xl:w-1/2 lg:w-3/4 w-full flex flex-col gradient-border me-14 ms-12 py-10 rounded-xl items-center mx-auto text-center">
                    <p className="leading-relaxed text-gray-300 w-[80%] md:px-5 md:w-full text-lg">
                      {data.review}
                    </p>
                    <span
                      className="w-10 h-[6px] my-2 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(to right, #02f0f1, #024868)",
                      }}
                    ></span>
                    <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">
                      {data.client_name}
                    </h2>
                    <p className="text-gray-300">{data.client_company}</p>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientReviews;
