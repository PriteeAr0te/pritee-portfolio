import Image from 'next/image'
import React from 'react'
import AgastiTech from '../../../public/img/agasti_tech.png';
import DI from '../../../public/img/dreams.png';
import Pritee from '../../../public/favicon-2.png';
import { motion } from 'framer-motion'

const Timeline = () => {
    const leftCardVariant = {
        hidden: { opacity: 0, x: -40 },
        visible: () => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        })
    };

    const rightCardVariant = {
        hidden: { opacity: 0, x: 40 },
        visible: () => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        })
    };


    return (
        <section id='work' className='py-16 overflow-x-hidden relative'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'></div>
            <div className='absolute -left-0 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -right-0 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className='text-center mb-12'>
                    <h2 id='about-title' className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white'>Professional <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500'>Experience</span></h2>
                    <div className='mt-4 h-1 w-80 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full'></div>
                    <p className="mt-6 text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">In just over a year, I’ve delivered production-ready web applications that combine clean architecture with intuitive user experiences. I bring the mindset of a problem-solver, the adaptability to learn fast, and the discipline to write maintainable code — making every project count.</p>
                </motion.div>
                <div className='timeline relative isolate w-full my-6 z-0'>
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='container left-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box relative z-10 p-4 bg-emerald-50 dark:bg-card-bg border border-gray-700/50 hover:border-emerald-500/50 shadow-lg hover:shadow-lg shadow-black/20 hover:shadow-emerald-500/10 hover:translate-y-[-5px] transition-all duration-500 text-gray-900 dark:text-gray-100 rounded-lg text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt="Pritee Arote" src={Pritee} height={40} width={40} className='rounded-full' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Independent Developer – Skill Expansion</h2>
                            <small className='italic text-left mb-4 text-base'>June 2025 - Present</small>
                            <p className='mt-2'>Focused on upskilling in TypeScript, advanced MERN stack development, and DSA fundamentals. Built and deployed full-stack projects, refined clean architecture practices, and strengthened problem-solving through algorithm challenges.</p>
                            <div className="left-arrow-container"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='container right-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box p-4 bg-emerald-50 dark:bg-card-bg relative rounded-lg border border-gray-700/50 hover:border-emerald-500/50 shadow-lg hover:shadow-lg shadow-black/20 hover:shadow-emerald-500/10 hover:translate-y-[-5px] transition-all duration-500 text-gray-900 dark:text-gray-100 text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt="Dreams International" src={DI} height={40} width={40} className='rounded-full z-30' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Reactjs Developer</h2>
                            <div className='flex flex-col'>
                                <small className='italic text-left mb-1 text-base'>Dreams International </small>
                                <small className='italic text-left mb-3 text-base'>Jun 2024 - May 2025</small>
                            </div>
                            <p className='mt-2'>Led complete UI development for multiple SaaS applications, delivering responsive, high-performance user interfaces. Implemented secure authentication, API-driven features, and role-based access. Ensured consistent, pixel-perfect design across platforms while optimizing for scalability and maintainability.</p>
                            <div className="right-arrow-container"></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='container left-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box p-4 bg-emerald-50 dark:bg-card-bg relative rounded-lg border border-gray-700/50 hover:border-emerald-500/50 shadow-lg hover:shadow-lg shadow-black/20 hover:shadow-emerald-500/10 hover:translate-y-[-5px] transition-all duration-500 text-gray-900 dark:text-gray-100 text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt='Dreams International' src={DI} height={40} width={40} className='rounded-full z-30' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Software Development Intern</h2>
                            <div className='flex flex-col'>
                                <small className='italic text-left mb-1 text-base'>Dreams International </small>
                                <small className='italic text-left mb-3 text-base'>Mar 2024 - Jun 2025</small>
                            </div>
                            <p className='mt-2'>Gained strong proficiency in frontend engineering by building production-ready components with React, Tailwind CSS, and JavaScript. Delivered pixel-perfect, responsive UIs, optimized rendering performance, and implemented clean state management. Collaborated with backend teams to ensure seamless API integration.</p>
                            <div className="left-arrow-container"></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='container right-container px-10 py-4 relative w-[85%] sm:w-[50%]'>
                        <div className='text-box p-4 bg-emerald-50 dark:bg-card-bg relative rounded-lg border border-gray-700/50 hover:border-emerald-500/50 shadow-lg hover:shadow-lg shadow-black/20 hover:shadow-emerald-500/10 hover:translate-y-[-5px] transition-all duration-500 text-gray-900 dark:text-gray-100 text-left'>
                            <div className='absolute w-[40px] h-[40px] timeline-img rounded-full top-[32px] z-50'>
                                <Image alt='Agasti Technologies' src={AgastiTech} height={40} width={40} className='rounded-full z-30' />
                            </div>
                            <h2 className='text-xl font-medium pb-0.5 text-left'>Software Development Intern</h2>
                            <div className='flex flex-col'>
                                <small className='italic text-left mb-1 text-base'>Agasti Technologies </small>
                                <small className='italic text-left mb-3 text-base'>Jul 2023 - Mar 2024</small>
                            </div>
                            <p className='mt-2'>Contributed to both frontend and backend development. Built responsive UIs with HTML, CSS, Bootstrap, React, and Tailwind CSS. Implemented backend features using Node.js and Express, integrated REST APIs, and assisted with debugging, deployment, and performance enhancements for live projects.</p>
                            <div className="right-arrow-container"></div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'></div>
        </section>
    )
}

export default Timeline