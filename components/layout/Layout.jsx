import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main className='max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-6 lg:py-12'>{children}</main>
    </>
  )
}

export default Layout