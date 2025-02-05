"use client";

import { useState, useEffect, useRef } from "react";
import BlogCard from "./components/blogCard";

import Link from "next/link";
import ClientReviews from "./sections/reviews";
import "./globals.css";
import ServiceProviderSection from "./sections/service-provide";
import React from "react";
import Hero from "./sections/hero";
import Specialization from "./sections/specialization";
import FeaturedService from "./sections/featuredService";
import TechSolution from "./sections/techSolution";
import CorporateIdeas from "./sections/corporateIdeas";
import ArrangeConsultation from "./sections/arrangeConsultation";
import GetStarted from "./sections/getStarted";

const Home = () => {
  return (
    <>
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "mainEntityOfPage": "https://naxiums.com/",
              "headline": "Naxiums - Innovating Digital Experiences",
              "description": "Naxiums is a web and mobile app development company...",
              "video": {
                "@type": "VideoObject",
                "name": "Hero Video",
                "description": "This is the hero video on the Naxiums homepage.",
                "thumbnailUrl": "https://naxiums.com/images/video-thumbnail.jpg",  // Replace with actual thumbnail URL
                "contentUrl": "https://naxiums.com/gif/hero.mp4", // The direct URL to your video
                "uploadDate": "2025-01-01",  // Replace with the actual upload date if applicable
              },
            }),
          }}
        />
      </Head> */}

      <Hero />  {/* First impression, captures attention */}
  
  <TechSolution />  {/* Explains what you offer */}
  
  <Specialization />  {/* Showcases expertise & skills */}
  
  <FeaturedService />  {/* Reinforces value with key offerings */}
  
  <CorporateIdeas />  {/* Highlights business insights & strategy */}
  
  <ClientReviews />  {/* Social proof, builds trust */}
  
  <ArrangeConsultation />  {/* Encourages action */}
  
  <GetStarted />  {/* Motivational closing, final CTA */}
    </>
  );
};

export default Home;
