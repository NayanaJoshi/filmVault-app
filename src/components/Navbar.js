// With Responsiveness

import React from "react";
import logo from "../movieLogo.jpg";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row border items-center pl-3 py-4 bg-purple-950 ">
      <div className="flex items-center mb-2 md:mb-0 md:mr-8">
        <img
          className="w-12 h-12 md:w-16 md:h-16 rounded-full"
          src={logo}
          alt="movieLogo"
        ></img>
        <div className="font-bold italic text-3xl text-white ml-2 md:text-4xl">
          FilmVault
        </div>
      </div>

      <div className="flex space-x-4 mx-4  ">
        <Link
          // className="text-bold text-white text-2xl hover:border-b-2 "
          className="font-bold  items-center  text-white p-2 text-xl hover:bg-gray-900/40 hover:rounded-3xl"
          to="/"
        >
          Movies
          <hr></hr>
        </Link>
      </div>
      <div className="flex space-x-4 mx-4 ">
        <Link
          // className="text-bold text-white text-2xl hover:border-b-2 "
          className="font-bold  items-center  text-white p-2 text-xl hover:bg-gray-900/40 hover:rounded-3xl"
          to="/watchlist"
        >
          Watchlist
          <hr></hr>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
