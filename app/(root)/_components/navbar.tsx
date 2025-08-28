'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import MobileMenu from './mobile'
import { usePathname } from 'next/navigation'

function Navbar() {
	const pathname = usePathname()

	return (
		<header className='max-w-6xl mx-auto h-[12vh] fixed inset-0 top-0.5 z-50'>
			<div className='px-2.5 flex items-center justify-between shadow-xl dark:shadow-black/20 shadow-black/10 rounded-md h-full bg-background'>
				<Link href={'/'}>
					<h1 className='max-lg:text-4xl text-5xl font-space'>Mukhiddinov</h1>
				</Link>
				<nav className='flex items-center gap-2'>
					{/* desktop */}
					<div className='hidden md:flex items-center gap-1.5'>
						{navLinks.map(i => (
							<Link
								href={i.slug}
								key={i.slug}
								className={`hover:bg-primary/20 rounded-sm p-1 font-space text-xl text-muted-foreground ${
									pathname === i.slug && 'text-primary'
								} `}
							>
								{i.name}
							</Link>
						))}
					</div>
					<ModeToggle />
					{/* mobile */}
					<MobileMenu />
				</nav>
			</div>
		</header>
	)
}

export default Navbar
