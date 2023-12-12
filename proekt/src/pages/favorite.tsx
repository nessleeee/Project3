import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import { BrandType, ProductType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import ProductCard from "@/Components/Product/ProductCard";

interface Props {
  brands: BrandType[];
}

const Favorite: NextPage<Props> = ({ brands }) => {
  const [favoriteProducts, setFavoriteProducts] = useState<ProductType[]>([]);
  const [cartLength, setCartLength] = useState<number>(0);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteProducts(favorites);

    const cart = JSON.parse(localStorage.getItem("order") || "[]");
    setCartLength(cart.length);
  }, []);

  return (
    <section>
      <Header brands={...brands} />
      <Scroller />
      <div className="container-fluid">
        <div
          className="row 
justify-content-center my-4"
        >
          <div className="col-5">
            <Link href="/order">
              <span>
                <img src="../Icons/shopping cart.png " alt="" />
                <span className="mx-2">Кошничка</span>({cartLength})
              </span>
            </Link>
          </div>
          <div className="col-5">
            <Link href="/favorite">
              <span>
                <i className="fa-regular fa-heart mx-2"></i><span>Омилени</span>(
                  {favoriteProducts.length})
              </span>
            </Link>
          </div>
          <hr className="my-3 order-hr" />
        </div>
        <div className="row justify-content-center">
          {favoriteProducts.map((product) => (
            <div className="col-11 my-1" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Favorite;

export const getStaticProps: GetStaticProps = async () => {
  const resBrands = await fetch("http://localhost:3031/brand");
  const brands: BrandType[] = await resBrands.json();

  return {
    props: {
      brands,
    },
  };
};
