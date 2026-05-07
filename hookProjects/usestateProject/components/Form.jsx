import React, { useState } from "react";

export const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [head, setHead] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email);
    setHead({ fname, lname, email });
    setFname("");
    setLname("");
    setEmail("");
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          onInput={(e) => setFname(e.target.value)}
          value={fname}
          className="border p-2 mb-2 block"
        />

        <input
          type="text"
          placeholder="Last name"
          onInput={(e) => setLname(e.target.value)}
          value={lname}
          className="border p-2 mb-2 block"
        />

        <input
          type="email"
          placeholder="Email"
          onInput={(e) => setEmail(e.target.value)}
          value={email}
          className="border p-2 mb-2 block"
        />

        <button className="border px-3 py-1 mb-3">submit</button>
      </form>

      <div>
        <p>
          Full Name: {head.fname} {head.lname}
        </p>
        <p>Email: {head.email}</p>
      </div>
    </div>
  );
};
