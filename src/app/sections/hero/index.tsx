"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Hero = () => {
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     SendPageDataToDataLayer();
  //   }, 500);
  // }, []);

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
    <section className="h-[90vh] bg-black lg:h-screen w-full relative flex items-center mb-32 md:mb-64 lg:mb-64 xl:mb-56 justify-center overflow-hidden">
      <div className="rounded-full h-[300px] w-[300px] sphere absolute top-0 start5 md:start-20 bg-violet-600 opacity-15"></div>
      <div className="rounded-full h-[300px] w-[300px] sphere absolute bottom-0 end-14 lg:top-10 lg:end-72 bg-violet-600 opacity-15"></div>
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
      <Image
        src="/images/pngs/waves.png"
        alt="A dynamic design featuring intertwining, waved lines in shades of gray against a black background, creating an abstract flow."
        width={500}
        height={400}
        className="absolute waves hidden lg:block -bottom-28 h-[250px] opacity-10 w-full"
        priority
        draggable="false"
      />

      {/* Gif Video here */}

      <video
        className="absolute opacity-30 lg:opacity-100 h-[80%] lg:right-0 lg:top-12 mix-blend-lighten "
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/gif/hero.mp4" type="video/mp4" />
      </video>

      <Image
        draggable="false"
        src="/gif/mouse_scroll.gif"
        alt="Mouse Scroll Animation"
        width={50} // Adjust as needed
        height={50} // Adjust as needed
        className="absolute rotate-180 opacity-80 h-[50px] bottom-10"
      />
    </section>
  );
};

export default Hero;
