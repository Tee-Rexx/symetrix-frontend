"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

interface BlogData {
  card_img: string;
  card_heading: string;
  card_text: string;
}

const BlogCard = ({ card_img, card_heading, card_text }: BlogData) => {
  return (
    <div className="text-gray-600 body-font">
      <div className="px-4 py-12 mx-auto">
        <div className="flex">
          <div className=" sm:h-72 sm:w-72">
            <div className="h-full bg-white shadow-2xl rounded-md overflow-hidden shadow-slate-600 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex justify-center mt-4 items-center">
                <img className="lg:h-36 pt-4" src={card_img} alt="blog" />
              </div>
              <div className="p-6">
                <h1 className="title-font text-center text-sm font-semibold text-gray-900 mb-3">
                  {card_heading}
                </h1>
                <p className="leading-relaxed mb-3 text-xs text-center">
                  {card_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
