"use client";
import Link from "next/link";
import React from "react";
import { SendPageDataToDataLayer } from "../hooks/analyticsProvider";

const blogs = [
  {
    id: 1,
    heading: "Blockchain Beyond Bitcoin",
    description:
      "Blockchain extends far beyond Bitcoin, offering a decentralized approach to secure transactions, data management, and trust. Its applications are revolutionizing industries such as finance, supply chain, healthcare, and more, enabling transparency, security, and efficiency.",
    imageUrl: "images/blog_card_imgs/blockchain-beyond-bitcoin.jpeg",
    link: "/blogs/blockchain-beyond-bitcoin",
  },
  {
    id: 2,
    heading: "Cybersecurity In The Remote Work Era",
    link: "/blogs/cybersecurity-in-the-remote-work-era",
    imageUrl: "images/blog_card_imgs/cybersecurity-in-the-remote-work-era.jpg",
    description:
      "With the rise of remote work, cybersecurity has become more critical than ever to protect sensitive data and systems. Businesses must adopt robust security measures to safeguard against cyber threats and ensure a secure digital workspace.",
  },
  {
    id: 3,
    heading: "Data Governance",
    link: "/blogs/data-governance",
    imageUrl: "images/blog_card_imgs/data-governance.png",
    description:
      "Data governance ensures that data is managed, protected, and used effectively across an organization. By implementing clear policies and processes, businesses can maintain data quality, compliance, and security while driving informed decision-making.",
  },
  {
    id: 4,
    heading: "Demystifying AI",
    link: "/blogs/demystifying-AI",
    imageUrl: "images/blog_card_imgs/demystifying-AI.png",
    description:
      "AI is transforming industries, but understanding its capabilities and limitations is key to harnessing its power. By breaking down complex concepts, businesses can leverage AI to drive innovation, efficiency, and smarter decision-making.",
  },
  {
    id: 5,
    heading: "Digital Transformation",
    link: "/blogs/digital-transformation",
    imageUrl: "images/blog_card_imgs/digital-transformation.png",
    description:
      "Digital transformation enables businesses to adopt innovative technologies to improve efficiency, enhance customer experiences, and stay competitive. By integrating digital solutions, organizations can streamline processes and achieve sustainable growth.",
  },
  {
    id: 6,
    heading: "Power Of Devops",
    link: "/blogs/power-of-devops",
    imageUrl: "images/blog_card_imgs/the-power-of-devops.jpg",
    description:
      "DevOps fosters collaboration between development and operations teams to streamline workflows and improve software delivery. By automating processes and promoting continuous integration/continuous deployment (CI/CD), organizations achieve faster, more reliable releases.",
  },
  {
    id: 7,
    heading: "Future Of Work",
    link: "/blogs/future-of-work",
    imageUrl: "images/blog_card_imgs/the-future-of-work.jpg",
    description:
      "The future of work focuses on adaptability, remote collaboration, and the integration of advanced technologies like AI and automation. As businesses evolve, embracing flexible work models and empowering employees with innovative tools will shape a more efficient and productive workplace.",
  },
  {
    id: 8,
    heading: "Navigating The Cloud",
    link: "/blogs/navigating-the-cloud",
    imageUrl: "images/blog_card_imgs/navigating-the-cloud.jpeg",
    description:
      "Navigating the cloud involves managing, securing, and optimizing cloud infrastructure to meet business needs. With scalable resources, flexibility, and cost efficiency, organizations can streamline operations, enhance collaboration, and drive innovation in a cloud-centric environment.",
  },
  {
    id: 9,
    heading: "Exploring Edge Computing",
    link: "/blogs/exploring-edge-computing",
    imageUrl: "images/blog_card_imgs/exploring-edge-computing.png",
    description:
      "Edge computing brings data processing closer to where it's needed, reducing latency and enhancing real-time performance. It is revolutionizing industries by enabling faster decision-making, improved user experiences, and efficient resource utilization at the edge of networks.",
  },
];

const BlogsClient = () => {
  // React.useEffect(() => {
  //         setTimeout(() => {
  //           SendPageDataToDataLayer();
  //         }, 500);
  //       }, []);
  return (
    <div>
      <div className="container-fluid mx-auto our-service-bg banner-bg-specs py-32 w-full items-center justify-center flex">
        <div className="text-left container relative w-full">
          <div className="flex ms-5 md:ms-0 items-center">
            <div
              className="h-6 mb-2 w-1 mr-2"
              style={{
                background: "linear-gradient(to right, #02f0f1, #024868)",
              }}
            ></div>
            <p className="text-3xl text-gray-900 font-medium title-font mb-2">
              Our Latest Blogs
            </p>
          </div>
        </div>
      </div>
      <main className="bg-gray-50 min-h-screen py-10 px-5">
        {/* Blog Header */}

        <section className="max-w-7xl mx-auto mb-12">
          <p className="text-gray-600 mt-4 text-lg">
            Our blog covers the latest insights, trends, and practical tips in
            web design, development, and technology. From in-depth discussions
            on cutting-edge tools and frameworks to expert advice on user
            experience, design strategies, and emerging technologies like AI and
            blockchain, we provide content to help you stay informed and ahead
            of the curve.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            Discover actionable strategies, industry best practices, and
            creative ideas designed to drive innovation, enhance performance,
            and deliver measurable results. Whether you&apos;re a developer,
            designer, or business owner, our articles offer the resources you
            need to create impactful digital experiences and thrive in
            today&apos;s competitive landscape.
          </p>
        </section>

        {/* Blog Cards */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={blog.imageUrl}
                  alt={blog.heading}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {blog.heading}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-600">
                    {blog.description}
                  </p>
                  <div className="flex items-center">
                    <Link
                      href={blog.link}
                      className="text-indigo-500 inline-flex items-center hover:underline"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default BlogsClient;
