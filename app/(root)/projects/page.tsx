import ProjectCard from '@/components/cards/project-card'
import { getProjects } from '@/server/projects.server'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'My Projects',
}

async function ProjectsPage() {
	const projects = await getProjects()

	return (
		<section className='my-container py-10'>
			<div className='container mx-auto'>
				<div></div>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map(i => (
						<ProjectCard project={i} key={i.name} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsPage
