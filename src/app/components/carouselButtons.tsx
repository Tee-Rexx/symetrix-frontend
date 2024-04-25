import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface carousel {
    onClick?:any
}

export const PrevButton = ({onClick} : carousel) => {

    return (
        <div className="absolute start-[36vw] rounded-full shadow-lg sm:start-[42%] lg:start-3 -top-20" onClick={onClick}>
            <div className="bg-gray-300 hover:bg-gray-400 duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
            <FiArrowLeft />
            </div>
        </div>
    )
}

export const NextButton = ({onClick} : carousel) => {

    return (
        <div className="absolute start-[55vw] rounded-full shadow-lg sm:start-[53%] -top-20 lg:start-24" onClick={onClick}>
            <div className="bg-gray-300 hover:bg-gray-400 duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
            <FiArrowRight />
            </div>
        </div>
    )
}
