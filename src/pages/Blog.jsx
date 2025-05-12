import React from 'react'
import { Link } from 'react-router-dom'
import { FcCalendar } from "react-icons/fc";
import { blogData } from '../util/constants'

function Blog() {
    return (
        <>
            <div className='w-full relative'>
                <div className='w-full animate-spinText'>
                    <p className='text-lg text-red-500 font-medium'>Blog sahifasi sinov rejimda ishlamoqda</p>
                </div>
            </div>
            <section className='w-full flex flex-col items-center justify-center gap-6 px-6 sm:px-12 pt-10 sm:pt-20 bg-lightMode dark:bg-darkMode text-softDark dark:text-gainsboro'>
                <div className='max-w-4xl w-full flex flex-col sm:flex-row items-center justify-between gap-2.5'>
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-3xl font-bold dark:text-yellow-600 animated animatedFadeInDown fadeInDown'>Blog</h2>
                        <p className='mt-2 text-gray-600 dark:text-[#BFBFBF] font-normal animated animatedFadeInUp fadeInUp'>
                            Kodni faqat kompyuter o‘qiydi. <br />
                            Lekin siz yozgan hayotni – barchalar ko‘radi. <br />
                            <Link to='https://t.me/code_and_life' target="_blank" rel="noopener noreferrer" className='text-yellow-600 dark:text-cyan-500 font-medium'>Koda va hayot</Link>
                        </p>
                    </div>
                    <div className='w-full sm:w-1/2 flex items-center justify-start sm:justify-end flex-wrap gap-2.5'>
                        {
                            blogData.map(item => (
                                <button
                                    className='inline-flex py-1.5 px-2.5 text-xs font-medium bg-gray-500 dark:bg-gray-900 rounded-lg cursor-pointer hover:text-blue-700 dark:hover:text-yellow-600 hover:bg-[#1976d266]  dark:hover:bg-[#ff7f1a33] transition-all duration-300 ease-in-out animated animatedFadeInDown fadeInDown'
                                    onClick={() => {
                                        const element = document.getElementById(`blog-${item.id}`);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    key={item.id}
                                >
                                    {item.title}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='max-w-4xl w-full flex flex-col items-start justify-start animated animatedFadeInUp fadeInUp'>
                    <div className='w-full flex items-center justify-start gap-2.5 border-b border-b-gray-800 dark:border-b-gray-400 pb-4'>
                        <h3 className='text-2xl font-bold text-blue-800 dark:text-yellow-600'>Bloglar</h3>
                        <FcCalendar className='text-2xl' />
                    </div>
                    <div className='w-full flex flex-col pt-5'>
                        {
                            blogData.map(item => (
                                <div
                                    key={item.id}
                                    id={`blog-${item.id}`}
                                    className='bg-gray-400 dark:bg-gray-900 py-2.5 px-3.5 rounded-lg mb-4'
                                >
                                    <div className='w-full flex py-1.5'>
                                        <span className=''>{item.date}</span>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold text-softDark dark:text-gainsboro'>{item.title}</h3>
                                        <p className='text-softDark dark:text-gray-400'>{item.des}</p>
                                    </div>
                                    <Link to={`#`} className='text-cyan-700 dark:text-yellow-600 mt-3 font-medium hover:underline'>
                                        Continue Reading...
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
