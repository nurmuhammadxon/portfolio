import { Skill, ITools } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getMySkills = async () => {
	const query = gql`
		query MyQuery {
			skills(first: 100) {
				name
				level
				image {
					url
				}
				color {
					hex
				}
			}
		}
	`
	const { skills } = await request<{ skills: Skill[] }>(graphqlAPI, query)
	return skills
}

export const getTools = async (): Promise<ITools> => {
	const query = gql`
		query MyQuery {
			tools {
				tools
			}
		}
	`

	const response = await request<{ tools: { tools: string[] }[] }>(
		graphqlAPI,
		query
	)

	return {
		tools: response.tools[0]?.tools || [],
	}
}
