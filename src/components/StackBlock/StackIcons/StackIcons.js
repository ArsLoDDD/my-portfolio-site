import React, { useState } from 'react'
import StackIcon from './StackIcon/StackIcon'

const icons = [
	'html',
	'css',
	'js',
	'react',
	'redux',
	'sass',
	'tw',
	'mui',
	'git',
	'api',
]

const StackIcons = ({ isAdaptive = false }) => {
	return (
		<div className='flex items-center justify-center'>
			<div className='w-8/12 flex justify-center items-center gap-10 flex-wrap '>
				{icons.map((icon, index) => (
					<StackIcon
						icon={icon}
						key={icon}
						index={index}
						isAdaptive={isAdaptive}
					/>
				))}
			</div>
		</div>
	)
}

export default StackIcons
