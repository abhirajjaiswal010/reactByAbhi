import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    // setCount(count + 1);
    setCount(prev=>(prev+1))
  };

  const handleDiff = () => {
    // setCount(count - 1);
    setCount(prev=>(prev-1))
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold mb-8 text-white">{count}</h1>

      <div className="flex gap-4">
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-[#ccc5b9] text-black font-bold  rounded-lg shadow hover:bg-[#ccc5b9]/60"
        >
          Increase
        </button>

        <button
          onClick={handleDiff}
          className="px-6 py-2 bg-[#ccc5b9] text-black font-bold  rounded-lg shadow hover:bg-[#ccc5b9]/60"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-[#ccc5b9] text-black font-bold  rounded-lg shadow hover:bg-[#ccc5b9]/60"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
