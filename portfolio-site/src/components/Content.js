import React from 'react'
import Introduction from './Introduction'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Contact from './Contact'

function Content() {
  return (
    <div className='page-content'>
      <Introduction />
      <AboutMe />
      <Experience />
      <Contact />
    </div>
  )
}

export default Content