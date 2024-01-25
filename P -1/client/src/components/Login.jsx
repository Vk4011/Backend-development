import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('http://localhost:4080/login', { email, password })
      .then(result => {
        console.log(result);
          if(result.data.status === "Success"){
          navigate('/main');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <center>
        <div className="login wrap">
          <div className="h1">Login</div>
          <form onSubmit={handleSubmit}>
            <center>
              <input
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="Email"
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="btn" type="submit">Submit</button>
              <br />
              <br />
    
              <Link to="/register" className="signup">signup</Link>
            </center>
          </form>
        </div>
      </center>
    </div>
  );
}

export default Login;
