'use client'
import Link from 'next/link';
import Input from '@/components/UI/input';
import { useState } from 'react';
import './signup.css';
import Logo from '@/components/UI/logo/Logo';
import Router from 'next/router';
import firebase from 'firebase';
import 'firebase/auth';

import initFirebase from '@/services/firebase';

initFirebase();


const provider = new firebase.auth.GoogleAuthProvider(); 


export default function SignupPage() {
  const [authorizing, setAuthorizing] = useState(false);

  const handleGoogleSigup = async () => {
    setAuthorizing(true);
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log('result', result);

      const { user, credentials } = result;

       console.log({user, credentials});

       if(!user) {
        throw new Error("There wa an issue authorizing")
       }
       Router.push("/");
    }catch(error) {
      console.log(error);
    }
    setAuthorizing(false);
  };

  return (
    <div className='signup-style'>
        <Logo />
        <h1>Sign up</h1>
    <form>
      <Input label='Username' type='text' htmlfor='username' inputClass='text-input'  />
      <Input label='Email' type='email' htmlfor='useremail' inputClass='text-input' />
      <div className='passwords'>
      <Input label='Password' type='password' htmlfor='userpassword' inputClass='confirm-pass' />
      <Input label='Confirm Password' type='password' htmlfor='confrimpassword' inputClass='confirm-pass' />
      </div>
      <Input type='submit' value='Signin' inputClass='submit' />

    </form>
    <div className='form-border'>
      <div className="bord"></div>
        <Link href='/login'>Login</Link>
      <div className="bord"></div>

    </div>
    <button style={{background: 'blue', color: 'white', padding: '13px', borderRadius: '7px', border: 'none', cursor: 'pointer'}} loading={authorizing} onClick={handleGoogleSigup} >Signup with google</button>
    </div>
  )
}
