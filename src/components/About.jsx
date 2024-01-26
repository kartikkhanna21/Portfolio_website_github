import React from 'react'

const About = () => {
    return (
        <div name="About" className='flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className='flex flex-col items-center py-4 max-w-screen-lg px-4 lg:px-0'>
                <div className=' w-min'>
                    <h1 className='text-3xl my-4 text-center font-bold border-b-4 max-w-full md:text-4xl'>About</h1>
                </div>

                <div className='my-5 xsm:text-lg md:text-xl'>
                    <p>Hello! I'm Kartik Khanna, a web developer with a passion for creating modern and user-friendly websites and web applications. With proficiency in a wide range of technologies, I bring creativity and technical expertise to every project I undertake. If you're looking for a dedicated developer who can turn your web development vision into reality, you're in the right place.</p>
                </div>

                <div >
                    <p className='my-5 xsm:text-lg md:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur, vel similique sint, nobis aspernatur ut praesentium explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
                        Commodi facilis atque nulla vero voluptatem explicabo.
                        Quibusdam, magni quo! Eum cupiditate debitis labore.</p>
                </div>
            </div>

        </div>
    )
}

export default About
