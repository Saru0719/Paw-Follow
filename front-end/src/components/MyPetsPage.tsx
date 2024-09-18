import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { GiPawHeart } from "react-icons/gi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { TbVaccine } from "react-icons/tb";
import PetsList from "./PetsList";
import { logoutReq } from "../api/auth";
import { MdAddCircle } from "react-icons/md";

function MyPetsPage() {
  const logout = async () => {
    // Aquí va la lógica para desloguear al usuario
    try {
      window.location.href = "/";
      await logoutReq();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main className="h-screen w-full bg-white">
        <nav className="fixed bottom-0 w-full text-7xl flex justify-between border-t border-black px-2 py-4 bg-white md:hidden">
          <a href="/mypets">
            <span>
              <GiPawHeart />
            </span>
          </a>
          <a href="/health">
            <span>
              <TbVaccine />
            </span>
          </a>
          <a href="/tosee">
            <span>
              <HiMiniVideoCamera />
            </span>
          </a>
          <a href="#">
            <span onClick={logout}>
              <AiOutlineLogout />
            </span>
          </a>
        </nav>

        <section
          className="h-screen w-full flex flex-col items-center md:bg-cover"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1214700549/es/vector/pata-imprimir-gato-perro-rastro-de-la-mascota-del-cachorro-estilo-plano-vector-de-stock.jpg?s=612x612&w=0&k=20&c=nKqKMaelM5EE7J2PuFrkMQy3r088BRQNMEQ9YCegP-4=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-1/4 w-full flex items-start justify-center md:hidden">
            <h1
              className="text-6xl font-semibold p-2 rounded-md w-full text-center bg-white border-b border-black"
              style={{ fontFamily: "Kavoon", fontStyle: "cursive" }}
            >
              Paw-Follow
            </h1>
          </div>

          <header className="w-full px-4 py-8 md:flex justify-between bg-fuchsia-50 border-b border-black hidden">
            <div className="w-1/3"></div>
            <div className="flex justify-center items-center w-1/3">
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl font-semibold"
                style={{ fontFamily: "Kavoon", fontStyle: "cursive" }}
              >
                Paw-Follow
              </h1>
            </div>
            <div className="hidden md:flex items-center text-4xl justify-end gap-4 w-1/3">
              <div className="flex flex-col items-center cursor-pointer">
                <BiSolidMessageRoundedError />
              </div>
              <div
                onClick={logout}
                className="flex flex-col items-center cursor-pointer"
              >
                <AiOutlineLogout />
              </div>
            </div>
          </header>

          <nav className="w-full md:flex justify-center items-center text-7xl gap-20 hidden">
            <a href="/mypets">
              <span className="bg-white rounded-md flex flex-col items-center cursor-pointer">
                <GiPawHeart />
                <span className="text-2xl font-semibold">My Pets</span>
              </span>
            </a>
            <a href="/health">
              <span className="bg-white rounded-md flex flex-col items-center cursor-pointer">
                <TbVaccine />
                <span className="text-2xl font-semibold">Health</span>
              </span>
            </a>
            <a href="/tosee">
              <span className="bg-white rounded-md flex flex-col items-center cursor-pointer">
                <HiMiniVideoCamera />
                <span className="text-2xl font-semibold">To see</span>
              </span>
            </a>
          </nav>

          <div className="w-full flex flex-wrap items-start justify-center flex-1 h-full p-4 gap-6 md:py-14">
            <PetsList />
          </div>
        </section>

        <a href="/home">
          <button className="w-full justify-center text-6xl fixed bottom-10 flex flex-col items-center transition-all duration-300 ease-in hover:scale-105">
            <MdAddCircle />
            <span className="text-xl">Add Pet</span>
          </button>
        </a>
      </main>
    </>
  );
}

export default MyPetsPage;
