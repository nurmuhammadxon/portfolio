import { useEffect, useState } from 'react'

function useTheme() {
    const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'dark')

    const element = document.documentElement

    const applyTheme = (currentTheme) => {
        if (currentTheme === 'dark') {
            element.classList.add('dark')
            sessionStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            sessionStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        applyTheme(theme)
    }, [theme])

    return [theme, setTheme]
}

export default useTheme
