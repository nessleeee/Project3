import React from "react";
import { GetStaticProps, NextPage } from "next";
import GiftCardOne from "@/Components/GiftCard/GiftCardOne";
import GiftCardTwo from "@/Components/GiftCard/GiftCardTwo";
import GiftCardThree from "@/Components/GiftCard/GiftCardThree";
import Button from "@/Components/GiftCard/GiftCardButton";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import Footer from "@/Components/Footer";
import { BrandType } from "@/types/types";
import GiftCardButton from "@/Components/GiftCard/GiftCardButton";

interface GiftPageProps {
  id: string;
  image: string;
  type: string;
}

interface Props {
  data: GiftPageProps[];
  brands: BrandType[];
}

const Gift: NextPage<Props> = ({ data, brands }) => {
  const giftCardOne = data[0];
  const giftCardTwo = data[1];
  const giftCardThree = data[2];

  const handleButtonClick = (price: number) => {
    console.log(`${price}den`);
  };

  return (
   <section>
     <Header brands={...brands}/>
      <Scroller/>
      <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-9 contact-text pt-4 pb-2">
          <h3>Gift картички за подарок</h3>
        </div>
        <GiftCardOne key={giftCardOne.id} image={giftCardOne.image} type={giftCardOne.type} />
        <GiftCardTwo key={giftCardTwo.id} image={giftCardTwo.image} type={giftCardTwo.type} />
        <GiftCardThree key={giftCardThree.id} image={giftCardThree.image} type={giftCardThree.type} />
      </div>

      <div className="row justify-content-center my-5">
        <div className="col-10 contact-text pt-3 pb-2">
          <h4>Одбери цена на подарок картичка:</h4>
        </div>
      <GiftCardButton price={500} onClick={() => handleButtonClick(10)} />
      <GiftCardButton price={1000} onClick={() => handleButtonClick(20)} />
      <GiftCardButton price={2000} onClick={() => handleButtonClick(30)} />
      <GiftCardButton price={2500} onClick={() => handleButtonClick(40)} />
      <GiftCardButton price={4000} onClick={() => handleButtonClick(50)} />
      </div>
    </div>
  <Footer/>
   </section>
  );
};

export default Gift;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3031/gift_page");
  const data: GiftPageProps[] = await res.json();

  const resBrands = await fetch("http://localhost:3031/brand");
    const brands: BrandType[] = await resBrands.json();

  return {
    props: {
      data,
      brands,
    },
  };
};
