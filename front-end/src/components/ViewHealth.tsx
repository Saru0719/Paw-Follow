import React, { useEffect, useState } from "react";
import HealthCard from "./HealthCard";
import { getAllHealthReq } from "../api/healt";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { GiPawHeart } from "react-icons/gi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { TbVaccine } from "react-icons/tb";
import { logoutReq } from "../api/auth";
import { MdAddCircle } from "react-icons/md";

interface DataHealth {
  id: number;
  pet_name: string;
  date_h: string;
  descriptions: string;
  idOwner: number;
}
function ViewHealth() {
  const [health, setHealth] = useState<DataHealth[]>([]);
  useEffect(() => {
    const id = parseInt(localStorage.getItem("idOwner"));
    const fetch = async () => {
      try {
        const res = await getAllHealthReq(id);
        setHealth(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

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
      <main className="min-h-screen w-full bg-white">
        <nav className="fixed bottom-0 w-full text-7xl flex justify-between border-t border-black px-2 py-4 bg-white md:hidden">
          <a href="/mypets">
            <span>
              <GiPawHeart />
            </span>
          </a>
          <a href="/viewHealthPage">
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

        <section className="min-h-screen w-full flex flex-col items-center md:bg-cover">
          <div className="h-1/4 w-full flex items-center justify-center md:hidden border border-black sticky top-0 bg-white">
            <h1
              className="text-6xl font-semibold bg-white p-2 rounded-md"
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
                <span className="text-2xl">About Us</span>
              </div>
              <div
                onClick={logout}
                className="flex flex-col items-center cursor-pointer"
              >
                <AiOutlineLogout />
                <span className="text-2xl">Log Out</span>
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
            <a href="/viewHealthPage">
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

          <div className="w-full p-4 flex flex-wrap gap-4 justify-center">
            <section className="w-full flex gap-2 flex-wrap">
              {health.map((health) => (
                <HealthCard
                  key={health.id}
                  id={health.id}
                  pet_name={health.pet_name}
                  date={health.date_h}
                  description={health.descriptions}
                  idOwner={health.idOwner}
                />
              ))}
            </section>
          </div>
        </section>

        <a href="/health">
          <button className="w-full justify-center text-6xl fixed bottom-32 md:bottom-10 flex flex-col items-center transition-all duration-300 ease-in hover:scale-105">
            <MdAddCircle />
            <span className="text-xl">Add Health</span>
          </button>
        </a>
      </main>
    </>
  );
}

export default ViewHealth;
