import Link from "next/link";
import router from "next/router";
import React, { ChangeEvent, useState } from "react";
import { v4 as uuid } from "uuid";

const OrderFormPage = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [addresse, setAddresse] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTermsTwo, setAgreeTermsTwo] = useState(false);

  let isFormValid = false;
  if (firstName && lastName && email && addresse && phone && agreeTerms) {
    isFormValid = true;
  }
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log("Form is not valid");
      return;
    }

    try {
      // Retrieve existing orders from local storage
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

      // Create a new order
      const newOrder = {
        id: uuid(),
        firstName,
        lastName,
        email,
        addresse,
        phone,
        agreeTerms,
      };

      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      console.log("Order placed successfully:", newOrder);

      setOrderSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAgreeTerms(false);
      setAgreeTermsTwo(false);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const agreeTermsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
  };

  const agreeTermsChangeHandlerTwo = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeTermsTwo(e.target.checked);
  };

  return (
    <section>
      <div className="container-fluid pt-4">
        <div className="row justify-content-center py-1">
          <div className="col-7 d-flex justify-content-center ">
            <img
              src="/Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
              alt=""
            />
          </div>
          <div className="col-8 my-2">
            <h5 className="text-center">
              Ве молиме внесете ги потребните информации
            </h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <form onSubmit={formSubmitHandler}>
              <div className="form-check d-flex justify-content-center mb-2">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="form2Example3cg"
                  name="agreeTerms"
                  checked={agreeTerms}
                  onChange={agreeTermsChangeHandler}
                />
                <label
                  className="form-check-label small"
                  htmlFor="form2Example3g"
                >
                  вметни ги информациите од мојот профил
                </label>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">
                  Име*
                </label>
                <input
                  type="name"
                  id="form3Example1cg"
                  className="form-control bg-transparent"
                  name="name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your name..."
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example2cg">
                  Презиме
                </label>
                <input
                  type="text"
                  id="form3Example2cg"
                  className="form-control bg-transparent"
                  name="sureName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your Last name..."
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example5cg">
                  Адреса на живеење*
                </label>
                <input
                  type="text"
                  id="form3Example5cg"
                  className="form-control bg-transparent"
                  value={addresse}
                  onChange={(e) => setAddresse(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="phone" htmlFor="form3Example6cdg">
                  Телефонски број*
                </label>
                <input
                  type="tel"
                  id="form3Example6cdg"
                  name="phone"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                  className="form-control bg-transparent"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">
                  Емаил адреса
                </label>
                <input
                  type="email"
                  id="form3Example3cg"
                  className="form-control bg-transparent"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                />
              </div>

              <div className="form-check d-flex justify-content-center mb-2">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="form2Example3cg"
                  name="agreeTerms"
                  checked={agreeTermsTwo}
                  onChange={agreeTermsChangeHandlerTwo}
                />
                <label
                  className="form-check-label small"
                  htmlFor="form2Example3g"
                >
                  сакам да добивам новости за идни попусти, нови колекции и
                  промоции на мојата емаил адреса.
                </label>
              </div>

              <div className="d-flex mx-3 my-4">
                <button type="submit" className="btn gold btn-block w-75">
                  Нарачај
                </button>
                <button  onClick={() => router.push("/order")} type="submit" className="btn  btn-block w-75">
                  Откажи
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {orderSubmitted && (
        <div
          className="modal"
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div className="row justify-content-center">
                  <div className="col-12 pt-2">
                    <img
                      className="mx-auto"
                      style={{ width: "45px" }}
                      src="/Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 5.png"
                      alt=""
                    />
                  </div>
                  <div className="col-11 text-center">
                    <h5 className="fw-bolder my-2">
                      Вашата нарачка е успешна!
                    </h5>
                    <p>
                      Очекувајте потврда за вашата нарачка на вашата емаил
                      адреса. Keep on shining *
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link href="/product">
                      <button type="button" className="btn gold px-5 my-2">
                        <span style={{ fontSize: "17px", fontWeight: "600" }}>
                          Продолжи
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col">
                    <Link href="/">
                      <u>Кон почетна</u>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderFormPage;
