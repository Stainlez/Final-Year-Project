import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import React from 'react'

const Layout = () => {
  // return (
  //       <>
  //           <Header />
  //           <Outlet />
  //       </>
  // )
  return (
    <div className="site-wrapper">
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
)
}

export default Layout


