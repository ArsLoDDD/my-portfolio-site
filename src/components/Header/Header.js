import React, { useEffect } from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'
import IconItems from '../IconItems/IconItems'
import Logo from '../Logo/Logo'
import useScreenSize from '../../hooks/useScreenSize'

const linksDesktop = {
	Home: '/',
	'About Me': '/aboutMe',
	'Tech Stack': '/stack',
	Projects: '/project',
	Contact: '/contact',
}

const Header = () => {
	const screenSize = useScreenSize()

	return (
		<header className='flex justify-between items-center py-6'>
			<div>
				<Logo />
			</div>
			<div className='md:gap-5 2xl:gap-10 flex justify-between items-center'>
				<HeaderLinks links={linksDesktop} />
				{screenSize !== 'mobile' && <IconItems />}
			</div>
		</header>
	)
}

export default Header
