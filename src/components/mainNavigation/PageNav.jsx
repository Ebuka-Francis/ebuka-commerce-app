import Link from 'next/link';
import React from 'react';
import './MainNavigation.css';


export default function PageNav() {
  return (
    <div className="nav-one">
        <Link href='/'> Home </Link>
        <Link href='/product'> Product </Link>
      </div>
  )
}
