import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import BreadCrumb from '@/components/shared/bread-crumb'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Navbar />
			<BreadCrumb />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
