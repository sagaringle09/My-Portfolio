import React from "react";
import code from "../assets/code2.png";

const Works = () => {
  return (
    <div name="project" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">Project</p>
          <p className="py-6 text-2xl">Check out some of my most recent project</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Covid-Awareness-Website</span>
              <p className="text-center">A Covid Awareness website application built with HTML, CSS, and JAVASCRIP.</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Cinemate</span>
              <p className="text-center">A Cinemate web application built with React JS and Tailwind CSS.</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">Write Node</span>
              <p className="text-center">A Write Node web application built with React JS and Tailwind CSS, and Firebase.</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">My-Portfolio</span>
              <p className="text-center">A Portfolio web application built with React JS and Tailwind CSS, Firebase.</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">TaskMate</span>
              <p className="text-center">A Taskmate web application built with React JS and Tailwind CSS.</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${code})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">E-Commerce</span>
              <p className="text-center">A E-Commerce (Books Store) web application built with React JS and Tailwind CSS.</p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
