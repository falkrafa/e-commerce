import React, { Children } from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <header>
        <NavBar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout