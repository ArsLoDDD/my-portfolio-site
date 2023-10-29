import React from 'react'
import { Link } from 'react-router-dom'

const TextLink = ({ text, to }) => {
	return (
		<Link className='text-gray-item hover:text-white font-dmsans' to={to}>
			{text}
		</Link>
	)
}

export default TextLink
