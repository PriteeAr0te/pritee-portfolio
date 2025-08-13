import projects from '@/lib/projects'
import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-16 overflow-x-hidden relative text-left'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent'></div>
            <div className='absolute -right-0 top-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -left-0 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Projects</span></h2>

                    <div className="mt-4 h-1 w-40 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">A curated collection of my most impactful work — from responsive, user-focused frontends to scalable full-stack applications.
                        Each project reflects my commitment to clean code, modern tech stacks, and real-world problem solving.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <Link href="https://github.com/PriteeAr0te" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 rounded-full font-medium items-center justify-center transition-all-duration-300 bg-emerald-100 dark:bg-gray-800/60 text-slate-900 dark:text-white backdrop-blur-sm border border-gray-700 hover:bg-gray-700/60 hover:border-emerald-500/30 shadow-lg hover:shadow-emerald-500/10 hover:translate-y-[-3px] inline-flex transition-transform duration-300">
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