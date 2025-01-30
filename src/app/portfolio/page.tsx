import { PORTFOLIO_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
    title : "Portfolio",
    description: PORTFOLIO_PAGE_DESCRIPTION.description,
    keywords: PORTFOLIO_PAGE_DESCRIPTION.keywords
  }

const Page = () => {
  return (
    <PortfolioClient/>
  );
};

export default Page;
