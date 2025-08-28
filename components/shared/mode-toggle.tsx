'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return (
		mount && (
			<Button
				size={'icon'}
				variant={'ghost'}
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'dark' ? (
					<Sun className='text-amber-300 size-8' />
				) : (
					<Moon className='size-8 text-blue-300' />
				)}
			</Button>
		)
	)
}

export default ModeToggle
