// src/components/Login.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../App";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "waseem" && password === "waseem@123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input className="logininput" type="text" placeholder="USERNAME" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="logininput" type="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;