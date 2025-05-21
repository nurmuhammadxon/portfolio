import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// componetns
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <div className='min-h-screen flex flex-col bg-lightMode text-softDark dark:bg-darkMode dark:text-gainsboro overflow-hidden'>
            <Header />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout