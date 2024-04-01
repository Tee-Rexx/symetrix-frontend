"use client";

import { blogContentText, blogContentTextWithMarginTop, blogSectionHeading } from "@/utils/blogStyle";
import { useTheme } from "next-themes";

const BlockchainBeyondBitcoin = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <section className=" flex w-full justify-center items-center">
        <div className="container">
          <div className="justify-between flex flex-row items-center">
            <div className="w-8/12">
              <p className={blogContentText(resolvedTheme)}>
                In the realm of technological innovations, few concepts have
                captured the imagination and sparked as much discussion as
                blockchain. Originally devised as the underlying technology for
                Bitcoin, blockchain has transcended its cryptocurrency origins
                to become a disruptive force across various industries. While
                Bitcoin remains a significant application, the potential of
                blockchain technology extends far beyond digital currencies. In
                this blog post, we'll explore the practical applications of
                blockchain for businesses, delving into its transformative
                capabilities and real-world implementations.
              </p>

              <div className="mt-10">
                <h1 className={blogSectionHeading(resolvedTheme)}>
                  Understanding Blockchain Technology
                </h1>
                <p className={blogContentTextWithMarginTop(resolvedTheme, 7)}>
                  Before delving into its applications, let's briefly understand
                  what blockchain technology entails. At its core, a blockchain
                  is a decentralized, distributed ledger that records
                  transactions across a network of computers. Each transaction
                  is stored in a "block" that is linked to the previous one,
                  forming a chronological chain of blocks - hence the name
                  "blockchain." Key features of blockchain technology include:
                </p>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlockchainBeyondBitcoin;
