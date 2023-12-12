import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { InfoBoxType } from "@/types/types";

interface Props{
  info: InfoBoxType[];
}

const Accordion: React.FC<Props> = ({ info }) => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {info.map((box, index) => (
        <AccordionItem key={box.id} {...box}/>
      ))}
    </div>
  );
};

export default Accordion;
