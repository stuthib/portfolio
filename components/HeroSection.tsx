"use client" // this is a client component
import React from "react"
import { Link, Button } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { MdArrowOutward } from "react-icons/md"

const HeroSection = () => {
  const onConnectClick = () => {
    document.location = 'mailto:stuthibalaji@gmail.com'
  }

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-40 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <img
            src="/bio_img.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Stuthi!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            with a focus on building clean and performant web applications.
          </p>
          <div className="inline-flex gap-4 md:flex-row">
            <Button
              to=''
              onClick={onConnectClick}
              className="text-neutral-100 p-2 bg-teal-600 rounded shadow hover:bg-teal-500"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Let's connect!
            </Button>
            <Button
              to=''
              onClick={() => window.open('/Stuthi_Resume_July_2025.pdf')}
              className="flex items-center gap-1 text-neutral-100 p-2 bg-teal-600 rounded shadow hover:bg-teal-500"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Resume
              <MdArrowOutward />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
