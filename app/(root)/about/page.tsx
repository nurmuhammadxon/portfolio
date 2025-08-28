import BtnLink from '@/components/shared/btn-link'
import { Card } from '@/components/ui/card'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'About Me',
}

function AboutPage() {
	return (
		<section className='my-container'>
			<div className='container mx-auto mt-5'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-2 max-md:gap-5'>
					<Card className='bg-background p-6 space-y-4'>
						<p className='text-muted-foreground text-lg'>
							Hello! I’m{' '}
							<span className='font-semibold'>Nurmukhammad Mukhiddinov</span>, a
							Front-end developer who builds modern and user-friendly web
							applications. I mainly work with JavaScript, TypeScript, React,
							and Next.js.
						</p>
						<p className='text-muted-foreground text-lg'>
							My mission is to craft digital products that not only look great
							but also deliver real value for businesses and users. I aim to
							transform ideas into efficient, scalable, and impactful web
							solutions.
						</p>
					</Card>

					<Card className='bg-background p-6 space-y-4'>
						<h2 className='text-xl font-semibold text-muted-foreground mb-2'>
							What I Do
						</h2>
						<ul className='list-disc list-inside text-muted-foreground space-y-2'>
							<li>
								<strong>Modern Web Development:</strong> Building responsive and
								fast web applications using React, Next.js, and Tailwind CSS.
							</li>
							<li>
								<strong>Problem Solving:</strong> Turning complex challenges
								into simple, creative, and effective solutions.
							</li>
							<li>
								<strong>Collaboration:</strong> Experienced in teamwork, agile
								methodologies, and delivering projects efficiently.
							</li>
						</ul>
					</Card>
				</div>

				<div className='w-full mt-5 md:mt-8 md:flex md:justify-end'>
					<BtnLink slug='skills' title='My Skills' />
				</div>
			</div>
		</section>
	)
}

export default AboutPage
