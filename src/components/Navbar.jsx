import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
        },

    ]
    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black p-3 fixed">
            <div>
                <h1 className='font-signature text-5xl ml-2'>Kartik</h1>
            </div>
            <div >
                <div>
                    <ul className='md:flex hidden'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='text-gray-400 px-4 cursor-pointer font-medium hover:scale-105 duration-200'>
                                {link}
                            </li>
                        )
                        )}
                    </ul>
                </div>

                <div onClick={() => { setNav(!nav) }} className='cursor-pointer pr-4 z-10 absolute right-0 bottom-4 md:hidden'>
                    {nav ?
                        <IoClose size={45} />
                        :
                        <GiHamburgerMenu size={45} />
                    }
                </div>

                {nav ?
                    <div>
                        <ul className='flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800'>

                            {links.map(({ id, link }) => (
                                <li key={id} className='text-3xl text-gray-400 py-6 cursor-pointer font-normal hover:scale-105 duration-200'>
                                    {link}
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
