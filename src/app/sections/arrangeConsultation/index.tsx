import Link from 'next/link'
import React from 'react'

const ArrangeConsultation = () => {
  return (
      <section className="relative body-font mb-32 md:mb-64 lg:mb-80 xl:mb-80">
      {/* Wave Image */}
      {/* <img
        style={{ width: "100vw" }}
        src="/images/pngs/waves1.png"
        className="absolute waves hidden lg:block z-10 -bottom-18 h-[250px] opacity-50"
        alt="Blue color Waves"
      /> */}

      <div className="container relative overflow-hidden mx-auto flex z-30 lg:flex-row flex-col items-center">
        <div className="lg:max-w-lg xl:w-full lg:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover relative z-30 object-center rounded"
            alt="hero"
            src="/images/svgs/picture_1.png"
          />
        </div>
        <div className="lg:flex-grow relative lg:w-1/2 xl:pl-24 lg:pl-16 pt-5 lg:pt-0 flex flex-col md:items-start md:text-left items-center text-center">
          
          <div className="flex flex-wrap justify-center mb-3 lg:mb-0 sm:justify-start items-center">
            <h1 className="font-bold text-2xl z-30 sm:text-3xl pe-2 text-gray-300">
              Arrange a free{" "}
            </h1>
            <h1 className="font-bold text-2xl z-30 pt-1 color-sub-heading sm:text-3xl">
              {" "}
              Consultation{" "}
            </h1>
          </div>
          <p className="mb-8 mt-4 leading-relaxed px-4 md:px-0 z-30 text-gray-300">
            Unlock the full potential of your business with a complimentary
            consultation. Our team of experts will provide valuable insights
            and recommendations tailored to your specific needs. Don’t miss
            out on this opportunity to take your business to the next level.
            Schedule your free consultancy today and discover the benefits of
            working with us.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(to right, #02f0f1, #024868)",
              }}
              className="inline-block z-30 text-center mt-8 w-fit px-8 py-3 text-white font-semibold text-md rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              Start your journey to business success
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArrangeConsultation