'use client';
import Link from 'next/link';
import React from 'react';
import './MainNavigation.css';
import { usePathname } from 'next/navigation';


export default function PageNav() {
  const pathname = usePathname();
  return (
    <div className="nav-one">
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'> Home </Link>
        <Link className={`link ${pathname === '/product-page' ? 'active' : ''}`} href='/product-page'> Product </Link>
      </div>
  )
}
