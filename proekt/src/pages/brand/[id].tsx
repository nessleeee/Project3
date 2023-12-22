import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { AccessoriesType, BrandType, CategoryType, ProductType } from "@/types/types";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import ExtraProducts from "@/Components/ProductDetail/ExtraProducts";

interface Props {
  products: ProductType[];
  brand: BrandType;
  brands: BrandType[];
  categories: CategoryType[]
  accessories: AccessoriesType[]
}

const BrandDetail:NextPage<Props> = ({ brand, brands, categories, products, accessories }) => {

  return (
    <section>
      <Header brands={brands} categories={categories} accessories={accessories} />
      <Scroller />
      <div className="container">
        <div className="row fw-bold justify-content-center">
          <div className="col-10 position-relative">
            <img
              className="absolute"
              style={{ width: "50px", top: "15px", left: "10px" }}
              src="../Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
              alt=""
            />
            <h1 className="pt-4 mx-5 px-2">{brand.name}</h1>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-11 my-2">
            <img className="img-fluid" src={brand.img} alt="" />
          </div>
          <div className="col-11 my-2">
              <p>{brand.des}</p>
          </div>
          <div className="col-11 my-2">
            <ul>
            <li>{brand.des1}</li>
              <li>{brand.des2}</li>
              <li>{brand.des3}</li>
              <li>{brand.des4}</li>
            </ul>
          </div>
          <div className="col-11 my-2">
            <p>{brand.des5}</p>
          </div>
          <div className="col-11 my-2">
            <p>{brand.des6}</p>
          </div>
        </div>
        <div className="row">
          <div className="col my-3">
            <h4>Парчиња од брендот:</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11">
      <ExtraProducts products={products}/>
          </div>
          </div>
      </div>
      <Footer />
    </section>
  );
};

export default BrandDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const resBrands = await fetch("http://localhost:8000/brand");
  const brands: BrandType[] = await resBrands.json();

  const paths = brands.map((brand) => {
    return {
      params: {
        id: String(brand.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let brand: BrandType | undefined = undefined;

  if (params?.id) {
    const resBrand = await fetch(`http://localhost:8000/brand/${params.id}`);
    brand = await resBrand.json();
  }

  const resProducts = await fetch(`http://localhost:8000/products?brand_id=${params?.id}`);
  const products: ProductType[] = await resProducts.json();

  const resBrands = await fetch("http://localhost:8000/brand");
  const brands: BrandType[] = await resBrands.json();

  const resCategories = await fetch("http://localhost:8000/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resAccessories = await fetch("http://localhost:8000/accessories");
  const accessories: AccessoriesType[] = await resAccessories.json();

  return {
    props: {
      brand,
      products,
      brands,
      categories,
      accessories
    },
  };
};


