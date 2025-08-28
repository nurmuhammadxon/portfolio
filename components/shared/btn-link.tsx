'use client'

import { IBtnLink } from '@/types'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

function BtnLink({ slug, title }: IBtnLink) {
	return (
		<MotionLink
			href={`/${slug}`}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 201, 80, 0.6)' }}
			whileTap={{ scale: 0.8, backgroundColor: 'rgba(0, 130, 53,0.6)' }}
			className='inline-block max-md:w-full max-md:text-center font-semibold text-lg px-2.5 py-1.5 rounded-md mt-3.5 bg-sidebar-primary hover:opacity-90'
		>
			{title}
		</MotionLink>
	)
}

export default BtnLink
