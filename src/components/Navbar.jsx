import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-600 rounded-lg">
        <div className="flex justify-between items-center">
          <div className=" text-teal-400 hover:text-teal-100 hover:text-[26px] text-2xl mx-5 transition-all hover:shadow-sm hover:shadow-emerald-700 hover:rounded-3xl p-2.5 hover:bg-slate-950 cursor-pointer">
            <span className="">Taskify</span>
          </div>
          <div className="flex md:mx-2 text-teal-400 bg-slate-800 rounded-xl cursor-pointer">
            <Link to="/" className="py-5 hover:bg-slate-900  hover:text-teal-100 rounded-l-xl  transition duration-400">
              <li className="md:mx-5 mx-4 list-none">
                Home
              </li>
            </Link>
            <Link to="/yourtasks"  className="py-5 hover:bg-slate-900 hover:text-teal-100 rounded-r-xl transition duration-400">
              <li className="md:mx-5 mx-3 list-none">Your Tasks</li>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
