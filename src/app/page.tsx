"use client";
import { useState, useEffect } from "react";
import BlogCard from "./components/blogCard";
import {
  blogContentText,
  blogContentTextWithMarginTop,
  blogSectionHeading,
} from "@/utils/blogStyle";

import Image from "next/image";
const Data = [
  {
    card_img: "https://dummyimage.com/720x400",
    card_heading: "The",
    card_text: "lorem ipsum dolar",
  },
  {
    card_img: "https://dummyimage.com/720x400",
    card_heading: "Symetrix",
    card_text: "lorem ipsum dolar",
  },
  {
    card_img: "https://dummyimage.com/720x400",
    card_heading: "Solution",
    card_text: "lorem ipsum dolar",
  },
];

const Home = () => {
  const [text, setText] = useState<string>("");
  const [screenWidth, setScreenWidth] = useState(0);
  const phrases: string[] = [
    "groundbreaking advancements.",
    "groundbreaking advancements.",
    // "revolutionary solutions.",
    // "infinite possibilities.",
    // "limitless growth.",
    // "boundless creativity.",
  ];
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

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

  return (
    <>
      <section className="h-[90vh] lg:h-screen w-full -z-50 relative flex items-center justify-center">

      <div className="rounded-full sphere absolute top-0 start5 md:start-20 bg-violet-600 opacity-15"></div>
      <div className="rounded-full sphere absolute bottom-0 end-14 lg:top-10 lg:end-72 bg-violet-600 opacity-15"></div>
      <div className="h-screen w-[90%] block lg:hidden bg-black absolute opacity-15"></div>
        <div className="container px-3 lg:px-0 flex relative justify-center items-center lg:items-start h-100 flex-col ">
          <span
            style={{ lineHeight: 1.25 }}
            className=" text-4xl sm:text-6xl z-0 text-white text-center lg:text-left h-[256px] sm:mb-16 lg:mb-0 lg:ms-8 lg:text-5xl w-full md:w-[90%] lg:w-5/12 font-extrabold"
          >
            Learn how to use technology in order to{" "}
            <p
              style={{
                backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 1.25,
              }}
              className="text-4xl sm:text-6xl lg:text-5xl font-extrabold"
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
      </section>

      <div className="w-full h-full flex-wrap flex justify-center items-center">
        <div className="container flex-wrap flex justify-evenly">
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
    </>
  );
};

export default Home;


{/* Left Stach Badges */}

          {/* <Image
            src="/images/stack_badges/tailwind.png"
            width={80}
            height={80}
            alt="Tailwind Logo"
            className="absolute shadow-2xl animate-bounce-slow  start-2 -top-20 py-5 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/vue.png"
            width={70}
            height={50}
            alt="Vue Logo"
            className="absolute shadow-2xl animate-bounce-delayed  -start-14 top-11 py-4 px-3 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/react.png"
            width={70}
            height={70}
            alt="React Logo"
            className="absolute shadow-2xl animate-bounce-slow  start-14 top-28 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/python.png"
            width={60}
            height={60}
            alt="Python Logo"
            className="absolute shadow-2xl animate-bounce-veryslow  -start-8 top-52 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/android.png"
            width={80}
            height={80}
            alt="Android Logo"
            className="absolute shadow-2xl animate-bounce-delayed  start-8 top-72 object-contain bg-white p-3 rounded-full"
          /> */}

          {/* Right Stach Badges */}

          {/* <Image
        src="/images/stack_badges/angular.png"
        width={80}
        height={70}
        alt="Angular Logo"
        className="absolute shadow-2xl animate-bounce-veryslow  -end-14 -top-20 object-contain bg-white p-3 rounded-full"
      />
        <Image
        src="/images/stack_badges/php.png"
        width={80}
        height={80}
        alt="Php Logo"
        className="absolute shadow-2xl animate-bounce-delayed  end-28 top-2 py-6 object-contain bg-white p-3 rounded-full"
      />
        <Image
        src="/images/stack_badges/apple.png"
        width={80}
        height={80}
        alt="Apple Logo"
        className="absolute shadow-2xl animate-bounce-veryslow  end-1 top-28 py-3 object-contain bg-white p-3 rounded-full"
      />
        <Image
        src="/images/stack_badges/node.png"
        width={60}
        height={60}
        alt="Node Logo"
        className="absolute shadow-2xl animate-bounce-slow  -end-12 top-56 py-3 object-contain bg-white p-3 rounded-full"
      />
        <Image
        src="/images/stack_badges/bootstrap.png"
        width={80}
        height={80}
        alt="Bootstrap Logo"
        className="absolute shadow-2xl animate-bounce-delayed  end-20 top-72 py-3 object-contain bg-white p-3 rounded-full"
      /> */}