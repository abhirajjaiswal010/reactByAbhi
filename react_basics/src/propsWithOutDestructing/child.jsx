import React from "react";

// Destructuring props
const Child1 = (props) => {
    console.log(props);
    
    return (
        <div >
            <h3>{props.name}</h3>
            <p>Role: {props.role}</p>
            <p>Age: {props.age}</p>
            <button onClick={() => props.onGreet(props.name)}>👋 Greet</button>
        </div>
    );
};

export default Child1;
