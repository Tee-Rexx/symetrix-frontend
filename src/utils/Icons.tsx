import React from "react";
import { ICONS_NAME } from "./constants/icons.constants";

export type IconName = ICONS_NAME; // Add more icon names as needed

interface IconProps {
  iconName: IconName;
  height?: number;
  width?: number;
  color?: string; // Optional color prop
}

const Icon: React.FC<IconProps> = ({ iconName, height, width, color }) => {
  const icons: { [key in IconName]: React.ReactNode } = {
    home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 -960 960 960"
        fill={color ?? "#e8eaed"}
      >
        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
      </svg>
    ),
    chevron_left: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
        width={width}
        fill={color ?? "#e8eaed"}
      viewBox="0 -960 960 960"
      >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
    ),
    contact_us: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        fill={color ?? "#e8eaed"}
        viewBox="0 -960 960 960"
      >
        <path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
      </svg>
    ),
    blog: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        fill={color ?? "#e8eaed"}
        viewBox="0 -960 960 960"
      >
        <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
      </svg>
    ),
    briefcase: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        fill={color ?? "#e8eaed"}
        viewBox="0 -960 960 960"
      >
        <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
      </svg>
    ),
    laptop_mobile: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        fill={color ?? "#e8eaed"}
        viewBox="0 -960 960 960"
      >
        <path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z" />
      </svg>
    ),
    group: (
      <svg xmlns="http://www.w3.org/2000/svg" height={height}
      width={width}
      fill={color ?? "#e8eaed"} viewBox="0 -960 960 960"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
    ),
  };

  const IconSVG = icons[iconName];

  return <div style={{ height, width }}>{IconSVG}</div>;
};

export default Icon;
