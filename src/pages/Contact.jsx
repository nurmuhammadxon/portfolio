import React from 'react'
import { contacts } from '../util/constants'

function Contact() {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-8 px-6 sm:px-12 pt-10 sm:pt-20 bg-lightMode dark:bg-darkMode text-softDark dark:text-gainsboro'>
            <div className='text-center'>
                <h2 className='text-2xl sm:text-4xl font-semibold mb-6'>Bog'lanish uchun</h2>
                <div className='flex flex-col gap-6 sm:gap-8'>
                    {contacts.map(item => (
                        <div key={item.id} className='flex items-center gap-4 sm:gap-6 p-4 rounded-xl shadow-lg bg-gray-300 dark:bg-gray-900 transition duration-300 transform hover:scale-105 hover:shadow-2xl group'>
                            <span className='text-2xl sm:text-3xl text-primary group-hover:text-gray-400 transition-colors duration-300'>{item.icon}</span>
                            <a
                                href={item.link || '#'}
                                target={item.link ? '_blank' : '_self'}
                                rel='noopener noreferrer'
                                className='text-lg sm:text-xl font-medium text-softDark dark:text-gainsboro group-hover:text-gray-400 transition-colors duration-300'
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
