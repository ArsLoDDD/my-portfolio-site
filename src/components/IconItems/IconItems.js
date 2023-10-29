import React from 'react'
import TgIcon from '../Icons/TgIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import GitHubIcon from '../Icons/GitHubIcon'

const classN =
	'w-6 h-6 hover:fill-white hover:shadow-2xl hover:shadow-white transition-all duration-500 '

const IconItems = () => {
	return (
		<div className='flex gap-3'>
			<TgIcon classN={classN} />
			<GitHubIcon classN={classN} />
			<LinkedinIcon classN={classN} />
		</div>
	)
}

export default IconItems
