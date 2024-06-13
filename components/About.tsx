'use client'

import Image from 'next/image'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { AboutImgs } from '@/constants'
const About = () => {
  const data = AboutImgs

  const [people, setPeople] = useState(data)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const lastValue = people.length - 1
    if (value < 0) {
      setValue(lastValue)
    }
    if (value > people.length - 1) {
      setValue(0)
    }
  }, [people, value])

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1)
    }, 10000)
    return () => clearInterval(slider)
  }, [value])

  return (
    <section className=' bg-black text-white  md:flex md:gap-4  md:justify-around   pb-[5rem]  transition-micbol h-auto'>
      <div className='section-center  mx-auto lg:w-[30rem] md:pl-3 xl:w-[35rem] sm:w-[25rem]  w-[20rem] h-auto '>
        {people.map((person, personIndex) => {
          const { id, image, title, name } = person
          let position = 'nextSlide'
          if (personIndex === value) {
            position = 'activeSlide'
          }
          if (
            personIndex === value - 1 ||
            (value === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <div key={personIndex}>
              <article className={`      transition-element ${position}`}>
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={400}
                  className='    lg:w-[30rem] xl:w-[35rem] sm:w-[25rem]  w-[20rem]   person-img'
                />
              </article>
            </div>
          )
        })}
        <h4 className='text capitalize text-orange-400 font-bold text-md sm:text-lg '>
          your satisfaction is our goal
        </h4>
        <button
          onClick={() => setValue(value - 1)}
          className='prev  hover:text-orange-400 hover:bg-orange-100 hover:text-xl  '
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => setValue(value + 1)}
          className='next  hover:text-orange-400 hover:bg-orange-100 hover:text-xl'
        >
          <FiChevronRight />
        </button>
      </div>

      <article className='mt-[5rem] lg:mr-[4rem] mx-auto ml-[2rem] transition-micbol '>
        <h1 className='text-4xl spacing font-bold mb-5'>
          About <span className='text-orange-400'>Us</span>
        </h1>
        <div className=''></div>

        <p className='transition-micbol  max-w-[25rem] leading-loose '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          facilis libero debitis sunt! Voluptatem harum porro, ipsam eaque
          voluptate fugit recusandae, repellat ipsum, illo incidunt sint
          ducimus. Veniam maiores magni itaque eaque maxime! Dolores, quo
          voluptatibus! Aspernatur quod in quisquam repellat doloremque? Quia
          nam magnam quidem autem incidunt repudiandae odit!
        </p>
        <button className='btn bg-orange-400 text-white mt-[2rem] transition-micbol hover:bg-black hover:text-orange-400 uppercase border-none  text-lg font-bold  '>
          learn more
        </button>
      </article>
    </section>
  )
}

export default About
