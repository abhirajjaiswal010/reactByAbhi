import React from "react";
import users from "./data.json"; // importing JSON file
import Child from "./child.jsx"; // importing Child Component

const Parent = () => {
    const handleGreet = (name) => alert(`Hello, ${name}!`);
  return (
    <div >
      <h2>📋 User List (Props + JSON)</h2>

      <div style={{ display:"flex" , gap: "20px", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Child
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

export default Parent;
