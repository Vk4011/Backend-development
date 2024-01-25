import React, { useState } from "react";
import "./Signup.css";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState();
    const [password,setPassword] =useState();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4080/register',{name,email,password})
        .then(result => {
          console.log(result)
          navigate('/login')
        })
        .catch(err=>console.log(err))
    } 

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder required 
            onChange={(e)=>setName(e.target.value)}
            />
            <span>Firstname</span>
          </label>
          
        </div>
        <label>
          <input className="input" type="email" placeholder required 
          onChange={(e)=>setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        <label>
          <input className="input" type="password" placeholder required 
          onChange={(e)=>setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
    
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <Link to="/login">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signup;
