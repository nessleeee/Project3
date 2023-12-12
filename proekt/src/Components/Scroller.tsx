import React from "react";
import Image from "next/image";

const Scroller = () => {
  return (
    <><div className="scrolling_text">
      <div className="text">
        <span>Нова колекција </span>
        <span>
          <Image
            src="/emojione-monotone_eight-pointed-star.svg"
            alt=""
            width="25"
            height="25" />
        </span>
        <span>Valentines Winter Collection 2023</span>
      </div>
      <div className="text">
        <span>Нова колекција </span>
        <span>
          <Image
            src="/emojione-monotone_eight-pointed-star.svg"
            alt=""
            width="25"
            height="25" />
        </span>
        <span>Valentines Winter Collection 2023</span>
      </div>

    </div><hr className="m-0"/></>
  );
};

export default Scroller;
