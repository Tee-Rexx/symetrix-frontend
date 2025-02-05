"use client";
import Image from "next/image";

interface BlogData {
  card_img: string;
  card_heading: string;
  card_text: string;
  card_alt: string;
}

const BlogCard = ({
  card_img,
  card_heading,
  card_text,
  card_alt,
}: BlogData) => {
  return (
    <div className="text-gray-600 body-font">
      <div className="px-4 py-12 mx-auto">
        <div className="flex">
          <div className="h-72 w-72">
            <div className="h-full bg-white shadow-2xl rounded-xl overflow-hidden shadow-slate-600 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex justify-center mt-4 items-center">
                {/* <Image
                  className=" pt-4"
                  src={card_img}
                  alt={card_alt}
                  width={200}
                  height={0}
                  draggable="false"
                /> */}

                <div className="w-full h-36"
                  style={{
                    backgroundImage: card_img,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
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
