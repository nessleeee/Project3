import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Scroller from "@/Components/Scroller";
import { AccessoriesType, BrandType, CategoryType} from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

interface Props {
  brands: BrandType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];
}

const ProductPage: NextPage<Props> = ({  brands, categories, accessories }) => {
  
  return (
    <section>
      <Header brands={brands} categories={categories} accessories={accessories} />
      <Scroller />
      <div className="row justify-content-center mt-4">
        {brands.map((brand) => (
            <div key={brand.id} className="col-5">
              <Link  href={`/brand/${brand.id}` }>
            <div className="card">
              <img style={{width:"100%", height:"155px", objectFit: "cover"}} src={brand.img} className="card-img-top " alt={brand.name} />
              <div className="card-body">
                <h6 className="card-title ">{brand.name}</h6>
              </div>
            </div>
          </Link>
          </div>
          
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async () => {
  
  const resCategories = await fetch("http://localhost:8000/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resBrands = await fetch("http://localhost:8000/brand");
  const brands: BrandType[] = await resBrands.json();

  const resAccessories = await fetch("http://localhost:8000/accessories");
  const accessories: AccessoriesType[] = await resAccessories.json();

  return {
    props: {
      categories,
      accessories,
      brands,
    },
  };
};
