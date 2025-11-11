import { useState } from "react";

export const State01=() =>{
  let count = 0; // normal variable, not state

  const increase = () => {
    count = count + 1;
    console.log("Count:", count); // it changes internally
  };

  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}


export const State02=() =>{
  const [count, setCount] =useState(0);
  return<>
  <h2>Count:{count}</h2>
  <button onClick={()=>setCount(count+1)}>click me </button></> // state variable        
}


