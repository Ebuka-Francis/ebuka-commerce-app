'use client';
import React from 'react';
import "./signup.css";
import { useState } from 'react';
import { auth } from '@/services/firebase.js';
import Input from '@/components/UI/input';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';




export default function EmailPasswordSignup() {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const router = useRouter();


  const handleSignin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
       const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredentials.user)
      toast.success("Successfully loggedin!");
      router.push('/')
    } catch (err) {
      setError(err.message)
      console.log(err)
    }

  };

  return (
    <form onSubmit={handleSignin} >
    {/* <Input
      label="Username"
      type="text"
      htmlfor="username"
      inputClass="text-input"
      value={null}
    /> */}
    <Input
      label="Email"
      type="email"
      htmlfor="useremail"
      inputClass="text-input"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    {/* <div className="passwords"> */}
      <Input
        label="Password"
        type="password"
        value={password}
        htmlfor="userpassword"
        inputClass="text-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Input
        label="Confirm Password"
        type="password"
        htmlfor="confrimpassword"
        inputClass="confirm-pass"
      /> */}
    {/* </div> */}
    <Input type="submit" value="Signin" inputClass="submit" />
    {error && <p style={{color: '#fff'}}>{error}</p> }
  </form>
  )
}
