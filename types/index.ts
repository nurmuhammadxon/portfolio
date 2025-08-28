export interface ChildProps {
	children: React.ReactNode
}

export interface IBtnLink {
	slug: string
	title: string
}

export interface ITools {
	tools: string[]
}

export interface Skill {
	name: string
	level: number
	image: { url: string }
	color: { hex: string }
}

export interface Project {
	name: string
	description: string
	url: string
	image?: { url: string }
	skills?: Skill[]
}
