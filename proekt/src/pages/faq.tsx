import React from "react";
import Question from "@/Components/FAQ/Question";
import type { GetStaticProps, NextPage } from "next";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import { BrandType } from "@/types/types";

interface FaqPageProps {
  id: string;
  question: string;
  answer: string;

}

interface Props {
  data: FaqPageProps[];
  brands: BrandType[];
}

const Faq: NextPage<Props> = ({ data, brands }) => {
  return (
    <section className="bg0">
      <Header brands={...brands}/>
      <Scroller/>
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
              backgroundColor={index % 2 === 0 ? '#ffffff' : '#FFF6F6'}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Faq;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3031/faq_page");
  const data: FaqPageProps[] = await res.json();

  const resBrands = await fetch("http://localhost:3031/brand");
    const brands: BrandType[] = await resBrands.json();

  return {
    props: {
      data,
      brands,
    },
  };
};
