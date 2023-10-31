import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInfo } from '../../../../redux/slices/stackInfoSlice'

const StackIcon = ({ icon, index, isAdaptive = false }) => {
	const activeIndex = useSelector(state => state.stackInfo.activeIndex)

	const dispatch = useDispatch()
	if (!isAdaptive)
		return (
			<div
				className={`h-20 w-20 hover:scale-125 transition-transform duration-500`}
			>
				<img src={`./img/${icon}Logo.png`} alt='' />
			</div>
		)
	return (
		<>
			{activeIndex !== null && (
				<div
					onClick={() => dispatch(setInfo(index))}
					className={`h-24 w-24 hover:scale-125 transition-transform duration-500 p-4 ${
						index === activeIndex ? 'border-2 rounded-full' : ''
					}`}
				>
					<img src={`./img/${icon}Logo.png`} alt='' />
				</div>
			)}
		</>
	)
}

export default StackIcon
