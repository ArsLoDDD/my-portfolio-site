import React from 'react'
import GitHubIcon from '../../Icons/GitHubIcon'
import LinkIcon from '../../Icons/LinkIcon'

const ProjectItem = ({ item }) => {
	const { img, title, text, stack, link, isDone, liveLink, isScroll } = item
	return (
		<div className='bg-gray-bg-item w-72 h-120  rounded-lg text-gray-title pb-5 relative'>
			{!isDone && (
				<div className='absolute -right-6 bg-red-600 p-2 rounded-3xl rotate-45 font-poppins pointer-events-none'>
					In Progress
				</div>
			)}
			<img
				className='w-full h-2/5 bg-black object-cover rounded-t-lg'
				src={`./img/${img}Project.jpeg`}
				alt=''
				srcset=''
			/>
			<div className='w-10/12 m-auto'>
				<article className='text-left mb-4 relative'>
					{isScroll && (
						<div className='absolute bg-red-700 -right-12 rotate-90 bottom-1/4 text-sm px-1 rounded-lg font-dmsans'>
							Scroll Down
						</div>
					)}
					<h3 className='text-2xl py-3 font-bold text-center'>{title}</h3>
					<p className='text-xs text-left font-dmsans  overflow-ellipsis h-24 overflow-scroll'>
						{text}
					</p>
				</article>
				<div className='mb-6'>
					<span className=''>Tech Stack:</span>
					<span className='text-sm'> {stack}</span>
				</div>
				<div
					className={`flex ${!liveLink ? 'justify-center' : 'justify-between'}`}
				>
					{liveLink && (
						<a
							href={liveLink}
							target='_blank'
							rel='noreferrer'
							className='flex justify-center gap-3'
						>
							<LinkIcon
								white={true}
								liveLink={liveLink}
								classN='w-4 h-4 text-white'
							/>
							<span className='text-white hover:underline text-sm'>
								Live Preview
							</span>
						</a>
					)}
					<a
						href={link}
						target='_blank'
						rel='noreferrer'
						className='flex justify-center gap-3'
					>
						<GitHubIcon white={true} link={link} classN='w-4 h-4' />
						<span className='text-white hover:underline text-sm'>
							View Code
						</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectItem
