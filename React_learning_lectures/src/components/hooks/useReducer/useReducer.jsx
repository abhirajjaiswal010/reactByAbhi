import { useReducer } from "react";

export const Reducer_Hook = () => {
  const intialValue = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    // if (action.type === "Increment") {
    //   return state + 1;
    // } else if (action.type === "Decrement") {
    //   return state - 1;
    // } else if (action.type === "Reset") {
    //   return 0;
    // } else {
    //   return state;
    // }

    switch (action.type) {
      case "Increment":
        return { ...state,count: state.count + 1 };

      case "Decrement":
        return { ...state,count: state.count - 1 };

      case "Reset":
        return { ...state,count: 0 };

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, intialValue);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">
        useReducer Counter
      </h1>
      <div className="text-6xl font-extrabold mb-6">{count.count}</div>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "Increment" })}
          className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 shadow-md transition duration-200"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "Decrement" })}
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 shadow-md transition duration-200"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "Reset" })}
          className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 shadow-md transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
