import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { deletePetReq, getPetByIdReq } from "../api/home";

interface Props {
  id: number;
  name: string;
  type: string;
  birth: string;
  gender: string;
  color: string;
  breed: string;
  size: string;
  weight: string;
  imgUrl: string;
}

function MyPetsComponent(props: Props) {
  const { id, name, imgUrl, birth,gender, type, color, breed, size, weight } = props;
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleDelete = async () => {
    try {
      window.location.href='/mypets'
      await deletePetReq(id);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 text-4xl font-semibold">
        <img
          onClick={handleShowDetails}
          className="w-36 h-36 object-cover object-center rounded-full cursor-pointer md:w-48 md:h-48"
          src={imgUrl}
          alt=""
        />
        <h2 className="bg-white p-2 rounded-md">{name}</h2>
      </div>

      {showDetails && (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-20 bg-[#00000057]">
          <div className="bg-white p-4 rounded-md flex flex-col gap-4 shadow-md shadow-black text-4xl w-3/4 md:w-3/5 lg:w-3/6 xl:w-4/12">
            <div className="flex justify-between items-center">
              <p>Details</p>
              <span
                className="bg-black text-white rounded-full cursor-pointer"
                onClick={handleShowDetails}
              >
                <RxCross2 />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Name: </p>
                <p>{name}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Date of birth: </p>
                <p>{birth}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Gender: </p>
                <p>{gender}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Color: </p>
                <p>{color}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Breed: </p>
                <p>{breed}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Size: </p>
                <p>{size}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-semibold">Weight: </p>
                <p>{weight}</p>
              </div>
              <button onClick={handleDelete} className="bg-red-500 py-2 rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyPetsComponent;
