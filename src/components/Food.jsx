import React,{useState} from "react";
import { data } from "../data/data";

function Food() {

const [foods,Setfoods] = React.useState(data);


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12" >
      <h1 className="text-orange-700 font-bold text-4xl text-center " >
        Top Rated Menu Items</h1>

      {/*Filter Rows*/}
      <div className="flex flex-col lg:flex-row justify-between "  >
        {/*Filter Types*/}
             <div>
                <p className="font-bold text-gray-700" >Filter Type </p>
                 <div className="flex justify-between flex-wrap   " >
                    <button className="border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white    " > All</button>
                    <button className="border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white"> Burgers </button>
                    <button className="border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white   "> Pizza </button>
                    <button className="border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white   "> Salad </button>
                    <button className="border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white   " > All </button>
                 </div>
            </div>
            {/*Filter Prices*/}

         <div>
            <p className="font-bold text-gray-700" >Filter  Price</p>
            <div className=" flex justify-between max-w-[390px] w-full  ">
                <button className=" border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white   "> $ </button>
                <button className=" border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white   "> $$ </button>
                <button className=" border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white    "> $$$ </button>
                <button className=" border-orange-600 text-orange-600 hover:bg-orange-600 m-1 hover:text-white   "> $$$$ </button>
            </div>
        </div>
      </div>
        {/*Display Foods*/}
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-6 pt-4" >
        {foods.map((item,index) => (

            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-400  " >
                <img src={item.image} 
                     alt={item.name} 
                     className="w-full h-[200px] object-cover rounded-t-lg "  />

                <div className="flex justify-between px-2 py-4" >
                    <p className=""  >{item.name}</p>
                    <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full"  >{item.price}</span>
                    </p>
                </div>
            </div>
       


        ))}
        </div>
    <div>

    </div>




    </div>
  );
}

export default Food;
