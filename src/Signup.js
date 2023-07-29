import React, { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
        setName(value);
    }

    if (name === "email") {
      setEmail(value);
    }

    if (name === "phonenumber") {
        setPhonenumber(value);
    }

    if (name === "password") {
      setPassword(value);
    }

    if (name === "confirmPassword") {
      setConfirmpassword(value);
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const validatePasswords = () => {
    return password === confirmpassword;
  };

  const validatePhonenumber = () => {
    const phonePattern = /^\d{10}$/; // Regular expression to match exactly 10 digits
    return phonePattern.test(phonenumber);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if(email.trim() !== ""){
    if (!validateEmail()) {
      alert("Invalid email. Please enter a valid Gmail address.");
    }}

    if (password.trim() !== "") { // Check if the password field is not empty before validating
      if (!validatePasswords()) {
        alert("Password and confirm password do not match.");
      }
    }

    if(phonenumber.trim() !== ""){
    if (!validatePhonenumber()){
        alert("Entered phone number is wrong .Please enter correct phone number")
    }}
    
    if((name.trim() !=="") && (email.trim() !== "") && (phonenumber.trim() !== "")  && (password.trim() !== "") && (confirmpassword.trim() !== "")){
    if (validateEmail() && validatePasswords() && validatePhonenumber()) {
        alert("Sign up Successful !!!");
        window.location.reload();
      }}   
      
    else{
        alert("Oops !!! please enter all the credentials to sign up successfully");
      }
  };


  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <label>Phone Number:</label>
        <input type="text" name="phonenumber" onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" onChange={handleChange} />
        <div className="signbutton">
          <button type="submit">Submit</button>
          </div>
      </form>
    </div>
  );
};

export default Signup;
