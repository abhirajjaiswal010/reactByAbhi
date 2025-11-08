import { useContext } from "react";
import { StoreContext } from "./storeContext";

export const Product = ({ item }) => {
  const{addTobasket}=useContext(StoreContext)
  const handleAdd=()=>{
addTobasket(item);
  }
  return (
    <div className="border rounded-lg shadow-sm p-4 max-w-xs mx-auto text-center border-2 border-gray hover:shadow-md  transition bg-[#FBFBFB] flex flex-col  ">
      <div className="w-full h-48 overflow-hidden rounded-md mb-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
      <h5 className="text-gray-600 text-base mb-6">${item.price}</h5>
      <button className="bg-[#EAE4D5] text-black font-semibold py-2 px-4 rounded-ld shadow-sm hover:bg-[#EFE4D2] hover:scale-105 transform transition duration-200 " onClick={handleAdd}>
        Add To Cart
      </button>
    </div>
  );
};
