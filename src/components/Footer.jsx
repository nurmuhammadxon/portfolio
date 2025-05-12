import React from 'react'

function Footer() {
    const now = new Date()
    const year = now.getFullYear();

    return (
        <footer className='w-full'>
            <p class="text-sm font-normal text-gray-600 dark:text-gray-400 text-center py-4 select-none">
                © {year} Muhiddinov. Barcha huquqlar himoyalangan.
            </p>
        </footer>
    )
}

export default Footer