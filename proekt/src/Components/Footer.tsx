import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    const storedEmails = localStorage.getItem("subscribedEmails");
    const emails = storedEmails ? JSON.parse(storedEmails) : [];
    
    if (emails.includes(email)) {
      alert("Already subscribed");
      return;
    }
  
    emails.push(email);
    localStorage.setItem("subscribedEmails", JSON.stringify(emails));
  
    setEmail("");
  
    alert("Success");
  };

  return (
    <footer className="bg3 p-t-75 p-b-32 footer-bg py-2 px-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="text-center mt-3">Следи ги нашите новости!</h4>
            <p className="py-3" style={{ fontSize: "15px" }}>
              Биди дел од нашиот newsletter и дознавај прва за промоции, попусти
              и нови колекции.
            </p>

            <form className="pb-4" onSubmit={handleSubscribe}>
              <div className="wrap-input1 w-full  pb-4 ">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: "13px" }}
                >
                  E-mail адреса:
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control rounded-4 "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn w-100 flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 gold"
                >
                  Зачлени се!
                </button>
              </div>
            </form>

            <hr />

            <ul className="navbar-nav py-2" style={{ fontSize: "15px" }}>
              <li className="nav-item p-b-10">
                <Link href="/about" className="nav-link">
                  За нас
                </Link>
              </li>

              <li className="nav-item p-b-10">
                <Link href="/contact" className="nav-link">
                  Контакт
                </Link>
              </li>

              <li className="nav-item p-b-10">
                <Link
                  href="https://www.google.com/maps?q=Kosturski Heroi br.6/14, Skopje, Republic of Macedonia"
                  passHref
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Локатор на продавницатa
                </Link>
              </li>

              <li className="nav-item p-b-10">
                <Link href="/faq" className="nav-link">
                  Често поставувани прашања (FAQ)
                </Link>
              </li>
              <li className="nav-item p-b-10">
                <div className="nav-link">
                  <Link href="/register">Регистрирај се</Link> /
                  <Link href="/login">логирај се</Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-5 my-4">
            <h4 className="text-gold">Следи не на:</h4>

            <div className="p-t-27">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/igraliste.sk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <i className="fa fa-instagram fa-lg"></i> igraliste.sk
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.tiktok.com/@igraliste.sk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link trans-04 m-r-16"
                  >
                    <i className="fa-brands fa-tiktok fa-lg"></i> igraliste.sk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <p className="small" style={{ fontSize: "10px" }}>
              Сите права задржани © 2023 igralishtesk.mk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
