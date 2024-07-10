'use client';
import Link from 'next/link';
import React from 'react';
import './MainNavigation.css';
import { usePathname } from 'next/navigation';
import useAuth from '@/auth';




export default function PageNav() {
  const pathname = usePathname();
  const user = useAuth();
  return (
    <div className="nav-one">
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'> Home </Link>
        {user ? 
        <Link className={`link ${pathname === '/product-page' ? 'active' : ''}`} href='/product-page'> Product </Link>
        :
        null
      }
      </div>
  )
}
