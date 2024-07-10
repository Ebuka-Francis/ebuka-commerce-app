'use client';
import React from "react";
import Link from "next/link";
import Logo from "@/components/UI/logo/Logo";
import Input from "@/components/UI/input";
import "./login.css";
import { useState } from "react";
import { auth } from "@/services/firebase.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth,
        email,
        password
      );
      setUser(userCredential.user);
      toast.success('successfully logged in')
      router.push('/')
    } catch (err) {
      setError(err.message);
      toast.error(err.message)
    }
  };

  return (
    <div className="signup-style">
      <Logo />
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <Input
          label="Email"
          type="email"
          htmlfor="useremail"
          inputClass="text-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          htmlfor="userpassword"
          inputClass="text-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input type="submit" value="Login" inputClass="submit" />
     {error &&  <p style={{color: '#fff'}} >{error}</p> }  
      </form>
      <div className="form-border">
        <div className="bord"></div>
        <Link href="/signup">Signup</Link>
        <div className="bord"></div>
      </div>
    </div>
  );
}
