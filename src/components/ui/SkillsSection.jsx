"use client"

import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import ReactLogo from '../../../public/img/react.png'
import NextLogo from '../../../public/img/next.png'
import Javascript from '../../../public/img/javascript.png'
import Typescript from '../../../public/img/Typescript.png'
import Router from '../../../public/img/dom.png'
import Redux from '../../../public/img/redux.png'
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
import SkillCard from './SkillCard'
import Lenis from 'lenis'

const skillsData = {
    frontend: [
        { name: 'React', logo: ReactLogo },
        { name: 'Next.js', logo: NextLogo },
        { name: 'JavaScript', logo: Javascript },
        { name: 'TypeScript', logo: Typescript },
        { name: 'React Router', logo: Router },
        { name: 'Redux', logo: Redux },
        { name: 'Tailwind CSS', logo: Tailwind },
        { name: 'HTML5', logo: HTML },
        { name: 'CSS3', logo: CSS },
        { name: 'Bootstrap', logo: Bootstarp },
        { name: 'Material UI', logo: MUI },
        { name: 'Framer Motion', logo: Framer },
    ],
    backend: [
        { name: 'Node.js', logo: Nodejs },
        { name: 'Express.js', logo: Expressjs },
        { name: 'JWT', logo: JWT },
        { name: 'Zod', logo: Zod },
        { name: 'Cloudinary', logo: Cloudinary },
    ],
    database: [
        { name: 'MongoDB', logo: Mongo },
        { name: 'SQL', logo: SQL },
        { name: 'Neo4J', logo: Neo },
    ],
    tools: [
        { name: 'Git', logo: Git },
        { name: 'Github', logo: Github },
        { name: 'Postman', logo: Postman },
        { name: 'Vercel', logo: Vercel },
        { name: 'Netlify', logo: Netlify },
        { name: 'VSCode', logo: Vscode },
        { name: 'Cursor', logo: Cursor },
        { name: 'NPM', logo: NPM },
        { name: 'AWS', logo: AWS },
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
        <section id='skills' className='py-20 w-screen relative mb-[500px]'>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

            <div className='absolute -left-0 top-40 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl'></div>
            <div className='absolute -right-0 bottom-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Skills</span></h2>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.</p>
                </div>

                <div className='flex flex-col gap-0 lg:px-8 xl:px-20 2xl:px-24' ref={container}>
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