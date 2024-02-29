import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
    return (
        <div className='flex flex-col mt-[50px] ml-[20px] text-yellow-400 border-t border-b h-[600px] font-mono rounded-sm mb-[10px]'  id="social">

            <h1 className='text-[#00df9a] shadow-white text-[30px] font-bold font-serif mx-auto mt-5'> Contact Me</h1>
            <p className='flex flex-col w-full items-center bg-transparent text-white text-center text-6xl justify-center text-[25px]'>    <br />Here the ways to contact me personally from this portofolio through social media as mentioned below

            </p>
            <div className='flex flex-col mt-7 w-full text-xl gap-3 font-bold items-center justify-center font-serif'>
                MY  INSTAGRAM :  <span className='text-white'> <a className='text-white' target="blank" href='https://www.instagram.com/lalithkumar_005/'><FaInstagram /></a></span>
                MY LINKERDIN: <span className='text-white'><a className='text-white' target="blank" href='https://www.linkedin.com/in/lalithkumar005/'><FaLinkedin /></a></span>
                MY GITHUB  :<span className='text-white'><a className='text-white' target="blank" href='https://github.com/Lalithkumar-19'><FaGithubSquare /></a></span>
                MY TWITTER: <span className='text-white'><a className='text-white' target="blank" href='https://github.com/Lalithkumar-19'><FaSquareXTwitter /></a></span>
                My E-mail :<a href='mailto:"lalithdev123@gmail.com"' ><span> lalithkumar19180@gmail.com</span></a>

            </div>

        </div>)
}

export default Contact