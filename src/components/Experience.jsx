import React from 'react'
import html from "../assets/html_png.png";
import js from "../assets/js_png.png";
import css from "../assets/css_png.png";
import react from "../assets/react_png.png";
import spring from "../assets/spring_png.png";
import github from "../assets/github_png.png";
import tailwind from "../assets/tailwind_png.png";
import sql from "../assets/mysql_png.png";
import java from "../assets/java_png.png";
const Experience = () => {
    const Projects = [
        {
            id: 1,
            skillName: "HTML",
            image: html,
            style:"shadow-inner shadow-orange-500 ",
            bgcolor:"bg-orange-500"
        },
        {
            id: 2,
            skillName: "CSS",
            image: css,
            style:"shadow-inner shadow-blue-500 ",
            bgcolor:"bg-blue-500 rounded"
        },
        {
            id: 3,
            skillName: "Javascript",
            image: js,
            style:"shadow-inner shadow-yellow-400 ",
            bgcolor:"bg-yellow-400",
            textColor:"text-black"

        },
        {
            id: 4,
            skillName: "Tailwind Css",
            image: tailwind,
            style:"shadow-inner shadow-blue-300 ",
            bgcolor:"bg-blue-300",
            textColor:"text-black"
        },
        {
            id: 5,
            skillName: "Spring Boot",
            image: spring,
            style:"shadow-inner shadow-green-500 ",
            bgcolor:"bg-green-500 "
        },
        {
            id: 6,
            skillName: "Java",
            image: java,
            style:"shadow-inner shadow-blue-700 ",
            bgcolor:"bg-blue-700"
        },
        {
            id: 7,
            skillName: "My Sql",
            image: sql,
            style:"shadow-inner shadow-sky-800 ",
            bgcolor:"bg-sky-800"
        },
        {
            id: 8,
            skillName: "React",
            image: react,
            style:"shadow-inner shadow-blue-400 ",
            bgcolor:"bg-blue-400"
        },
        {
            id: 9,
            skillName: "Github",
            image: github,
            style:"shadow-inner shadow-white ",
            bgcolor:"bg-white",
            textColor:"text-black"
        }
    ]
    return (
        <div name="Experience" className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:min-h-screen'>
            <div className='flex flex-col justify-center items-center max-w-screen-lg mx-auto p-4 lg:px-0'>
                <div className='my-4 w-min'>
                    <h1 className='text-3xl font-bold border-b-4 md:text-4xl'>Experience</h1>
                </div>
                <div className='my-5 xxsm:text-lg md:text-xl'>
                    <p>These are the technologies I've worked with</p>
                </div>

                <div class="grid py-8 px-4 grid-rows-3 grid-cols-2 md:grid-cols-3 gap-10 w-full">
                    {
                        Projects.map(({ id, skillName, image, style,bgcolor,textColor }) => (
                            <div key={id} class={"mt-4 bg-slate-900 rounded hover:scale-105 duration-300 cursor-pointer" +" "+ style }>
                                <div className='flex flex-row justify-center'>
                                    <img className='p-5 h-28 rounded text-center' src={image} alt="" />
                                </div>
                                <div className={"py-2"+ " " + bgcolor}>
                                    <p className={"text-center text-xl" + " "+ textColor}>{skillName}</p>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

        </div>
    )
}

export default Experience
