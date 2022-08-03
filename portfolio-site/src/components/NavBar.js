import React from 'react'
import '../App.css';
import resume from '../assets/Jul2022FullStackResume.pdf'
function NavBar() {
  return (
    <header className='navbar-container'>
      <div className='navbar-buttons-container'>
        <a className='header-button' href='#about'>01. About</a>
        <a className='header-button' href='#experience'>02. Experience</a>
        <a className='header-button' href='#contact'>03. Contact</a>
        <a className='resume-button' href={resume} target='_blank'>Resume</a>
      </div>
    </header>
  )
}

export default NavBar