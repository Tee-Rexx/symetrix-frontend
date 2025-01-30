import React from "react";
import { OUR_SERVICES_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import OurServiceClient from "./OurServiceClient";

export const metadata: Metadata = {
  title: "Our Services",
  description: OUR_SERVICES_PAGE_DESCRIPTION.description,
  keywords: OUR_SERVICES_PAGE_DESCRIPTION.keywords,
};

const Page: React.FC = () => {
  return <OurServiceClient />;
};

export default Page;
