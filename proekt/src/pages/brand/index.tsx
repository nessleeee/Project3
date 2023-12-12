import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import { BrandType, CategoryType} from "@/types/types";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  brands: BrandType[];
  categories: CategoryType[];
}

const ProductPage: NextPage<Props> = ({  brands, categories }) => {
  
  return (
    <section>
      <Header brands={brands} categories={categories}  />
      <Scroller />
      <div className="row justify-content-center mt-4">
        {brands.map((brand) => (
          <div className="col-5" key={brand.id}>
            <div className="card">
              <img src={brand.img} className="card-img-top" alt={brand.name} />
              <div className="card-body">
                <h4 className="card-title ">{brand.name}</h4>
                {/* You can add other brand details as needed */}
                {/* For example, description, etc. */}
                {/* <p className="card-text">{brand.des}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async () => {
  
  const resCategories = await fetch("http://localhost:3031/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resBrands = await fetch("http://localhost:3031/brand");
  const brands: BrandType[] = await resBrands.json();

  return {
    props: {
      categories,
      brands,
    },
  };
};
