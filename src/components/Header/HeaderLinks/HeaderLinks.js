import React from 'react'
import TextLink from '../../TextLink/TextLink'

const HeaderLinks = ({ links }) => {
	return (
		<div className='flex gap-6'>
			{Object.entries(links).map(link => (
				<TextLink to={link[1]} text={link[0]} key={`${link[1]}${link[2]}`} />
			))}
		</div>
	)
}

export default HeaderLinks
