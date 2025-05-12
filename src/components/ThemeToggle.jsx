import React from 'react'
import useTheme from '../hooks/UseTheme'
import { TbSunHigh, TbMoonStars } from "react-icons/tb"

const themes = {
    light: { icon: <TbSunHigh /> },
    dark: { icon: <TbMoonStars /> },
}

function ThemeToggle() {
    const [theme, setTheme] = useTheme()

    return (
        <div className="flex gap-2 items-center">
            {theme !== 'light' && (
                <button
                    onClick={() => setTheme('light')}
                    className="px-3 py-1 bg-transparent text-2xl sm:text-3xl text-yellow-500 transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-110 cursor-pointer"
                >
                    {themes.light.icon}
                </button>
            )}
            {theme !== 'dark' && (
                <button
                    onClick={() => setTheme('dark')}
                    className="px-3 py-1 bg-transparent text-2xl sm:text-3xl text-blue-400 transition-all duration-300 ease-in-out hover:text-sky-400 hover:scale-110 cursor-pointer"
                >
                    {themes.dark.icon}
                </button>
            )}
        </div>

    )
}

export default ThemeToggle
