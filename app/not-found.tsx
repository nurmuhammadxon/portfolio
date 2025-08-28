import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full h-screen flex items-center justify-center flex-col space-y-5'>
			<h2 className='text-muted-foreground text-3xl md:text-5xl font-space'>
				Not Found
			</h2>
			<p className='text-xl'>
				Sorry, the page you’re looking for cannot be found. Maybe it moved, or
				maybe it’s just shy. 🤷‍♀️📄
			</p>
			<Link
				href='/'
				className='mt-4 inline-block px-2.5 py-1.5 rounded-md text-lg hover:bg-primary/50 transition'
			>
				Return Home
			</Link>
		</div>
	)
}
