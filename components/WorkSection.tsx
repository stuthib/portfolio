"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import Image from "next/image";


type WorkProps = {
  name: string,
  title: string,
  link?: string,
  from: string,
  to: string,
  descriptions: Array<string>,
  logo?: string,
  location: string
}

const works: Array<WorkProps> = [
  {
    name: 'Cadstrom.io',
    title: 'Senior Software Engineer',
    link: 'https://www.cadstrom.io/',
    from: 'April 2025',
    to: 'June 2025',
    descriptions: [
      'Led a proof-of-concept (PoC) to migrate REST APIs to GraphQL using NestJS, demonstrating improved query efficiency and flexibility for frontend clients.',
      'Architected and initialized a new React application to serve as the client interface using GraphQL APIs, establishing the foundation for a scalable frontend platform.'
    ],
    logo: 'cadstrom',
    location: 'Montreal, QC'
  },
  {
    name: 'First Resonance',
    title: 'Senior Software Engineer, Frontend',
    link: 'https://www.firstresonance.io/',
    from: 'March 2021',
    to: 'March 2025',
    descriptions: [
      'As the second frontend engineer on the product team, I primarily develop ION, an operating system for the manufacturing industry.',
      'Constructed features for managing vast amounts of data through virtualized tables, infinitescroll, and pagination resulting in a significant boost in user experience and customer satisfaction.',
      'Implemented, maintained, and enhanced design system components.',
      'Enhanced the applications’ performance by more than 50% by implementing client side caching using Apollo and URQL.'
    ],
    logo: 'FR',
    location: 'Los Angeles, CA'
  },
  {
    name: 'Drivewealth LLC',
    title: 'Senior Software Engineer',
    link: 'https://www.drivewealth.com/',
    from: 'June 2020',
    to: 'December 2020',
    descriptions: [
      'Led the development and re-architecture of the wealth management dashboard application, skillfully building reusable components using React, React Hooks, and Redux.',
      'Implemented features such as search, sort, filtering, pagination etc. on different dashboard views containing tabular data along with exporting the data in CSV format.'
    ],
    logo: 'DW',
    location: 'Chatam, NJ'
  },
  {
    name: 'Freelance',
    title: 'Software Engineer',
    from: 'November 2018',
    to: 'June 2020',
    descriptions: [
      'Designed and developed custom websites for boutique and medium sized suites.',
      'Worked on building a music dashboard application using spotify APIs, to enable multiple users to connect to a host.'
    ],
    logo: 'stuthi',
    location: 'NYC, NY'
  },
  {
    name: 'Balbix Inc',
    title: 'Software Engineer',
    link: 'https://www.balbix.com/',
    from: 'November 2017',
    to: 'November 2018',
    descriptions: ['Responsible for architecting and developing user intensive dashboard features using ReactJS, Material UI, Victory Chart, Lodash, Javascript.'],
    logo: 'balbix',
    location: 'San Jose, CA'
  },
  {
    name: 'eGain Solutions',
    title: 'Solutions Engineer',
    link: 'https://www.egain.com/',
    from: 'March 2016',
    to: 'November 2017',
    descriptions: ['Built customized web packages for small and medium scale suites.'],
    logo: 'egain',
    location: 'Sunnyvale, CA'
  },
]

function Work({ work }: { work: WorkProps }) {
  return (
    <VerticalTimeline layout="1-column-left" lineColor='gray'>
      <VerticalTimelineElement
        contentStyle={{ boxShadow: 'none' }}
        contentArrowStyle={{ display: 'none' }}
        date={`${work.from} - ${work.to}`}
        iconStyle={{backgroundColor: 'white' }}
        icon={
            work.logo === 'stuthi'
            ? <span className='flex justify-around h-10 items-center text-teal-500 font-bold text-2xl'>S</span> 
            :
              <Image alt="" width={40} height={40} className={`w-fit rounded-full ${work.logo === 'egain' ? 'mt-4' : ''}`} src={`/work_logos/${work.logo}.png`} />
        }
      >
        <div className='flex flex-col gap-2'>
          <div className="flex items-center justify-between">
            <span>{work.name}</span>
            <span className="text-sm text-gray-500">{work.location}</span>
          </div>
          <span className='font-bold text-teal-500'>{work.title}</span>
          {
            <ul className={`${work.descriptions?.length > 1 ? 'list-disc' : ''} px-4`}>
              {
                work.descriptions?.map((desc, idx) => {
                  return (
                    <li key={idx}>{desc}</li>
                  )
                })
              }
            </ul>
          }
        </div>
        
      </VerticalTimelineElement>
    </VerticalTimeline>

  )
}

const ProjectsSection = () => {
  return (
    <section id="work">
      <h1 className="my-10 text-center font-bold text-4xl">
        Work
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      {
        works.map((work, idx) => (
          <Work key={idx} work={work} />
      ))}
    </section>
  )
}

export default ProjectsSection
