"use client";
import {
  NomralNextButton,
  NormalPrevButton,
} from "@/app/components/carouselButtons";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NomralNextButton />,
    prevArrow: <NormalPrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

const projects: any = [
    {
      title: "Pet Meds",
      description: "",
      image: "#24PETMEDS",
      url: "",
    },
    {
      title: "Go Pin It",
      description: "",
      image: "#GOPINIT",
      url: "",
    },
    {
      title: "Pet Meds",
      description: "",
      image: "#24PETMEDS",
      url: "",
    },
    {
      title: "Pet Meds",
      description: "",
      image: "#24PETMEDS",
      url: "",
    },
  ];

const ProjectsSection = () => {
  return (
    <section className="container-fluid flex items-center justify-center">
        <div className="flex justify-between container relative flex-wrap">
          <Slider
            className="flex container justify-center relative text-left"
            {...settings}
          >
            {projects.map((project: any, index: any) => (
              <div
                key={index}
                className="mt-4 projects-card relative drop-shadow-xl hover:bg-gray-300 duration-300 bg-white rounded-xl"
              >
                <div className="projects-link-button-container">
                  <a
                    href={project.url}
                    className="projects-link-button shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                    </svg>
                  </a>
                </div>
                <span className="w-full content-between flex flex-col">
                  <span className="flex w-full flex-col">
                    <div className="w-full h-36 text-xl flex text-nowrap justify-center items-center text-center font-extrabold text-white bg-blue-500 rounded-xl">
                      {project.image}
                    </div>
                    <span className="w-full items-center flex justify-between">
                      <h4 className="text-lg pe-1 h-[50px] items-center flex font-semibold leading-tight m-0 p-0">
                        {project.title}
                      </h4>
                    </span>
                    <p className="pt-4 text-sm">{project.description}</p>
                  </span>
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </section>
  );
};

export default ProjectsSection;

