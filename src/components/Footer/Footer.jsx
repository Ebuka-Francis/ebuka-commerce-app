import React from 'react';
import './Footer.css';
import Logo from '../UI/logo/Logo';
import PageNav from '../mainNavigation/PageNav';

export default function Footer() {
  return (
  <footer>
    <div className='footer-container' >
        <Logo />
        <PageNav />
    </div>

  </footer>
  )
}
