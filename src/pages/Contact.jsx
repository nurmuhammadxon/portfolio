import React from 'react';
import { contacts } from '../util/constants';
import ContactItem from '../components/ContactItem';

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
                        <ContactItem icon={item.icon} link={item.link} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
