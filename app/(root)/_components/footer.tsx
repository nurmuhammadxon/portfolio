import React from 'react'

function Footer() {
	return (
		<footer className='max-w-6xl py-3.5 max-md:mt-8 mx-auto flex items-center justify-center'>
			<p className='text-sm text-muted-foreground text-center'>
				© {new Date().getFullYear()} Muhiddinov. Barcha huquqlar himoyalangan.
			</p>
		</footer>
	)
}

export default Footer
