import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full gap-y-6 text-center md:text-left'>
            <h1 className='text-5xl text-gray-200 font-bold underline mb-4'>About</h1>
            <p className='text-white'>rel="noreferrer" can prevent certain types of security vulnerabilities, such as reverse tabnabbing. Without it, if you use target="_blank" to open a 
                link in a new tab or window, the destination page could potentially gain access to the original window object via window.opener. This could allow the 
                destination page to navigate the original page to a different URL. By using rel="noreferrer", you prevent this from happening because it also implies noopener.
            </p>
            <p className='text-white'>rel="noreferrer" can prevent certain types of security vulnerabilities, such as reverse tabnabbing. Without it, if you use target="_blank" to open a 
                link in a new tab or window, the destination page could potentially gain access to the original window object via window.opener. This could allow the 
                destination page to navigate the original page to a different URL. By using rel="noreferrer", you prevent this from happening because it also implies noopener.
            </p>
        </div>
    </div>
  )
}

export default About
