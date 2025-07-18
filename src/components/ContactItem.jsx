import React from 'react'

function ContactItem({ icon, link, title }) {

    return (
        <div
            className="flex items-center gap-3 md:gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 group animated animatedFadeInDown fadeInDown"
            style={{ animationDelay: '200ms' }}
        >
            <span className="text-base md:text-3xl sm:text-4xl text-primary dark:text-gainsboro group-hover:text-accent transition-colors duration-300">
                {icon}
            </span>
            <a
                href={link || '#'}
                target={link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-sm md:text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300"
            >
                {title}
            </a>
        </div>)
}

export default ContactItem
