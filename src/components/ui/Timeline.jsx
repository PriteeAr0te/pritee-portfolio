import React from 'react'

const Timeline = () => {
    return (
        <div className='timeline relative w-full px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-32 my-6'>
            <div className='container left-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                <div className='text-box p-4 bg-gray-200 text-black relative rounded-lg text-left'>
                    <div className='absolute w-[40px] h-[40px] img bg-white border rounded-full top-[32px] z-10 '>
                    </div>
                    <h2 className='text-xl font-medium pb-0.5 text-left'>Pritee Arote</h2>
                    <small className='italic text-left mb-4 text-base'>May 2025 - Present</small>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                    <div className="left-arrow-container"></div>
                </div>
            </div>

            <div className='container right-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                <div className='text-box p-4 bg-gray-200 relative rounded-lg text-black text-left'>
                    <div className='absolute w-[40px] h-[40px] img bg-white border rounded-full top-[32px] z-10 '>
                    </div>
                    <h2 className='text-xl font-medium pb-0.5 text-left'>Dreams International</h2>
                    <small className='italic text-left mb-4 text-base'>Jun 2024 - May 2025</small>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                    <div className="right-arrow-container"></div>
                </div>
            </div>
            <div className='container left-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                <div className='text-box p-4 bg-gray-200 relative rounded-lg text-black text-left'>
                    <div className='absolute w-[40px] h-[40px] img bg-white border rounded-full top-[32px] z-10 '>
                    </div>
                    <h2 className='text-xl font-medium pb-0.5 text-left'>Dreams International</h2>
                    <small className='italic text-left mb-4 text-base'>Mar 2024 - Jun 2025</small>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                    <div className="left-arrow-container"></div>
                </div>
            </div>
            <div className='container right-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                <div className='text-box p-4 bg-gray-200 relative rounded-lg text-black text-left'>
                    <div className='absolute w-[40px] h-[40px] img bg-white border rounded-full top-[32px] z-10 '>
                    </div>
                    <h2 className='text-xl font-medium pb-0.5 text-left'>Agasti Technology</h2>
                    <small className='italic text-left mb-4 text-base'>Jul 2023 - Mar 2024</small>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                    <div className="right-arrow-container"></div>
                </div>
            </div>

        </div>
    )
}

export default Timeline