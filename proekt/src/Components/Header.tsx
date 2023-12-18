import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AccessoriesType, BrandType, CategoryType } from "@/types/types";
import router from "next/router";

interface Props {
  brands: BrandType[];
  categories: CategoryType[];
  accessories: AccessoriesType[];
}

const Header: React.FC<Props> = ({ brands, categories, accessories }) => {
  console.log("Accessories in Header:", accessories);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isLoggedIn = false; 

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary theNav py-0">
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <button
          className="navbar-toggler"
          style={{ border: "none" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <>
              <span className="navbar-toggler-icon"></span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-x p-1"></i>
            </>
          )}
        </button>

        <Link href="/">
          <Image src="/Group 1.png" alt="me" width={120} height={28} />
        </Link>

        <div className=" my-2 ml-auto">
          <Link href="/search">
            <Image src="/search.png" alt="me" width="45" height="45" />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse p-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item my-1">
              <a onClick={() => {
                router.push({
                  pathname: '/product',
                  query: { selectedSortOrder: 'new' },
                });
              }} className="nav-link" href="#">
                <span className="h5">
                  <u>
                    <em>Ново</em>
                  </u>
                </span>
              </a>
            </li>
            <li className="nav-item dropdown my-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="h5">Vintage облека</span>
              </a>
              <ul className="dropdown-menu px-0 mx-0">
                <li className="nav-item p-0 m-0">
                  <a className="dropdown-item text-gold p-0 m-0" href="#">
                    <span
                      className="p-0 m-0"
                      onClick={() => {
                        router.push({
                          pathname: "/product",
                        });
                      }}
                    >
                      <Image
                        src="/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
                        alt=""
                        width="30"
                        height="30"
                        style={{ fontSize: "17px" }}
                      />
                    </span>
                    Види ги сите
                  </a>
                </li>
                {categories &&
                  categories.map((category) => (
                    <li
                      key={category.slug}
                      className="my-4 h5"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        router.push({
                          pathname: "/product",
                          query: {
                            category: category.slug,
                          },
                        });
                      }}
                    >
                      {category.type}
                    </li>
                  ))}
              </ul>
            </li>

            <li className="nav-item dropdown my-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="h5">Брендови</span>
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item p-0 m-0">
                  <Link
                    className="dropdown-item text-gold p-0 m-0"
                    href="/brand"
                  >
                    <span className="p-0 m-0">
                      <Image
                        src="/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
                        alt=""
                        width="30"
                        height="30"
                        style={{ fontSize: "17px" }}
                      />
                    </span>
                    Види ги сите
                  </Link>
                </li>
                {brands.map((brand) => (
                  <Link key={brand.id} href={`/brand/${brand.id}`}>
                    <li className="my-4 h5">{brand.name}</li>
                  </Link>
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown my-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="h5">Аксесоари</span>
              </a>
              <ul className="dropdown-menu mb-5">
                <li className="nav-item p-0 m-0">
                  <a
                    onClick={() => {
                      router.push({
                        pathname: "/product",
                        query: {
                          accessories: "accessories",
                        },
                      });
                    }}
                    className="dropdown-item text-gold p-0 m-0"
                    href="#"
                  >
                    <span className="p-0 m-0">
                      <Image
                        src="/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
                        alt=""
                        width="30"
                        height="30"
                        style={{ fontSize: "17px" }}
                      />
                    </span>
                    Види ги сите
                  </a>
                </li>
                {accessories &&
                  accessories.map((accessory) => (
                    <li
                      key={accessory.slug}
                      className="mt-4 h5"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        router.push({
                          pathname: "/product",
                          query: {
                            accessory: accessory.slug,
                          },
                        });
                      }}
                    >
                      {accessory.type}
                    </li>
                  ))}
              </ul>
            </li>
            <li className="nav-item my-1">
              <a className="nav-link" href="#">
                <span className="h5">Lifestyle</span>
              </a>
            </li>

            <li className="nav-item my-1">
              <Link className="nav-link" href="/gift">
                <span className="h5">Подари картичка*</span>
              </Link>
            </li>
            <li className="nav-item my-1">
              <a className="nav-link" href="#">
                <span className="h5 text-danger">
                  <em>Попуст</em>
                </span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-6">
            <li className="nav-item">
              <Link className="nav-link" href="/order">
                <span className="box-i">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="mx-2 box-font">Кошничка</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/favorite">
                <span className="box-i">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </span>
                <span className="mx-2 box-font">Омилени</span>
              </Link>
            </li>
            {isLoggedIn ? (
          <>
            <li className="nav-item">
              <Link className="nav-link" href="/profile">
                <span className="box-i">
                  <i className="fa-regular fa-user fa-lg"></i>
                </span>
                <span className="mx-2 box-font">Мој Профил</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item my-2">
                <span className="box-i">
                  <i className="fa-regular fa-user fa-lg"></i>
                </span>
            <Link href="/register">
                  <span className="mx-1 box-font">Регистрирај се</span>
                </Link>
                /
                <Link href="/login">
                  <span className="mx-1 box-font">Логирај се</span>
                </Link>
            </li>
          </>
        )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
