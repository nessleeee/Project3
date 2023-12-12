import ProductCard from "@/Components/Product/ProductCard";
import { ProductType } from "@/types/types";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useRef } from "react";

interface Props {
  data: ProductType[];
}

const Search: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    const searchTerm = inputRef?.current?.value || "";

    try {
      const apiUrl = searchTerm
        ? `http://localhost:3031/products?brand_like=${searchTerm}`
        : "http://localhost:3031/products";

      const res = await fetch(apiUrl);
      const searchData = await res.json();

      router.push({
        pathname: "/search",
        query: searchTerm ? { searchTerm } : {},
      });

      return { data: searchData };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { data: [] };
    }
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <form>
        <input type="text" ref={inputRef} className="w-75" />
        <button
          className="btn btn-sm m-0 p-0"
          title="Search"
          onClick={async (e) => {
            e.preventDefault();
            const result = await handleSearch();
            console.log("Search result:", result);
          }}
        >
          <img src="../Icons/search.png" alt="" />
        </button>
      </form>
      </div>
      {data.length > 0 && inputRef.current?.value && (
        <div className="row">
          {data.map((product) => (
            <div className="col-4" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
      
      
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchTerm = query.searchTerm as string;

  try {
    const apiUrl = searchTerm
      ? `http://localhost:3031/products?brand_like=${searchTerm}`
      : "http://localhost:3031/products";

    const res = await fetch(apiUrl);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};