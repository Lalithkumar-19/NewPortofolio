import React from 'react';
import { useEffect } from 'react';
import { MdOutlineArrowUpward } from "react-icons/md";
import Aos from 'aos';
import "aos/dist/aos.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Education() {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 200,
        });
        Aos.refresh();
    }, [])
    return (
        <div className='max-w-[1240px] flex flex-col px-3 mx-auto text-white' id='education'>
            <AnchorLink className='fixed bottom-4 right-7 text-[white] cursor-pointer' href='#navbar'><MdOutlineArrowUpward/></AnchorLink>
            <h2 className='font-bold underline underline-offset-4 text-center text-5xl py-4 mx-auto '>Education</h2>


            <div className='flex flex-col justify-start items-start mx-auto border-b w-full  p-5 ease-in-out ' data-aos="slide-left" >
                <img className='rounded-full w-24 h-24 mx-auto my-10 ' src='https://media.licdn.com/dms/image/D5603AQFoqILbwYYBiA/profile-displayphoto-shrink_400_400/0/1684944441636?e=2147483647&v=beta&t=QBsaxtnrlFCG-mvFeC3XOCrLe9x5_4zR0Swiq6_YiV8' alt='clg logo' />
                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>College :</span>RGUKT ONGOLE IIIT
                </h1>
                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>Course Duration :</span>march-2022 to march-2026
                </h1>
                <h1 className='font-mono text-pretty '>
                    <span className='text-[rgb(60,243,185)] me-10'>Course :</span> BATCHELOR OF TECHNOLOGY (B.TECH)
                    <p className='p-5'>Now iam currently pursuing my second year of B.Tech degree in ELECTRONICS AND COMMUNICATIONS field at RGUKT ONGOLE IIIT itself And also highly enthuastied to be asoftware dev.  </p>
                </h1>
                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>Overall Grade (%) :</span> 83
                </h1>
            </div>



            <div className='flex flex-col justify-start items-start mx-auto border-b w-full  p-5 ease-in-out' data-aos="slide-right">
                <img className='rounded-full w-24 h-24  my-10  mx-auto' src='https://media.licdn.com/dms/image/D5603AQFoqILbwYYBiA/profile-displayphoto-shrink_400_400/0/1684944441636?e=2147483647&v=beta&t=QBsaxtnrlFCG-mvFeC3XOCrLe9x5_4zR0Swiq6_YiV8' alt='clg logo' />

                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>College :</span>RGUKT ONGOLE IIIT
                </h1>
                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>Course Duration :</span>march-2020 to march-2022
                </h1>
                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>Course :</span>PRE UNIVERSITY COURSE
                    <p className='p-5'>I studied my 2 years of Pre university course (PUC) in RGUKT IIIT ONGOLE ANDHRA PRADESH.
                    </p>
                </h1>
                <h1 className='font-mono text-pretty'>
                    <span className='text-[rgb(60,243,185)] me-10'>Overall Grade (%) :</span> 92
                </h1>
            </div>


        </div>
    )
}

export default Education