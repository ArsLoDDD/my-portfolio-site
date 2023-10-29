import React from 'react'
import Photo from '../Photo/Photo'
import AboutMeText from './AboutMeText/AboutMeText'

const AboutMe = () => {
	return (
		<div className='flex justify-around'>
			<AboutMeText />
			<Photo />
		</div>
	)
}

export default AboutMe
