import React from 'react'
import { Link } from 'gatsby'

const Layout = ({children}) => {
  return (
    <>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    </header>

    <main>
      {children}
    </main>
    </>
  )
}

export default Layout
