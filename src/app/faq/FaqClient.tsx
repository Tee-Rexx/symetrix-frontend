"use client";
import React from "react";
import { useState } from "react";
import ContactUsSections from "../sections/contactUs";
import Accordians from "../components/Accordians";

const FaqClient = () => {
  const faqs = [
    {
      question: "How do you ensure the quality of your software products?",
      answer:
        "Quality is at the core of our development process. We follow industry best practices, including agile development, continuous integration, and automated testing. Our dedicated quality assurance team rigorously tests each product at various stages of development to ensure it meets the highest standards of functionality, security, and performance.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "The timeline for a project varies depending on its scope and complexity. For smaller projects, the timeline might range from a few weeks to a couple of months. Larger or more complex projects could take several months to a year. We provide a detailed project plan and timeline during the initial consultation, and we work closely with you to meet agreed-upon deadlines.",
    },
    {
      question: "How do you handle communication and project updates?",
      answer:
        "Effective communication is vital for the success of any project. We assign a dedicated project manager to each client, who serves as the primary point of contact. We hold regular meetings and provide progress reports to keep you informed about the project's status. We also use project management tools that allow you to track progress in real-time.",
    },
    {
      question: "What happens after the project is completed?",
      answer:
        "After project completion, we offer ongoing support and maintenance services to ensure your software continues to operate smoothly. This includes fixing any bugs, implementing updates, and making necessary adjustments as your business evolves. We also offer training sessions to help your team get the most out of the new software.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience working with a wide range of industries, including healthcare, finance, e-commerce, education, logistics, and entertainment. Our team has the expertise to understand industry-specific challenges and deliver tailored software solutions that drive business success.",
    },
    {
      question: "How do you handle data security and privacy?",
      answer:
        "Data security and privacy are top priorities in all our projects. We implement robust security protocols, including encryption, secure coding practices, and regular security audits, to protect your data. We also comply with relevant data protection regulations, such as GDPR and HIPAA, to ensure your software meets the highest standards of security and privacy.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes, we specialize in creating software solutions that seamlessly integrate with your existing systems. Whether you need to connect with third-party APIs, databases, or legacy systems, our developers have the expertise to ensure smooth integration without disrupting your current operations.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing model is flexible and depends on the scope and complexity of the project. We offer several pricing options, including fixed-price contracts, time and materials billing, and dedicated team models. During our initial consultation, we’ll discuss your project requirements in detail and provide a transparent and customized quote.",
    },
    {
      question:
        "Do you offer support for scaling and evolving the software after deployment?",
      answer:
        "Absolutely. We understand that your business needs may evolve over time, and we are committed to supporting the growth of your software. Whether you need to scale the application to handle more users, add new features, or adapt to new market demands, our team is available for ongoing development and enhancement work.",
    },
    {
      question: "Do you offer website maintenance and updates after launch?",
      answer:
        "Yes, we provide ongoing website maintenance and support to ensure your site remains secure, up-to-date, and fully optimized. Our services include performance monitoring, security updates, content updates, bug fixes, and feature enhancements. We offer flexible maintenance plans tailored to your business needs, ensuring your website continues to perform at its best.",
    },
  ];

  const [expandedWorkProcess, setExpandedWorkProcess] = useState(null);
  const [expandedSupportManagement, setExpandedSupportManagement] =
    useState(null);

  const handleWorkProcessChange = (panel:any) => (event:any, isExpanded:any) => {
    setExpandedWorkProcess(isExpanded ? panel : null);
    setExpandedSupportManagement(isExpanded ? panel : null);
  };

  const handleSupportManagementChange = (panel:any) => (event:any, isExpanded:any) => {
    setExpandedSupportManagement(isExpanded ? panel : null);
    setExpandedWorkProcess(isExpanded ? panel : null);
  };

  return (
    <div className="container-fluid flex items-center justify-center">
      <div className="flex container flex-col justify-center items-center min-h-screen mt-20 p-4">
        <div className="text-center flex flex-col items-center gap-y-7">
          <div className="flex gap-2 w-fit items-center border border-[#272727] rounded-xl p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#8F8F8F"
            >
              <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="text-[#8F8F8F]">FAQS</span>
          </div>

          <span className="text-[40px] text-white">
            Frequently Asked Questions
          </span>

          <span className="text-lg text-[#8F8F8F] max-w-[70%]">
            Find questions and answers related to the design system, purchase,
            updates and support
          </span>
        </div>

        {/* Work & Process Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14 relative">
          {/* Sticky Heading */}
          <div className="md:sticky top-0 z-10 py-4">
            <span className="text-[35px] text-white text-center md:text-left block">
              Work & Process: Development, Communication & Security
            </span>
          </div>

          <div className="w-full max-w-lg mt-10 md:mt-0 mx-auto">
            <Accordians
              data={faqs.slice(0, 6)}
              expandedIndex={expandedWorkProcess}
              onAccordionChange={handleWorkProcessChange}
            />
          </div>
        </div>

        {/* Support & Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14 relative">
          {/* Sticky Heading */}
          <div className="md:sticky top-0 z-10 py-4">
            <span className="text-[35px] text-white text-center md:text-left block">
              Support & Management: Post-Launch, Pricing & Maintenance
            </span>
          </div>

          <div className="w-full max-w-lg mt-10 md:mt-0 mx-auto">
            <Accordians
              data={faqs.slice(6, 10)}
              expandedIndex={expandedSupportManagement}
              onAccordionChange={handleSupportManagementChange}
            />
          </div>
        </div>

        <ContactUsSections
          showSideText={true}
          sideHeading="Need Further Assistance?"
          sidePara="Our support team is here to provide you with the answers you need. Drop us a message, and we'll get back to you as soon as possible."
        />
      </div>
    </div>
  );
};

export default FaqClient;
