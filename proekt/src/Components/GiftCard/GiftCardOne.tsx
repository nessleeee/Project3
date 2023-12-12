import React from "react";

interface Props {
  image: string;
  type: string;
}

const GiftCardOne: React.FC<Props> = ({ image, type}) => {
 

  return (
    <div className="col-10 py-2 position-relative">
      <img src={image} alt="" />
      <div className="badgee absolute" style={{top:"27px"}}>
        <p className="px-3 fw-bolder fs-5" >{type}</p>
      </div>
      <img className="absolute" src="../Icons/Star.png" alt="" style={{top:"18px", right:"17px"}}/>
    </div>
  );
};

export default GiftCardOne;
