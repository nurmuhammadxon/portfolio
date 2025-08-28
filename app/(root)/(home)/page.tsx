import BtnLink from '@/components/shared/btn-link'
import { myskillsHero } from '@/constants'
import React from 'react'
import HeroImage from '../../../components/cards/hero-image'
import ConsoleCard from '../../../components/cards/console-card'

function HomePage() {
	return (
		<section className='my-container !h-screen max-sm:mt-20 mt-5 flex items-center'>
			<div className='container grid grid-cols-1 md:grid-cols-2 mx-auto gap-2.5'>
				<div className='order-2 md:order-1'>
					<h1 className='text-4xl lg:text-6xl font-space animate-pulse'>
						Mukhiddinov <span className='text-ring'>&lt;/&gt;</span>
					</h1>
					<div className='mt-4 w-full'>
						<div className='flex items-center gap-1.5 flex-wrap'>
							{myskillsHero.map((skill, i) => (
								<p className='text-muted-foreground' key={i}>
									{skill}
									{i !== myskillsHero.length - 1 && (
										<span className='mx-1'>|</span>
									)}{' '}
								</p>
							))}
						</div>
						<BtnLink slug='projects' title='My Projects' />
						<ConsoleCard />
					</div>
				</div>
				<div className='order-1 md:order-2 flex items-center justify-center'>
					<HeroImage />
				</div>
			</div>
		</section>
	)
}

export default HomePage
