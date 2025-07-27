import Link from 'next/link'
import React from 'react'

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-20 relative text-left'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'></div>
            <div className='absolute -right-20 top-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -left-20 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Projects</span></h2>

                    <div className="mt-4 h-1 w-40 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='group h-full'>
                        <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]'>

                            <div className='relative overflow-hidden aspect-video'></div>

                            <div className="p-6 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-xl font-semibold text-white">Shortly</h3>
                                    <div className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-xs font-semibold px-2 py-0.5 rounded-full shadow-inner">Backend</div>
                                </div>
                                <p className="mt-2 text-gray-300 flex-grow">A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 text-xs rounded-full border bg-cyan-600/20 text-cyan-300 border-cyan-600/20">Go</span>
                                    <span className="px-2.5 py-1 text-xs rounded-full border bg-blue-700/20 text-blue-300 border-blue-700/20">PostgreSQL</span>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex space-x-4">
                                        <Link href="https://shortly-go.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300" aria-label="View live demo of Shortly">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                            <span>Live Demo</span>
                                        </Link>
                                        <Link href="https://github.com/PraveenGongada/Shortly" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300" aria-label="View code for Shortly on GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-1.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                            <span>Code</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='group h-full'>
                        <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]'>

                            <div className='relative overflow-hidden aspect-video'></div>

                            <div className="p-6 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-xl font-semibold text-white">Shortly</h3>
                                    <div className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-xs font-semibold px-2 py-0.5 rounded-full shadow-inner">Backend</div>
                                </div>
                                <p className="mt-2 text-gray-300 flex-grow">A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 text-xs rounded-full border bg-cyan-600/20 text-cyan-300 border-cyan-600/20">Go</span>
                                    <span className="px-2.5 py-1 text-xs rounded-full border bg-blue-700/20 text-blue-300 border-blue-700/20">PostgreSQL</span>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex space-x-4">
                                        <Link href="https://shortly-go.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300" aria-label="View live demo of Shortly">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                            <span>Live Demo</span>
                                        </Link>
                                        <Link href="https://github.com/PraveenGongada/Shortly" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300" aria-label="View code for Shortly on GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-1.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                            <span>Code</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='group h-full'>
                        <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]'>

                            <div className='relative overflow-hidden aspect-video'></div>

                            <div className="p-6 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-xl font-semibold text-white">Shortly</h3>
                                    <div className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-xs font-semibold px-2 py-0.5 rounded-full shadow-inner">Backend</div>
                                </div>
                                <p className="mt-2 text-gray-300 flex-grow">A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 text-xs rounded-full border bg-cyan-600/20 text-cyan-300 border-cyan-600/20">Go</span>
                                    <span className="px-2.5 py-1 text-xs rounded-full border bg-blue-700/20 text-blue-300 border-blue-700/20">PostgreSQL</span>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex space-x-4">
                                        <Link href="https://shortly-go.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300" aria-label="View live demo of Shortly">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1.5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                            <span>Live Demo</span>
                                        </Link>
                                        <Link href="https://github.com/PraveenGongada/Shortly" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300" aria-label="View code for Shortly on GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-1.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                            <span>Code</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-14 text-center">
                    <Link href="https://github.com/PraveenGongada" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 rounded-full font-medium items-center justify-center transition-all-duration-300 bg-gray-800/60 text-white backdrop-blur-sm border border-gray-700 hover:bg-gray-700/60 hover:border-emerald-500/30 shadow-lg hover:shadow-emerald-500/10 hover:translate-y-[-3px] inline-flex transition-transform duration-300">
                        <span className="flex items-center">
                            <span>View More Projects</span>
                            <div className="ml-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            </div>
                        </span>
                    </Link>
                </div>
            </div>

            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'></div>
        </section>
    )
}

export default ProjectsSection