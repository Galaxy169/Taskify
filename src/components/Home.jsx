import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex justify-center text-white bg-slate-600 m-6 p-6 rounded-3xl">
          <h1>Home Page (Under Construction)</h1>
        </div>

        <div className="flex justify-center text-white bg-slate-600 m-6 p-6 rounded-3xl">
          <Link to="/yourtasks" className="text-teal-400 hover:text-green-500 hover:underline hover:text-[17px] transition-all duration-700 ease-out">
            Create Your To Do List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
