import React from 'react'
import TgIcon from '../Icons/TgIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import GitHubIcon from '../Icons/GitHubIcon'

const classN =
	'w-6 h-6 hover:fill-white hover:shadow-2xl hover:shadow-white transition-all duration-500 '

const classNBig =
	'w-12 h-12 hover:fill-white hover:shadow-2xl hover:shadow-white transition-all duration-500 '

const IconItems = ({ big = false }) => {
	return (
		<div className={`flex ${big ? 'gap-8' : 'gap-3'}`}>
			<TgIcon classN={big ? classNBig : classN} />
			<GitHubIcon classN={big ? classNBig : classN} />
			<LinkedinIcon classN={big ? classNBig : classN} />
		</div>
	)
}

export default IconItems
