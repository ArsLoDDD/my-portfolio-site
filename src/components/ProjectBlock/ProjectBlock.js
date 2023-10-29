import React from 'react'
import BlockName from '../BlockName/BlockName'

const blockInfo = ['My Projects', 'Diving Deeper into My Portfolio World']

const ProjectBlock = () => {
	return (
		<div>
			<BlockName title={blockInfo[0]} text={blockInfo[1]} />
		</div>
	)
}

export default ProjectBlock
