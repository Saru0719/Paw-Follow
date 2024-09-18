import React, { useState, useEffect } from "react";
import { registerReq } from "../api/auth";

function RegisterComponent() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cellphone, setCellphone] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const payload = { name, lastname, email, password, cellphone };
    let res: any;
    try {
      res = await registerReq(payload);
      localStorage.setItem("isLogin", "true");
      window.location.href = "/";
      console.log(res);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <main className="flex w-full h-screen">
        <section
          className="hidden md:flex flex-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/1229718/2996/i/450/depositphotos_29969971-stock-photo-pet-group-sign-vertical.jpg')",
          }}
        ></section>
        <section className="flex-1 bg-white p-8 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1
              className="text-5xl mb-10 text-gray-900 flex font-extrabold"
              style={{ fontFamily: "'Kavoon', cursive" }}
            >
              Paw-Follow
            </h1>
            <form className="w-full">
              <label htmlFor="name" className="block mb-2 text-gray-600">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
              />
              <label htmlFor="lastname" className="block mb-2 text-gray-600">
                Lastname:
              </label>
              <input
                type="text"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <label htmlFor="email" className="block mb-2 text-gray-600">
                Email:
              </label>
              <input
                type="email"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="block mb-2 text-gray-600">
                Password:
              </label>
              <input
                type="password"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="cellphone" className="block mb-2 text-gray-600">
                Cellphone:
              </label>
              <input
                type="text"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="w-full p-3 bg-black text-white rounded hover:bg-gray-800"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <a href="/" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default RegisterComponent;
