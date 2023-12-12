import React, { useState } from "react";

interface ButtonProps {
  price: number;
  onClick: (price: number) => void;
}

const GiftCardButton: React.FC<ButtonProps> = ({ price, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    if (!isClicked) {
      onClick(price);
      localStorage.setItem("giftCardPrice", JSON.stringify(price));
    } else {
      window.location.href = "/order";
    }

    setIsClicked(!isClicked);
  };

  return (
    <div className="col-10">
      <button
        className={`btn gift-button ${isClicked ? "clicked" : ""}`}
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          fontSize: "25px",
        }}
      >
        {isClicked ? (
          <div style={{ position: "relative" }}>
            <h5 className="m-0 p-0 text-center h5">Додадено</h5>
            <img className="dodadeno-gift m-0 p-0" src="/Icons/Group 9.svg" alt="" />
            <span className="m-0 p-0 fs-sm">кон кошничката →</span>
          </div>
        ) : (
          <>
            {isHovered ? (
              <>
                <span className="hover-text" style={{ fontSize: "20px" }}>
                  Додај во кошничка
                </span>
              </>
            ) : (
              `${price}ден.`
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default GiftCardButton;
