"use client";

import React from "react";
import "./page.css";
import Link from "next/link";
import { useRef } from "react";

const Login = () => {
  let emailRef = useRef();
  let passwordRef = useRef();

  async function submitRegisterHandler(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    const response = await fetch("/api/registruj", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //const data = await response.json();

    //console.log(data);
  }

  return (
    <div className="box">
      <form onSubmit={submitRegisterHandler} className="form">
        <h2>REGISTER</h2>
        <div className="inputBox">
          <input ref={emailRef} type="email" required />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input ref={passwordRef} type="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#"></a>
          <Link href="/login">login</Link>
        </div>
        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default Login;
