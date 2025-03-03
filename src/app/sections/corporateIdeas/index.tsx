import Link from 'next/link'
import React from 'react'

const CorporateIdeas = () => {
  return (
    
       <div className="relative mb-32 md:mb-64 lg:mb-64 xl:mb-56">
       <section className="text-gray-600 relative body-font">
         <div className="container mx-auto flex lg:px-5 lg:flex-row flex-col items-center">
           <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
             <img
               className="object-cover object-center rounded"
               alt="hero"
               src="/images/svgs/19-min-7-600x624.svg"
             />
           </div>
           <div className="lg:flex-grow px-3 sm:px-5 lg:w-1/2 xl:pl-24 lg:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
             <h1
               className="text-center font-semibold text-md my-6"
               style={{
                 backgroundImage:
                   "linear-gradient(to right, #02f0f1, #024868)",
                 WebkitTextFillColor: "transparent", // Hide default text color
                 WebkitBackgroundClip: "text", // Clip the gradient to the text
                 color: "transparent", // Set the text color as transparent
               }}
             >
               Corporate Ideas 
             </h1>
             <h1 className="title-font font-semibold sm:text-4xl text-xl mb-4 text-gray-300">
               Perfect Technology solution for all medium business
             </h1>
             <p className="text-[14px] text-gray-300">
               Discover the perfect technology solution designed to streamline
               operations and boost efficiency for medium-sized businesses. Our
               tailored services ensure seamless integration and scalable
               growth, making success attainable
             </p>
             <div className="container1">
               <div className="skill-box">
                 <span className="title text-gray-300">Business Goal</span>
                 <div className="skill-bar">
                   <span className="skill-per html">
                     <span className="tooltip">85%</span>
                   </span>
                 </div>
               </div>
               <div className="skill-box">
                 <span className="title text-gray-300">Traffic Growth</span>
                 <div className="skill-bar">
                   <span className="skill-per css">
                     <span className="tooltip">90%</span>
                   </span>
                 </div>
               </div>
               <div className="skill-box">
                 <span className="title text-gray-300">Competitor Research</span>
                 <div className="skill-bar">
                   <span className="skill-per javascript">
                     <span className="tooltip">75%</span>
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
  )
}

export default CorporateIdeas