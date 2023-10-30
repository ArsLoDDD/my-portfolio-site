import React from 'react'
import StackIcon from './StackIcon/StackIcon'

const icons = [
	'api',
	'css',
	'git',
	'html',
	'js',
	'mui',
	'react',
	'redux',
	'sass',
	'tw',
]

const StackIcons = () => {
	return (
		<div className='flex items-center justify-center'>
			<div className='w-8/12 flex justify-center items-center gap-10 flex-wrap'>
				{icons.map(icon => (
					<StackIcon icon={icon} key={icon} />
				))}
			</div>
		</div>
	)
}

export default StackIcons
