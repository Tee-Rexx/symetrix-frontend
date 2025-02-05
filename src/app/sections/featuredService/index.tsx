import BlogCard from '@/app/components/blogCard';
import React from 'react'

const FeaturedService = () => {

    const Data = [
      {
        card_img:
          "/images/pngs/55-creative-marketing-ideas-for-your-product-or-business.png",
        card_heading: "Creative Idea",
        card_text:
          "Innovative software solutions tailored for your business success.",
      },
      {
        card_img: "/images/svgs/700600p546EDNmainimg-project-success.jpg",
        card_heading: "Successful Project",
        card_text: "Delivering successful projects that exceed expectations.",
      },
      {
        card_img: "/images/svgs/time-management.svg",
        card_heading: "Time Management",
        card_text: "Efficient time management to meet every deadline.",
      },
    ];

  return (
    <div className="w-full h-full mb-32 md:mb-64 lg:mb-64 xl:mb-56 relative flex-wrap flex justify-center items-center flex-col overflow-hidden">
        <div>
          <h1 className="text-center color-sub-heading font-bold text-md my-6">
            Featured Services
          </h1>
          <h2 className="text-white text-center font-normal px-3 sm:px-0 text-3xl sm:text-4xl mt-4">
            Engaging Creative Minds via Technology
          </h2>
        </div>
        <div className="container flex-wrap flex justify-around">
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
  )
}

export default FeaturedService