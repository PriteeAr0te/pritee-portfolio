import Link from "next/link";

export default function ProjectCard({
  title,
  category,
  categoryColor,
  description,
  skills,
  liveLink,
  codeLink,
  carouselData
}) {
  return (
    <div className="group h-full">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col
                      border-gray-700/50 group-hover:border-emerald-500/50 shadow-lg group-hover:shadow-xl shadow-black/20 group-hover:shadow-emerald-500/10 group-hover:translate-y-[-5px]">

        <div className="relative overflow-hidden aspect-video">
        </div>

        <div className="p-6 pt-4 flex flex-col flex-grow">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className={`inline-flex items-center justify-center ${categoryColor} text-xs font-semibold px-2 py-0.5 rounded-full shadow-inner`}>
              {category}
            </div>
          </div>

          <p className="mt-2 text-gray-300 flex-grow">{description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-2.5 py-1 text-xs rounded-full border ${skill.colorClasses}`}
              >
                {skill.name}
              </span>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="flex space-x-4">
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                aria-label={`View live demo of ${title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-external-link mr-1.5">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                <span>Live Demo</span>
              </Link>

              <Link
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                aria-label={`View code for ${title} on GitHub`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-github mr-1.5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 
                           1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 
                           5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>Code</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
