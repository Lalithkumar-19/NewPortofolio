import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white' id='navbar'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LALITH DEV.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:underline underline-offset-4 '><AnchorLink href='#education'>Education</AnchorLink></li>
                <li className='p-4  hover:underline underline-offset-4 '><AnchorLink href='#skills'>Tech_stack</AnchorLink></li>
                <li className='p-4  hover:underline underline-offset-4 '><AnchorLink href='#services' >Services</AnchorLink></li>
                <li className='p-4  hover:underline underline-offset-4 '><AnchorLink href='#social'>Social_media</AnchorLink></li>
                <li className='p-4  hover:underline underline-offset-4 '><AnchorLink href='#msg_me'>msg_me</AnchorLink></li>
                <li className='p-4 hover:underline underline-offset-4 '><AnchorLink href='#portofolio'>portofolio</AnchorLink></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> :
                    <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? `fixed left-0 top-0 w-[50%]  h-full border-r-gray-900 bg-[#000300] ease-out duration-500` : `fixed left-[-100%]`} >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LALITH DEV.</h1>
                <ul className='p-4 uppercase'>
                     <div onClick={handleNav} className='block md:hidden sm:block'>
                {nav ? <AiOutlineClose size={20} /> :
                    <AiOutlineMenu size={20} />}
                    
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><AnchorLink href='#education'>Education</AnchorLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><AnchorLink href='#skills'>Tech_stack</AnchorLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><AnchorLink href='#services' >Services</AnchorLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><AnchorLink href='#social'>Social_media</AnchorLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><AnchorLink href='#msg_me'>msg_me</AnchorLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><AnchorLink href='#portofolio'>portofolio</AnchorLink></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar
