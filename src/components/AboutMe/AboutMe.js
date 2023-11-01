import React from 'react'
import Photo from '../Photo/Photo'
import AboutMeText from './AboutMeText/AboutMeText'

const AboutMe = () => {
	return (
		<div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-center md:justify-around'>
			<AboutMeText />
			<Photo />
		</div>
	)
}

export default AboutMe
