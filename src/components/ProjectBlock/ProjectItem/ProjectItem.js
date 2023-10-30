import React from 'react'
import GitHubIcon from '../../Icons/GitHubIcon'

const ProjectItem = ({ item }) => {
	const { img, title, text, stack, link, isDone } = item
	return (
		<div className='bg-gray-bg-item w-72 max-h-120  rounded-lg text-gray-title pb-5 relative'>
			{!isDone && (
				<div className='absolute -right-6 bg-red-600 p-2 rounded-3xl rotate-45 font-poppins pointer-events-none'>
					In Progress
				</div>
			)}
			<img
				className='w-full h-2/5 bg-black object-cover'
				src={img}
				alt=''
				srcset=''
			/>
			<div className='w-10/12 m-auto'>
				<article className='text-left mb-3'>
					<h3 className='text-2xl py-3 font-bold '>{title}</h3>
					<p className='text-xs text-left font-dmsans  overflow-ellipsis'>
						{text}
					</p>
				</article>
				<div className='mb-5'>
					<span className=''>Tech Stack:</span>
					<span className='text-sm'> {stack}</span>
				</div>
				<a
					href={link}
					target='_blank'
					rel='noreferrer'
					className='flex justify-center gap-3'
				>
					<GitHubIcon white={true} classN='w-5 h-5' />
					<span className='text-white hover:underline'>View Code</span>
				</a>
			</div>
		</div>
	)
}

export default ProjectItem
