import Footer from '@/components/Footer/Footer'
import MainNavigation from '@/components/mainNavigation/MainNavigation'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <MainNavigation />
    {children}
    <Footer />
    </>
  )
}
