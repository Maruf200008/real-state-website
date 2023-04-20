import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

const Navbar = () => {
  return (
    <header className=' py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"> <img src={Logo} alt="logo" /></Link>
        <div className='flex items-center gap-6'>
          <Link className=' hover:text-violet-700 transition'>Log in </Link>
          <Link className=' bg-violet-600 py-2 px-5 rounded-md text-white hover:bg-violet-800 transition'>Sign up </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar