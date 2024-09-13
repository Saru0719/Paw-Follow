import React, { useState } from "react";

const HomeComponent: React.FC = () => {
  // Estado para controlar la visibilidad del formulario
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  // Función para alternar la visibilidad del formulario
  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-pink-50 p-4">
      {!isFormVisible && (
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-5xl mb-10 text-gray-900 flex font-extrabold"
            style={{ fontFamily: "'Kavoon', cursive" }}
          >
            Paw-Follow
          </h1>

          <p className="text-lg md:text-lg text-gray-800 mb-6 flex items-center">
            Welcome to Paw-Follow, Sara!
          </p>

          <div className="flex items-center justify-center mb-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/21/21545.png"
              alt="paw icon"
              className="w-50 h-50 md:w-50 md:h-50 lg:w-85 lg:h-85"
            />
          </div>
        </div>
      )}

      <p className="text-lg md:text-lg text-gray-700 mb-1 text-center">
        Click and add your pets here
      </p>

      <button
        onClick={toggleFormVisibility}
        className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          src="https://th.bing.com/th/id/OIP.VnmYBIfBDRmEQFOd5IstkgHaHa?rs=1&pid=ImgDetMain"
          alt="Add Icon"
          className="w-8 h-8"
        />
      </button>

      {isFormVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
          <h1 className="text-xl md:text-xl font-semibold mb-1 text-gray-900">
            Add Pet
          </h1>
          <form
            id="add-pet-form"
            action="/submit-pet"
            method="post"
            encType="multipart/form-data"
          >
            <label htmlFor="pet-type" className="block text-gray-700 mb-1">
              Type of Pet:
            </label>
            <select
              id="pet-type"
              name="pet-type"
              required
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
            </select>

            <label htmlFor="pet-name" className="block text-gray-700 mb-1">
              Pet Name:
            </label>
            <input
              type="text"
              id="pet-name"
              name="pet-name"
              required
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            />

            <label htmlFor="birth-date" className="block text-gray-700 mb-1">
              Date of Birth:
            </label>
            <input
              type="date"
              id="birth-date"
              name="birth-date"
              required
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            />

            <label htmlFor="gender" className="block text-gray-700 mb-1">
              Gender:
            </label>
            <div className="flex gap-2">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="mr-2"
                  required
                />
                <label htmlFor="male" className="text-gray-700">
                  Male
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="mr-2"
                  required
                />
                <label htmlFor="female" className="text-gray-700">
                  Female
                </label>
              </div>
            </div>

            <label htmlFor="color" className="block text-gray-700 mb-1">
              Color:
            </label>
            <input
              type="text"
              id="color"
              name="color"
              required
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            />

            <label htmlFor="breed" className="block text-gray-700 mb-1">
              Breed:
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              required
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            />

            <label htmlFor="size" className="block text-gray-700 mb-1">
              Size:
            </label>
            <div className="flex gap-2">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="small"
                  name="size"
                  value="small"
                  className="mr-2"
                  required
                />
                <label htmlFor="small" className="text-gray-700">
                  Small
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="medium"
                  name="size"
                  value="medium"
                  className="mr-2"
                  required
                />
                <label htmlFor="medium" className="text-gray-700">
                  Medium
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="large"
                  name="size"
                  value="large"
                  className="mr-2"
                  required
                />
                <label htmlFor="large" className="text-gray-700">
                  Large
                </label>
              </div>
            </div>

            {/* Campo de peso añadido */}
            <label htmlFor="weight" className="block text-gray-700 mb-1">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              min="0"
              step="0.1"
              required
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            />

            <label htmlFor="pet-image" className="block text-gray-700 mb-1">
              Pet Image:
            </label>
            <input
              type="file"
              id="pet-image"
              name="pet-image"
              accept="image/*"
              className="w-full p-1 mb-4 border border-gray-300 rounded-md"
            />

            <button
              type="submit"
              className="w-full p-1 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add Pet
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default HomeComponent;