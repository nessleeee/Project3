import Link from 'next/link';
import React from 'react'

const OrderForm = () => {
    return (
        <section >
          <div className="container-fluid pt-4">
            <div className="row justify-content-center py-1">
              <div className="col-7 d-flex justify-content-center ">
                <img src="/Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png" alt="" />
              </div>
              <div className="col-8 my-2">
                <h5 className='text-center'>Ве молиме внесете ги потребните информации</h5>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10">
                <form >{/* onSubmit={formSubmitHandler} */}
                <div className="form-check d-flex justify-content-center mb-2">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3cg"
                      name="agreeTerms"   
                    //   checked={agreeTerms}
                    //   onChange={agreeTermsChangeHandler}
                      
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
                    //   value={firstName}
                    //   onChange={firstNameChangeHandler}
                    //   placeholder="Enter your name..."
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
                    //   value={lastName}
                    //   placeholder="Enter your Last name..."
                    //   onChange={lastNameChangeHandler}
                    />
                  </div>
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="form3Example4cg">
                    Адреса на живеење*
                    </label>
                    <input
                      type="password"
                      id="form3Example4cg"
                      className="form-control bg-transparent"
                      name="password"
                    //   value={password}
                    //   placeholder="Enter your password..."
                    //   onChange={passwordChangeHandler}
                    />
                  <div className="form-outline mb-1">
                    <label className="form-label" htmlFor="form3Example5cdg">
                    Телефонски број*
                    </label>
                    <input
                      type="password"
                      id="form3Example5cg"
                      className="form-control bg-transparent"
                      name="rep-password"
                    //   value={repPassword}
                    //   placeholder="Confirm your password..."
                    //   onChange={repPasswordChangeHandler}
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
                    //   value={email}
                    //   placeholder="Enter your email..."
                    //   onChange={emailChangeHandler}
                    />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-2">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3cg"
                      name="agreeTerms"   
                    //   checked={agreeTerms}
                    //   onChange={agreeTermsChangeHandler}
                      
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="form2Example3g"
                    >
                      сакам да добивам новости за идни попусти, нови колекции и промоции на мојата емаил адреса.
                    </label>
                  </div>
                  <div className="d-flex mx-3 my-4">
                    <button
                      type="submit"
                      className="btn gold btn-block w-75"
                      
                    >
                     Нарачај
                    </button>
                    <button
                      type="submit"
                      className="btn  btn-block w-75"
                      
                    >
                     Откажи
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
}

export default OrderForm