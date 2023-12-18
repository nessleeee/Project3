import Link from "next/link";
import router from "next/router";
import { ChangeEvent, useState } from "react";
import { v4 as uuid } from "uuid";

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addresse, setAddresse] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const agreeTermsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  let isFormValid = false;
  if (selectedImage && firstName && lastName && email && password && addresse && phone && bio && agreeTerms) {
    isFormValid = true;
  }
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log("Form is not valid");
      return;
    }

    try {
      const existingProfiles = JSON.parse(localStorage.getItem("userProfiles") || "[]");

      const newProfile = {
        id: uuid(),
        selectedImage,
        firstName,
        lastName,
        email,
        password,
        addresse,
        phone,
        bio,
        agreeTerms,
      };

      const updatedProfiles = [...existingProfiles, newProfile];
      localStorage.setItem("userProfiles", JSON.stringify(updatedProfiles));
      console.log("User profile saved:", newProfile);

      /*
      setSelectedImage("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");
      setBio("");
      setAgreeTerms(false);
      */
    } catch (error) {
      console.error("Error saving user profile:", error);
    }
  };
  return (
    <section className="bg-pink pt-4">
      <div className="container-fluid pt-3">
        <div className="row justify-content-center pt-5">
          <div className="col-6">
            <Link href="/">
              <img
                className="log-img mx-auto"
                src="../Icons/Group 1.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <form className="mx-4" onSubmit={formSubmitHandler}>
          <div className="row justify-content-center my-4">
            <div className="col-5">
              <div>
                <div className="d-flex justify-content-center mb-4">
                  <img
                    id="selectedAvatar"
                    src={
                      selectedImage ||
                      "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                    }
                    className="rounded-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                    alt="example placeholder"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div>
                    <label
                      className="form-label btn btn-gray btn-rounded"
                      htmlFor="customFile2"
                    >
                      Одбери слика
                    </label>
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile2"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example1cg">
              Име
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

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4cg">
              Лозинка
            </label>
            <input
              type="password"
              id="form3Example4cg"
              className="form-control bg-transparent"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
            />
            <a className="small" href="#">
              <u>Промени лозинка</u>
            </a>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example5cg">
              Aдреса
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
              Телефонски број
            </label>
            <input
              type="tel"
              id="form3Example6cdg"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              className="form-control bg-transparent"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example7cdg">
              Биографија
            </label>
            <textarea
              id="form3Example7cdg"
              className="form-control bg-transparent"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
            <label className="form-check-label small" htmlFor="form2Example3g">
              Испраќај ми известувања за нови зделки и промоции.
            </label>
          </div>

          <div className="d-flex mx-3 my-4">
            <button type="submit" className="btn btn-dark btn-block w-75">
              Зачувај
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
