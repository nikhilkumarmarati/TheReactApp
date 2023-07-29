import { useState } from "react";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            setEmail(value);
          }

        if (name === "password") {
            setPassword(value);
        }

        };

        const validateEmail = () => {
            const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
            return emailPattern.test(email);
          };

          const handleSubmit = (event) => {
            event.preventDefault();
            
            if(email.trim() !== ""){
                if (!validateEmail()) {
                  alert("Invalid email. Please enter a valid Gmail address.");
                }}

            if((email.trim() !== "") && (password.trim() !== "") ){
            if (validateEmail()) {
                alert("Sign-In Successful !!!");
                window.location.reload();
                 }}   
                      
             else{
                alert("Oops !!! please enter all the credentials to sign ip successfully");
                }
            };


    return ( 
        <div className="signin">
            <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <div className="signbutton">
          <button type="submit">Submit</button>
          </div>
      </form>
        </div>
     );
}
 
export default Signin;