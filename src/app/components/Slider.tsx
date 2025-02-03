import Slider from "react-slick"

interface carousel {
    slider_data: any,
    settings: any
}

export const CarouselSlider = ({slider_data, settings} : carousel) => {

    return (
        <Slider className="flex w-full items-start text-left " {...settings}>
              {slider_data.map((data: any, index: number) => (
              <div key={index} className="carousel-card items-start px-3 flex-col float-start text-left drop-shadow-xl hover:bg-gray-300 duration-300 bg-white rounded-xl">
                <h4 className="text-xl font-semibold">{data.heading}</h4>
                <p className="pt-2">{data.para}</p>
              </div>
              ))}
        </Slider>
    )
}