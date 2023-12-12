import { AboutPageType } from "@/types/types";
import React from "react";

const OurStory: React.FC<AboutPageType> = (data) => {
  return (
    <section>
      <div className="row justify-content-center my-5 text-center">
        <div className="col-10 d-flex ">
          <img className="about-img" src={data.storyImage} alt="" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-9">
          <h3 className="py-3 about-text">{data.storyTitle}</h3>
          <p>{data.storyContent}</p>
          <p className="py-4">{data.storySecondContent}</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
