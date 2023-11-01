import React from 'react'
import TextLink from '../../TextLink/TextLink'

const HeaderLinks = ({ links, burger = false }) => {
	if (burger)
		return (
			<div className='flex flex-col text-3xl text-center gap-16 mt-32'>
				{Object.entries(links).map(link => (
					<TextLink to={link[1]} text={link[0]} key={`${link[1]}${link[2]}`} />
				))}
			</div>
		)
	return (
		<div className='flex text-sm sm:text-base sm:gap-4 whitespace-nowrap gap-2 xl:text-xl 2xl:text-2xl 2xl:gap-12'>
			{Object.entries(links).map(link => (
				<TextLink to={link[1]} text={link[0]} key={`${link[1]}${link[2]}`} />
			))}
		</div>
	)
}

export default HeaderLinks
