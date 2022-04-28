import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"
import React from 'react'

function Layout({children}) {
  return (
    <div className='layout'>
        <Head>
          <title>Bass Head Store</title>
        </Head>
        <header>
          <Navbar/>
        </header>
        <main className="main-container">
           {children}
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Layout