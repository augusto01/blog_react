import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>   
      <NavLink to={'/inicio'}>
        <div className='content'>
          <div className='logo'>
            <div className='play'></div> 
          </div>
          <h1 className='header-h1'>Mi blog</h1>
        </div>
      </NavLink> 
    </header>
  )
}
