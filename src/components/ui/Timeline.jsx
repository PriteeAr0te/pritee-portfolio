import Image from 'next/image'
import React from 'react'
import AgastiTech from '../../../public/img/agasti_tech.png';
import DI from '../../../public/img/dreams.png';

const Timeline = () => {
    return (
        <section id='work' className='py-20 relative'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'></div>
            <div className='absolute -left-20 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -right-20 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 id='about-title' className='text-3xl md:text-4xl font-bold text-white'>Professional <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500'>Experience</span></h2>
                    <div className='mt-4 h-1 w-80 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full'></div>
                </div>
                <div className='timeline relative isolate w-full my-6 z-0'>
                    <div className='container left-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box relative z-10 p-4 bg-card-bg border shadow-xl border-card-border text-gray-100 rounded-lg text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt="Pritee Arote" src={AgastiTech} height={40} width={40} className='rounded-full' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Pritee Arote</h2>
                            <small className='italic text-left mb-4 text-base'>May 2025 - Present</small>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                            <div className="left-arrow-container"></div>
                        </div>
                    </div>

                    <div className='container right-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box p-4 bg-card-bg relative rounded-lg border shadow-xl border-card-border text-gray-100 text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt="Dreams International" src={DI} height={40} width={40} className='rounded-full z-30' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Dreams International</h2>
                            <small className='italic text-left mb-4 text-base'>Jun 2024 - May 2025</small>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                            <div className="right-arrow-container"></div>
                        </div>
                    </div>
                    <div className='container left-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box p-4 bg-card-bg relative rounded-lg border shadow-xl border-card-border text-gray-100 text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt='Dreams International' src={DI} height={40} width={40} className='rounded-full z-30' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Dreams International</h2>
                            <small className='italic text-left mb-4 text-base'>Mar 2024 - Jun 2025</small>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                            <div className="left-arrow-container"></div>
                        </div>
                    </div>
                    <div className='container right-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box p-4 bg-card-bg relative rounded-lg border shadow-xl border-card-border text-gray-100 text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt='Agasti Technologies' src={AgastiTech} height={40} width={40} className='rounded-full z-30' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Agasti Technology</h2>
                            <small className='italic text-left mb-4 text-base'>Jul 2023 - Mar 2024</small>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quas sequi totam tenetur error in, eligendi dicta! Sit, facere sequi repellendus odit rem ipsa unde nobis eos similique! Doloribus, dolore?</p>
                            <div className="right-arrow-container"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'></div>
        </section>
    )
}

export default Timeline