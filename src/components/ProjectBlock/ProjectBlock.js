import React from 'react'
import BlockName from '../BlockName/BlockName'
import ProjectItem from './ProjectItem/ProjectItem'

const blockInfo = ['My Projects', 'Diving Deeper into My Portfolio World']

const projectItems = {
	img: 'https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
	title: 'Project Tile goes here',
	text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
	stack: 'HTML , JavaScript, SASS, React',
	link: 'https://www.twitch.tv/nix',
	isDone: false,
}

const ProjectBlock = () => {
	return (
		<div>
			<BlockName title={blockInfo[0]} text={blockInfo[1]} />
			<ProjectItem item={projectItems} />
		</div>
	)
}

export default ProjectBlock
