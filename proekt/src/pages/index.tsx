import Banner from "@/Components/Home/Banner";
import BannerThree from "@/Components/Home/BannerThree";
import BannerTwo from "@/Components/Home/BannerTwo";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProductCard from "@/Components/Product/ProductCard";
import Scroller from "@/Components/Scroller";
import { BannerType, BrandType, CategoryType, ProductType } from "@/types/types";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  dataBanner: BannerType[];
  categories: CategoryType[];
  dataThreeProducts: ProductType[];
  brands: BrandType[];
  products: ProductType[]
}

const HomePage: NextPage<Props> = ({
  products,
  categories,
  dataBanner,
  dataThreeProducts,
  brands

}) => {
  return (
    <>
      <Head>
        <title>Igraliste</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header brands={...brands} products={...products} categories={...categories}/>
      <Scroller/>
      <div className="container-fluid bg-banner">
        <Banner {...dataBanner[0]} />
        <div className="row">
          <div className="col">
            <h4 className="text-center tx py-3">Trendy парчиња во моментов</h4>
          </div>
        </div>
        <div className="row mb-4 pb-4">
          <div className="col">
            <div
              id="carouselExampleControls"
              className="carousel slide px-3 py-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner my-4">
                {dataThreeProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                style={{ top: "auto", width: "85%" }}
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                style={{ top: "auto", width: "85%" }}
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon black"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <BannerTwo {...dataBanner[1]} />
        <BannerThree {...dataBanner[2]} />
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3031/products");
  const products: ProductType[] = await res.json();

  const resCategories = await fetch("http://localhost:3031/categories");
  const categories: CategoryType[] = await resCategories.json();

    const resBanner = await fetch("http://localhost:3031/banners");
    const dataBanner: BannerType[] = await resBanner.json();

    const resThreeProducts = await fetch("http://localhost:3031/products/?_limit=3.");
    const dataThreeProducts: ProductType[] = await resThreeProducts.json();
    
    const resBrands = await fetch("http://localhost:3031/brand");
    const brands: BrandType[] = await resBrands.json();

   
    return {
      props: {
        products,
        categories,
        dataBanner,
        dataThreeProducts,
        brands,
      },
    };

};




