import React from 'react';
import Link from 'next/link';
import Logo from '@/components/UI/logo/Logo';
import Input from '@/components/UI/input';
import './login.css';

export default function LoginPage() {
  return (
    <div className='signup-style'>
        <Logo />
        <h1>Log in</h1>
    <form>
      <Input label='Username' type='text' htmlfor='username' inputClass='text-input'  />
      <Input label='Email' type='email' htmlfor='useremail' inputClass='text-input' />
      <Input label='Password' type='password' htmlfor='userpassword' inputClass='text-input' />
      <Input type='submit' value='Login' inputClass='submit' />
    </form>
    <div className='form-border'>
      <div className="bord"></div>
        <Link href='/signup'>Signup</Link>
      <div className="bord"></div>
    </div>
    </div>
  )
}
