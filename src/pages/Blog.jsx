import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// icons
import { FcCalendar } from "react-icons/fc";
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config'

function Blog() {
    const [blogData, setBlogData] = useState([])

    const getDocuments = async () => {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const data = []
        querySnapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
            setBlogData(data)
        })
    }

    useEffect(() => {
        getDocuments()
    }, [])

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
                        <p className='mt-2 text-gray-800 dark:text-[#BFBFBF] font-normal animated animatedFadeInUp fadeInUp'>
                            Kodni faqat kompyuter o‘qiydi. <br />
                            Lekin siz yozgan hayotni – barchalar ko‘radi. <br />
                            <Link to='https://t.me/code_and_life' target="_blank" rel="noopener noreferrer" className='text-yellow-600 dark:text-cyan-500 font-medium'>Koda va hayot</Link>
                        </p>
                    </div>
                    <div className='w-full sm:w-1/2 flex items-center justify-start sm:justify-end flex-wrap gap-2.5'>
                        {
                            blogData.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        const element = document.getElementById(`blog-${item.id}`);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    className='inline-flex py-1.5 px-2.5 text-xs font-medium bg-sky-100 dark:bg-gray-900 rounded-lg cursor-pointer hover:text-blue-700 dark:hover:text-yellow-600 hover:bg-[#1976d266] dark:hover:bg-[#ff7f1a33] transition-all duration-300 ease-in-out animated animatedFadeInDown fadeInDown'
                                >
                                    {item.title}
                                </button>
                            ))}
                    </div>
                </div>
                <div className='max-w-4xl w-full flex flex-col items-start justify-start animated animatedFadeInUp fadeInUp'>
                    <div className='w-full flex items-center justify-start gap-2.5 border-b border-gray-800 dark:border-gray-400 pb-4'>
                        <h3 className='text-2xl font-bold text-gray-700 dark:text-yellow-600'>Bloglar</h3>
                        <FcCalendar className='text-3xl' />
                    </div>
                    <div className='w-full flex flex-col py-5'>
                        {
                            blogData.map(item => (
                                <div
                                    key={item.id}
                                    id={`blog-${item.id}`}
                                    className="bg-gray-200 dark:bg-gray-900 py-2.5 px-3.5 rounded-lg mb-4 flex flex-col sm:flex-row cursor-pointer transition-all duration-300 group hover:shadow-lg"
                                >
                                    {/* Rasm qismi */}
                                    <div className="w-full sm:w-1/3 h-44 overflow-hidden rounded-md">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-300 ease-in-out"
                                        />
                                    </div>

                                    {/* Matn qismi */}
                                    <div className="w-full sm:w-2/3 pl-0 sm:pl-4 mt-3 sm:mt-0">
                                        <h3 className="text-xl font-semibold text-softDark dark:text-gainsboro">
                                            {item.title}
                                        </h3>

                                        <p className="text-softDark dark:text-gray-400 mt-1">
                                            {item.des}
                                        </p>

                                        {/* Tags uchun rangli label'lar */}
                                        <div className="w-full mt-2 flex flex-wrap gap-1.5">
                                            {item.tags.map((tag, index) => {
                                                const colors = [
                                                    'text-red-500 bg-red-100 dark:bg-red-200',
                                                    'text-blue-700 bg-blue-100 dark:bg-blue-200',
                                                    'text-yellow-700 bg-yellow-100 dark:bg-yellow-200',
                                                    'text-cyan-700 bg-cyan-100 dark:bg-cyan-200',
                                                    'text-teal-700 bg-teal-100 dark:bg-teal-200',
                                                    'text-indigo-700 bg-indigo-100 dark:bg-indigo-200',
                                                    'text-purple-700 bg-purple-100 dark:bg-purple-200',
                                                    'text-pink-700 bg-pink-100 dark:bg-pink-200',
                                                    'text-green-700 bg-green-100 dark:bg-green-200',
                                                ];

                                                const colorClass = colors[index % colors.length];

                                                return (
                                                    <span
                                                        key={`${item.id}-${tag}-${index}`}
                                                        className={`py-1.5 px-2 rounded-md text-xs ${colorClass}`}
                                                    >
                                                        #{tag}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Continue Reading link */}
                                        <Link
                                            to={`/blog/${item.slug || item.id}`}
                                            className="inline-block mt-3 text-sm text-blue-700 dark:text-sky-500 hover:underline hover:opacity-80 transition duration-200"
                                        >
                                            Continue Reading →
                                        </Link>
                                    </div>
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
