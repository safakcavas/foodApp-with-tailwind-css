import React from "react";

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 " >
    {/* Headline Cards */}
        <div className="rounded-xl relative ">
            {/* Owerlay */}
             <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4" >Sun's Out, BOGO's OUT</p>
                <p className="px-2" >Through 7/24</p>
                <button className="px-2 border-white bg-white mx-2 absolute bottom-4 text-black rounded-xl  font-bold " >Order Now</button>
            </div >
            <img
            className="max-h-[160px] md:max-[200px] w-full object-cover rounded-xl :"
             src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" 
             alt="/" />
        </div>
        {/* ************************************************/}
        {/* Headline Cards */}
        <div className="rounded-xl relative ">
            {/* Owerlay */}
             <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4" >New Restaurants</p>
                <p className="px-2" >Added Daily</p>
                <button className="px-2 border-white bg-white mx-2 absolute bottom-4 text-black rounded-xl font-bold " >Order Now</button>
            </div >
            <img
            className="max-h-[160px] md:max-[200px] w-full object-cover rounded-xl :"
             src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" 
             alt="/" />
        </div>
        {/* ************************************************/}
        {/* Headline Cards */}
        <div className="rounded-xl relative ">
            {/* Owerlay */}
             <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4" >We Deliver Desserts Too</p>
                <p className="px-2" >Tasty Treats</p>
                <button className="px-2 border-white bg-white mx-2 absolute bottom-4 text-black rounded-xl font-bold " >Order Now</button>
            </div >
            <img
            className="max-h-[160px] md:max-[200px] w-full object-cover rounded-xl :"
             src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
             alt="/" />
        </div>
        {/* ************************************************/}
    </div>
  );
}

export default HeadlineCards;
