import React from 'react'

function TechsList({techs}) {
  return (
    <ul className='tech-list'>
      {
        techs.map(tech => (
          <li>
            {tech}
          </li>
        ))
      }
    </ul>
  )
}

export default TechsList