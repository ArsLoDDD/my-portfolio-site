import React from 'react'

const StackIcon = ({ icon }) => {
	console.log(icon)
	return (
		<div className='h-20 w-20 '>
			<img src={`./img/${icon}Logo.png`} alt='' />
		</div>
	)
}

export default StackIcon
