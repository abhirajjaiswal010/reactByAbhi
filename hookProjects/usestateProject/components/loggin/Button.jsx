import React from "react";

const Button = ({ setLogin, login }) => {
  const handleLogin = () => {
    if (login === "logged out") {
      setLogin("logged in");
    } else {
      setLogin("logged out");
    }
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="px-6 py-2 w-[200px] bg-[#ccc5b9] text-black font-bold rounded-lg shadow hover:bg-[#ccc5b9]/60 "
      >
        {login === "logged out" ? "log in" : "log out"}
      </button>
    </div>
  );
};

export default Button;