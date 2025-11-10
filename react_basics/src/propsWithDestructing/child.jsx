import React from "react";

// Destructuring props
const Child = ({ name, age, role, onGreet }) => {
  
    
    return (
        <div >
            <h3>{name}</h3>
            <p>Role: {role}</p>
            <p>Age: {age}</p>
            <button onClick={() => onGreet(name)}>👋 Greet</button>
        </div>
    );
};

export default Child;
