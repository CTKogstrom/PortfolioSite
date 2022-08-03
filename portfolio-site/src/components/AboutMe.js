import React from 'react'
import SectionHeader from './SectionHeader'
import TechsList from './TechsList'

function AboutMe() {
  const recentTechs = [
    'JavaScript',
    'TypeScript',
    'React (v18)',
    'Hasura',
    'Python',
    'Django'
  ]

  return (
    <div id='about' className='page-section'>
      <SectionHeader title='About Me' number='01' />
      <p className='text'>
        Hello! Thanks for taking an interest in me and my work. I began my software development
        journey back in my final year of high school. The limitless potential that this skillset offered
        piqued my interest so in college, even though at the time I was studying to attend to 
        medical school, I decided to major in Computer Science. It was at the end of my third year,
        at the start of the Covid-19 pandemic, that I decided to make the switch to being a full-time
        software developer. <br/><br/>Since then, I've worked as a founding developer at Wyd?, a web platform 
        that lets users discover things to do and places to eat around them.
        <br/><br/>
        When I'm not sitting behind a desk you'll likely find me playing soccer or volunteering my time coaching at the local rowing club.
      </p>
      <p className='text'>
        
      </p>
      <p className='text'>Here are a few technologies I've been working with recently:</p>
      <TechsList techs={recentTechs} />
      <br/><br/>
      
    </div>
  )
}

export default AboutMe