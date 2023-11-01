import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const TextLink = ({ text, to, onClose = null }) => {
	const [isActive, setIsActive] = useState(false)
	const param = useLocation()
	useEffect(() => {
		if (param.pathname === to) {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [param.pathname])
	return (
		<Link
			onClick={onClose ? () => onClose(false) : ''}
			className={`text-gray-item ${
				isActive ? 'text-white font-bold ' : 'text-gray-item'
			} hover:text-white font-dmsans`}
			to={to}
		>
			{text}
		</Link>
	)
}

export default TextLink
