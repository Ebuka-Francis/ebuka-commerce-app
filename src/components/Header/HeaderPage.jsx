import React from 'react';
import "./HeaderPage.css";
import Headerimg from './Headerimg';
import Logo from '../UI/logo/Logo';

export default function HeaderPage() {
  return (
  <header>
    <div className="container">
      <div className="container-one">
      <Headerimg images='/headerimg-1.png' />
      <Headerimg images='/headerimg-2.png' />
      </div>
      <div>
      <p>welcome to</p>
     <Logo />
      </div>
      <div className="container-one">
      <Headerimg images='/headerimg-3.png' />
      <Headerimg images='/headerimg-4.png' />
      </div>
    </div>
  
  </header>
  )
}
