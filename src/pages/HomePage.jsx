import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='min-h-[100vh]'>
      <Outlet/></div>
      <Footer/>
    </div>
  )
}

export default HomePage
