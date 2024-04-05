"use client";

import BlogCard from "@/app/components/blogCard";
import {
  blogContentText,
  blogContentTextWithMarginTop,
  blogSectionHeading,
} from "@/utils/blogStyle";
import { useTheme } from "next-themes";

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

const BlockchainBeyondBitcoin = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="container flex justify-evenly">
          {Data.map((item) => (
            <BlogCard
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

export default BlockchainBeyondBitcoin;
