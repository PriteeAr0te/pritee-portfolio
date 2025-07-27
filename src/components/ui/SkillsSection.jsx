import Image from 'next/image'
import React from 'react'

const SkillsSection = () => {
    return (
        <section id='skills' className='py-20 relative'>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

            <div className='absolute -left-20 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -right-20 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Skills</span></h2>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg'>
                        <h3 className='text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2'>
                            <span className="w-6 h-6 rounded-md flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#f472b6"></rect><line x1="12" y1="18" x2="12.01" y2="18" stroke="#f472b6"></line></svg>
                            </span>
                            <span>Frontend</span>
                        </h3>

                        <div className='flex flex-wrap gap-2'>
                            <div className="group relative duration-300">
                                <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/70 rounded-full border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-emerald-500/10" style={{borderColor: 'rgba(2, 86, 155, 0.125)'}}>
                                    <div>Image</div>
                                    <span className="text-sm text-gray-300">React</span>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-2 rounded-full bg-black/20 blur-sm opacity-50 transition-opacity duration-300 group-hover:opacity-70" style={{background: 'radial-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 70%)'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection