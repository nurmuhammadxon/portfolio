export interface ChildProps {
	children: React.ReactNode
}

export interface IBtnLink {
	slug: string
	title: string
}

export interface ISkills {
	name: string
	level: number
	image: { url: string }
	color: { hex: string }
}

export interface ITools {
	tools: string[]
}

interface Skill {
  name: string
  color: {
    hex: string
  }
}

export interface IProjects {
  name: string
  description: string
  url: string
  image?: {
    url: string
  }
  skills?: Skill[]
}

