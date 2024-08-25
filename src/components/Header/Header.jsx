import React,{useState} from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-[15%] p-9 flex justify-between items-center bg-customPurple">
      <div className="w-[10%] h-full flex">
        <img
          src="/assets/zuapp_logo.jpeg"
          alt="logo"
          className="w-full h-full object-cover border-2 border-white"
        />
        
        <p className="font-customPacifico text-xl ml-2 text-white">BLOBIT</p>
        <div className="w-[30%] h-full -translate-y-3 translate-x-1">
          <img src="/assets/star.png" alt="star" className="w-full h-full object-contain"/>
        </div>
      </div>
      <div className="w-[40%] h-full flex pl-5 pr-5 justify-center">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  isActive 
                    ? "text-customText font-customKanitRegular text-2xl cursor-pointer" 
                    : "hover:underline hover:text-customText font-customKanitRegular text-2xl cursor-pointer text-white"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/create/id" 
                className={({ isActive }) =>
                  isActive 
                    ? "text-customText font-customKanitRegular text-2xl cursor-pointer" 
                    : "hover:underline hover:text-customText font-customKanitRegular text-2xl cursor-pointer text-white"
                }
              >
                Create
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[20%] h-full flex rounded-2xl bg-customSearch">
        <div className="w-[12%] h-full rounded-2xl p-1 mr-1 bg-customSearch">
          <img
            src="/assets/search.png"
            alt="search"
            className="w-full h-full object-contain bg-customSearch"
          />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-[62%] h-full rounded-2xl outline-none"
        />
        <div className="w-[30%] h-full bg-black text-white rounded-tr-2xl rounded-br-2xl flex justify-center items-center cursor-pointer">
          Search
        </div>
      </div>
    </div>
  );
};

export default Header;
