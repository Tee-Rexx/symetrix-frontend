import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface carousel {
  onClick?: any;
}

export const PrevButton = ({ onClick }: carousel) => {
  return (
    <div
      className="absolute start-[36vw] rounded-full shadow-lg sm:start-[42%] lg:start-3 -top-16 2xl:-top-14"
      onClick={onClick}
    >
      <div className="bg-gray-300 hover:bg-gray-400 duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <FiArrowLeft />
      </div>
    </div>
  );
};

export const NormalPrevButton = ({ onClick }: carousel) => {
  return (
    <div
      className="rounded-full shadow-lg absolute top-2/4 -left-5 z-50"
      onClick={onClick}
    >
      <div className="bg-gray-300 hover:bg-gray-400 duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <FiArrowLeft />
      </div>
    </div>
  );
};

export const NextButton = ({ onClick }: carousel) => {
  return (
    <div
      className="absolute start-[55vw] rounded-full shadow-lg sm:start-[53%] -top-16 2xl:-top-14 lg:start-24"
      onClick={onClick}
    >
      <div className="bg-gray-300 hover:bg-gray-400 duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <FiArrowRight />
      </div>
    </div>
  );
};

export const NomralNextButton = ({ onClick }: carousel) => {
  return (
    <div
      className="rounded-full shadow-lg absolute top-2/4 -right-5"
      onClick={onClick}
    >
      <div className="bg-gray-300 hover:bg-gray-400 duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <FiArrowRight />
      </div>
    </div>
  );
};

export const FeedbackPreviousButton = ({ onClick }: carousel) => {
  return (
    <div
    style={{
      zIndex:1
    }}
      className="absolute rounded-full start-3 lg:start-3 md:start-3 sm:start-3 top-36 "
      onClick={onClick}
    >
      <div className="  duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <IoIosArrowBack />
      </div>
    </div>
  );
};

export const FeedbackNextButton = ({ onClick }: carousel) => {
  return (
    <div
      className="absolute rounded-full left-[85vw] md:left-[94vw] sm:left-[91vw] top-36 bottom-6"
      onClick={onClick}
    >
      <div className="duration-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <IoIosArrowForward />
      </div>
    </div>
  );
};


