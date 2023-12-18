import React, { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import { AboutPageType, AccessoriesType, BrandType, CategoryType } from "@/types/types";
import OurStory from "@/Components/About/OurStory";
import OurWork from "@/Components/About/OurWork";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";

interface Props {
  data: AboutPageType;
  brands: BrandType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];

}

const AboutPage: NextPage<Props> = ({ data, brands, categories,
  accessories, }) => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section>
      <Header brands={brands} categories={categories} accessories={accessories} />
      <Scroller/>
      <div className="container">
        <div className="row text-center fw-bold">
          <div className="col position-relative">
            <img
              className="absolute"
              style={{ width: "43px", top: "17px", left: "109px" }}
              src="../Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
              alt=""
            />
            <h2 className="pt-4 contact-text">{data.title}</h2>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="col-9 bt">
            <button
              className="btn btn-sm py-0 br about-btn h"
              onClick={() => setActiveTab("story")}
            >
              Нашата приказна
            </button>
            <button
              className="btn btn-sm about-btn px-3 h"
              onClick={() => setActiveTab("work")}
            >
              Нашата работа
            </button>
          </div>
          {activeTab === "story" && <OurStory {...data} />}
          {activeTab === "work" && <OurWork {...data} />}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8000/about_page");
  const data: AboutPageType = await res.json();

  const resBrands = await fetch("http://localhost:8000/brand");
    const brands: BrandType[] = await resBrands.json();

    const resCategories = await fetch("http://localhost:8000/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resAccessories = await fetch("http://localhost:8000/accessories");
  const accessories: AccessoriesType[] = await resAccessories.json();
  
  return {
    props: {
      data,
      brands,
      categories,
    accessories,

    },
  };
};
