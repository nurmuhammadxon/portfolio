import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Blogs',
}

function BlogsPage() {
	return (
		<section className='my-container'>
			<h2 className='text-center text-muted-foreground font-semibold text-xl'>
				This page is empty
			</h2>
		</section>
	)
}

export default BlogsPage
