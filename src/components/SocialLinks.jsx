import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";

const SocialLinks = () => {
    const socialLinks = [
        {
            id: 1,
            linkName:"LinkedIn",
            component: <FaLinkedin className='inline mx-2' size={25} />,
            url: "https://www.linkedin.com/in/kartik-khanna-73230a202/",
            download:false,
            style:"rounded-tr-md"
        },
        {
            id: 2,
            linkName:"Github",
            component: <FaGithub className='inline mx-2' size={25}/>,
            url: "https://github.com/kartikkhanna21",
            download:false
        },
        {
            id: 3,
            linkName:"Mail",
            component: <CiMail className='inline mx-2' size={25}/>,
            url: "mailto:kartikkhanna93@gmail.com",
            download:false
        },
        {
            id: 4,
            linkName:"Resume",
            component: <CgNotes className='inline mx-2' size={25}/>,
            url: "/Kartik_Khanna_resume.pdf",
            download:true,
            style:"rounded-br-md"
        }


    ]
    return (
        <div className='lg:block fixed flex flex-col text-white top-[35%]'>
            <ul >
                {
                    socialLinks.map(({ id, linkName,component, url,download,style }) => (
                        <li key={id} className={"p-3 flex justify-between bg-gray-600 w-40 items-center cursor-pointer ml-[-100px] hover:ml-[-5px] duration-300" + " " + style}>
                            <a href={url} className='flex justify-between items-center w-full' 
                                target='_blank' 
                                rel='noreferrer' 
                                download={download} >
                                <span>{linkName}</span> 
                                {component}
                            </a>
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks
