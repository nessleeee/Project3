import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/Product/ProductCard";
import Accordion from "@/Components/ProductDetail/Accordion";
import { BrandType, InfoBoxType, ProductType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import ExtraProducts from "@/Components/ProductDetail/ExtraProducts";

interface Props {
  products: ProductType[];
  info: InfoBoxType[];
  brands: BrandType[];
}

const OrderPage: NextPage<Props> = ({ products, brands, info }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [giftCardPrice, setGiftCardPrice] = useState<number | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleShow = () => setShowModal(true);

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
            <h3>Total:</h3>{" "}
            <span className="order-price">{calculateTotal().toFixed(2)}ден</span>
          </div>
          <hr className="my-3" style={{ width: "85%" }} />
        </div>

        <div className="row my-3 justify-content-center">
          <div className="col-11">
            <button type="button"onClick={() => setShowOrderForm(true)} className="btn gold px-5">
              continou
            </button>

            {showModal && (
              <div
                className="modal"
                tabIndex={-1}
                role="dialog"
                style={{ display: "block" }}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-body text-center">
                      <div className="row justify-content-center">
                        <div className="col-12 pt-2">
                          <img
                            className="mx-auto"
                            style={{ width: "45px" }}
                            src="/Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 5.png"
                            alt=""
                          />
                        </div>
                        <div className="col-11 text-center">
                          <h5 className="fw-bolder my-2">
                            Вашата нарачка е успешна!
                          </h5>
                          <p>
                            Очекувајте потврда за вашата нарачка на вашата емаил
                            адреса. Keep on shining *
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button type="button" className="btn gold px-5 my-2">
                            <span
                              style={{ fontSize: "17px", fontWeight: "600" }}
                            >
                              Продолжи
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col">
                          <Link href="/">
                            <u>Кон почетна</u>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button className="btn">
              <img src="/Icons/ri_delete-bin-6-line.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10">
          <Accordion info={...info} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-11">
          <h5 className="my-3">Други парчиња:</h5>
          <ExtraProducts products={...products} />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default OrderPage;

export const getStaticProps: GetStaticProps = async () => {
  const resProducts = await fetch("http://localhost:3031/products");
  const products: ProductType[] = await resProducts.json();

  const resInfo = await fetch("http://localhost:3031/info-box");
  const info: InfoBoxType[] = await resInfo.json();

  const resBrands = await fetch("http://localhost:3031/brand");
  const brands: BrandType[] = await resBrands.json();

  return {
    props: {
      products,
      info,
      brands,
    },
  };
};
