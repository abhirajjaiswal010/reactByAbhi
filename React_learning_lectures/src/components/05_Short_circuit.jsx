import { useState } from "react";
import "../components/css/shortCircuit.css";

export const Short_circuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleRemoveUser = () => {
    setUser("");
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        {isLoggedIn ? "User Logged In" : "User Not Logged In"}
      </h1>
      <h3 className="subtitle">
        {isLoggedIn && user ? `Hi ${user}!` : "Please log in"}
      </h3>
      <div className="button-group">
        <button className="btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login
        </button>
        <button
          className="btn"
          onClick={() => {
            setUser("Abhiraj");
            setIsLoggedIn(true);
          }}
        >
          Set User
        </button>
        <button className="btn" onClick={handleRemoveUser}>
          Remove User
        </button>
      </div>
    </div>
  );
};
