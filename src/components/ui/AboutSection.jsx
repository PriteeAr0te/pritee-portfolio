import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className='py-16 overflow-x-hidden relative'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'></div>
            <div className='absolute left-0 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute right-0 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 id='about-title' className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white'>About <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500'>Me</span></h2>
                    <div className='mt-4 h-1 w-28 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full'></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch'>
                    <div className='h-full'>
                        <div className='bg-emerald-50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-xl h-full relative overflow-hidden flex flex-col justify-start items-stretch'>
                            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6 relative text-left'>My Journey</h3>
                            <div className='space-y-4 relative'>
                                <p className='text-gray-800 dark:text-gray-300 leading-relaxed text-left text-[17px]'>From writing my first line of HTML to deploying full-stack applications — my journey in tech has been driven by curiosity, problem-solving, and a hunger to build things that matter. </p>
                                <p className='text-gray-800 dark:text-gray-300 leading-relaxed text-left text-[17px]'> With over a year of professional experience in <strong>React.js</strong> and the <strong>MERN stack</strong>, I’ve worked on SaaS platforms, scalable APIs, and polished frontends that deliver real business value. My approach blends clean, maintainable code with a keen eye for user experience.</p>
                                <p className='text-gray-800 dark:text-gray-300 leading-relaxed text-left text-[17px]'>Today, I focus on building fast, secure, and intuitive applications — ensuring that every project I work on not only functions flawlessly but also leaves a lasting impression on its users.</p>
                            </div>
                            <div className='mt-8 flex flex-wrap gap-3'>
                                <div className='inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border border-gray-600/50'>
                                    <span className='w-2 h-2 rounded-full bg-emerald-500 mr-2'></span>
                                    <span>Based in Pune</span>
                                </div>
                                <div className='inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border border-gray-600/50'>
                                    <span className='w-2 h-2 rounded-full bg-emerald-500 mr-2'></span>
                                    <span>1+ Year Experience</span>
                                </div>
                                <div className='inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border border-gray-600/50'>
                                    <span className='w-2 h-2 rounded-full bg-emerald-500 mr-2'></span>
                                    <span>Available for Opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 h-full text-left'>
                            <div className='bg-emerald-50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative h-full group hover:border-emerald-500/30 transition-all duration-300'>
                                <div className='p-6 relative'>
                                    <div className='absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 opacity-10 blur-lg'></div>
                                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                                    </div>
                                    <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>Problem Solver</h4>
                                    <p className='text-gray-900 dark:text-gray-300'>I tackle complex challenges with structured thinking, breaking them into actionable steps and delivering efficient, future-ready solutions.</p>
                                </div>
                            </div>


                            <div className='bg-emerald-50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative h-full group hover:border-emerald-500/30 transition-all duration-300'>
                                <div className='p-6 relative'>
                                    <div className='absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-10 blur-lg'></div>
                                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                    </div>
                                    <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>User-Centric Design</h4>
                                    <p className='text-gray-900 dark:text-gray-300'>Great software feels effortless. I craft intuitive, engaging interfaces that make user interactions seamless.</p>
                                </div>
                            </div>


                            <div className='bg-emerald-50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative h-full group hover:border-emerald-500/30 transition-all duration-300'>
                                <div className='p-6 relative'>
                                    <div className='absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 blur-lg'></div>
                                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                    </div>
                                    <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>Scalable Engineering</h4>
                                    <p className='text-gray-900 dark:text-gray-300'>From APIs to databases, I design systems that grow with demand while maintaining top performance.</p>
                                </div>
                            </div>


                            <div className='bg-emerald-50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative h-full group hover:border-emerald-500/30 transition-all duration-300'>
                                <div className='p-6 relative'>
                                    <div className='absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-10 blur-lg'></div>
                                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                    </div>
                                    <h4 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>Continuous Learner</h4>
                                    <p className='text-gray-900 dark:text-gray-300'>I stay ahead by exploring modern tools, frameworks, and best practices to deliver cutting-edge solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'></div>
        </section>
    )
}

export default AboutSection