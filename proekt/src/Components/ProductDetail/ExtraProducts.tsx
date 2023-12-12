import { ProductType } from '@/types/types';
import React, { useState } from 'react';
import ProductCard from '../Product/ProductCard';

interface ExtraProductsProps {
  products: ProductType[];
}

const ExtraProducts: React.FC<ExtraProductsProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ProductsPerPage = 6;

  const maxPage = Math.ceil(products.length / ProductsPerPage);

  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;

  const currentPageProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className='row'>
        {currentPageProducts.map((product) => (
          <div key={product.id} className="col-6">
            <ProductCard product={product}/>
          </div>
        ))}
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
    </>
  );
};

export default ExtraProducts;
