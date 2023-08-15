import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return(
    <div className="sticky top-0  w-full flex justify-between items-center px-8 py-2 shadow-md">
      <h1 className="font-bold text-gray-800 tracking-wide">MERN APP</h1>
      <div className="flex sm:gap-3">
        <Link to="/" className="p-1 sm:p-2 rounded hover:bg-slate-100">
          User list
        </Link>
        <Link to="/create-user" className="p-1 sm:p-2 rounded hover:bg-slate-100">
          Create user
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
