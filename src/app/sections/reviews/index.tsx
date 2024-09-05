"use client";
import {
  FeedbackPreviousButton,
  FeedbackNextButton,
} from "@/app/components/carouselButtons";
import Slider from "react-slick";

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
    <section className="h-full mt-64 relative lg:mt-64 xl:mt-56 bg-white">
      <div className="flex flex-row w-full relative items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block absolute mt-40 w-8 h-8 text-gray-400 mb-8"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      </div>
      <Slider className="flex flex-col" {...settings}>
        {client_reviews_arr?.map((data, index): any => (
          <div key={index} className="flex flex-col items-center">
            <section className="text-gray-600 body-font flex flex-col">
              <div className="container px-5 mt-24 mb-20 mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full flex flex-col items-center mx-auto text-center">
                  <p className="leading-relaxed w-[80%] md:w-full text-lg">{data.review}</p>
                  <span
                    className="w-10 h-[6px] my-2 rounded-xl"
                    style={{
                      background: "linear-gradient(to right, #02f0f1, #024868)",
                    }}
                  ></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {data.client_name}
                  </h2>
                  <p className="text-gray-500">{data.client_company}</p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientReviews;