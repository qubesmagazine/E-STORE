import React from 'react'
import  Navbar  from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Root = () => {
  return (
    <>
    <Navbar/>
    <div className='footer'>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Root