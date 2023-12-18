import React from "react";
import Question from "@/Components/FAQ/Question";
import type { GetStaticProps, NextPage } from "next";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import { AccessoriesType, BrandType, CategoryType } from "@/types/types";

interface FaqPageProps {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  data: FaqPageProps[];
  brands: BrandType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];
}

const Faq: NextPage<Props> = ({ data, brands, categories, accessories }) => {
  return (
    <section className="bg0">
      <Header
        brands={brands}
        categories={categories}
        accessories={accessories}
      />
      <Scroller />
      <div className="container">
        <div className="row text-center fw-bold">
          <div className="col position-relative">
            <img
              className="absolute"
              style={{ width: "43px", top: "13px", right: "120px" }}
              src="../sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
              alt=""
            />
            <h3 className="text-uppercase pt-4">faq</h3>
          </div>
        </div>
        <div className="row justify-content-center my-3">
          {data.map((faq, index) => (
            <Question
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              backgroundColor={index % 2 === 0 ? "#ffffff" : "#FFF6F6"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Faq;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8000/faq_page");
  const data: FaqPageProps[] = await res.json();

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
