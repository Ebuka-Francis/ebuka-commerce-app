"use client";
import Link from "next/link";
import { useState } from "react";
import "./signup.css";
import Logo from "@/components/UI/logo/Logo";
import toast from "react-hot-toast";
import useAuth from "@/auth";

import { useRouter } from "next/navigation";
import EmailPasswordSignup from "./email";
import { auth, googleProvider } from "@/services/firebase.js";
import { signInWithPopup, signOut } from "firebase/auth";






export default function SignupPage() {
  const user = useAuth();
  const Router = useRouter();

  const [authorizing, setAuthorizing] = useState(false);

  const handleLogout = async () => {
     await signOut(auth)
        .then(() => {
          console.log("signed out!!!");
          toast.success("successfully logged out");
        })
        .catch((error) => {
          console.error("error signing out", error);
          toast.error("error signing out");
        });
    Router.push('/');
  };

  const handleGoogleSigup = async () => {
    setAuthorizing(true);
    let result = null;
    try {
      // if(typeof window !== 'undefined') {
         result = await signInWithPopup(auth, googleProvider);
      // }
      console.log("result", result);

      const { user, credentials } = result;

      console.log({ user, credentials });
      toast.success("Successfully loggedin!");
      Router.push('/');
    } catch (error) {
      toast.error("error signing in", error);
      console.log("error signing in", error);
    }
    setAuthorizing(false);
  };

 

  return (
    <div className="signup-style">
      {/* <Logo /> */}
      <h1>Sign up</h1>
      <EmailPasswordSignup />
      <div className="form-border">
        <div className="bord"></div>
        <Link href="/login">Login</Link>
        <div className="bord"></div>
      </div>
      {user ? (
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
      ) : (
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
      )}
    </div>
  );
}
