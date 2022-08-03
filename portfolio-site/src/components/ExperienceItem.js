import React from 'react'
import ToolChip from './ToolChip'

function ExperienceItem(props) {
  const {
    company,
    role,
    startDate,
    endDate,
    tools,
    description
  } = props

  return (
    <div id={`${company}-experience`} className='experience-container'>
      <h3 className='experience-company'>
        {company}
      </h3>
      <h4 className='experience-role'>
        {role}
      </h4>
      <p className='text'>
        {startDate} - {endDate}
      </p>
      <div style={{'borderRadius': '4px', }}className='tools-section'>
        {
        tools.map(tool => (
          <ToolChip name={tool} />
        ))
      }
      </div>
      
      <p className='text'>
        {description}
      </p>
    </div>
  )
}

export default ExperienceItem