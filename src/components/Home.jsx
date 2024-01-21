import React from 'react'
import HeroImage from "../assets/Kartik_winter_image.jpeg";
import { BiRightArrowAlt } from "react-icons/bi";
const Home = () => {
    return (
        <div name="home" className='h-full w-full bg-gradient-to-b from-black to-gray-800 text-white  '>
            <div className='max-w-screen-lg  mx-auto px-4 flex flex-col items-center justify-center md:flex-row h-screen'>
                <div className='pt-20'>
                    <div>
                        <h1 className=' text-3xl font-bold py-4  xxsm:text-4xl xsm:text-5xl md:text-7xl'>I'm a Full Stack Developer</h1>
                    </div>
                    <div >
                        <p className='xxsm:text-lg md:py-4'>I have 8 years of experience building and desgining software.
                            Currently, I love to work on web application using technologies like React, Tailwind, Next JS and GraphQL.
                        </p>
                    </div>
                    <div>
                        <button className='group my-4 p-3 rounded-md bg-blue-400 xxsm:text-lg'>
                            Portfolio
                            <span><BiRightArrowAlt className='inline mb-1 mx-1 group-hover:rotate-90 duration-300' size={22}/></span>
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={HeroImage} alt="my profile"
                            className='rounded mx-auto my-4 w-56 xxsm:w-64 sm:w-72 md:w-3/4' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
