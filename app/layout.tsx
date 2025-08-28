import type { Metadata } from 'next'
import { Space_Grotesk, Work_Sans } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '../components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import NextTopLoader from 'nextjs-toploader'

const spaceGrotesk = Space_Grotesk({
	weight: ['500', '600'],
	variable: '--font-space-grotesk',
	subsets: ['latin'],
})

const workSans = Work_Sans({
	variable: '--font-work-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Mukhiddinov Nurmukhammadkhon',
	description: 'Portfolio web site',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				cz-shortcut-listen='true'
				className={`${workSans.variable} ${spaceGrotesk.variable} font-work  antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader showSpinner={false} color='#00bc7d' height={3} />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}
