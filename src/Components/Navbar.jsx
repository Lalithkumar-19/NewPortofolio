import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LALITH DEV.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'><a href='#education'>Education</a></li>
                <li className='p-4'><a href='#skills'>Tech_stack</a></li>
                <li className='p-4'><a href='#services' >Services</a></li>
                <li className='p-4'><a href='#social'>Social_media</a></li>
                <li className='p-4'><a href='#msg_me'>msg_me</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> :
                    <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? `fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-out duration-500` : `fixed left-[-100%]`} >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LALITH DEV.</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><a href='#education'>Education</a></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><a href='#skills'>Tech_stack</a></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><a href='#services' >Services</a></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><a href='#social'>Social_media</a></li>
                    <li className='p-4 border-b border-gray-600' onClick={() => { setNav(false) }}><a href='#msg_me'>msg_me</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar