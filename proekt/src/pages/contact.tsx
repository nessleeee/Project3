import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import { AccessoriesType, BrandType, CategoryType } from "@/types/types";
import Link from "next/link";

interface ContactPageProps {
  title: string;
  firstImage: string;
  preTitle: string;
  description: string;
  address: string;
  phone: string;
  rabotno: string;
}

interface Props {
  data: ContactPageProps;
  brands: BrandType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];

}

const Contact: NextPage<Props> = ({ data, brands, categories,
  accessories, }) => {
  return (
    <section className="bg0">
      <Header brands={brands} categories={categories} accessories={accessories}/>
      <Scroller/>
      <div className="container">
        <div className="row text-center fw-bold">
          <div className="col position-relative">
            <img
              className="absolute"
              style={{ width: "43px", top: "13px", right: "105px" }}
              src="../Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
              alt=""
            />
            <h2 className="pt-4 contact-text">{data.title}</h2>
          </div>
        </div>
        <div className="row justify-content-center my-3 text-center">
          <div className="col-10">
            <img src={data.firstImage} alt="" />
            <h3 className="my-3 contact-text">{data.preTitle}</h3>
            <p className="small">{data.description}</p>
            <p className="py-3 fw-bolder">{data.address}</p>
            <h5 className="fw-bolder">Телефон за контакт:</h5>
            <h5>{data.phone}</h5>
            <h5 className="pt-3 fw-bolder">Работно Време:</h5>
            <h5 className="pb-3 mb-3">{data.rabotno}</h5>
            <Link href="/product">
            <button className="btn w-100 py-2 gold mb-4">
            <h5 className="mb-0 ">Кон продавницата</h5>
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8000/contact_page");
  const data: ContactPageProps = await res.json();

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
