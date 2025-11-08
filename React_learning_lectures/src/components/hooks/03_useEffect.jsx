import { useEffect, useState } from "react";
import "../css/useEffect.css";

export const UseEffect_challenge = () => {
  const [count, setCount] = useState(0);
  const [Inputname, setInputName] = useState("");
  const [time, settime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update title and log username
  useEffect(() => {
    console.log(Inputname);
    document.title = `count-(${count})`;
  }, [Inputname, count]);

  return (
    <div className="main">
      <h1>Use_Effect Challenge</h1>
      <p>Time: {time}</p>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>User Name: {Inputname}</h3>
      <input
        type="text"
        value={Inputname}
        onChange={(e) => setInputName(e.target.value)}
      />
    </div>
  );
};
