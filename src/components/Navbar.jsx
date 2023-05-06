import React,{useState} from "react";
import {  AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import {MdFavorite, MdHelp} from "react-icons/md";
import {FaWallet} from "react-icons/fa";
function Navbar() {
const [nav,setNav]=useState(false);

  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-3 "  >
                    {/* Left Side */}
      <div  className="flex items-center">
            <div className="cursor-pointer " >
                     <AiOutlineMenu onClick={()=>setNav(!nav)}  size={30} />
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

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className="bg-black/80  fixed w-full h-screen z-10 top-0 left-0 " ></div>: ""}
        

        {/* Side Drawer Menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 '}>
            <AiOutlineClose 
            onClick={()=>setNav(!nav) }
            size={27} className="absolute right-4 top-4 cursor-pointer " />
            <h2 className="text-2xl p-4" >Best <span className="font-bold">Eats</span></h2>
        

        <nav>
            <ul className="flex flex-col p-4 text-gray-800  " >
                <li className="text-md py-4 flex cursor-pointer " > <MdFavorite      size={25}  className="mr-4"/> Favorites </li>
                <li className="text-md py-4 flex  cursor-pointer" > <TbTruckDelivery size={25}  className="mr-4"/> Wallet </li>
                <li className="text-md py-4 flex  cursor-pointer" > <FaWallet size={25}  className="mr-4"/> Help </li>
                <li className="text-md py-4 flex  cursor-pointer" > <MdHelp size={25}  className="mr-4"/> Promotions </li>
                <li className="text-md py-4 flex  cursor-pointer" > <AiFillTag size={25}  className="mr-4"/> Best Ones </li>
                <li className="text-md py-4 flex  cursor-pointer" > <BsFillCartFill size={25}  className="mr-4"/> Invite Friends </li>
                <li className="text-md py-4 flex cursor-pointer " > <TbTruckDelivery size={25}  className="mr-4"/> Orders </li>
            </ul>
        </nav>
    </div>
    </div>
  );
}

export default Navbar;
