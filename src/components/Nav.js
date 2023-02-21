import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Nav = () => {
  return (
    <nav className='nav'>
        <div className='logo-con'>
            <img src={logo} alt='logo' className='logo'/>
        </div>
        <ul className='menu-con'>
            <li>
                <Link to='/' className='link'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='link'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav