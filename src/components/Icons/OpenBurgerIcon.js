import React from 'react'

const OpenBurgerIcon = ({ handleOpen }) => {
	return (
		<svg
			onClick={() => handleOpen(true)}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-8 h-8 text-white sticky right-8 z-50'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3.75 9h16.5m-16.5 6.75h16.5'
			/>
		</svg>
	)
}

export default OpenBurgerIcon
