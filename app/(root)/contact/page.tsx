import ContactForm from '@/components/forms/contact-form'
import { contacts } from '@/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Me',
}

function ContactPage() {
	return (
		<section className='my-container'>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl font-crete-round'>Contact Mukhiddinov</h1>
					<p className='mt-2 text-muted-foreground'>
						I am here to help and answer any question you might have. I look
						forward to hearing from you
					</p>

					<div className='flex flex-col gap-2 mt-5'>
						{contacts.map(({ id, href, icon: Icon, label, external }) => (
							<a
								key={id}
								href={href}
								target={external ? '_blank' : '_self'}
								rel={external ? 'noopener noreferrer' : undefined}
								className='mt-2 flex items-center gap-3 hover:bg-primary/20 py-1.5 px-2.5 rounded-sm'
							>
								<Icon className='size-6' />
								<p className='text-sm md:text-lg'>{label}</p>
							</a>
						))}
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-crete-round mb-2'>Contact form</h1>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}

export default ContactPage
