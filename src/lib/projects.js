const projects = [
  {
    title: "TalentDeck",
    category: "Full Stack",
    categoryColor: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
    description:
      "A creator & developer showcase platform where talents can create rich public profiles under categories. Visitors can explore without login. Features include media uploads, category-based search, profile discovery, and secure backend APIs.",
    skills: [
      { name: "Next.js", colorClasses: "bg-black/20 text-white border-black/20" },
      { name: "TypeScript", colorClasses: "bg-blue-500/20 text-blue-300 border-blue-500/20" },
      { name: "Node.js", colorClasses: "bg-green-500/20 text-green-300 border-green-500/20" },
      { name: "Express.js", colorClasses: "bg-gray-500/20 text-gray-300 border-gray-500/20" },
      { name: "MongoDB", colorClasses: "bg-green-700/20 text-green-300 border-green-700/20" },
      { name: "TailwindCSS", colorClasses: "bg-cyan-600/20 text-cyan-300 border-cyan-600/20" },
      { name: "Zod", colorClasses: "bg-pink-500/20 text-pink-300 border-pink-500/20" },
      { name: "Cloudinary", colorClasses: "bg-indigo-500/20 text-indigo-300 border-indigo-500/20" }
    ],
    liveLink: "https://www.linkedin.com/in/pritee-reactdev",
    codeLink: "https://github.com/PriteeAr0te",
    carouselData: []
  },
  {
    title: "Smart ContactBook",
    category: "Full Stack",
    categoryColor: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    description:
      "A secure, feature-rich contact management app with authentication, contact sharing between users, activity logs, export/import, and analytics dashboard. Designed with user-friendly UX and granular access control.",
    skills: [
      { name: "React.js", colorClasses: "bg-blue-600/20 text-blue-300 border-blue-600/20" },
      { name: "JavaScript", colorClasses: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" },
      { name: "Node.js", colorClasses: "bg-green-500/20 text-green-300 border-green-500/20" },
      { name: "Express.js", colorClasses: "bg-gray-500/20 text-gray-300 border-gray-500/20" },
      { name: "MongoDB", colorClasses: "bg-green-700/20 text-green-300 border-green-700/20" },
      { name: "TailwindCSS", colorClasses: "bg-cyan-600/20 text-cyan-300 border-cyan-600/20" },
      { name: "Cloudinary", colorClasses: "bg-indigo-500/20 text-indigo-300 border-indigo-500/20" },
      { name: "Redux", colorClasses: "bg-purple-500/20 text-purple-300 border-purple-500/20" },
      // { name: "Context API", colorClasses: "bg-orange-500/20 text-orange-300 border-orange-500/20" }
    ],
    liveLink: "https://smart-contact-book.netlify.app",
    codeLink: "https://github.com/PriteeAr0te",
    carouselData: []
  },
  {
    title: "YC Directory",
    category: "Full Stack",
    categoryColor: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    description:
      "A Next.js SaaS-style directory featuring SEO optimization, Partial Prerendering (PPR), Sanity CMS integration, NextAuth authentication, and robust data validation with Zod.",
    skills: [
      { name: "Next.js", colorClasses: "bg-black/20 text-white border-black/20" },
      { name: "TypeScript", colorClasses: "bg-blue-500/20 text-blue-300 border-blue-500/20" },
      { name: "PPR", colorClasses: "bg-emerald-500/20 text-emerald-300 border-emerald-500/20" },
      { name: "Sanity", colorClasses: "bg-red-500/20 text-red-300 border-red-500/20" },
      { name: "NextAuth", colorClasses: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" },
      { name: "Zod", colorClasses: "bg-pink-500/20 text-pink-300 border-pink-500/20" },
      { name: "TailwindCSS", colorClasses: "bg-cyan-600/20 text-cyan-300 border-cyan-600/20" }
    ],
    liveLink: "#",
    codeLink: "https://github.com/PriteeAr0te",
    carouselData: []
  },
  {
    title: "E-Commerce App",
    category: "Full Stack",
    categoryColor: "bg-green-500/10 text-green-300 border border-green-500/20",
    description:
      "An Amazon-like e-commerce platform with authentication, product browsing, cart functionality, and secure backend services for data handling.",
    skills: [
      { name: "React.js", colorClasses: "bg-blue-600/20 text-blue-300 border-blue-600/20" },
      { name: "JavaScript", colorClasses: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" },
      { name: "Redux", colorClasses: "bg-purple-500/20 text-purple-300 border-purple-500/20" },
      { name: "Node.js", colorClasses: "bg-green-500/20 text-green-300 border-green-500/20" },
      { name: "Express.js", colorClasses: "bg-gray-500/20 text-gray-300 border-gray-500/20" },
      { name: "MongoDB", colorClasses: "bg-green-700/20 text-green-300 border-green-700/20" },
      { name: "TailwindCSS", colorClasses: "bg-cyan-600/20 text-cyan-300 border-cyan-600/20" }
    ],
    liveLink: "#",
    codeLink: "https://github.com/PriteeAr0te",
    carouselData: []
  },
  {
    title: "JobSphere",
    category: "Frontend",
    categoryColor: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
    description:
      "A modern job portal UI that enables job seekers to browse, filter, and explore opportunities with responsive layouts and intuitive navigation.",
    skills: [
      { name: "React.js", colorClasses: "bg-blue-600/20 text-blue-300 border-blue-600/20" },
      { name: "JavaScript", colorClasses: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" },
      { name: "TailwindCSS", colorClasses: "bg-cyan-600/20 text-cyan-300 border-cyan-600/20" }
    ],
    liveLink: "#",
    codeLink: "https://github.com/PriteeAr0te",
    carouselData: []
  },
  {
    title: "RhythmPlay",
    category: "Frontend",
    categoryColor: "bg-pink-500/10 text-pink-300 border border-pink-500/20",
    description:
      "A Spotify-inspired music player with play, pause, previous, next, and timeline control. Fully responsive and built as a first dive into interactive web experiences.",
    skills: [
      { name: "HTML", colorClasses: "bg-red-500/20 text-red-300 border-red-500/20" },
      { name: "CSS", colorClasses: "bg-blue-500/20 text-blue-300 border-blue-500/20" },
      { name: "JavaScript", colorClasses: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" }
    ],
    liveLink: "#",
    codeLink: "https://github.com/PriteeAr0te",
    carouselData: []
  }
];

export default projects;