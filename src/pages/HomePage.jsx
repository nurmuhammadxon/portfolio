import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// icons
import { FaCode } from 'react-icons/fa'
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config'
// photo
import myPhoto from '../assets/myPhoto.png'
import SocialLink from '../components/SocialLink';

function HomePage() {
    const navigate = useNavigate()
    const [linksData, setlinksData] = useState([])

    const getDocuments = async () => {
        const querySnapshot = await getDocs(collection(db, "socialLinks"));
        const data = []
        querySnapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
        })
        setlinksData(data)
    }

    useEffect(() => {
        getDocuments()
    }, [])

    return (
        <section className='w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-5 px-5 py-5 sm:py-20'>
            <div className='flex flex-col items-start justify-center'>
                <h1 className='text-3xl font-bold flex items-center gap-2.5 animated animatedFadeInUp fadeInUp'>
                    Muhiddinov  <FaCode className="text-blue-600 text-4xl" />
                </h1>
                <p className='font-medium text-sm text-gray-600 dark:text-[#BFBFBF] mt-2 animated animatedFadeInUp fadeInUp'
                    style={{ animationDelay: '150ms' }}
                >
                    Men yarataman. Yaxshilayman. Mukammallashtiraman.
                </p>
                <div className='mt-5 flex gap-4 text-2xl'>
                    {linksData.map(item => (
                        <SocialLink
                            key={item.id}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            delay={item.delay}
                            bgColor={item.bgColor}
                            hoverColor={item.hoverColor}
                        />
                    ))}
                </div>
                <div className='mt-4'>
                    <p className='font-medium text-sm text-gray-600 dark:text-[#BFBFBF] animated animatedFadeInUp fadeInUp'
                        style={{ animationDelay: '200ms' }}
                    >
                        Har bir yechim — mukammallikka intilish. <br />
                        Har bir xato — o‘rganish va rivojlanishning qismidir.
                    </p>
                </div>
                <div className='w-full flex items-center sm:justify-end sm:pr-2.5'>
                    <button
                        className='mt-5 py-1.5 sm:py-2 px-2.5 sm:px-3.5 bg-gray-300 dark:bg-gray-800 shadow-md rounded-lg text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 ease-in cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800/80 animated animatedFadeInUp fadeInUp'
                        style={{ animationDelay: '300ms' }}
                        onClick={() => navigate('/about')}
                    >
                        About Me
                    </button>
                </div>
            </div>
            <div
                className='size-64 md:size-96 flex items-center justify-center animated animatedFadeInUp fadeInUp'
            >
                <img
                    src={myPhoto}
                    alt="muhiddinov image"
                    className='size-full rounded-full object-cover object-center'
                />
            </div>
        </section>
    )
}

export default HomePage