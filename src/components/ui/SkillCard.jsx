"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';


const SkillCard = ({ i, skills, category, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start statr']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className='cardContainer'>

            <motion.div
                style={{scale, top: `calc(-1vh + ${i * 50}px)` }}
                className="bg-gray-800 rounded-2xl p-6 py-3 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg max-h-[300px] min-h-[210px] stack-card"
            >
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2 capitalize">
                    <span>{category}</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <motion.div key={skill.name} className="group relative duration-300">
                            <div
                                className="flex items-center gap-2 text-lg px-4 py-2 bg-gray-800/70 rounded-full border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-emerald-500/10"
                                style={{ borderColor: 'rgba(2, 86, 155, 0.125)', scale: imageScale }}
                            >
                                <Image
                                    src={skill.logo}
                                    alt={`${skill.name} Logo`}
                                    height={30}
                                    width={30}
                                    className="rounded-full"
                                />
                                <span className="text-gray-900 dark:text-gray-300">{skill.name}</span>
                            </div>
                            <div
                                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-2 rounded-full bg-black/20 blur-sm opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                                style={{
                                    background:
                                        'radial-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default SkillCard