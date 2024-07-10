import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-600 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-teal-400 hover:text-teal-100 hover:text-[26px] text-2xl mx-5 transition-all hover:shadow-sm hover:shadow-emerald-700 hover:rounded-3xl p-2.5 hover:bg-slate-950 cursor-pointer">
            <Link to="/" className="">Taskify</Link>
          </div>
          <div className="flex md:mx-2 text-teal-400 bg-slate-800 rounded-xl cursor-pointer">
            <NavLink to="/" className={(e)=>{return e.isActive ? "NavLinkActive rounded-l-xl" : "NavLink rounded-l-xl";}}>
              <li className="md:mx-5 mx-4 list-none">
                Home
              </li>
            </NavLink>
            <NavLink to="/yourtasks" className={(e)=>{return e.isActive ? "NavLinkActive rounded-r-xl" : "NavLink rounded-r-xl";}}>
              <li className="md:mx-5 mx-3 list-none">Your Tasks</li>
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
