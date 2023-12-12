import Link from "next/link";

const RegisterPage = () => {
 
  return (
    <section className="bg-pink pt-4">
      <div className="container-fluid pt-4">
        <div className="row justify-content-center py-5">
          <div className="col-6">
            <img className="log-img mx-auto" src="../Icons/Group 1.png" alt="" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            <form>
              <div className="row justify-content-center">
                <div className="col">
                  <Link href="/register2">
                    <button
                      className="btn btn-block btn-pink mb-3 w-100 "
                      type="submit"
                    >
                      Регистрирај се со емаил адреса
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-8">
                  <p className="text-center">или</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-block btn-pink mb-3 w-100 "
                    type="submit"
                  >
                    <i className="fab fa-google fa-sm"></i> Најави се преку
                    Google
                  </button>

                  <button
                    className="btn btn-block btn-pink w-100"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f fa-sm"></i> Најави се преку
                    Facebook
                  </button>
                </div>
                <div className="col-12 py-3">
                  <div className="text-center">
                    <p>
                      Веќе имаш профил?
                      <Link href="/login" className="color-gold">
                        Логирај се
                      </Link>
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

export default RegisterPage;
