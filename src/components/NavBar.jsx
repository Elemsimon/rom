import React from 'react'
import Logo from '/assets/logo.svg'

const navBar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt="logo" />
    </nav>
  )
}

export default navBar