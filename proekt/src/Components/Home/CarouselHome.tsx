// CarouselHome.tsx
import React from "react";
import ProductCard from "../Product/ProductCard";

interface Props {
  products: {
    img: string;
    title: string;
    price: number;
  }[];
}

const CarouselHome: React.FC<Props> = ({ products }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide px-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <ProductCard
              img={product.img}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselHome;

