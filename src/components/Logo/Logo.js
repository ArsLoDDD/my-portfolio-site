import React from 'react'
import { Link } from 'react-router-dom'
import { LinearGradient } from 'react-text-gradients'

const Logo = () => {
	return (
		<Link to='/'>
			<LinearGradient
				gradient={['to left', '#6B46C1 ,#EC4899']}
				className='font-bold text-2xl'
			>
				ArseniyFE
			</LinearGradient>
		</Link>
	)
}

export default Logo
