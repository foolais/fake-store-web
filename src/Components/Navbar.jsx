import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { FaSearch, FaRegUser } from "react-icons/fa";

const Navbar = ({ active }) => {
  return (
    <div className="w-full text-lg flex items-center justify-between py-2 px-6">
      <div className="text-3xl">
        <Title />
      </div>
      <div className="flex items-center gap-4 font-semibold">
        <Link to="/">
          <p className={`${active === "Home" ? "text-primaryColor" : null}`}>
            Home
          </p>
        </Link>
        <span className="text-ternaryColor">/</span>
        <Link to="/store">
          <p className={`${active === "Store" ? "text-primaryColor" : null} `}>
            Store
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer">
          <FaSearch />
        </div>
        <div className="cursor-pointer w-8 h-8 bg-primaryColor flex items-center justify-center rounded-full">
          <FaRegUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
