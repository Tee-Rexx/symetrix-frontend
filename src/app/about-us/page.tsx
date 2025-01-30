import { ABOUT_US_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us",
  description: ABOUT_US_PAGE_DESCRIPTION.description,
  keywords: ABOUT_US_PAGE_DESCRIPTION.keywords,
};

const Page = () => {
  return <AboutUsClient />;
};

export default Page;
