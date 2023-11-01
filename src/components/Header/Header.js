import React, { useEffect, useState } from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'
import IconItems from '../IconItems/IconItems'
import Logo from '../Logo/Logo'
import useScreenSize from '../../hooks/useScreenSize'
import CloseIcon from '../Icons/CloseIcon'
import OpenBurgerIcon from '../Icons/OpenBurgerIcon'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export const linksDesktop = {
	Home: '/',
	'About Me': '/aboutMe',
	'Tech Stack': '/stack',
	Projects: '/project',
	Contact: '/contact',
}

const Header = () => {
	const screenSize = useScreenSize()
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	return (
		<header className='flex justify-between items-center py-6 relative'>
			{screenSize === 'mobile' && (
				<BurgerMenu onClose={setIsBurgerOpen} isOpen={isBurgerOpen} />
			)}{' '}
			<div>
				<Logo />
			</div>
			{screenSize !== 'mobile' && (
				<div className='md:gap-5 2xl:gap-10 flex justify-between items-center'>
					<HeaderLinks links={linksDesktop} />
					<IconItems />
				</div>
			)}
			{screenSize === 'mobile' && (
				<>
					{isBurgerOpen ? (
						<CloseIcon onClose={setIsBurgerOpen} />
					) : (
						<OpenBurgerIcon handleOpen={setIsBurgerOpen} />
					)}
				</>
			)}
		</header>
	)
}

export default Header
