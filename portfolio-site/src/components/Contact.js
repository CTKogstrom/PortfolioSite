import React from 'react'
import SectionHeader from './SectionHeader'

function Contact() {
  return (
    <div id='contact'className='page-section'>
      <SectionHeader title='Get In Touch' number='03' />
      <p className='text'>
        I'm currently looking for new opportunities. Send me a message if 
        you'd like to know more about me or just say hi.
      </p>
      <br/>
      <a href='mailto:carl.kogstrom@gmail.com' className='resume-button'>
        Say Hello
      </a>
    </div>
  )
}

export default Contact