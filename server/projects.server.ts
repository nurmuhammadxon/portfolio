import { Project } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getProjects = async () => {
	const query = gql`
		query MyQuery {
			projects(first: 100) {
				name
				description
				url
				image {
					url
				}
				skills {
					color {
						hex
					}
					name
				}
			}
		}
	`
	const { projects } = await request<{ projects: Project[] }>(graphqlAPI, query)
	return projects.map(project => ({
		...project,
		image: project.image || { url: '/fallback.png' },
		skills: project.skills || [],
	}))
}
