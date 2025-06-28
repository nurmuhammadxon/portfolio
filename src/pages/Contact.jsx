import React from 'react';
import { contacts } from '../util/constants';

function Contact() {
    return (
        <section className="w-full px-6 sm:px-12 py-8 transition-all duration-500">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-primary dark:text-white animated animatedFadeInUp fadeInUp"
                    style={{ animationDelay: '100ms' }}
                >
                    Bog'lanish uchun
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-12 animated animatedFadeInUp fadeInUp"
                    style={{ animationDelay: '150ms' }}
                >
                    Quyidagi manzillar orqali menga bemalol murojaat qilishingiz mumkin.
                </p>
                <div className="flex flex-col gap-6 sm:gap-8">
                    {contacts.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 md:gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 group animated animatedFadeInDown fadeInDown"
                            style={{ animationDelay: '200ms' }}
                        >
                            <span className="text-base md:text-3xl sm:text-4xl text-primary dark:text-gainsboro group-hover:text-accent transition-colors duration-300">
                                {item.icon}
                            </span>
                            <a
                                href={item.link || '#'}
                                target={item.link ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="text-sm md:text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300"
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
