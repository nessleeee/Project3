import React from "react";

interface Props {
  image: string;
  type: string;
}

const GiftCardTwo: React.FC<Props> = ({ image, type}) => {
 

  return (
    <div className="col-10 py-2 position-relative">
      <img src={image} alt="" />
      <div className="badgee absolute" style={{bottom:"27px"}}>
        <p className="px-3 fw-bolder fs-5 text-end" >{type}</p>
      </div>
      <img className="absolute" src="../Icons/Star.png" alt="" style={{bottom:"18px", left:"33px"}}/>

    </div>
  );
};

export default GiftCardTwo;