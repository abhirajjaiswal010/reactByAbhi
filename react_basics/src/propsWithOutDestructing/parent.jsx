import React from "react";
import users1 from "./data.json"; // importing JSON file
 // importing Child Component
import Child1 from "./child.jsx";

const Parent1 = () => {
    const handleGreet = (name) => alert(`Hello, ${name}!`);
  return (
    <div >
      <h2>📋 User List (Props + JSON)</h2>

      <div style={{ display:"flex" , gap: "20px", flexWrap: "wrap" }}>
        {users1.map((user) => (
          <Child1
            key={user.id}
            name={user.name}
            age={user.age}
            role={user.role}
            onGreet={handleGreet}
          />
        ))}
      </div>
    </div>
  );
};

export default Parent1;
