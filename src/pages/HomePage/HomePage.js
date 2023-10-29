import React from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import StackBlock from '../../components/StackBlock/StackBlock'
import ProjectBlock from '../../components/ProjectBlock/ProjectBlock'

const HomePage = () => {
	return (
		<div className='pt-20 flex flex-col items-center gap-44'>
			<AboutMe />
			<StackBlock />
			<ProjectBlock />
		</div>
	)
}

export default HomePage
