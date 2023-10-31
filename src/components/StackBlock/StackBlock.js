import React from 'react'
import BlockName from '../BlockName/BlockName'
import StackIcons from './StackIcons/StackIcons'

const blockInfo = [
	'My Tech Stack',
	' Technologies I’ve been working with recently',
]

const StackBlock = ({ isAdaptive = false }) => {
	return (
		<div>
			<BlockName title={blockInfo[0]} text={blockInfo[1]} />
			<StackIcons isAdaptive={isAdaptive} />
		</div>
	)
}

export default StackBlock
