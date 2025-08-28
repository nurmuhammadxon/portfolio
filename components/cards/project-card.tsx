import { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../ui/card'

interface ProjectCardProps {
	project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card className='overflow-hidden bg-background !py-0'>
			{project.image?.url && (
				<div className='overflow-hidden rounded-xl'>
					<Image
						src={project.image?.url || '/fallback.png'}
						alt={project.name}
						width={500}
						height={300}
						className='w-full h-48 object-cover hover:scale-105 transition-transform duration-200'
						priority
					/>
				</div>
			)}
			<div className='p-4 pt-1.5'>
				<h2 className='text-xl font-semibold uppercase'>{project.name}</h2>
				<p className='text-muted-foreground text-sm my-2'>
					{project.description}
				</p>

				<div className='flex flex-wrap gap-2 mt-3'>
					{project.skills?.map(skill => (
						<span
							key={skill.name}
							className='px-2 py-1 rounded text-xs text-amber-50 font-medium'
							style={{ backgroundColor: skill.color.hex }}
						>
							{skill.name}
						</span>
					))}
				</div>

				<Link
					href={`https://${project.url}.vercel.app/`}
					target='_blank'
					className='inline-block mt-4 text-blue-600 hover:underline'
				>
					Visit Project →
				</Link>
			</div>
		</Card>
	)
}

export default ProjectCard
