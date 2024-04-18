"use client";
import { useState, useEffect } from "react";
import BlogCard from "./components/blogCard";
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
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="container flex  relative items-center flex-col w-10/12 text-center">
          <span
            style={{ lineHeight: 1.25 }}
            className=" text-xl pb-96 mb-20 h-24 sm:text-7xl w-full sm:w-9/12 font-extrabold"
          >
            Learn how to use technology in order to{" "}
            <p
              style={{
                backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 1.25,
              }}
              className="text-4xl sm:text-7xl font-extrabold"
            >
              {text}|
            </p>
          </span>
          {/* Left Stach Badges */}
          <Image
            src="/images/stack_badges/tailwind.png" // Path relative to the public directory
            width={80}
            height={80}
            alt="Tailwind Logo"
            className="absolute shadow-2xl animate-bounce-slow  start-2 -top-20 py-5 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/vue.png" // Path relative to the public directory
            width={70}
            height={50}
            alt="Vue Logo"
            className="absolute shadow-2xl animate-bounce-delayed  -start-14 top-11 py-4 px-3 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/react.png" // Path relative to the public directory
            width={70}
            height={70}
            alt="React Logo"
            className="absolute shadow-2xl animate-bounce-slow  start-14 top-28 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/python.png" // Path relative to the public directory
            width={60}
            height={60}
            alt="Python Logo"
            className="absolute shadow-2xl animate-bounce-veryslow  -start-8 top-52 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/android.png" // Path relative to the public directory
            width={80}
            height={80}
            alt="Android Logo"
            className="absolute shadow-2xl animate-bounce-delayed  start-8 top-72 object-contain bg-white p-3 rounded-full"
          />
          {/* Right Stach Badges */}
          <Image
            src="/images/stack_badges/angular.png" // Path relative to the public directory
            width={80}
            height={70}
            alt="Angular Logo"
            className="absolute shadow-2xl animate-bounce-veryslow  -end-14 -top-20 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/php.png" // Path relative to the public directory
            width={80}
            height={80}
            alt="Php Logo"
            className="absolute shadow-2xl animate-bounce-delayed  end-28 top-2 py-6 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/apple.png" // Path relative to the public directory
            width={80}
            height={80}
            alt="Apple Logo"
            className="absolute shadow-2xl animate-bounce-veryslow  end-1 top-28 py-3 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/node.png" // Path relative to the public directory
            width={60}
            height={60}
            alt="Node Logo"
            className="absolute shadow-2xl animate-bounce-slow  -end-12 top-56 py-3 object-contain bg-white p-3 rounded-full"
          />
          <Image
            src="/images/stack_badges/bootstrap.png" // Path relative to the public directory
            width={80}
            height={80}
            alt="Bootstrap Logo"
            className="absolute shadow-2xl animate-bounce-delayed  end-20 top-72 py-3 object-contain bg-white p-3 rounded-full"
          />
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="container flex flex-wrap justify-evenly">
          {Data.map((item, index) => (
            <div
              key={index}
              className="w-[75vw] sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 "
            >
              <BlogCard
                card_heading={item.card_heading}
                card_text={item.card_text}
                card_img={item.card_img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
