import React from 'react'
import {AiFillGithub,AiFillApi} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg"
function Services() {
    return (
        <div className="mt-[80px]   w-full flex flex-col justify-center items-center gap-[40px] rounded-[20px]" id="services">
            <div className="flex flex-col justify-center items-center w-full">

                <h1> My <span className='text-[#00df9a] font-semibold text-xl'>Services</span></h1>
                <span className="text-[#ffff] text-[19px] text-center"> DIscover the Services that i offer for my clients and companies. </span>
                <span className="mt-[3px] w-[100px] h-[1px] bg-yellow-200" />
            </div>

            <div className="flex flex-row justify-center items-center flex-wrap mt-[30px] gap-[40px] w-[80%] mb-[50px] text-white" >
                <div className="flex flex-col items-center w-[350px]  border- font-serif border p-4 rounded-sm hover:bg-white hover:text-black ">
                    <span className='mt-[10px] text-[rgb(0,255,64)] bg-[#fff] text-[30px]'> <AiFillGithub size={40} /></span>
                    <span className="text-[#00df9a] font-serif mt-2 ">WEB DEVELOPMENT</span>
                    <p className="text-[#ffff] font-bold text-center text-[16px] space-x-2 leading-9 hover:text-black">I will create beautiful Websites and Landing pages for you and your company.You can see my react js projects that i did before.You can contact me through social media.</p>
                </div>

                <div className="flex flex-col items-center w-[350px]   font-serif border p-4  hover:bg-white hover:text-black ">
                    <span className='mt-[10px] text-[rgb(0,255,64)] bg-[#fff] text-[30px]'><AiFillApi size={40} />  </span>
                    <span className="text-[#00df9a] font-serif mt-2">BACKEND DEVELOPMENT</span>
                    <p className="text-[#ffff] font-bold text-center text-[16px] space-x-2 leading-9 hover:text-black">I can write a better backend for your websites with Node js and Express js integrated with MongoDb database. You can see my all backend or Fullstack mern apps that i did before .</p>
                </div>

                <div className="flex flex-col items-center w-[350px]   font-serif border p-4  hover:bg-white hover:text-black ">
                    <span className='mt-[10px] text-[rgb(0,255,64)] bg-[#fff] text-[30px]'><CgWebsite size={40} /> </span>
                    <span className="text-[#00df9a] font-serif mt-2">REACT JS DEVELOPMENT</span>
                    <p className="text-[#ffff] font-bold text-center text-[16px] space-x-2 leading-9 hover:text-black">I will love to create beautiful and responsive websites for you or your organisation with most popular framework i.e.., React js. For freelancing i will create at minimum low price..</p>
                </div>


            </div>


        </div>
    )
}

export default Services