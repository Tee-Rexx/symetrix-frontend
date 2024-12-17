interface AccordionItemProps {
    id: string;
    expanded: string | false;
    onChange: (id: string | false) => void;
    title: string;
    content: string;
  }