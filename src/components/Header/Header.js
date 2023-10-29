import React from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'
import IconItems from '../IconItems/IconItems'

const linksDesktop = {
	Home: '/',
	About: '/aboutMe',
	'Tech Stack': '/stack',
	Projects: '/project',
	Contact: '/contact',
}

const Header = () => {
	return (
		<header className='flex justify-between py-6'>
			<div>
				<span>LOGO</span>
			</div>
			<div className='w-6/12 flex justify-between'>
				<HeaderLinks links={linksDesktop} />
				<IconItems />
			</div>
		</header>
	)
}

export default Header
