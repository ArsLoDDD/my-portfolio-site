import React from 'react'
import BlockName from '../BlockName/BlockName'
import StackIcons from './StackIcons/StackIcons'

const blockInfo = [
	'My Tech Stack',
	' Technologies I’ve been working with recently',
]

const StackBlock = () => {
	return (
		<div>
			<BlockName title={blockInfo[0]} text={blockInfo[1]} />
			<StackIcons />
		</div>
	)
}

export default StackBlock
