import React from 'react'
import Logo from '../Logo/Logo'
import IconItems from '../IconItems/IconItems'
import TextLink from '../TextLink/TextLink'
import HeaderLinks from '../Header/HeaderLinks/HeaderLinks'
import useScreenSize from '../../hooks/useScreenSize'

const linksDesktop = {
	Home: '/',
	'About Me': '/aboutMe',
	'Tech Stack': '/stack',
	Projects: '/project',
	Contact: '/contact',
}

const Footer = () => {
	const screenSize = useScreenSize()

	return (
		<div className='pt-20 pb-10'>
			<div className='flex justify-center items-center md:justify-between border-b-2 border-gray-700 pb-8 mb-8'>
				<Logo />
				{screenSize !== 'mobile' && (
					<div className='flex lg:flex-row flex-col justify-center items-center w-6/12 lg:w-full lg:justify-end lg:gap-10 md:gap-2'>
						<TextLink text='+38 (050) 777-04-26' to='tel:+380507770426' />
						<TextLink
							text='shkolnikovarseniyrr@gmail.com'
							to='mailto:shkolnikovarseniyrr@gmail.com'
						/>
						<IconItems />
					</div>
				)}
			</div>
			<div className='flex justify-center'>
				<HeaderLinks links={linksDesktop} />
			</div>
		</div>
	)
}

export default Footer
