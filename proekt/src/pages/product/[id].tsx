import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Accordion from "@/Components/ProductDetail/Accordion";
import ExtraProducts from "@/Components/ProductDetail/ExtraProducts";
import Scroller from "@/Components/Scroller";
import { AccessoriesType, BrandType, CategoryType, InfoBoxType, ProductType } from "@/types/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import router from "next/router";
import { useState } from "react";

interface Props {
  products: ProductType[];
  product: ProductType;
  brands: BrandType[];
  info: InfoBoxType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];
}

const ProductDetail: NextPage<Props> = ({
  products,
  brands,
  info,
  product,
  categories,
  accessories,
}) => {
  const [activeImage, setActiveImage] = useState(product.img);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [buttonText, setButtonText] = useState("Додај во Кошничка");
  const [isOrder, setIsOrder] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const productImages = [
    product.img,
    product.image1,
    product.image2,
    product.image3,
  ];

  const oznaki = ["ново", "vintage", "палта", "облека"];

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleThumbnailClick = (image: string) => {
    setActiveImage(image);
  };

  const handleAddToCart = () => {
    if (!isAddedToCart) { 
      setButtonText("Додадено");

      const order = JSON.parse(localStorage.getItem("order") || "[]");
      const updatedOrder = [...order, product];

      localStorage.setItem("order", JSON.stringify(updatedOrder));
      setIsOrder(true);
      setIsAddedToCart(true); 

      setTimeout(() => {
        router.push("/order");
      }, 2000);
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = isFavorite
      ? favorites.filter((fav: ProductType) => fav.id !== product.id)
      : [...favorites, product];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Header brands={brands} categories={categories} accessories={accessories} />
      <Scroller />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 ">
            <h3 className="my-4">{product.title}</h3>
            <div className="main-product-photo mainImageContainer ">
              <img
                src={activeImage}
                alt="Main Product Photo"
                style={{ width: "100%", height: "65vh", objectFit: "cover" }}
              />
            </div>
            <div className="product-images-carousel thumbnailContainer">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    activeImage === image ? "active" : ""
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                >
                  <img
                    src={image}
                    style={{
                      width: "59px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-10">
            <div className="product-info">
              <h4>{product.price}ден.</h4>
              <p>{product.des}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            {/* Quantity Controls */}
            <div className="quantity-controls">
              <span className="mx-1"> Количина:</span>
              <button
                type="button"
                className="btn btn-light btn-0 btn-sm"
                onClick={handleDecreaseQuantity}
              >
                <i className="fa-solid fa-minus fa-2xs"></i>
              </button>
              <span className="fs-3 mx-2">{quantity}</span>
              <button
                type="button"
                className="btn btn-light btn-0 btn-sm"
                onClick={handleIncreaseQuantity}
              >
                <i className="fa-solid fa-plus fa-2xs"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <button
              type="submit"
              className={`btn btn-detail btn-block my-4 ${
                buttonText === "Додај во Кошничка"
                  ? "normal-style"
                  : "added-style"
              }`}
              onClick={handleAddToCart}
            >
              {buttonText === "Додај во Кошничка" ? (
                <span>Додај во Кошничка</span>
              ) : (
               <div style={{position: "relative"}}> <span className="m-0 p-0">Додадено</span>
               <img className="dodadeno" src="/Icons/Group 9.svg" alt="" />
               <p className="m-0 p-0 fs-sm">кон кошничката →</p>
               </div>
               
              )}
            </button>
            <button className="btn" onClick={handleToggleFavorite}>
              {isFavorite ? (
                <i className="fa-solid fa-heart fa-lg"></i>
              ) : (
                <i className="fa-regular fa-heart fa-lg"></i>
              )}
            </button>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <span className="mx-2">Величина:</span>
            <span className="btn btn-s btn-block text-uppercase text-center">
              <p className="p-0 m-0">{product.size}</p>
            </span>
            <span className="small">{product.quantity}</span>
            <p className="mx-2">{product.sizDes}</p>
            <p className="mx-2">види ги димензиите</p>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <span className="mx-2 h5">Боја:</span>
            <span>
              <span
                className="color-box btn py-2 px-2 border"
                style={{ backgroundColor: product.color }}
              ></span>
            </span>
            <br />
            <h5 className="mx-2 h5">Материјал:</h5>
            <span className="mx-2">{product.material}</span>
            <br />
            <p className="mx-2">Постава: {product.material}</p>
            <span className="mx-2 h5 fs-4">Состојба:</span>
            <span className="small">{product.sostojba}</span>
            <a href="#" className="small mx-2">
              <ins>прочитај повеќе</ins>
            </a>

            <h5 className="mx-2 my-2">Насоки за одржување:</h5>
            <p className="mx-2">{product.productDes}</p>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {/* <Button oznaki={...oznaki} /> */}
          <div className="col-10">
            <h5 className="mx-2 my-3">Ознаки:</h5>
          </div>
          <div className="col-10 d-flex justify-content-center">
            <button className="btn btn-1 btn-sm px-3">ново</button>
            <button className="btn btn-1 btn-sm px-3">vintage</button>
            <button className="btn btn-1 btn-sm px-3">палта</button>
            <button className="btn btn-1 btn-sm px-3">облека</button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10 my-3">
            <Accordion info={info} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <h2>Extra Products</h2>
          </div>

          <ExtraProducts products={products} />
        </div>
        <div className="fixed-buttons">
          <button className="btn-favorite" onClick={handleToggleFavorite}>
            {isFavorite ? (
              <i className="fa-solid fa-heart fa-lg"></i>
            ) : (
              <i className="fa-regular fa-heart fa-lg"></i>
            )}
          </button>
          <button className="btn-cart" onClick={handleAddToCart}>
            {isOrder ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <div >
              <i className="fa-solid fa-shopping-cart fa-lg"></i>
              </div>
            )}
            
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const resProducts = await fetch("http://localhost:3031/products");
  const products: ProductType[] = await resProducts.json();

  const paths = products.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let product: ProductType | undefined = undefined;

  const resProducts = await fetch("http://localhost:8000/products");
  const products: ProductType[] = await resProducts.json();

  if (params?.id) {
    const resProducts = await fetch(
      `http://localhost:8000/products/${params.id}`
    );
    product = await resProducts.json();
  }

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
      product,
      products,
      info,
      brands,
      categories,
      accessories,
    },
  };
};
