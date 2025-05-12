import React, { useState } from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5";
import ThemeToggle from './ThemeToggle'
import { headerNavBar } from '../util/constants'

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()
    let pathName = useLocation().pathname.split('/')[1]

    if (pathName === '') {
        pathName = 'home'
    }

    return (
        <header className='flex items-center justify-between py-3.5 px-2.5 relative'>
            <h1
                className='ml-5 text-softDark dark:text-gainsboro font-bold text-2xl cursor-pointer'
                onClick={() => navigate('/')}
            >
                muhiddinov
            </h1>
            {/* desktop */}
            <div className='hidden sm:flex items-center gap-3.5 md:pr-11'>
                <nav className='flex gap-2.5'>
                    {
                        headerNavBar.map(item => (
                            <div
                                key={item.id}
                            >
                                <Link
                                    to={item.link}
                                    className={`text-base transition-colors duration-300 hover:text-gray-800  dark:hover:text-gray-100
                                    ${item.title.toLowerCase() === pathName
                                            ? 'font-semibold text-gray-950 dark:text-gray-200'
                                            : 'font-medium text-gray-600 dark:text-gray-400'}`}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))
                    }
                </nav>
                <ThemeToggle />
            </div>
            {/* mobile */}
            <div className="flex sm:hidden relative">
                <button
                    className="text-3xl text-darkMode dark:text-gainsboro p-2"
                    onClick={() => setOpenMenu(true)}
                >
                    <IoMenu />
                </button>

                <div
                    className={`w-[240px] h-screen fixed top-0 right-0 z-40 
                bg-lightMode dark:bg-darkMode shadow-xl transform transition-transform duration-300
                ${openMenu ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
                >
                    <div className="flex justify-end p-4">
                        <button
                            className="text-2xl text-gray-700 dark:text-gray-300"
                            onClick={() => setOpenMenu(false)}
                        >
                            <IoClose />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4 px-4">
                        {headerNavBar.map(item => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className={`text-base transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-100 hover:underline
                                ${item.title.toLowerCase() === pathName
                                        ? 'font-semibold text-gray-950 dark:text-gray-200'
                                        : 'font-medium text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setOpenMenu(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-600">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header