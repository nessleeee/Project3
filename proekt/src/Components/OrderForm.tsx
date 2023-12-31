import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import {v4 as uuid} from "uuid"

const OrderForm = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [addresse, setAddresse] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTermsTwo, setAgreeTermsTwo] = useState(false);

  let isFormValid = false;

  if (firstName && lastName && email && phone && addresse) {
    isFormValid = true;
  }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!isFormValid) {
    console.log("Form is not valid");
    return;
  }

  try {
    const response = await fetch("https://igraliste-35324-default-rtdb.europe-west1.firebasedatabase.app/naracka.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        name: firstName,
        sureName: lastName,
        email,
        phone,
        addresse,
        agreeTerms, 
        agreeTermsTwo,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("User registration successful:", responseData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddresse("");
    setAgreeTerms(false);
    setAgreeTermsTwo(false);


    setOrderSubmitted(true);
  } catch (error) {
    console.error("Error registering user:");
  }
};

  
  const agreeTermsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
  };
  const firstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const phoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
 
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const addresseChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddresse(e.target.value);
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
            <form onSubmit={handleSubmit}>
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

              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example1cg">
                  Име*
                </label>
                <input
                  type="text"
                  id="form3Example1cg"
                  className="form-control bg-transparent bg-pink"
                  name="name"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                  placeholder="Enter your name..."
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example2cg">
                  Презиме
                </label>
                <input
                  type="text"
                  id="form3Example2cg"
                  className="form-control bg-transparent"
                  name="sureName"
                  value={lastName}
                  placeholder="Enter your Last name..."
                  onChange={lastNameChangeHandler}
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example4cg">
                  Адреса на живеење*
                </label>
                <input
                  type="text"
                  id="form3Example4cg"
                  className="form-control bg-transparent"
                  name="text"
                  value={addresse}
                  placeholder="Enter your addresse..."
                  onChange={addresseChangeHandler}
                />
                <div className="form-outline mb-1">
                  <label className="form-label" htmlFor="form3Example5cdg">
                    Телефонски број*
                  </label>
                  <input
                    type="phone"
                    id="form3Example5cg"
                    className="form-control bg-transparent"
                    name="phone"
                    value={phone}
                    placeholder="Confirm your password..."
                    onChange={phoneChangeHandler}
                  />
                </div>
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example3cg">
                  Емаил адреса
                </label>
                <input
                  type="emai"
                  id="form3Example3cg"
                  className="form-control bg-transparent"
                  name="email"
                    value={email}
                    placeholder="Enter your email..."
                    onChange={emailChangeHandler}
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
                <button type="submit" className="btn  btn-block w-75">
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
                    <button type="button" className="btn gold px-5 my-2">
                      <span style={{ fontSize: "17px", fontWeight: "600" }}>
                        Продолжи
                      </span>
                    </button>
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

export default OrderForm;
