import { useState } from "react";

export const Login_page = () => {
  const[form_data,setForm_data]=useState({
    username:"",
    password:""
  })

  const handleInputData=(e)=>{
    const {name,value}=e.target
    setForm_data((prev)=>({...prev,[name]:value}))
  }

  const handleSubmitbtn=(event)=>{
    event.preventDefault()
    console.log(form_data);
    
  }
  return (
    <div className="Form_container">
      <h1>Login Form</h1>
      <h4>Please! Enter your details</h4>

      <form onSubmit={handleSubmitbtn}>
        <label>Username Or Email</label>
        <input
          type="text"
          name="username"
          required
          value={form_data.username}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
