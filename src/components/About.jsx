import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className='flex flex-col items-center py-4 max-w-screen-lg px-4 lg:px-0'>
                <div className=' w-min'>
                    <h1 className=' my-4 text-center text-4xl font-bold border-b-4 max-w-full'>About</h1>
                </div>

                <div className='my-10 xxsm:text-lg md:text-xl'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, deserunt illum mollitia officiis qui exercitationem perferendis neque quasi a recusandae necessitatibus
                        tempora iusto! Blanditiis error iste, totam fugiat recusandae rerum laborum perferendis molestiae aperiam asperiores nemo.
                        Magni dolor maxime debitis vitae, eaque hic ab mollitia voluptatibus, a nostrum eveniet laborum!</p>
                </div>

                <div >
                    <p className='xxsm:text-lg md:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur, vel similique sint, nobis aspernatur ut praesentium explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
                        Commodi facilis atque nulla vero voluptatem explicabo.
                        Quibusdam, magni quo! Eum cupiditate debitis labore.</p>
                </div>
            </div>

        </div>
    )
}

export default About
