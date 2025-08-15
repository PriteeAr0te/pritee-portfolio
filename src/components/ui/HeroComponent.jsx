import Link from 'next/link'
import React from 'react'
import Me from '../../../public/img/its-me.png'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

const HeroComponent = () => {
    return (
        <section id="home" className='w-full overflow-x-hidden flex items-center relative pt-20 md:pt-20 lg:pt-16 pb-16 md:pb-12'>
            <div className='absolute inset-0'>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-gray-100 dark:via-gray-900 to-white dark:to-gray-800"></div>
                <div className='absolute inset-0 opacity-20'
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, transparent 8%)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>
                <div
                    className='absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-40'
                    style={{
                        transform: 'translateX(6.68056px) translateY(-10.0208px)'
                    }}
                ></div>
                <div
                    className='absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl opacity-40'
                    style={{
                        transform: 'translateX(-3.22945px) translateY(4.84418px)'
                    }}
                ></div>
            </div>
            <div className="max-w-7xl mx-auto gap-y-4 px-4 sm:px-6 lg:px-8 w-full z-10 flex items-center h-full">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className='lg:col-span-7 text-center lg:text-left'>

                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-20 xl:mr-22'>Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500'>Pritee Arote </span></h1>
                        <div className='h-12 mb-4 overflow-hidden'>
                            <div className='relative h-full flex gap-2 items-center justify-center lg:justify-start'>
                                <span className='text-xl sm:text-xl text-gray-900 font-medium dark:text-gray-300 flex flex-wrap'>I'm passionate about</span>
                                <span className="font-semibold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 tracking-wider">
                                    <TypeAnimation
                                        sequence={[
                                            "building performant full-stack apps",
                                            1200,
                                            "designing scalable architectures",
                                            1200,
                                            "crafting intuitive, pixel-perfect UIs",
                                            1200,
                                            "writing clean, type-safe code",
                                            1200,
                                            "creating frictionless user journeys",
                                            1200,
                                            "solving business problems with tech",
                                            1200,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ display: "inline-block" }}
                                        repeat={Infinity}
                                    />
                                </span>
                            </div>
                        </div>
                        <p className='text-lg text-gray-900 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8'>I bridge the gap between beautiful design and powerful engineering — building fast, scalable, and user-focused products. From architecting robust backends to delivering pixel-perfect frontends, I focus on code that works, designs that speak, and experiences users remember.</p>

                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start mb-6'>
                            <Link href="https://drive.google.com/file/d/1Lsb5EdYODjNEAnd0aZX5hnNyG94hI91h/view?usp=sharing" target='_blank' className="group relative px-6 py-3 rounded-full font-medium items-center justify-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40  inline-flex transition-transform duration-300">
                                <span className='flex items-center'>View My Resume</span>
                                <span className='ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path></svg></span>
                            </Link>

                            <div className='flex gap-2 items-center'>
                                <Link href="https://github.com/PriteeAr0te" target='_blank' className='min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-full relative hover:bg-gradient-to-b from-blue-500 to-emerald-500 hover:text-gray-900 font-medium items-center justify-center inline-flex border-[1.5px] border-gray-600 hover:border-emerald-500/50 transition-colors duration-300 ease-in-out'>
                                    <FaGithub size={20} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/pritee-reactdev" target='_blank' className='min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-full relative hover:bg-gradient-to-b from-blue-500 to-emerald-500 hover:text-gray-900 font-medium items-center justify-center inline-flex border-[1.5px] border-gray-600 hover:border-emerald-500/50 transition-colors duration-300 ease-in-out'>
                                    <FaLinkedin size={20} />
                                </Link>
                                <Link href="https://leetcode.com/u/PriteeArote/" target='_blank' className='min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-full relative hover:bg-gradient-to-b from-blue-500 to-emerald-500 hover:text-gray-900 font-medium items-center justify-center inline-flex border-[1.5px] border-gray-600 hover:border-emerald-500/50 transition-colors duration-300 ease-in-out'>
                                    <SiLeetcode size={20} />
                                </Link>
                                <Link href="https://x.com/PriteeArot75040" target='_blank' className='min-w-[42px] min-h-[42px] max-w-[42px] max-h-[42px] rounded-full relative hover:bg-gradient-to-b from-blue-500 to-emerald-500 hover:text-gray-900 font-medium items-center justify-center inline-flex border-[1.5px] border-gray-600 hover:border-emerald-500/50 transition-colors duration-300 ease-in-out'>
                                    <FaXTwitter size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}

                        className='lg:col-span-5 h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] xl:h-[400px] relative mt-2 sm:mt-0 mb-16 sm:mb-12'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <Image src={Me} alt="Hey, Its Me - Pritee" height={400} width={400} />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20'>
                <span className='text-gray-800 dark:text-gray-100 text-sm mb-2 animate-pulse'>
                    Explore my work
                </span>
                <span className="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-emerald-400"><path d="m6 9 6 6 6-6"></path></svg>
                </span>
            </div>

            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'></div>

        </section>
    )
}

export default HeroComponent