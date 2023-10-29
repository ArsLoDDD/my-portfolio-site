import React from 'react'

const LinkedinIcon = ({ classN }) => {
	return (
		<a href='https://www.linkedin.com/in/arsloddd' target='_blank' rel='noreferrer'>
			<svg
				className={classN}
				aria-hidden='true'
				xmlns='http://www.w3.org/2000/svg'
				fill='#CCC'
				viewBox='0 0 15 15'
			>
				<path
					fillRule='evenodd'
					d='M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
					clipRule='evenodd'
				/>
				<path d='M3 5.012H0V15h3V5.012Z' />
			</svg>
		</a>
	)
}

export default LinkedinIcon
