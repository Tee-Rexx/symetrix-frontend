"use client";
import { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState<string>("");
  const phrases: string[] = [
    "groundbreaking advancements.",
    "revolutionary solutions.",
    "infinite possibilities.",
    "limitless growth.",
    "boundless creativity.",
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
    <div className="h-full w-full flex items-center justify-center">
      <div className="container flex justify-center items-center flex-col w-10/12 text-center">
        <span className=" text-4xl sm:text-5xl leading-normal w-full sm:w-9/12 mb-1 font-extrabold">
          Learn how to use technology in order to{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            {text}|
          </span>
        </span>
      </div>
    </div>
  );
};

export default Home;
