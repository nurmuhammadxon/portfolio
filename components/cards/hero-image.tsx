import Image from 'next/image'
import React from 'react'

function HeroImage() {
	return (
		<div className='relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center overflow-hidden rounded-full'>
			<Image
				src='/my_image.jpg'
				alt='my image'
				fill
				priority
				className='object-cover rounded-full grayscale hover:grayscale-0 hover:scale-105 transition'
			/>
		</div>
	)
}

export default HeroImage
