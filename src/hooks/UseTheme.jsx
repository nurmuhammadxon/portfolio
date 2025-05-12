import { useEffect, useState } from 'react'

function useTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    const element = document.documentElement

    const applyTheme = (currentTheme) => {
        if (currentTheme === 'dark') {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        applyTheme(theme)
    }, [theme])

    return [theme, setTheme]
}

export default useTheme
