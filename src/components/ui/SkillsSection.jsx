"use client"

import { useScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import ReactLogo from '../../../public/img/react.png'
import NextLogo from '../../../public/img/next.png'
import Javascript from '../../../public/img/javascript.png'
import Typescript from '../../../public/img/typescript.png'
import Tailwind from '../../../public/img/tailwind.png'
import HTML from '../../../public/img/html.png'
import CSS from '../../../public/img/css.png'
import Bootstarp from '../../../public/img/bootstrap.png'
import MUI from '../../../public/img/mui.png'
import Framer from '../../../public/img/framer.png'
import Nodejs from '../../../public/img/node.png'
import Expressjs from '../../../public/img/express.png'
import JWT from '../../../public/img/jwt.png'
import Zod from '../../../public/img/zod.png'
import Cloudinary from '../../../public/img/cloudinary.png'
import Mongo from '../../../public/img/mongodb.png'
import SQL from '../../../public/img/sql.png'
import Neo from '../../../public/img/neo.png'
import Git from '../../../public/img/git.png'
import Github from '../../../public/img/github.png'
import Postman from '../../../public/img/postman.png'
import Vercel from '../../../public/img/vercel.png'
import Netlify from '../../../public/img/netlify.png'
import Vscode from '../../../public/img/vscode.png'
import Cursor from '../../../public/img/cursor.png'
import NPM from '../../../public/img/npm.png'
import AWS from '../../../public/img/aws.png'
import Notion from '../../../public/img/notion.png'
import Sanity from '../../../public/img/sanity.png'
import NextAuth from '../../../public/img/next-auth.png'
import SkillCard from './SkillCard'
import Lenis from 'lenis'
import { motion } from 'framer-motion';

const skillsData = {
    frontend: [
        { name: 'React (Hooks, Router, Redux)', logo: ReactLogo },
        { name: 'Next.js', logo: NextLogo },
        { name: 'TypeScript', logo: Typescript },
        { name: 'JavaScript (ES6+)', logo: Javascript },
        { name: 'Tailwind CSS', logo: Tailwind },
        { name: 'Material-UI', logo: MUI },
        { name: 'Framer Motion', logo: Framer },
        { name: 'HTML5', logo: HTML },
        { name: 'CSS3', logo: CSS },
        { name: 'Bootstrap', logo: Bootstarp },
        { name: 'Sanity CMS', logo: Sanity },
    ],
    backend: [
        { name: 'Node.js', logo: Nodejs },
        { name: 'Express.js', logo: Expressjs },
        { name: 'JWT Authentication', logo: JWT },
        { name: 'Zod Validation', logo: Zod },
        { name: 'Cloudinary', logo: Cloudinary },
        { name: 'NextAuth.js', logo: NextAuth },
    ],
    database: [
        { name: 'MongoDB', logo: Mongo },
        { name: 'MySQL', logo: SQL },
        { name: 'Neo4j', logo: Neo },
    ],
    tools: [
        { name: 'Git & GitHub', logo: Git },
        { name: 'Postman', logo: Postman },
        { name: 'Vercel', logo: Vercel },
        { name: 'Netlify', logo: Netlify },
        { name: 'AWS', logo: AWS },
        { name: 'VS Code', logo: Vscode },
        { name: 'Cursor', logo: Cursor },
        { name: 'NPM & Yarn', logo: NPM },
        { name: 'Notion', logo: Notion },
    ]
};

const SkillsSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <section id='skills' className='pt-20 pb-16 mb:pb-36 relative md:mb-36'>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

            <div className='absolute -left-0 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -right-0 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Skills</span></h2>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-900 dark:text-gray-300 max-w-2xl mx-auto">From crafting sleek, responsive UIs to engineering robust backends, I work across the full stack with modern JavaScript frameworks, cloud tools, and databases. My toolkit evolves constantly — recently expanding with Sanity CMS and NextAuth.js — to deliver efficient, scalable, and user-driven solutions.</p>
                </motion.div>

                <div className='flex flex-col gap-y-4 md:gap-0 lg:px-8 xl:px-20 2xl:px-24' ref={container}>
                    {Object.entries(skillsData).map(([category, skills], index) => {
                        const targetScale = Math.min(1 + index * 0.02, 1.2);
                        return (
                            <SkillCard
                                i={index}
                                key={category}
                                skills={skills}
                                category={category}
                                progress={scrollYProgress}
                                range={[index * 0.001, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection