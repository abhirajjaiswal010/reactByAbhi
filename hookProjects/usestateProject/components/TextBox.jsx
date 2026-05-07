import  { useState } from "react";

export const TextBox = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-white mb-6">
        {text || "Start typing..."}
      </h1>

      <input
        type="text"
        className="border border-gray-400 px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        onInput={handleChange}
        placeholder="Type here..."
      />
    </div>
  );
};
