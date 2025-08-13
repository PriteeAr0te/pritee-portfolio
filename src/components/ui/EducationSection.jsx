import React from 'react'

const EducationSection = () => {
    return (
        <section id='education' className='py-16 relative overflow-x-hidden'>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

            <div className='absolute -left-0 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -right-0 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>

            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300">
                        Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Background</span>
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">
                        Strong academic foundation complemented by practical, project-driven learning and real-world problem-solving.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="group h-full">
                        <div className="bg-emerald-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]">

                            <div className="p-6 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center space-x-4">
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Master of Computer Science</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">2023 – 2025 | CGPA: 9.32</p>
                                </div>

                                <p className="mt-2 text-gray-900 dark:text-gray-300 flex-grow">Specialized in full-stack development, participated in Smart India Hackathon presenting an innovative solution to a real-world problem.</p>

                            </div>
                        </div>
                    </div>

                    <div className="group h-full">
                        <div className="bg-emerald-50 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]">

                            <div className="p-6 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center space-x-4">
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Bachelor of Computer Science</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">2020 – 2023 | CGPA: 9.05</p>
                                </div>

                                <p className="mt-2 text-gray-900 dark:text-gray-300 flex-grow"> Built a strong foundation in computer science fundamentals, programming concepts, and database management, setting the stage for advanced development skills.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default EducationSection
