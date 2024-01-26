import React from 'react'

const About = () => {
    return (
        <div name="About" className='flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className='flex flex-col items-center py-4 max-w-screen-lg px-4 lg:px-0'>
                <div className=' w-min'>
                    <h1 className='text-3xl pt-2 my-4 text-center font-bold border-b-4 max-w-full md:text-4xl'>About</h1>
                </div>

                <div className='my-5 xsm:text-lg md:text-xl'>
                    <p>Hello! I'm Kartik Khanna, a web developer with a passion for creating modern and user-friendly websites and web applications. With proficiency in a wide range of technologies, I bring creativity and technical expertise to every project I undertake. If you're looking for a dedicated developer who can turn your web development vision into reality, you're in the right place.</p>
                </div>

                <div >
                    <p className='my-5 xsm:text-lg md:text-xl'>Experienced web developer with a solid 2-year track record in building dynamic and responsive web applications. Proficient in a diverse set of technologies, including React for front-end development, Spring Boot for back-end services, MySQL for database management, and Java for overall application architecture. Skilled in implementing modern and sleek user interfaces using Tailwind CSS. Adept at collaborating in cross-functional teams to deliver high-quality software solutions that meet both client and business needs.</p>
                </div>
            </div>

        </div>
    )
}

export default About
