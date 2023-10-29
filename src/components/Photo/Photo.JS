import React from 'react'

const Photo = () => {
	return (
		<div className='flex justify-center items-center w-72 h-72 bg-gradient-to-br from-purple-700 to-rose-500 rounded-full'>
			<img
				className='object-cover rounded-full w-69 h-69'
				src='./img/myPhoto.JPG'
				alt='my_photo'
				srcset=''
			/>
		</div>
	)
}

export default Photo
