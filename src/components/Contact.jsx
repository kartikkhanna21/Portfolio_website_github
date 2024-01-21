import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='flex flex-col justify-center items-center max-w-screen-lg mx-auto p-4 lg:px-0'>
                <div className='my-4 w-min'>
                    <h1 className='text-4xl font-bold border-b-4'>Contact</h1>
                </div>
                <div className='my-5 xxsm:text-lg md:text-xl'>
                    <p>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex flex-col w-full py-8'>
                    <div className=''>
                        <input type="text" className='w-full py-2 px-1 rounded text-white bg-transparent border-2 text-sm border-white' placeholder='Enter Your Name' />
                    </div>
                    <div className='py-4'>
                        <input type="text" className='w-full py-2 px-1 rounded text-white bg-transparent border-2 text-sm border-white' placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <textarea className='w-full h-32 py-2 px-1 rounded text-white bg-transparent border-2 text-sm border-white' placeholder='Enter Your Message'>

                        </textarea>
                    </div>

                    <div className='flex flex-row justify-center py-4 hover:scale-110 duration-200' >
                        <a href=" " target="_blank">
                            <button className='px-8 py-2 rounded bg-blue-500 shadow-2xl'>
                                Let's Talk
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
