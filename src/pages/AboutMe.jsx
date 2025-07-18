import React from 'react'
import { FaImage } from "react-icons/fa";
import { mySkill } from '../util/constants'

function AboutMe() {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 px-6 sm:px-12 py-5 sm:pt-10 bg-lightMode dark:bg-darkMode text-softDark dark:text-gainsboro'>
            <div className='max-w-3xl w-full'>
                <h2 className='text-lg sm:text-2xl font-semibold sm:font-bold mb-2 md:mb-4 animated animatedFadeInDown fadeInDown'>
                    Assalomu alaykum, men Muhiddinov — front-end dasturchiman.
                </h2>
                <p className='text-base sm:text-lg leading-relaxed text-justify text-gray-600 dark:text-[#BFBFBF] animated animatedFadeInUp fadeInUp'
                    style={{ animationDelay: '150ms' }}
                >
                    Dasturlashga bo‘lgan qiziqishim oddiy g‘oyalarni funksional va chiroyli saytlar ko‘rinishida yaratish istagidan boshlangan.
                    Vaqt o‘tishi bilan <strong>HTML</strong>, <strong>CSS</strong> va <strong>JavaScript</strong> orqali foydalanuvchi interfeyslarini samarali va estetik jihatdan mukammal qilish bo‘yicha chuqur bilimlarga ega bo‘ldim.
                    Keyinchalik <strong>React</strong> va <strong>Tailwind CSS</strong> kabi zamonaviy kutubxonalar orqali ishlash tajribamni rivojlantirdim.
                </p>
                <p className='text-base sm:text-lg leading-relaxed mt-2 sm:mt-4 text-justify text-gray-600 dark:text-[#BFBFBF] animated animatedFadeInUp fadeInUp'
                    style={{ animationDelay: '200ms' }}
                >
                    Menga <em>toza, tushunarli va qayta ishlatiladigan</em> kod yozish yoqadi. Har bir loyiha — yangi sinov, har bir kod satri — yangi yondashuv.
                </p>
                <p className='text-base sm:text-lg leading-relaxed mt-2 sm:mt-4 text-justify text-gray-600 dark:text-[#BFBFBF] animated animatedFadeInUp fadeInUp'
                    style={{ animationDelay: '250ms' }}
                >
                    Maqsadim — foydalanuvchilar uchun qulay, ishonchli va zamonaviy veb-ilovalar yaratish hamda o‘z bilimlarimni doimiy ravishda oshirib borish.
                </p>
            </div>
            {/* my skills */}
            <div className="max-w-3xl w-full flex flex-col justify-center items-center">
                <div className="w-full flex justify-center sm:justify-around flex-wrap gap-2.5 animated animatedFadeInDown fadeInDown"
                    style={{ animationDelay: '350ms' }}
                >
                    {mySkill.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={skill.id}
                                className="w-32 py-2.5 px-3.5 bg-gray-500 dark:bg-gray-800 flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                            >
                                <div className="h-24 flex items-center justify-center">
                                    {
                                        typeof IconComponent === 'function' ? (
                                            <IconComponent
                                                size={80}
                                                style={{ color: `${skill.color}` }}
                                            />
                                        ) : typeof IconComponent === 'string' && IconComponent !== '' ? (
                                            <span dangerouslySetInnerHTML={{ __html: IconComponent }} />
                                        ) : (
                                            IconComponent
                                        )
                                    }
                                </div>
                                <h4 className="text-lg font-medium mt-2 text-gray-900 dark:text-gray-100">
                                    {skill.name}
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AboutMe
