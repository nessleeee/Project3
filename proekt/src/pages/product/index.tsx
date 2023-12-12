import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProductCard from "@/Components/Product/ProductCard";
import Scroller from "@/Components/Scroller";
import { BrandType, CategoryType, ProductType } from "@/types/types";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";

interface Props {
  data: ProductType[];
  brands: BrandType[];
  categories: CategoryType[];
}

const ProductPage: NextPage<Props> = ({ data, brands, categories }) => {
  const [sortOrder, setSortOrder] = useState<"new" | "old" | "">("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = e.target.value as "new" | "old";
    setSortOrder(selectedSortOrder);
    setCurrentPage(1);
  };

  const ProductsPerPage = 16;
  const maxPage = Math.ceil(data.length / ProductsPerPage);
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;

  let currentProducts = data.slice(startIndex, endIndex);

  if (sortOrder === "new" || sortOrder === "old") {
    const sortedProducts = [...data].sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-')).getTime();
      const dateB = new Date(b.date.split('.').reverse().join('-')).getTime();

      return sortOrder === "new" ? dateB - dateA : dateA - dateB;
    });

    currentProducts = sortedProducts.slice(startIndex, endIndex);
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <section>
      <Header brands={brands} categories={categories}  />
      <Scroller />
      <div className="row justify-content-center my-4">
        <div className="col-1">
          <button className="btn px-2 py-0 bt-n">
            <img src="/Icons/fluent_search-48-regular.svg" alt="" />
          </button>
        </div>
        <div className="col-5" style={{ paddingRight: "0" }}>
          <p className="p-0 m-0 small text-end">Подреди според</p>
        </div>
        <div className="col-4" style={{ paddingLeft: "4px" }}>
          <select
            className="form-select form-select-sm py-0"
            aria-label=".form-select-sm example"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Sort By</option>
        <option value="new">New</option>
        <option value="old">Old</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        {currentProducts.map((product, index) => {
          if (index % 7 === 0 || index % 7 === 1) {
            return (
              <div className="col-5" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          } else if (index % 7 === 2) {
            return (
              <div className="col-10" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          } else if (index % 7 === 2 || index % 7 === 5) {
            return (
              <div className="col-5" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          } else if (index % 7 === 5 || index % 7 === 6) {
            return (
              <div className="col-5" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          }
        })}
      </div>

      <div className="row">
        <div className="col">
          <nav aria-label="Navigation page">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <span aria-hidden="true">
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                </a>
              </li>

              {Array.from({ length: maxPage }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === maxPage ? "disabled" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <span aria-hidden="true">
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  
  const resCategories = await fetch("http://localhost:3031/categories");
  const categories: CategoryType[] = await resCategories.json();

  const resBrands = await fetch("http://localhost:3031/brand");
  const brands: BrandType[] = await resBrands.json();


let resProducts: Response;
if(query.category){
  resProducts = await fetch(`http://localhost:3031/products?type_like${query.category}`);
} else {
  resProducts = await fetch("http://localhost:3031/products");
}
const data: ProductType[] = await resProducts.json();



  return {
    props: {
      data,
      categories,
      brands,
    },
  };
};
