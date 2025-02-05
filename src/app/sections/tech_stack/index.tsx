"use client";

import React, { useState, useEffect, useRef } from "react";
import Angular from "../../../../public/images/tech_stack/AngularLogoGradient.png";
import MySQL from "../../../../public/images/tech_stack/mysql_1.png";
import ReactJs from "../../../../public/images/tech_stack/react_1.png";
import NextJs from "../../../../public/images/tech_stack/next_js_1.png";
import NodeJs from "../../../../public/images/tech_stack/node_js_1.png";
import P_H_P from "../../../../public/images/tech_stack/php_2.png";
import Image from "next/image";
const TechStack = () => {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [projects, setProjects] = useState(0);
  const [clientRepetence, setClientRepetence] = useState(0);
  const [clientReview, setClientReview] = useState(0);

  const tech_stack = [
    { id: 1, src: Angular, alt: "Angular, Abstract logo featuring layered geometric shapes in a gradient of pink and purple hues" },
    { id: 2, src: ReactJs, alt: "React, React Native, A turquoise atom logo with a central nucleus and three elliptical orbits, symbolizing science and technology." },
    { id: 3, src: NextJs, alt: "Logo of Next.js, a popular React framework for building server-side rendered applications, featuring the word 'NEXT' in stylized text." },
    { id: 4, src: NodeJs, alt: "Node.js logo with 'node' in black letters, featuring a green hexagonal 'o.' Below, a green hexagon with 'JS' inside, conveying a tech theme." },
    { id: 5, src: P_H_P, alt: "PHP logo featuring bold white letters 'php' on a dark blue oval background, conveying a professional and modern tone." },
    { id: 6, src: MySQL, alt: "MySQL logo featuring stylized blue text 'My' and orange 'SQL' with a blue dolphin outline above, conveying a dynamic and modern tone." },
  ];

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
    <div ref={counterRef} className="bg-gray-500 w-full p-5">
        <div className="container w-full mx-auto grid grid-cols-1 py-9 lg:grid-cols-2">
          <span className="text-3xl text-center lg:mt-2 lg:text-left font-bold text-gray-100 text-wrap">
            Technologies & Tools We Work With
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-3 mt-12 lg:mt-0">
            {tech_stack.map((img) => (
              <Image
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="object-contain mb-12 lg:mb-0 mx-auto lg:w-[80px] w-[115px] md:w-[115px]"
                style={{
                  height: "auto",
                  aspectRatio: "3/2",
                  filter: "drop-shadow(2px 4px 6px black)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container border-t-4 border-l-0 border-r-0 border-b-0 py-7 border border-gray-600 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center">
          <span className="text-3xl text-center lg:pt-0 pt-5 lg:pb-0 pb-10 lg:text-left font-bold text-gray-100">
            Our web development journey, by the numbers
          </span>

          <div className="flex lg:flex-row items-center lg:items-start lg:justify-end flex-col lg:gap-x-3 gap-y-9 lg:gap-y-0">
            {/* Total Projects */}
            <div className="text-7xl lg:text-6xl lg:w-[190px] text-center lg:text-left font-bold">
              <span className="text-gray-100">{projects}+ </span>
              <p className="text-xl lg:text-sm text-gray-200 mt-3 lg:mt-2">
                Delivering excellence in web & mobile development
              </p>
            </div>

            {/* Client Repetence */}
            <div className="text-7xl lg:text-6xl lg:w-[180px] text-center lg:text-left font-bold">
              <span className="text-gray-100">{clientRepetence}% </span>
              <p className="text-xl lg:text-sm text-gray-200 mt-3 lg:mt-2 lg:ms-1">
                Client loyalty rate
              </p>
            </div>

            {/* Overall Client Review */}
            <div className="text-7xl lg:text-6xl lg:w-[180px] text-center lg:text-left font-bold">
              <span className="text-gray-100"> {clientReview} </span>
              <p className="text-xl lg:text-sm text-gray-200 mt-3 lg:mt-2">
                Authenticated customer satisfaction scores
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TechStack