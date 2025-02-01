"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { SendPageDataToDataLayer } from "../hooks/analyticsProvider";

const FaqClient = () => {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     SendPageDataToDataLayer();
  //   }, 500);
  // }, []);

  // for accordian color
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded1, setExpanded1] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded2, setExpanded2] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded3, setExpanded3] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded4, setExpanded4] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded5, setExpanded5] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded6, setExpanded6] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded7, setExpanded7] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded8, setExpanded8] = useState(false);

  const handleAccordionChange = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded(isExpanded);
  };

  const handleAccordionChange1 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded1(isExpanded);
  };

  const handleAccordionChange2 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded2(isExpanded);
  };

  const handleAccordionChange3 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded3(isExpanded);
  };

  const handleAccordionChange4 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded4(isExpanded);
  };

  const handleAccordionChange5 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded5(isExpanded);
  };

  const handleAccordionChange6 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded6(isExpanded);
  };

  const handleAccordionChange7 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded7(isExpanded);
  };

  const handleAccordionChange8 = (
    event: any,
    isExpanded: boolean | ((prevState: boolean) => boolean)
  ) => {
    setExpanded8(isExpanded);
  };

  return (
    <div className="bg-white flex justify-center items-center">
      <div className="w-1/2 py-12">
        <Accordion
          defaultExpanded
          expanded={expanded}
          onChange={handleAccordionChange}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{
              backgroundImage: expanded
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded ? "transparent" : "white", // White background when collapsed
              color: expanded ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>
              How do you ensure the quality of your software products?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              Quality is at the core of our development process. We follow
              industry best practices, including agile development, continuous
              integration, and automated testing. Our dedicated quality
              assurance team rigorously tests each product at various stages of
              development to ensure it meets the highest standards of
              functionality, security, and performance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded1} onChange={handleAccordionChange1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded1
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded1 ? "transparent" : "white", // White background when collapsed
              color: expanded1 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>What is your typical project timeline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              The timeline for a project varies depending on its scope and
              complexity. For smaller projects, the timeline might range from a
              few weeks to a couple of months. Larger or more complex projects
              could take several months to a year. We provide a detailed project
              plan and timeline during the initial consultation, and we work
              closely with you to meet agreed-upon deadlines.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded2} onChange={handleAccordionChange2}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded2
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded2 ? "transparent" : "white", // White background when collapsed
              color: expanded2 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>
              How do you handle communication and project updates?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              Effective communication is vital for the success of any project.
              We assign a dedicated project manager to each client, who serves
              as the primary point of contact. We hold regular meetings and
              provide progress reports to keep you informed about the projects
              status. We also use project management tools that allow you to
              track progress in real-time.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded3} onChange={handleAccordionChange3}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded3
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded3 ? "transparent" : "white", // White background when collapsed
              color: expanded3 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>
              What happens after the project is completed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              After project completion, we offer ongoing support and maintenance
              services to ensure your software continues to operate smoothly.
              This includes fixing any bugs, implementing updates, and making
              necessary adjustments as your business evolves. We also offer
              training sessions to help your team get the most out of the new
              software.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded4} onChange={handleAccordionChange4}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded4
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded4 ? "transparent" : "white", // White background when collapsed
              color: expanded4 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>What industries do you specialize in?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              We have experience working with a wide range of industries,
              including healthcare, finance, e-commerce, education, logistics,
              and entertainment. Our team has the expertise to understand
              industry-specific challenges and deliver tailored software
              solutions that drive business success.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded5} onChange={handleAccordionChange5}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded5
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded5 ? "transparent" : "white", // White background when collapsed
              color: expanded5 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>
              How do you handle data security and privacy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              Data security and privacy are top priorities in all our projects.
              We implement robust security protocols, including encryption,
              secure coding practices, and regular security audits, to protect
              your data. We also comply with relevant data protection
              regulations, such as GDPR and HIPAA, to ensure your software meets
              the highest standards of security and privacy.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded6} onChange={handleAccordionChange6}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded6
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded6 ? "transparent" : "white", // White background when collapsed
              color: expanded6 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>
              Can you integrate with our existing systems?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              Yes, we specialize in creating software solutions that seamlessly
              integrate with your existing systems. Whether you need to connect
              with third-party APIs, databases, or legacy systems, our
              developers have the expertise to ensure smooth integration without
              disrupting your current operations
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded7} onChange={handleAccordionChange7}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded7
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded7 ? "transparent" : "white", // White background when collapsed
              color: expanded7 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>What is your pricing model?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              Our pricing model is flexible and depends on the scope and
              complexity of the project. We offer several pricing options,
              including fixed-price contracts, time and materials billing, and
              dedicated team models. During our initial consultation, we’ll
              discuss your project requirements in detail and provide a
              transparent and customized quote.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded8} onChange={handleAccordionChange8}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            style={{
              backgroundImage: expanded8
                ? "linear-gradient(to right, #02f0f1, #024868)"
                : "none", // No gradient when collapsed
              backgroundColor: expanded8 ? "transparent" : "white", // White background when collapsed
              color: expanded8 ? "white" : "black", // Adjust text color based on state
            }}
            className="shadow-lg"
          >
            <Typography>
              Do you offer support for scaling and evolving the software after
              deployment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-justify">
              Absolutely. We understand that your business needs may evolve over
              time, and we are committed to supporting the growth of your
              software. Whether you need to scale the application to handle more
              users, add new features, or adapt to new market demands, our team
              is available for ongoing development and enhancement work.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqClient;
