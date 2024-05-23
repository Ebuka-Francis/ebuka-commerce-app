import React from 'react';
import "./HeaderPage.css";
import Headerimg from './Headerimg';
import Logo from '../UI/Logo';

export default function HeaderPage() {
  return (
  <header>
    <div className="container">
      <div className="container-one">
      <Headerimg images='/headerimg-1.png' />
      <Headerimg images='/headerimg-2.png' />
      </div>
     <Logo />
      <div className="container-one">
      <Headerimg images='/headerimg-3.png' />
      <Headerimg images='/headerimg-4.png' />
      </div>
    </div>
  
  </header>
  )
}
