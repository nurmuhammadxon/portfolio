import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react'

export const navLinks = [
	{
		name: 'Home',
		slug: '/',
	},
	{
		name: 'About',
		slug: '/about',
	},
	{
		name: 'Skills',
		slug: '/skills',
	},
	{
		name: 'Projects',
		slug: '/projects',
	},
	// {
	// 	name: 'Blogs',
	// 	slug: '/blogs',
	// },
	{
		name: 'Contact',
		slug: '/contact',
	},
]

export const myskillsHero = [
	'HTML',
	'CSS',
	'TailwindCss',
	'Bootstrap',
	'UI Library (MUI, ShadCN UI)',
	'JavaScript',
	'TypeScript',
	'ReactJs',
	'NextJs',
	'Redux',
]

export const tools = [
	'Git',
	'GitHub',
	'Axios',
	'Figma',
	'CMS',
	'Postman',
	'Vite',
]

export const contacts = [
	{
		id: 1,
		href: 'mailto:muhiddinovnurmuhammadxon1@gmail.com',
		icon: Mail,
		label: 'muhiddinovnurmuhammadxon1@gmail.com',
	},
	{
		id: 2,
		href: 'tel:+998932452005',
		icon: Phone,
		label: '+998 (93) 245 20 05',
	},
	{
		id: 3,
		href: 'https://www.linkedin.com/in/nurmuhammadxon-muhiddinov-33a2a8342/',
		icon: Linkedin,
		label: 'nurmuhammadxon',
		external: true,
	},
	{
		id: 4,
		href: 'https://t.me/n_fozilovich',
		icon: Send,
		label: '@n_fozilovich',
		external: true,
	},
	{
		id: 5,
		href: 'https://github.com/nurmuhammadxon',
		icon: Github,
		label: '@nurmuhammadxon',
		external: true,
	},
]
