import { AboutPageType } from "@/types/types";
import React from "react";

const OurWork: React.FC<AboutPageType> = (data) => {
  return (
    <section>
      <div className="row justify-content-center my-5 text-center">
        <div className="col-10 d-flex ">
          <img className="about-img" src={data.workImage} alt="" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-9">
          <h3 className="py-3 about-text">{data.workTitle}</h3>
          <p>{data.workContent}</p>
          <p className="py-4">{data.workSecondContent}</p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;