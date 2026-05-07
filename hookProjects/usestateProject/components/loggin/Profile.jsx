import React, { useState } from "react";
import Button from "./Button";

const Profile = () => {
  const [login, setLogin] = useState("logged out");

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-[#403d39] p-8 rounded-2xl shadow-lg text-center space-y-6 w-[350px]">
        
        <h1 className="text-3xl font-bold text-[#fffcf2]">
          User Profile
        </h1>

        <p
          className={`text-xl font-semibold ${
            login === "logged in"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {login}
        </p>

        <Button
          setLogin={setLogin}
          login={login}
        />
      </div>
    </div>
  );
};

export default Profile;