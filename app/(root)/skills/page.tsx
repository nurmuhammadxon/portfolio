import { Card } from '@/components/ui/card'
import { getMySkills, getTools } from '@/server/skills.server'
import Image from 'next/image'
import React from 'react'
import SkillBar from '../../../components/cards/skill-bar'
import { GitBranch } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'My Skills',
}

async function SkillsPage() {
	const skills = await getMySkills()
	const tools = await getTools()

	return (
		<section className='my-container'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5'>
				{skills.map(skill => (
					<Card
						key={skill.name}
						className='bg-background p-2 flex flex-row items-center gap-3'
					>
						<div className='flex-shrink-0'>
							<Image
								src={skill.image?.url || '/fallback.png'}
								alt={skill.name}
								width={80}
								height={80}
								className='object-cover'
							/>
						</div>
						<div className='w-full flex flex-col'>
							<h1 className='text-lg font-semibold'>{skill.name}</h1>
							<SkillBar level={skill.level} color={skill.color.hex} />
						</div>
					</Card>
				))}
			</div>
			<div className='mt-5'>
				<h2 className='flex items-center text-2xl font-semibold'>
					<GitBranch className='text-primary size-9 mr-2' /> Tools &
					Technologies
				</h2>

				<div className='flex items-center gap-2.5 flex-wrap p-2'>
					{tools.tools &&
						tools.tools.map(i => (
							<Badge
								key={i}
								variant='secondary'
								className='text-base p-1 text-muted-foreground'
							>
								{i}
							</Badge>
						))}
				</div>
			</div>
		</section>
	)
}

export default SkillsPage
