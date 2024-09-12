import React, { useState } from "react";
import { loginReq } from "../api/auth";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const payload = { email, password };
    let res: any;
    try {
      res = await loginReq(payload);
      localStorage.setItem("isLogin", "true");
      window.location.href = "/home";
      console.log(res);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <main className="w-full h-screen bg-white flex items-center">
        <section
          className="hidden h-full w-1/2 md:flex bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/1229718/2996/i/450/depositphotos_29969971-stock-photo-pet-group-sign-vertical.jpg')",
          }}
        ></section>

        <section className="flex-1 bg-white p-8 flex justify-center items-center">
          <div className="max-w-md w-full h-full flex flex-col items-center shadow-gray-300 shadow-md rounded-md p-10">
            <h1
              className="text-5xl mb-10 text-gray-900 flex font-extrabold"
              style={{ fontFamily: "'Kavoon', cursive" }}
            >
              Paw-Follow
            </h1>

            <form className="w-full">
              <label htmlFor="email" className="block mb-2 text-gray-600">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
              />

              <label htmlFor="password" className="block mb-2 text-gray-600">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
              />

              <button
                type="submit"
                className="w-full p-3 bg-black text-white rounded hover:bg-gray-800"
              >
                Log in
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default LoginComponent;
