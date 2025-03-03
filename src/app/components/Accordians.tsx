import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordiansProps = {
  data: AccordionItem[];
  expandedIndex: number | null;
  onAccordionChange: (
    index: number
  ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
};

type AccordionItem = {
  question: string;
  answer: string;
};

const Accordians: React.FC<AccordiansProps> = ({ data, expandedIndex, onAccordionChange }) => {
  return (
    <>
      {data.map((faq, index) => (
        <Accordion
          key={data}
          className="mb-4 shadow-lg overflow-hidden transition-all"
          expanded={expandedIndex === index}
          onChange={onAccordionChange(index)}
          style={{ borderRadius: "25px", backgroundColor: "#181818" }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #02f0f1, #024868)",
                }}
                className="p-[0.8px] text-white rounded-full shadow-lg transition-transform"
              />
            }
            aria-controls={`panel-support-${index}-content`}
            id={`panel-support-${index}-header`}
            className="px-6 py-1 text-white font-semibold text-lg flex items-center justify-between"
            style={{ borderRadius: "25px", backgroundColor: "#181818" }}
          >
            <Typography className="text-white pe-3">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#181818" }}
            className="px-6 py-4 text-white rounded-b-[25px] transition-all"
          >
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Accordians;
