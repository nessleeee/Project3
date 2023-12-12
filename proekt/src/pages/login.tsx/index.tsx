import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  interface UserType {
    email: string;
    password: string
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

  
    try {
      const response = await fetch("https://igraliste-35324-default-rtdb.europe-west1.firebasedatabase.app/users.json");
  
      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }
  
      const userData: Record<string, UserType> = await response.json();
      
      const user = Object.values(userData).find((user) => user.email === email && user.password === password);
  
      if (user) {
        router.push("/profile");
      } else {
        setError("Invalid credentials. User does not exist.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Error fetching user data. Please try again later.");
    }
  };
  return (
    <section className="bg-pink pt-5">
      <div className="container-fluid pt-5">
        <div className="row justify-content-center py-5">
          <div className="col-7">
            <img className="log-img" src="../Icons/Group 1.png" alt="" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-9">
            <form onSubmit={handleLogin}>
              <div className="form-outline mb-4">
                <label className="form-label " htmlFor="form2Example1">
                  Email адреса
                </label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Лозинка
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="row justify-content-center mb-4">
                <div className="col">
                  <a href="#!" className="color-gold">Ја заборави лозинката?</a>
                </div>
              </div>
              <div className="row justify-content-center mb-4">
                <div className="col">
                  
                  <button
                    type="submit"
                    className="btn btn-dark  mb-4 w-100 rounded-4"
                  > Најави сe
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-8">
                  <p className="text-center" >или</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <button className="btn btn-block btn-pink mb-3 w-100 " 
              type="submit"><i className="fab fa-google fa-sm"></i> Најави се преку Google</button>
            <button className="btn btn-block btn-pink w-100" 
              type="submit"><i className="fab fa-facebook-f fa-sm"></i> Најави се преку Facebook</button>
                </div>
                <div className="col-12 py-3">
                   <div className="text-center">
                <p>
                Немаш профил? <Link href="/register" className="color-gold">Регистрирај се</Link>
                </p>
                
              </div>
                </div>
              </div>
            </form>
            <div className="row justify-content-center my-5">
              <div className="col text-center">
                <p className="xs">Сите права задржани @ Игралиште Скопје</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
