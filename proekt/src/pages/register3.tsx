import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import {v4 as uuid} from "uuid"

const RegisterThree = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const isFormValid = address && phone && bio;

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log("Form is not valid");
      return;
    }

    try {
      const storedUsers = localStorage.getItem('registeredUsers');
      const users: Record<string, any> = storedUsers ? JSON.parse(storedUsers) : {};

      const userId = uuid();
      users[userId] = {
        id: userId,
        address,
        phone,
        bio,
        selectedImage,
      };

      localStorage.setItem('registeredUsers', JSON.stringify(users));

      setAddress("");
      setPhone("");
      setBio("");
      setSelectedImage("");

      router.push("/profile");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <section className="bg-pink pt-4">
      <div className="container-fluid pt-3">
        <div className="row justify-content-center pt-5">
          <div className="col-6">
            <Link href="/">
              <img className="log-img" src="../Icons/Group 1.png" alt="" />
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
                      width: "130px",
                      height: "130px",
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
            <label className="form-label" htmlFor="form3Example3cg">
              Aдреса
            </label>
            <input
              type="text"
              id="form3Example3cg"
              className="form-control bg-transparent"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="phone" htmlFor="form3Example4cdg">
              Телефонски број
            </label>
            <input
             type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              className="form-control bg-transparent"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example5cdg">
              Биографија
            </label>
            <textarea
              id="form3Example5cdg"
              className="form-control bg-transparent"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="d-flex mx-3 my-4">
            <button type="submit" className="btn btn-dark btn-block w-75">
              Заврши
            </button>
          </div>
          <Link href="/">Прескокни</Link>
        </form>
      </div>
    </section>
  );
};

export default RegisterThree;

