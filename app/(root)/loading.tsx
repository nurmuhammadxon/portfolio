import { LoaderCircle } from 'lucide-react'
import React from 'react'

function Loading() {
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<LoaderCircle className='animate-spin size-16 text-primary' />
		</div>
	)
}

export default Loading
