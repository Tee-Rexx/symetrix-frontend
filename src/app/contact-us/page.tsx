import { CONTACTUS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: CONTACTUS_PAGE_DESCRIPTION.description,
  keywords: CONTACTUS_PAGE_DESCRIPTION.keywords,
};

const ContactPage = () => {
  return <ContactUsClient />;
};

export default ContactPage;
