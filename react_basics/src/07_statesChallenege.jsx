import React, { useState } from "react";

function UserList() {
  // Step 1: Create state with some JSON data
  const [users, setUsers] = useState([
    { id: 1, name: "Abhi", age: 21 },
    { id: 2, name: "Riya", age: 20 },
    { id: 3, name: "Arjun", age: 22 },
  ]);

  return (
    <div>
      <h2>User List</h2>

      {/* Step 2: Use map() to loop through JSON array */}
      {users.map((user,index) => (
        <div key={index}>
          <p>
            👤 {user.name} — Age: {user.age}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
