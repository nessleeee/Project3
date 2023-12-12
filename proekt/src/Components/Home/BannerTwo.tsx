import { BannerType } from "@/types/types";
import Link from "next/link";
import React from "react";

const BannerTwo: React.FC<BannerType> = ({ id, title, description }) => {
  const buttonStyle: React.CSSProperties = {
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    border: "1px solid #000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    position: "relative",
  };

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col" style={{ paddingLeft: "0" }}>
            <img
              className="banner2-img"
              src="../Images/IMG_6142 1.png"
              alt=""
            />
          </div>
        </div>
        <div
          className="row position-relative"
          style={{ top: "-132px", left: "100px" }}
        >
          <div className="col">
            <Link href="/product">
              <div className="bg-banner" style={buttonStyle}>
                <img
                  className="absolute"
                  src="../Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
                  alt=""
                  style={{ top: "25px", width: "40px" }}
                />
                <h2
                  className="circle-title absolute"
                  style={{ marginBottom: "5px", top: "72px", left: "56px" }}
                >
                  {title}
                </h2>
                <p
                  className="absolute text-center"
                  style={{
                    marginBottom: "5px",
                    top: "122px",
                    left: "48px",
                    width: "142px",
                    fontSize: "13px",
                  }}
                >
                  {description}
                </p>
                <img
                  className="absolute"
                  src="../Icons/Group 36.svg"
                  alt=""
                  style={{ top: "172px", left: "95px" }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
