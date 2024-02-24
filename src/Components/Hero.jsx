import React from 'react'
import { ReactTyped } from "react-typed";
import Pf from "../asserts/myprofile.jpg";
function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[100px] w-full h-screen mx-auto text-center flex flex-col'>
                <p className='text-[#00df9a] font-bold p-1'>Growing with Passion in tech</p>
                <img className='w-32 h-32 rounded-full mx-auto mt-2' src={Pf} alt='my pic' />
                <h1 className='md:text-4xl sm:text-6xl font-bold md:py-6 text-4xl mt-1 '> 
                <ReactTyped  strings={["Front end","MERN stack","Node js"]} typeSpeed={150} backSpeed={140} backDelay={6} cursorChar="." loop/>
                 Developer</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold mt-3'> Hard working and Passionated in</p>
                    <ReactTyped
                        className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 mt-2'
                        strings={['learn to Coding', "Implement the code", "Building new things"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />

                </div>
                <p className='md:text-xl text-xl font-bold text-gray-500 '>Hire me to get work with you and experience my professional working style.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black'><a href='#msg_me' >Get me a coffe</a></button>
            </div>

        </div>
    )
}

export default Hero