import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";

const RegisterTwo = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  const isFirstNameValid = firstName.trim() !== "";

  const isLastNameValid = lastName.trim() !== "";

  const isEmailValid =
    email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = password.trim() !== "";

  const isRepPasswordValid = repPassword.trim() !== "";

  let isFormValid = false;
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isRepPasswordValid
  ) {
    isFormValid = true;
  }

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const storedUsers = localStorage.getItem("registeredUsers");
      const users: Record<string, string> = storedUsers
        ? JSON.parse(storedUsers)
        : {};

      if (users[email]) {
        setError("User with this email already exists.");
        return;
      }

      users[email] = password;
      localStorage.setItem("registeredUsers", JSON.stringify(users));

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRepPassword("");
      setAgreeTerms(false);

      router.push("/register3");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Error registering user. Please try again later.");
    }
  };

  const firstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const repPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepPassword(e.target.value);
  };
  const agreeTermsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
  };

  return (
    <section className="bg-pink pt-5">
      <div className="container-fluid pt-4">
        <div className="row justify-content-center py-4">
          <div className="col-6">
            <Link href={"/"}>
              <img
                className="log-img mx-auto"
                src="../Icons/Group 1.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <form onSubmit={registerUser}>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example1cg">
                  Име
                </label>
                <input
                  type="name"
                  id="form3Example1cg"
                  className="form-control bg-transparent"
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
                <label className="form-label" htmlFor="form3Example3cg">
                  Емаил адреса
                </label>
                <input
                  type="email"
                  id="form3Example3cg"
                  className="form-control bg-transparent"
                  name="email"
                  value={email}
                  placeholder="Enter your email..."
                  onChange={emailChangeHandler}
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example4cg">
                  Лозинка
                </label>
                <input
                  type="password"
                  id="form3Example4cg"
                  className="form-control bg-transparent"
                  name="password"
                  value={password}
                  placeholder="Enter your password..."
                  onChange={passwordChangeHandler}
                />
              </div>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example5cdg">
                  Повтори лозинка
                </label>
                <input
                  type="password"
                  id="form3Example5cg"
                  className="form-control bg-transparent"
                  name="rep-password"
                  value={repPassword}
                  placeholder="Confirm your password..."
                  onChange={repPasswordChangeHandler}
                />
              </div>
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
                  Испраќај ми известувања за нови зделки и промоции.
                </label>
              </div>
              <div className="d-flex mx-3 my-4">
                <button type="submit" className="btn btn-dark btn-block w-75">
                  Регистрирај се
                </button>
              </div>
            </form>
            <div className="row my-5">
              <div className="col">
                <p className="xs">
                  Со вашата регистрација, се согласувате со{" "}
                  <a href="#!" className="text-body">
                    <u>Правилата и Условите за кориснички сајтови.</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterTwo;
