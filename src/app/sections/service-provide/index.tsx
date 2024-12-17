"use client";

const ServiceProviderSection = () => {

    const service_provider_card_data = [
        {
            strip_color : 'bg-[#6329af]',
            card_head : 'Business Collaboration',
            card_para : 'Business collaboration fosters synergy, enhances communication, and drives innovation by aligning teams and sharing resources for optimal success.'
        },
        {
            strip_color : 'bg-[#ff5f34]',
            card_head : 'Engineering & Services',
            card_para : 'Engineering and services combine expertise to deliver innovative solutions, optimize performance, and ensure reliable outcomes for complex projects and operations.'
        },
        {
            strip_color : 'bg-[#24b78f]',
            card_head : 'Creative Minds',
            card_para : 'Creative minds drive innovation by thinking outside the box, generating unique ideas, and transforming concepts into impactful solutions and designs.'
        },
        {
            strip_color : 'bg-[#ff1249]',
            card_head : 'Revenue Generation',
            card_para : 'Revenue generation strategies focus on maximizing income through optimized sales processes, strategic marketing, and innovative business models to drive growth and profitability.'
        },
    ]


  return (
    <>
      <section className="flex flex-col -z-10 relative pt-32 bg-white container-fluid w-full items-center justify-center">
        <img
          draggable="false"
          className="absolute object-contain top-4 right-0"
          width="280"
          src="images/pngs/leftblob.png"
        />

        <div className="container relative z-20 flex flex-col items-center w-full">
          <img
            draggable="false"
            className="absolute object-contain top-60 left-0"
            src="images/pngs/16-7.png"
            alt="cloud-img"
          />

          <img
            draggable="false"
            className="absolute object-contain top-36 right-14"
            src="images/pngs/15-7.png"
            alt="cloud-img"
          />

          <h5 className="color-sub-heading text-nowrap font-bold text-md">
            Technology Solutions
          </h5>

          <h3 className="font-extrabold text-center px-3 sm:px-0 mt-5 text-2xl sm:text-3xl">
            We provide software & IT Solutions
          </h3>

          <p className="text-gray-700 text-xs font-medium z-20 w-full px-3 sm:px-0 sm:w-[60vw] text-center  mt-7 ">
            We offer comprehensive software and IT solutions designed to
            optimize your business processes, enhance productivity. Our expert
            team delivers customized strategies and cutting-edge technology to
            meet your unique needs.
          </p>

          <img
            draggable="false"
            className="object-contain h-[350px] rounded-xl shadow-2xl z-30 mt-14"
            src="images/svgs/Top-10-Retail-Software-Development-Companies-for-2021.jpg"
            alt="service-provide-main-img"
          />

          <img
            draggable="false"
            className="object-contain hidden lg:flex left-8 absolute bottom-2"
            src="images/pngs/13-7.png"
            alt="service-provide-main-img"
          />

          <img
            draggable="false"
            className="object-contain hidden md:flex right-12 absolute -bottom-12"
            src="images/pngs/14.png"
            alt="service-provide-main-img"
          />
        </div>
      </section>

      <section className="flex flex-col relative pt-40 pb-10 bg-white container-fluid w-full items-center justify-center">
        <img
          draggable="false"
          className="absolute object-contain top-10 left-0"
          width="620"
          src="images/pngs/rightblob.png"
        />

        <div className="container relative flex flex-col items-center w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center md:justify-between w-full">

        {service_provider_card_data.map((card, index) => (
            <div key={index} className="bg-white hover:bg-slate-100 transition mx-auto lg:mx-0 w-[95%] lg:w-full ease-in-out duration-200 flex flex-col lg:flex-row items-center lg:items-start group service-provider-card relative shadow-lg rounded-md py-5 px-2 sm:px-10">
                <>
            <div className={`h-auto absolute left-0 w-1 rounded-tl-md rounded-bl-md inset-0 transition-opacity opacity-0 group-hover:opacity-100 ${card.strip_color}`}></div>

                {card.card_head === "Business Collaboration" ? (
                  <svg className="mb-5 lg:mb-0 w-[80px] h-[80px] lg:w-[135px] lg:h-[135px] xl:w-[105px] xl:h-[105px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#6329af"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
                ) : (
                  ""
                )}
                {card.card_head === "Engineering & Services" ? (
                  <svg className="mb-5 lg:mb-0 w-[80px] h-[80px] lg:w-[135px] lg:h-[135px] xl:w-[105px] xl:h-[105px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ff5f34"><path d="m234-480-12-60q-12-5-22.5-10.5T178-564l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T222-820l12-60h80l12 60q12 5 22.5 10.5T370-796l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T326-540l-12 60h-80Zm40-120q33 0 56.5-23.5T354-680q0-33-23.5-56.5T274-760q-33 0-56.5 23.5T194-680q0 33 23.5 56.5T274-600ZM592-40l-18-84q-17-6-31.5-14.5T514-158l-80 26-56-96 64-56q-2-18-2-36t2-36l-64-56 56-96 80 26q14-11 28.5-19.5T574-516l18-84h112l18 84q17 6 31.5 14.5T782-482l80-26 56 96-64 56q2 18 2 36t-2 36l64 56-56 96-80-26q-14 11-28.5 19.5T722-124l-18 84H592Zm56-160q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                ) : (
                  ""
                )}
                {card.card_head === "Creative Minds" ? (
                  <svg className="mb-5 lg:mb-0 w-[80px] h-[80px] lg:w-[135px] lg:h-[135px] xl:w-[105px] xl:h-[105px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#24b78f"><path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/></svg>
                ) : (
                  ""
                )}
                {card.card_head === "Revenue Generation" ? (
                  <svg className="mb-5 lg:mb-0 w-[80px] h-[80px] lg:w-[135px] lg:h-[135px] xl:w-[105px] xl:h-[105px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#ff1249"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>
                ) : (
                  ""
                )}
                <div className="ps-5">

                <h4>{card.card_head}</h4>
                <p className="text-gray-500 text-xs pt-2 font-medium">{card.card_para}</p>
                </div>
            </>
            </div>

))}
    
</div>

        </div>
      </section>
    </>
  );
};

export default ServiceProviderSection;
