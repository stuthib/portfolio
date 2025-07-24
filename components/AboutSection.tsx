import React from "react"
import { MdZoomInMap } from "react-icons/md";

const skills = [
  'Javascript (ES6+)',
  'HTML',
  '(S)CSS'
]

const libraries = [
  'ReactJS',
  'Typescript',
  'Tailwind CSS',
  'GraphQL',
  'NestJS',
  'Apollo/URQL',
  'Jest',
  'React Testing Library',
  'Vite',
  'Webpack'
]

const tools = [
  'Storybook',
  'Chromatic',
  'Figma',
  'Git'
]

const AboutSection = ({ setShowPaintings }: { setShowPaintings: (val: boolean) => void }) => {
  return (
    <section id="about">
      <div className="my-12 md:pt-16 md:pb-32">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 flex flex-col gap-4">
            <span className="font-semibold">
              Hi, my name is Stuthi, and I am a{" "}
              passionate frontend software engineer.
              I find it deeply satisfying to build high quality web applications 
              that people can actually use.
            </span>
            <span>
              I live in Toronto and love the city life. 
              I enjoy biking along the beautiful Lake Ontario, unwind with jigsaw puzzles and {' '}
              <span onClick={() => setShowPaintings(true)} className="inline-flex items-center gap-1 text-teal-500 cursor-pointer">
                painting <MdZoomInMap />
              </span>. I also volunteer with local communities to promote waste management and eco-friendly living 🙂
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center md:w-1/2 md:text-left">
            <h1 className="text-l font-semibold">Programming Languages</h1>
            <div className="flex flex-wrap flex-row gap-4 justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="border border-gray-500 px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                )
              })}
            </div>
            <h1 className="text-l font-semibold">Libraries & Frameworks</h1>
            <div className="flex flex-wrap flex-row gap-4 justify-center z-10 md:justify-start">
              {libraries.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="border border-gray-500 px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                )
              })}
            </div>
            <h1 className="text-l font-semibold">Tools & Platforms</h1>
            <div className="flex flex-wrap flex-row gap-4 justify-center z-10 md:justify-start">
              {tools.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="border border-gray-500 px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
