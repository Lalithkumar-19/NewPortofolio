import React from 'react'




function Certifications() {
    const data = [
        {
            courseName: "Javascript basics to advanced ",
            source_pic: "https://logowik.com/content/uploads/images/udemy-new-20212512.jpg",
            cred_link: "https://www.udemy.com/certificate/UC-a9ff2025-dc1f-4cfc-bd68-26399e5f25a1/",
        },
        {
            courseName: "Modern JavaScript for React JS - ES6 [2023]",
            source_pic: "https://logowik.com/content/uploads/images/udemy-new-20212512.jpg",
            cred_link: "https://www.udemy.com/certificate/UC-fda6dd25-97e8-41e5-a48f-b9e16da1abc2/",
        }, {
            courseName: " The Complete ReactJs Course - Basics to Advanced [2023]",
            source_pic: "https://logowik.com/content/uploads/images/udemy-new-20212512.jpg",
            cred_link: "https://www.udemy.com/certificate/UC-50a123b5-be92-46e2-bf20-5982371f1386/",
        },
        {
            courseName: "JavaScript Algorithms and Data Structures",
            source_pic: "https://i1.sndcdn.com/artworks-000612058387-xd1e0e-t500x500.jpg",
            cred_link: "https://freecodecamp.org/certification/Lalithkumar_005/javascript-algorithms-and-data-structures",


        },
        {
            courseName: "Responsive Web Design",
            source_pic: "https://i1.sndcdn.com/artworks-000612058387-xd1e0e-t500x500.jpg",
            cred_link: "https://freecodecamp.org/certification/Lalithkumar_005/responsive-web-design",

        }, {
            courseName: "UI & UX Design (Begining level)",
            source_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcBl1HhoHl9yDkCjjqr3ctInNWDpwWdVwW625Pj6CdQ&s",
            cred_link: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2392452/original/Lalith_kumar20230402-63-1n49v8e.jpg"
        }
        , {
            courseName: "Mongodb CRUD",
            source_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcBl1HhoHl9yDkCjjqr3ctInNWDpwWdVwW625Pj6CdQ&s",
            cred_link: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2390668/original/Lalith_kumar20230402-63-ui6apn.jpg"
        }

    ];
    return (
        <div className='flex flex-col w-full text-[white] p-4 mb-3'>
            <h2 className='text-[yellow] font-mono text-3xl text-center w-full mt-2 mb-2 underline underline-offset-4 animate-pulse'>Certification</h2>
            <div className='flex w-full flex-wrap mb-[15px]  items-center justify-center gap-7 mt-3 '>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className='flex w-[200px] h-[400px] flex-col hover:border-[#00df9a] p-3 rounded-md cursor-pointer hover:scale-110'>
                                <img src={item.source_pic} alt='portofolio' className='w-full h-[200px] rounded-full' />
                                <div className='flex flex-col w-full'>
                                    <p className='p-1 mt-2 text-xl text-center'>
                                        {item.courseName}
                                    </p>
                                    <div className='w-full flex items-center justify-center gap-2'>
                                        <a role='button' className='bg-white text-black text-2xl p-2 rounded-md hover:bg-[#00df9a] hover:text-black sm:animate-ping sm:hover:animate-none duration-700' href={item.cred_link}>See cred..</a>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }



            </div>



            <hr className='mt-3' />
        </div>
    )
}

export default Certifications