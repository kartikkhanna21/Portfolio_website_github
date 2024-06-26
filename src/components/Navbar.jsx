import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contact"
        }

    ]
    return (
        <div className="relative flex justify-between items-center w-full h-20 text-white bg-black py-2 px-3 fixed">
            <div>
                <h1 className='font-signature text-4xl ml-2 md:text-5xl'>Kartik</h1>
            </div>
            <div >
                <div>
                    <ul className='md:flex hidden'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='text-gray-400 px-4 cursor-pointer font-medium hover:scale-105 duration-200'>
                                <Link to={link} smooth duration={500}>{link}</Link>
                            </li>
                        )
                        )}
                    </ul>
                </div>

                <div onClick={() => { setNav(!nav) }} className='cursor-pointer pr-4 z-10 absolute right-0 bottom-4 md:hidden'>
                    {nav ?
                        <IoClose className='size-9 mb-2' />
                        :
                        <GiHamburgerMenu className='size-9 mb-2' />
                    }
                </div>

                {nav ?
                    <div>
                        <ul className='flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800'>

                            {links.map(({ id, link }) => (
                                <li key={id} className='text-2xl text-gray-400 py-6 cursor-pointer font-normal hover:scale-105 duration-200'>
                                    <Link onClick={()=>(setNav(!nav))} to={link} smooth duration={500}>{link}</Link>
                                </li>
                            )
                            )}

                        </ul>
                    </div>
                    :
                    <div></div>
                }


            </div>

        </div>
    )
}

export default Navbar
