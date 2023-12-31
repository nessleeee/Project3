import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import { AccessoriesType, BrandType, CategoryType, ProductType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import ProductCard from "@/Components/Product/ProductCard";

interface Props {
  brands: BrandType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];
}

const Favorite: NextPage<Props> = ({ brands,  categories,
  accessories }) => {
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
      <Header brands={brands} categories={categories} accessories={accessories} />
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
  const resBrands = await fetch("http://localhost:8000/brand");
  const brands: BrandType[] = await resBrands.json();

  const resCategories = await fetch("http://localhost:8000/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resAccessories = await fetch("http://localhost:8000/accessories");
  const accessories: AccessoriesType[] = await resAccessories.json();

  return {
    props: {
      brands,
      categories,
      accessories
    },
  };
};
