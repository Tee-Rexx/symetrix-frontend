import { BLOGS_PAGE_DESCRIPTION } from "@/utils/constants/header.constants";
import { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blogs",
  description: BLOGS_PAGE_DESCRIPTION.description,
  keywords: BLOGS_PAGE_DESCRIPTION.keywords,
};

export default function BlogPage() {
  return <BlogsClient />;
}
