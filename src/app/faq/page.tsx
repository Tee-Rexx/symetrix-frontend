import { FAQS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQs",
  description: FAQS_PAGE_DESCRIPTION.description,
  keywords: FAQS_PAGE_DESCRIPTION.keywords,
};

const FAQPage = () => {
  return <FaqClient />;
};

export default FAQPage;
