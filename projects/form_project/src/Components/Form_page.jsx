import { useState } from "react";
import "./form.css";

export const Form_page = () => {
  const [first_Name, setFirstName] = useState("");
  const [last_Name, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState(" ");
  const handleInputData = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setlastName(value);
        break;
      case "password":
        setpassword(value);
        break;
      case "email":
        setemail(value);
        break;
      case "number":
        setphoneNo(value);
        break;
    }
  };

  const handleSubmitbtn = (event) => {
    event.preventDefault();
    const formData = {
      first_Name,
      last_Name,
      email,
      phoneNo,
      password,
    };
    console.log(formData);
  };
  return (
    <div className="Form_container">
      <h1>Sign Up Form</h1>
      <h4>Please! Enter your details</h4>

      <form onSubmit={handleSubmitbtn}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          required
          value={first_Name}
          onChange={handleInputData}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          value={last_Name}
          onChange={handleInputData}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleInputData}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleInputData}
        />

        <label>Phone No.</label>
        <input
          type="number"
          name="number"
          required
          value={phoneNo}
          onChange={handleInputData}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
