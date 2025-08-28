'use client'

import { motion, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SkillBarProps {
	level: number
	color: string
}

function SkillBar({ level, color }: SkillBarProps) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const controls = animate(0, level, {
			duration: 2,
			ease: 'easeInOut',
			onUpdate(value) {
				setCount(Math.floor(value))
			},
		})

		return () => controls.stop()
	}, [level])

	return (
		<div className='w-full h-4 bg-muted rounded-sm overflow-hidden relative'>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: `${level}%` }}
				transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
				className='h-full rounded-sm opacity-80'
				style={{ backgroundColor: color }}
			/>
			<span className='absolute inset-0 flex items-center justify-center font-semibold text-foreground'>
				{count}%
			</span>
		</div>
	)
}
export default SkillBar
