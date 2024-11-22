import React, { useContext, useRef, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiRequest from "../../Lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const {updateFun} = useContext(AuthContext);


  const usernameRef = useRef();
  const passwordRef = useRef();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await apiRequest.post("auth/login", {
        username,
        password,
      });
      
      updateFun({...res.data});

      navigate("/");
    } catch (err) {
      console.log(err)
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            ref={usernameRef}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
           {error && <span>{error}</span>}
          <button>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
          
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
