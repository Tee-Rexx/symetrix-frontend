"use client";

import "../globals.css";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardData = [
    {
      backgroundImage: "url(/images/pngs/petmeds.png)",
      title: "24Petmeds Store",
      body: "24Petmeds is a dynamic platform, a marketplace connecting vendors and customers for seamless transactions.",
      url: "https://vetsupport.24vetsupport.com/#/",
      buttonText: "Learn More",
    },
    {
      backgroundImage: "url(/images/pngs/24petmeds.png)",
      title: "24Petmeds Admin Panel",
      body: "24Petmeds Admin Panel offers powerful tools for managing users, orders, and products, streamlining your administrative tasks.",
      url: "https://admin.24vetsupport.com/#/",
      buttonText: "Discover More",
    },
    {
      backgroundImage: "url(/images/pngs/gopinit.png)",
      title: "GoPin It",
      body: "GoPinit is an innovative platform, a mobile app creating a HUB for outdoor advertisers and their customers to connect and do business better.",
      url: "https://gopinit.com/",
      buttonText: "Read More",
    }
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <section className="text-gray-600 body-font">
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
              Portfolio
            </p>
          </div>
        </div>
      </div>
        <div className="container w-full mx-auto">
          <div className="border-4">
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 800 },
                visible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
              }}
              className="text-justify px-3 sm:px-32 py-32"
            >
              Welcome to Symetrix, where innovation meets excellence. As a
              leading software development company, we specialize in crafting
              bespoke digital solutions tailored to meet the unique needs of our
              diverse clientele. Our team of experienced developers, designers,
              and project managers work collaboratively to transform your vision
              into reality, leveraging the latest technologies and industry best
              practices. From intuitive mobile applications and robust web
              platforms to complex enterprise software systems, we deliver
              products that are not only functional but also scalable and
              secure. Our agile development process ensures flexibility and
              responsiveness, enabling us to adapt to changing requirements and
              deliver high-quality software on time and within budget. At
              Symetrix, we are committed to building lasting partnerships with
              our clients by providing continuous support and maintenance,
              ensuring your software evolves with your business. Explore our
              portfolio to discover how we have empowered businesses across
              various industries to achieve their digital transformation goals
              and stay ahead in the competitive landscape. Let us help you
              unlock the full potential of technology to drive growth and
              innovation in your organization.
            </motion.p>
          </div>
          <div className="w-full mx-auto my-16">
            <div className="flex flex-col px-3 sm:px-0 lg:flex-row flex-wrap gap-8 items-center md:justify-between">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="card max-w-sm rounded overflow-hidden mb-5 shadow-lg group"
                  style={{
                    backgroundImage: card.backgroundImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "inset 0px 10px 15px rgba(0, 0, 0, 0.07)"
                  }}
                >
                  <div className="card-content p-6 bg-white bg-opacity-80">
                    <h2 className="card-title text-xl font-bold mb-2 transition-colors ">
                      {card.title}
                    </h2>
                    <p className="card-body text-sm text-white">{card.body}</p>
                    <a
                      href={card.url}
                      target="_blank"
                      className="button mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {card.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
