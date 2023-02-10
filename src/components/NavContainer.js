import React from 'react'
import {Link } from 'react-router-dom'
import './navbar.css'
const NavContainer = () => {
  return (
    <div>
      <nav>
      <nav class="fill">
    <ul>
      <li><a ><Link to = {'/'}>Register</Link></a></li>
      <li><a ><Link to = {'/app/private'}>Home</Link></a></li>
      <li><a ><Link to = {'/login'}>Login</Link></a></li>
      <li><a >More</a></li>
      <li><a href="#">Nice staff</a></li>
    </ul>
  </nav>
</nav>
    </div>
  )
}

export default NavContainer
