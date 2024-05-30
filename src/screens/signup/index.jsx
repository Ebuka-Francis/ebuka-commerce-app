import Link from 'next/link';
import Input from '@/components/UI/input';
import React from 'react';
import './signup.css';
import Logo from '@/components/UI/logo/Logo';

export default function SignupPage() {
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
    </div>
  )
}
