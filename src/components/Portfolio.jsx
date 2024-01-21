import React from 'react'
import EmpManagement from "../assets/Employee_management_app.png";
import BurgerApp from "../assets/burger_app.png";
import ProjectManagementApp from "../assets/projectmanagement_app.png";

const Portfolio = () => {
    const Projects = [
        {
            id: 1,
            projectName: "Project Management Tool",
            image: ProjectManagementApp,
            demo: true,
            demoUrl: "",
            codeUrl: ""
        },
        {
            id: 2,
            projectName: "Burger Builder Application",
            image: BurgerApp,
            demo: true,
            demoUrl: "",
            codeUrl: ""
        },
        {
            id: 3,
            projectName: "Employee Management Tool",
            image: EmpManagement,
            demo: false,
            demoUrl: "",
            codeUrl: ""
        }
    ]
    return (
        <div className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='flex flex-col justify-center items-center max-w-screen-lg mx-auto p-4 lg:px-0'>
                <div className='my-4 w-min'>
                    <h1 className='text-4xl font-bold border-b-4'>Portfolio</h1>
                </div>
                <div className='my-5 xxsm:text-lg md:text-xl'>
                    <p>Check out some of my work right here</p>
                </div>

                <div class="grid py-8 px-4 grid-rows-3 md:grid-cols-3 gap-4">
                    {
                        Projects.map(({ id, projectName, image, demo, demoUrl, codeUrl }) => (
                            <div key={id} class="mt-4 bg-slate-900 rounded shadow-md shadow-gray-600">
                                <div>
                                    <img className='h-40 w-full rounded hover:scale-105 duration-300' src={image} alt="" />
                                </div>
                                <div className='py-4 bg-black'>
                                    <p className='text-center text-xl font-semibold'>{projectName}</p>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    {demo ?
                                        <div className='px-2 py-4 mx-4 cursor-pointer hover:scale-110 duration-200' >
                                            <a href={demoUrl} target="_blank">
                                                <button className='px-6 py-2 rounded bg-blue-600'>
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                        :
                                        <div></div>
                                    }

                                    <div className='px-2 py-4 mx-4 cursor-pointer hover:scale-110 duration-200'>
                                        <a href={demoUrl} target="_blank">
                                            <button className='px-6 py-2 rounded bg-black shadow-2xl'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

        </div>
    )
}

export default Portfolio
