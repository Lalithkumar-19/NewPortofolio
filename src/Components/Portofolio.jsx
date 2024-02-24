import React from 'react'

function Portofolio() {
    return (
        <div className='flex flex-col w-full text-[white] p-4'>
            <h2 className='text-[blue] font-mono text-3xl text-center w-full mt-2 mb-2 underline underline-offset-4 '>Projects</h2>
            <div className='flex w-full flex-wrap  items-center justify-center gap-7 mt-3'>
                <div className='flex w-[350px] flex-col hover:border-[#00df9a] p-3 rounded-md cursor-pointer'>
                    <img src='https://media.istockphoto.com/id/1355815985/photo/modern-gaming-pc-on-desk-display-mockup-for-game-promotion-modern-gaming-case-with-water.webp?s=170667a&w=0&k=20&c=t3FLxs_S3kjROy3sltqA9uN-6yybjV9afof5oUHI1_8=' alt='portofolio' className='w-full h-[200px] rounded-lg' />
                    <div className='flex flex-col w-full'>
                        <p className='p-2 mt-2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laborum, deleniti officiis illo consequatur in maxime. Temporibus, blanditiis culpa voluptates officiis inventore, voluptas doloremque, accusantium sit omnis hic voluptatem cumque?
                        </p>
                        <div className='w-full flex items-center justify-center gap-2'>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>Code</button>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>See live</button>
                        </div>

                    </div>

                </div>



                {/* // 2nd one */}
                <div className='flex w-[350px] flex-col hover:border p-3 rounded-md cursor-pointer'>
                    <img src='https://media.istockphoto.com/id/1355815985/photo/modern-gaming-pc-on-desk-display-mockup-for-game-promotion-modern-gaming-case-with-water.webp?s=170667a&w=0&k=20&c=t3FLxs_S3kjROy3sltqA9uN-6yybjV9afof5oUHI1_8=' alt='portofolio' className='w-full h-[200px] rounded-lg' />
                    <div className='flex flex-col w-full'>
                        <p className='p-2 mt-2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laborum, deleniti officiis illo consequatur in maxime. Temporibus, blanditiis culpa voluptates officiis inventore, voluptas doloremque, accusantium sit omnis hic voluptatem cumque?
                        </p>
                        <div className='w-full flex items-center justify-center gap-2'>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>Code</button>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>See live</button>
                        </div>

                    </div>

                </div>


                {/* //3rd one */}


                <div className='flex w-[350px] flex-col hover:border p-3 rounded-md cursor-pointer'>
                    <img src='https://media.istockphoto.com/id/1355815985/photo/modern-gaming-pc-on-desk-display-mockup-for-game-promotion-modern-gaming-case-with-water.webp?s=170667a&w=0&k=20&c=t3FLxs_S3kjROy3sltqA9uN-6yybjV9afof5oUHI1_8=' alt='portofolio' className='w-full h-[200px] rounded-lg' />
                    <div className='flex flex-col w-full'>
                        <p className='p-2 mt-2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laborum, deleniti officiis illo consequatur in maxime. Temporibus, blanditiis culpa voluptates officiis inventore, voluptas doloremque, accusantium sit omnis hic voluptatem cumque?
                        </p>
                        <div className='w-full flex items-center justify-center gap-2'>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>Code</button>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>See live</button>
                        </div>

                    </div>

                </div>


                {/* //4 th one */}
                <div className='flex w-[350px] flex-col hover:border p-3 rounded-md cursor-pointer'>
                    <img src='https://media.istockphoto.com/id/1355815985/photo/modern-gaming-pc-on-desk-display-mockup-for-game-promotion-modern-gaming-case-with-water.webp?s=170667a&w=0&k=20&c=t3FLxs_S3kjROy3sltqA9uN-6yybjV9afof5oUHI1_8=' alt='portofolio' className='w-full h-[200px] rounded-lg' />
                    <div className='flex flex-col w-full'>
                        <p className='p-2 mt-2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam laborum, deleniti officiis illo consequatur in maxime. Temporibus, blanditiis culpa voluptates officiis inventore, voluptas doloremque, accusantium sit omnis hic voluptatem cumque?
                        </p>
                        <div className='w-full flex items-center justify-center gap-2'>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>Code</button>
                            <button type='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black'>See live</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portofolio