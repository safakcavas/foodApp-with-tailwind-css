import React from "react";
import {  AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-3 "  >
                    {/* Left Side */}
      <div className="flex items-center">
            <div className="cursor-pointer " >
                     <AiOutlineMenu size={30} />
            </div>

             <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 " >
                    Best <span className="font-bold">Eats</span>
             </h1>
            <div className="hidden lg:flex md:flex sm:flex  items-center bg-gray-200 rounded-full 
            p-2 text-[14px] " >
                     <p className="bg-black text-white rounded-full p-2">Delivery</p>
                     <p className="p-2" >PickUp</p>
            </div>
      </div>
      {/* Arama çubuğu */}

        <div className=" bg-gray-200  items-center flex rounded-full px-2
        w-[200px] sm:w-[300px] lg:w-[400px]   " >
            <AiOutlineSearch size={25} />
            <input type="text" placeholder="Search" className="bg-transparent p-2 w-full focus:outline-none "/> 
        </div>

        {/* Kart Butonu */}

        <button className="rounded-full bg-black text-white  items-center px-2  hidden md:flex lg:flex " >
            <BsFillCartFill size={20} className="mr-2" /> Cart
        </button>

      

    </div>
  );
}

export default Navbar;
