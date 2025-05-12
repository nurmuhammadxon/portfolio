import React from 'react'
import { projectData } from '../util/constants'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-6 px-6 sm:px-12 pt-10 sm:pt-20 bg-lightMode dark:bg-darkMode text-softDark dark:text-gainsboro">
            <div className="max-w-4xl w-full flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <div className='w-full sm:w-1/2'>
                    <h2 className="text-3xl font-bold dark:text-yellow-600 animated animatedFadeInDown fadeInDown">Project</h2>
                    <p className="mt-2 text-gray-600 dark:text-[#BFBFBF] font-normal animated animatedFadeInUp fadeInUp">
                        Har bir loyiha — yangi imkon, <br />
                        har bir kod satri — yangi izlanish.
                    </p>
                </div>
                <div className="w-full sm:w-1/2 flex items-center justify-start sm:justify-end flex-wrap gap-2.5">
                    {projectData.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                const element = document.getElementById(`project-${item.id}`);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="inline-flex py-1.5 px-2.5 text-xs font-medium bg-sky-100 dark:bg-gray-900 rounded-lg cursor-pointer hover:text-blue-700 dark:hover:text-yellow-600 hover:bg-[#1976d266] dark:hover:bg-[#ff7f1a33] transition-all duration-300 ease-in-out animated animatedFadeInDown fadeInDown"
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl w-full flex flex-col items-start justify-start animated animatedFadeInUp fadeInUp">
                <div className="w-full flex items-center justify-start gap-2.5 border-b border-gray-800 dark:border-gray-400 pb-4">
                    <h3 className="text-2xl font-bold text-blue-800 dark:text-yellow-600">Projectlar</h3>
                </div>

                <div className="w-full flex flex-col pt-5">
                    {projectData.map((item) => (
                        <div
                            key={item.id}
                            id={`project-${item.id}`}
                            className="h-44 bg-sky-50 dark:bg-gray-900 py-2.5 px-3.5 rounded-lg mb-4 flex flex-col sm:flex-row cursor-pointer transition-all duration-300 group hover:shadow-lg"
                        >
                            <div className="w-full sm:w-1/3 overflow-hidden rounded-md">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-300 ease-in-out"
                                />
                            </div>
                            <div className="w-full sm:w-2/3 pl-0 sm:pl-4 mt-3 sm:mt-0">
                                <h3 className="text-xl font-semibold text-softDark dark:text-gainsboro">
                                    {item.title}
                                </h3>
                                <p className="text-softDark dark:text-gray-400 mt-1">
                                    {item.des}
                                </p>
                                <div className="w-full mt-2 flex flex-wrap gap-1.5">
                                    {item.technology.map((tech, index) => {
                                        let colorClass = '';

                                        switch (tech.toLowerCase()) {
                                            case 'html':
                                                colorClass = 'text-red-500 bg-red-100 dark:bg-red-200';
                                                break;
                                            case 'css':
                                                colorClass = 'text-blue-700 bg-blue-100 dark:bg-blue-200';
                                                break;
                                            case 'javascript':
                                                colorClass = 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200';
                                                break;
                                            case 'react':
                                                colorClass = 'text-cyan-700 bg-cyan-100 dark:bg-cyan-200';
                                                break;
                                            case 'tailwindcss':
                                                colorClass = 'text-teal-700 bg-teal-100 dark:bg-teal-200';
                                                break;
                                            case 'axios':
                                                colorClass = 'text-indigo-700 bg-indigo-100 dark:bg-indigo-200';
                                                break;
                                            case 'redux':
                                                colorClass = 'text-purple-700 bg-purple-100 dark:bg-purple-200';
                                                break;
                                            default:
                                                colorClass = 'text-gray-700 bg-gray-400 dark:bg-gray-400';
                                        }

                                        return (
                                            <span
                                                key={`${item.id}-${tech}-${index}`}
                                                className={`py-1.5 px-2 rounded-md text-xs ${colorClass}`}
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                                <Link
                                    to={item.link}
                                    target="_blank"
                                    className="inline-block mt-3 text-sm text-blue-700 dark:text-sky-500 hover:underline hover:opacity-80 transition duration-200"
                                >
                                    Web saytga o‘tish →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
