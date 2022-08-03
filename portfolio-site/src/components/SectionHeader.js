import React from 'react'

function SectionHeader({ title, number }) {
  return (
    <div className='section-header'>
      <h3 className='section-number'>{number}.</h3>
      <h3 className='section-title'>{title}</h3>
    </div>
  )
}

export default SectionHeader