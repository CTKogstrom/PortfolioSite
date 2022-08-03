import React from 'react'
import SectionHeader from './SectionHeader'
import ExperienceItem from './ExperienceItem'

const wyd_description = (
  <p className='text'>
    Wyd began as a seed of an idea that my childhood friend, Connor Gange, started nurturing during our early years in college. 
    The original idea was to create an online marketplace that individuals could share and teach their hobbies with others in their area.
    In the beginning I was just a sounding board, a way for him to test out new ideas. Over the next two years 
    the idea was fleshed out through trial and more importantly error. Eventually, the idea morphed into a broader service 
    for people to find things to do and places to eat in their area, that could eventually include the original purpose.
    So, in the summer of 2021, while I was going into my final semester of undergrad, we decided to bring development of 
    the application fully in house and build it ourselves.
    <br/><br/>
    The biggest challenge for the first few months was choosing a tech stack that would allow us to scale, had 
    enough community support to allow us to get our questions answered and was friendly enough that Connor could 
    learn with zero prior coding experience. We ultimately decided to go with React to build the frontend and Django for the backend. 
    In these first months, progress was slow because I was still in my last semester of university and Connor 
    was building his JavaScript acumen.
    <br/><br/>
    After I graduated, and Connor was well on his way to being a true JavaScript developer, we began working in earnest. 
    We learned countless lessons building Wyd from scratch but one of the first was how costly rewriting code can be for a project.
    Whether it was finding a new package that would better fit our use case or discovering a new organizational structure for the application, 
    it felt like we were rewriting the entire app once a month. This pushed us to be more methodical in our development process, 
    utilizing Jira to track issues and schedule work on different features. On top of that, we began to implement code reviews to 
    improve documentation and iron out our coding conventions.
    <br/><br/>
    One of the largest challenges I faced was putting together a dataset of points of interest across Florida. I gathered data from 
    a variety of sources across the internet from public datasets documenting restaurant inspections to land registration datasets. Because
    the data would be searched through geographically, each point of interest needed to have a longitude and latitude associated with it.
    OpenStreetMaps API was a surprisingly robust resource and a bit of manual data entry to fill in some holes accounted for 99% of the locations found.
    
  </p>
)

const miller_lab_description = (
  <p className='text'>
    During my final year at University of Florida, I got a chance to work with a team of undergrad and graduate 
    students building an app suite that aides orthopedic surgeons understanding of shoulder pathology.
    I collaborated with a PhD mentor on convolutional neural networks analyzing x-ray images of the shoulder. <br/><br/>
    Our task was to perform image segmentation to identify the clavicle, humerus and scapula from a labeled dataset
    of over 3000 shoulder x-rays. After many tweaks our model was able to perform with 95% accuracy. <br/><br/>
    Using the segmented x-ray images, our next task was to merge CT scans (three dimensional scans) of the humerus,
    clavicle and scapula with the two dimensional x-ray images and map them to the same coordinate space. The result of 
    this task created a three dimensional composite model with the shapes from the CT scans placed relative to eachother 
    according to the x-ray. 
  </p>
)

const experiences = [
  {
    company: 'Wyd?',
    role: 'Founding Full-stack Developer',
    startDate: 'December 2021',
    endDate: 'August 2022',
    tools: ['AWS', 'Hasura', 'GraphQL', 'React', 'TypeScript', 'Django', 'Redux', 'PostgreSQL'],
    description: wyd_description
  },
  {
    company: 'Miller Biomechanics Lab at UF',
    role: 'Python Lab Developer',
    startDate: 'May 2021',
    endDate: 'December 2021',
    tools: ['Python', 'OpenCV', 'PyTorch', 'Pandas', 'Numpy'],
    description: miller_lab_description
  }
]




function Experience() {
  return (
    <div id='experience' className='page-section'>
      <SectionHeader title='Experience' number='02' />
      <div className='experiences-container'>
        {
          experiences.map(experience => (
            <ExperienceItem {...experience} />
          ))
        }

      </div>
    </div>
  )
}

export default Experience