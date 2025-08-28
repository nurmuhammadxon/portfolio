import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger className='block md:hidden'>
				<MenuIcon className='size-10' />
			</SheetTrigger>
			<SheetContent aria-label='Main Menu'>
				<SheetHeader className='hidden'>
					<SheetTitle>Mobile Menu</SheetTitle>
					<SheetDescription>Mobile menu description</SheetDescription>
				</SheetHeader>
				<div className='flex flex-col gap-2 mt-12 mx-2.5'>
					{navLinks.map(i => (
						<Link
							href={i.slug}
							key={i.slug}
							className='hover:bg-indigo-300/20 rounded-sm p-1 font-space text-xl'
						>
							<SheetClose>{i.name}</SheetClose>
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileMenu
