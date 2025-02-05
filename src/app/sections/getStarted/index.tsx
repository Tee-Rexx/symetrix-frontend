import React from 'react'

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white mb-32 md:mb-64 lg:mb-64 xl:mb-40 mx-4 sm:mx-12 sm:px-6 lg:px-8">
    {/* Wave Image */}
    <img
      style={{ width: "100vw" }}
      src="/images/pngs/waves.png"
      className="absolute waves hidden lg:block -bottom-18 h-[250px] opacity-20"
      alt="Blue color Waves"
    />
    <h1
      className="text-3xl sm:text-4xl text-center lg:text-5xl font-bold mb-4 pb-4"
      style={{
        backgroundImage: "linear-gradient(to right, #02f0f1, #024868)",
        WebkitTextFillColor: "transparent", // Hide default text color
        WebkitBackgroundClip: "text", // Clip the gradient to the text
        color: "transparent", // Set the text color as transparent
      }}
    >
      Let’s get started
    </h1>
    <p
      style={{
        lineHeight: 1.4,
      }}
      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-center"
    >
      Ready to embark on your technical journey ?
    </p>
    <p className="text-md sm:text-xl lg:text-md font-thin text-center">
      Take the first step towards success, reach out to us today and let’s
      schedule a consultation to discuss your vision.
    </p>
    <div
      className="w-full sm:h-1 lg:h-2 mt-8"
      style={{
        background: "linear-gradient(to right, #02f0f1, #024868)",
      }}
    ></div>
  </div>
  )
}

export default GetStarted