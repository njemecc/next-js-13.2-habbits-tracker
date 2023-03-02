"use client";

import React from "react";
import "./page.css";
import Link from "next/link";
const Login = () => {
  return (
    <div className="box">
      <div className="form">
        <h2>LOGIN</h2>
        <div className="inputBox">
          <input type="text" required />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#"></a>
          <Link href="/register">register</Link>
        </div>
        <input type="submit" value="Login" />
      </div>
    </div>
  );
};

export default Login;
