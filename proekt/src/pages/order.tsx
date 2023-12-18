import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/Product/ProductCard";
import Accordion from "@/Components/ProductDetail/Accordion";
import {
  AccessoriesType,
  BrandType,
  CategoryType,
  InfoBoxType,
  ProductType,
} from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import ExtraProducts from "@/Components/ProductDetail/ExtraProducts";
import router from "next/router";

interface Props {
  products: ProductType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];
  info: InfoBoxType[];
  brands: BrandType[];
}

const OrderPage: NextPage<Props> = ({ products, brands, info,  categories,
  accessories, }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductType[]>([]);
  const [giftCardPrice, setGiftCardPrice] = useState<number | null>(null);
  
  const handleConfirmOrder = () => {
    router.push("/order_form");
  };

  useEffect(() => {
    const storedPrice = localStorage.getItem("giftCardPrice");
    if (storedPrice) {
      setGiftCardPrice(JSON.parse(storedPrice));
    }
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("order") || "[]");
    setCart(savedCart);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteProducts(favorites);
  }, []);

  const calculateTotal = (): number => {
    const productsTotal = cart.reduce(
      (total: any, product: { price: any }) => total + product.price,
      0
    );

    const discount = -350;
    const shippingCost = -150;
    const giftCardValue = giftCardPrice || 0;

    const total = productsTotal + shippingCost + giftCardValue + discount;
    return total > 0 ? total : 0;
  };
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
                <img src="../Icons/shopping cart.png" alt="" />
                <span className="mx-2">Кошничка</span>({cart.length})
              </span>
            </Link>
          </div>
          <div className="col-5">
            <Link href="/favorite">
              <span>
                <i className="fa-regular fa-heart"></i>
                <span className="mx-2">Омилени</span>({favoriteProducts.length})
              </span>
            </Link>
          </div>
          <hr className="my-3 order-hr" />
        </div>
        <div className="row justify-content-center">
          {cart.map((product) => (
            <div className="col-11 my-1" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          {giftCardPrice !== null && (
            <div className="col-11 my-2 d-flex justify-content-between">
              <h6 className="order-text">Gift Card </h6>
              <span className="order-price">{giftCardPrice}</span>
            </div>
          )}
          {cart.map((product) => (
            <div
              className="col-11 my-2 d-flex justify-content-between"
              key={product.id}
            >
              <h6 className="order-text">{product.title}</h6>
              <span className="order-price">{product.price}</span>
            </div>
          ))}
          <div className="col-11 my-2 d-flex justify-content-between">
            <h6>+ shipping</h6>
            <span className="order-price">{-150}</span>
          </div>

          <div className="col-11 my-2 d-flex justify-content-between">
            <h6>1х -20% discount </h6>
            <span className="order-price">{-350}</span>
          </div>
          <hr className="my-3" style={{ width: "85%" }} />
        </div>
        <div className="row justify-content-center">
          <div className="col-11 d-flex justify-content-between">
            <h3>Total:</h3>
            <span className="order-price">
              {calculateTotal().toFixed(2)}ден
            </span>
          </div>
          <hr className="my-3" style={{ width: "85%" }} />
        </div>

        <div className="row my-3 justify-content-center">
          <div className="col-11">
          <button
            type="button"
            onClick={handleConfirmOrder}
            className="btn gold px-5"
          >
            Продолжи
          </button>
            
            <button className="btn">
              <img src="/Icons/ri_delete-bin-6-line.svg" alt="" />
            </button>

          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10">
          <Accordion info={info} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-11">
          <h5 className="my-3">Други парчиња:</h5>
          <ExtraProducts products={products} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default OrderPage;

export const getStaticProps: GetStaticProps = async () => {
  const resProducts = await fetch("http://localhost:8000/products");
  const products: ProductType[] = await resProducts.json();

  const resInfo = await fetch("http://localhost:8000/info-box");
  const info: InfoBoxType[] = await resInfo.json();

  const resBrands = await fetch("http://localhost:8000/brand");
  const brands: BrandType[] = await resBrands.json();

  const resCategories = await fetch("http://localhost:8000/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resAccessories = await fetch("http://localhost:8000/accessories");
  const accessories: AccessoriesType[] = await resAccessories.json();

  return {
    props: {
      products,
      categories,
      accessories,
      info,
      brands,
    },
  };
};
