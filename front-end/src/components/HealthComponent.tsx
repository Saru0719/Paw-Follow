import React, { useState } from "react";
import { addHealthReq } from "../api/healt";

const HealthComponent: React.FC = () => {
  const [pet_name, setPetName] = useState("")
  const [date_h, setDate] = useState("");
  const [descriptions, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const idOwner = parseInt(localStorage.getItem("idOwner"));
    const payload = { pet_name, date_h, descriptions, idOwner };

    try {
      // Aquí deberías realizar la solicitud a tu API
      window.location.href = '/viewHealthPage'
      await addHealthReq(payload)
      alert("Health entry submitted successfully!");
    } catch (err: any) {
      setError(
        "An error occurred while submitting your entry. Please try again."
      );
    }
  };

  return (
    <main className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Contenedor principal con formulario */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto p-4">
        {/* Contenedor izquierdo con imagen */}
        <div className="hidden flex-shrink-0 w-full md:w-1/3 p-4 md:flex justify-center items-center mb-8 md:mb-0">
          <img
            src="https://i.postimg.cc/yV7zDVcj/pngegg.png"
            alt="Pet"
            className="w-full h-auto max-w-xs md:max-w-md"
          />
        </div>

        {/* Contenedor principal con formulario */}
        <div className="flex-1 max-w-md w-full flex flex-col justify-center items-center gap-8">
          <h1
            className="text-5xl md:text-6xl mb-6 text-gray-900 font-extrabold"
            style={{ fontFamily: "'Kavoon', cursive" }}
          >
            Paw-Follow
          </h1>

          <div className="w-full flex flex-col items-center shadow-gray-300 shadow-md rounded-md p-6 bg-white">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 font-bold">
              Health Log
            </h2>

            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <form className="w-full" onSubmit={handleSubmit}>
              <label htmlFor="petName" className="block mb-2 text-gray-600">
                Pet Name:
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={pet_name}
                onChange={(e) => setPetName(e.target.value)}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
              />
              <label htmlFor="date" className="block mb-2 text-gray-600">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date_h}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded"
              />

              <label htmlFor="description" className="block mb-2 text-gray-600">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={descriptions}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                className="w-full p-3 mb-4 border border-gray-300 rounded"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 bg-black text-white rounded hover:bg-gray-800"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contenedor derecho con imagen */}
        <div className="hidden flex-shrink-0 w-full md:w-1/3 p-4 md:flex justify-center items-center mb-8 md:mb-0">
          <img
            src="https://i.postimg.cc/yV7zDVcj/pngegg.png"
            alt="Pet"
            className="w-full h-auto max-w-xs md:max-w-md"
          />
        </div>
      </section>
    </main>
  );
};

export default HealthComponent;
