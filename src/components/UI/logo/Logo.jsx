import React from 'react';
import './Logo.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
       <div className="logo">
       <h2><Link href='/'>Topibro</Link></h2>
        {/* <p>Fashion</p> */}
      </div>
    </div>
  )
}
