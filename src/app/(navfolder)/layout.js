import Footer from '@/components/Footer/Footer'
import MainNavigation from '@/components/mainNavigation/MainNavigation'
import React from 'react';
import { AuthProvider } from '@/auths';

export default function Layout({children}) {
  return (
    <>
    <AuthProvider>
    <MainNavigation />
    {children}
    <Footer />
    </AuthProvider>
    </>
  )
}
