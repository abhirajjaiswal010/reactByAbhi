import { useContext } from "react";
import { StoreContext } from "./storeContext";

export const BasketProduct = ({ item }) => {
  const { addTobasket, removeFromBasket } = useContext(StoreContext);

  const handleIncrease = () => {
    addTobasket(item);
  };

  const handleDecrease = () => {
    removeFromBasket(item);
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded-md shadow-sm bg-white">
      <img
        src={item.img}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Qty: {item.quantity}</p>
        <p className="font-semibold text-gray-700">
          Total: ${item.price * item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
          onClick={handleDecrease}
        >
          –
        </button>
        <span className="px-2">{item.quantity}</span>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};
