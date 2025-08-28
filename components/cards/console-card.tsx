'use client'
import { Card } from '@/components/ui/card'
import useTypewriter from '@/hooks/useTypewriter'
import React from 'react'

function ConsoleCard() {
	return (
		<Card className='mt-10 h-32 pl-5 dark:bg-gray-950 bg-neutral-100 custom-grid border border-green-900 rounded-md flex justify-center'>
			<p className='text-lg font-medium text-green-600'>
				<span>&gt;</span>
				{useTypewriter(["console.log('Hello World!')"])}
			</p>
		</Card>
	)
}

export default ConsoleCard
