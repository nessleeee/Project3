import { InfoBoxType } from "@/types/types";
import React, { useState } from "react";


const AccordionItem: React.FC<InfoBoxType> = (info) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item my-4">
      <h2 className="accordion-header akor">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleAccordion}
        >
          <img src={info.img} style={{width: "25px"}} alt="" />
          <h6 className="mx-2 my-0 py-0">{info.title}</h6>
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">{info.content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
