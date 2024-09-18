import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { GiPawHeart } from "react-icons/gi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { TbVaccine } from "react-icons/tb";
import VideoComponent from "./VideoComponent";
import { logoutReq } from "../api/auth";

function Tosee() {
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
            <div className="w-96">
              <VideoComponent
                title="How to train your dog"
                description="Tips to train your dog"
                url="https://www.youtube.com/watch?v=jFMA5ggFsXU"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="How to tame your hamster"
                description="Tips to tame yout hamster"
                url="https://www.youtube.com/watch?v=RiIkUA4J3uA"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="How to train your cat"
                description="Tips to train your cat"
                url="https://www.youtube.com/watch?v=yM3n2mWZqUU"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="Health habits to your dog"
                description="Tips for your dog health"
                url="https://www.youtube.com/watch?v=ilgM5IYjIG8&t=313s"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="Health habits to your hamster"
                description="Tips for your hamster health"
                url="https://www.youtube.com/watch?v=EqTDBc0KX_c"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="Health habits to yout cat"
                description="Tips for your cat health"
                url="https://www.youtube.com/watch?v=lArwj8ELa10"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="Things dogs love"
                description="Learning things that your dog loves"
                url="https://www.youtube.com/watch?v=SgCIZZodox8"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="Things hamsters love"
                description="Learning things that your hamster loves"
                url="https://www.youtube.com/watch?v=714uVOsOm7A"
              />
            </div>
            <div className="w-96">
              <VideoComponent
                title="Things cats love"
                description="Learning things that your cat loves"
                url="https://www.youtube.com/watch?v=E9AMxpAim3k"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Tosee;
