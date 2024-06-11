import React from 'react'
import EmpManagement from "../assets/Employee_management_app.png";
import BurgerApp from "../assets/burger_app.png";
import ProjectManagementApp from "../assets/projectmanagement_app.png";
import quizApp from "../assets/Quiz_App.png";

const Portfolio = () => {
    const Projects = [
        {
            id: 1,
            projectName: "Project Management Tool",
            image: ProjectManagementApp,
            demo: false,
            demoUrl: "",
            codeUrl: "https://github.com/kartikkhanna21/Project_management_tool",
            stack: ['ReactJs', 'SpringBoot', 'MySql', 'Redux', 'Bootstrap'],
            projectDescription: "Project Description - A system that enables users to maintain a comprehensive record of the projects they are currently engaged in. It empowers them to create records for individual tasks within each project, enabling the tracking of their status whether they are :— In progress, pending completion or  already finished. This functionality ensures users can consistently monitor both the overall progress of their projects and the specific tasks associated with them",

        },
        {
            id: 2,
            projectName: "Burger Builder Application",
            image: BurgerApp,
            demo: false,
            demoUrl: "",
            codeUrl: "https://github.com/kartikkhanna21/Burger_app_react",
            stack: ['ReactJs', 'Firebase', 'Redux'],
            projectDescription:"Project Description -  Interactive web application that allows users to create custom burgers. Users can build their perfect burger and place anorder to their address using a user-friendly interface."
        },
        {
            id: 3,
            projectName: "Quiz Application",
            image: quizApp,
            demo: true,
            demoUrl: "https://quiz-app-iota-gules.vercel.app/",
            codeUrl: "https://github.com/kartikkhanna21/https://github.com/kartikkhanna21/React_Quiz_App",
            stack: ['ReactJs', 'TailwindCss', 'React Hooks'],
            projectDescription:"Project Description - A User Friendly Quiz Web Application made with the help of ReactJS and TailwindCss which allows the user to take up a quiz on the platform and provides the results in real time."
        },
        {
            id: 4,
            projectName: "Employee Management Tool",
            image: EmpManagement,
            demo: false,
            demoUrl: "",
            codeUrl: "https://github.com/kartikkhanna21/Employee-Management-system",
            stack: ['ReactJs', 'SpringBoot', 'MySql', 'Bootstrap'],
            projectDescription:"Project Description -  A web application designed to help businesses efficiently manage their employees' information. Built with React for the frontend, Spring Boot for the backend, and Bootstrap for the styling, this system allows users to perform various operations such as adding new employees, updating existing employee details, and removing employees."
        }
    ]
    return (
        <div name="Portfolio" className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:min-h-screen'>
            <div className='flex flex-col justify-center items-center max-w-screen-lg mx-auto p-4 lg:px-0'>
                <div className='my-4 w-min'>
                    <h1 className='text-3xl font-bold border-b-4 md:text-4xl'>Portfolio</h1>
                </div>
                <div className='my-5 xxsm:text-lg md:text-xl'>
                    <p>Check out some of my work right here</p>
                </div>

                <div class="grid py-8 px-4 gap-4 md:grid-cols-2 md:w-full ">
                    {
                        Projects.map(({ id, projectName, image, demo, demoUrl, codeUrl, stack,projectDescription }) => (
                            <div key={id} class="mt-8 mx-2 bg-black rounded-xl shadow-md shadow-gray-800 group">
                                <div className='md:relative'>
                                    <img className='opacity-100 h-40 w-full rounded-xl transition-opacity duration-300 ease-in-out md:group-hover:opacity-0 md:h-60 md:fade-mask' src={image} alt="" />
                                    <div class="inset-0 flex items-end justify-start transition-opacity duration-300 ease-in-out opacity-100 md:group-hover:opacity-0 md:absolute">
                                        <p class="text-white text-xl font-bold  px-3 py-2 rounded md:text-2xl">
                                            {projectName}
                                        </p>
                                    </div>
                                    <div className="hidden md:flex absolute inset-0 items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 rounded-xl">
                                        <p className="text-white text-center text-sm font-normal px-3 py-4 rounded md:text-sm">
                                            {projectDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col pt-2 bg-black'>
                                    <div>
                                        <p className='text-start text-base font-medium mx-3'>Stack:</p>
                                    </div>
                                    <div className='my-2 mx-2'>
                                        {stack.map((item) => (
                                            <div className='float-left py-1 px-2 m-1 bg-white rounded-md'>
                                                <p className='text-black font-medium text-xs'>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    {demo ?
                                        <div className='px-2 py-4 mx-4 cursor-pointer' >
                                            <a
                                                href={demoUrl}
                                                target="_blank"
                                                rel='noreferrer'>
                                                <button className='px-8 py-1 rounded border-2 border-black bg-white text-black hover:scale-110 duration-300 '>
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                        :
                                        <div></div>
                                    }

                                    <div className='px-2 py-4 mx-4 cursor-pointer'>
                                        <a
                                            href={codeUrl}
                                            target="_blank"
                                            rel='noreferrer'>
                                            <button className='px-8 py-1 rounded border-2 border-white text-white hover:scale-110 duration-300'>
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
