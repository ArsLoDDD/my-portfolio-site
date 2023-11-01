import React from 'react'
import { motion } from 'framer-motion'
import HeaderLinks from '../Header/HeaderLinks/HeaderLinks'
import { linksDesktop } from '../Header/Header'
import IconItems from '../IconItems/IconItems'

const BurgerMenu = ({ isOpen, onClose }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.3 }}
			className='h-full w-full min-h-screen fixed z-40 left-0 top-0 bg-gray-bg opacity-95 flex justify-center items-start'
		>
			<HeaderLinks links={linksDesktop} burger={true} onClose={onClose} />

			<div className='bottom-20 fixed'>
				<IconItems big={true} />
			</div>
		</motion.div>
	)
}

export default BurgerMenu
