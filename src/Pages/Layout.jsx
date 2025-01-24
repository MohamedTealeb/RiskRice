import React from 'react'
import Navbar from '../Compnent/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Compnent/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
