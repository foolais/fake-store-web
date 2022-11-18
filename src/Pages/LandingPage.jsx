import React from "react";
import { Navbar } from "../Components";
import Lottie from "react-lottie-player";
import storeJson from "../Assets/online-shopping.json";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen bg-slate-100">
        <Navbar active="Home" />
        <div className="w-full flex justify-center items-center">
          <div className="w-3/5">
            <div className="w-3/5 h-full mx-auto ">
              <h1 className="text-6xl font-bold text-primaryColor">
                NEW <br /> ARRIVALS
              </h1>
              <p className="my-6 text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                consequatur rerum minima atque sed, inventore assumenda
                voluptatibus magni, doloremque numquam asperiores exercitationem
                laboriosam aspernatur alias?
              </p>
              <div
                onClick={() => navigate("/store")}
                className="bg-primaryColor w-max p-1 cursor-pointer hover:bg-slate-100 group"
              >
                <div className="bg-primaryColor w-max px-6 py-2 font-semibold text-lg border-4 border-slate-100 group-hover:bg-secondaryColor group-hover:border-secondaryColor ">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 ">
            <Lottie
              loop
              animationData={storeJson}
              play
              style={{ width: 500, height: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
