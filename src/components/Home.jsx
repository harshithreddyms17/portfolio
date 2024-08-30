import React from 'react'
import image from "../assets/Tom-Cruise-2013.webp"
import { MdArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-gray-950 to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row md:space-y-0 space-y-14'>
        
        <div className='flex flex-col justify-center md:ml-6 items-center md:items-start'>
            <h3 className='text-4xl sm:text-5xl font-bold text-white text-center md:text-left'>I'm a Computer Science Engineer</h3>
            <p className='text-gray-400 py-4 max-w-md text-center md:text-left'>
                I have 2 years of experience building and designing software. 
                Currently, I love to work on web applications
                using technologies like React, Tailwind, NodeJS, Express, and MongoDB.
            </p>
            <div className='flex justify-center md:justify-start'>
                <button className='group text-white w-fit px-6 py-2 my-1 flex items-center rounded-md bg-gradient-to-r from-orange-400 to-red-600'>
                    Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdArrowRight size={30}/>
                    </span>
                </button>
            </div>
        </div>

        <div className='flex justify-center md:mr-6'>
            <img src={image} alt="my profile" className='rounded-2xl w-36 md:w-72'/>
        </div>

      </div>
    </div>
  )
}

export default Home
