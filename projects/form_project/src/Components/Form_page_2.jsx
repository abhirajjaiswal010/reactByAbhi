import { useState } from "react";
import "./form.css";

export const Form_page_2 = () => {
  const [form_data, setForm_data] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const handleInputData = (e) => {
    const { name, value } = e.target;

    setForm_data((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitbtn = (event) => {
    event.preventDefault();
    console.log(form_data);
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
          value={form_data.firstName}
          onChange={handleInputData}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          value={form_data.lastName}
          onChange={handleInputData}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={form_data.password}
          onChange={handleInputData}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={form_data.email}
          onChange={handleInputData}
        />

        <label>Phone No.</label>
        <input
          type="number"
          name="phoneNo"
          required
          value={form_data.phoneNo}
          onChange={handleInputData}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
