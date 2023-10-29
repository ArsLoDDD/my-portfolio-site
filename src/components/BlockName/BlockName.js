import React from 'react'

const BlockName = ({ title, text }) => {
	return (
		<article className='text-center mb-16'>
			<h2 className='text-gray-title text-6xl font-bold font-poppins mb-7'>
				{title}
			</h2>
			<p className='text-gray-item text-3xl font-dmsans'>{text}</p>
		</article>
	)
}

export default BlockName
