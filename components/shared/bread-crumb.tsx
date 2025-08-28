'use client'

import { Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function BreadCrumb() {
	const pathname = usePathname()
	const pathnames = pathname.split('/').filter(x => x)

	if (pathnames.length === 0) return null

	return (
		<div className='mt-[15vh] max-w-6xl mb-5 mx-auto justify-center flex items-center space-x-2 text-base text-muted-foreground'>
			<Link href={'/'} className='flex items-center gap-1.5'>
				<Home className='size-4' /> Home
			</Link>
			{pathnames.map((i, idx) => {
				const href = '/' + pathnames.slice(0, idx + 1).join('/')
				const isList = idx === pathnames.length - 1

				return (
					<span className='flex items-center space-x-2' key={idx}>
						<span>/</span>
						{isList ? (
							<span className='text-foreground'>{i}</span>
						) : (
							<Link href={href}>{i}</Link>
						)}
					</span>
				)
			})}
		</div>
	)
}

export default BreadCrumb
