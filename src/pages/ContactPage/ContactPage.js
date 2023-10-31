import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import DownloadButton from '../../components/DownloadBtn/DownloadBtn'

const ContactPage = () => {
	return (
		<div className='h-full min-h-screen pt-20'>
			<div className='w-8/12 m-auto flex flex-col items-center'>
				<LinearGradient
					gradient={['to right', '#6B46C1 ,#EC4899']}
					className='text-4xl tracking-widest font-bold font-poppins mb-10 pt-10
				'
				>
					Contact Information
				</LinearGradient>
				<p className='w-11/12 text-white text-3xl text-center leading-relaxed mb-16'>
					I am very interested in the position of junior React developer, so I
					am continuing to develop and acquire knowledge in this field. If I
					have piqued your interest, I am ready to answer all your questions and
					complete any test assignments. You can reach out to me anytime on
					<a
						className='font-bold text-pink-400 hover:text-purple-500 duration-200'
						href='https://www.t.me/arsloddd'
					>
						{' '}
						Telegram{' '}
					</a>
					or {' '}
					<a
						className='font-bold text-pink-400 hover:text-purple-500 duration-200'
						href='mailto:shkolnikovarseniyrr@gmail.com'
					>
						Email
					</a>
					, and I will try to respond as quickly as possible.
				</p>
				<DownloadButton />
			</div>
		</div>
	)
}

export default ContactPage
