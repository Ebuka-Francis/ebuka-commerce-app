"use client";
import Link from "next/link";
import Input from "@/components/UI/input";
import { useEffect, useState } from "react";
import "./signup.css";
import Logo from "@/components/UI/logo/Logo";
import firebase from "firebase";
// import { useRouter } from 'next/router';
import "firebase/auth";
import toast from "react-hot-toast";

import initFirebase from "@/services/firebase";
import { redirect } from "next/navigation";

  initFirebase();

  if (typeof window !== "undefined") {
const provider = new firebase.auth.GoogleAuthProvider();
  }

export default function SignupPage() {
  // const Router = useRouter();

  const [authorizing, setAuthorizing] = useState(false);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out!!!");
        toast.success("successfully logged out");
      })
      .catch((error) => {
        console.error("error signing out", error);
        toast.error("error signing out");
      });
    redirect("/");
  };

  const handleGoogleSigup = async () => {
    setAuthorizing(true);
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log("result", result);

      const { user, credentials } = result;

      console.log({ user, credentials });
      toast.success("Successfully loggedin!");
    } catch (error) {
      console.log("error signing in", error);
    }
    setAuthorizing(false);
  };  

  return (
    <div className="signup-style">
      <Logo />
      <h1>Sign up</h1>
      <form>
        <Input
          label="Username"
          type="text"
          htmlfor="username"
          inputClass="text-input"
        />
        <Input
          label="Email"
          type="email"
          htmlfor="useremail"
          inputClass="text-input"
        />
        <div className="passwords">
          <Input
            label="Password"
            type="password"
            htmlfor="userpassword"
            inputClass="confirm-pass"
          />
          <Input
            label="Confirm Password"
            type="password"
            htmlfor="confrimpassword"
            inputClass="confirm-pass"
          />
        </div>
        <Input type="submit" value="Signin" inputClass="submit" />
      </form>
      <div className="form-border">
        <div className="bord"></div>
        <Link href="/login">Login</Link>
        <div className="bord"></div>
      </div>
      <button
        style={{
          background: "blue",
          color: "white",
          padding: "13px",
          borderRadius: "7px",
          border: "none",
          cursor: "pointer",
        }}
        loading={authorizing}
        onClick={handleGoogleSigup}
      >
        Signup with google
      </button>

      <button
        style={{
          background: "blue",
          color: "white",
          padding: "13px",
          borderRadius: "7px",
          border: "none",
          cursor: "pointer",
        }}
        loading={authorizing}
        onClick={handleLogout}
      >
        Signout with google
      </button>
    </div>
  );
}
