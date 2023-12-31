import React from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import { LinearGradient } from 'react-text-gradients'
import DownloadButton from '../../components/DownloadBtn/DownloadBtn'

const aboutMeInfo = [
	{
		title: 'Charismatic, communicative, and quick learner.',
		text: 'I am driven by a strong passion for web development and have consistently demonstrated my ability to acquire new skills. I am known for my charisma and effective communication skills, which help me collaborate efficiently in team environments. These qualities are complemented by my rapid learning ability and unwavering determination to excel in the field.',
	},
	{
		title: 'Formal Education and Skills Acquisition',
		text: 'My journey into the world of web development began with two intensive programming courses, which provided a strong foundation in the field. Additionally, I enriched my skill set by successfully completing several courses on Udemy, where I explored various technologies and programming languages.',
	},
]

const AboutMePage = () => {
	return (
		<div className='h-full min-h-screen pt-20'>
			<AboutMe />
			<DownloadButton />
			<div className='w-10/12 m-auto'>
				<article className='flex flex-col justify-center items-center mb-32'>
					<LinearGradient
						gradient={['to right', '#6B46C1 ,#EC4899']}
						className='text-2xl text-center md:text-4xl 2xl:text-5xl font-bold font-dmsans mb-7'
					>
						{aboutMeInfo[0].title}
					</LinearGradient>
					<p className='w-11/12 xl:w-7/12 2xl:w-9/12 text-lg md:text-2xl 2xl:text-3xl text-white font-poppins  text-center leading-normal'>
						{aboutMeInfo[0].text}
					</p>
				</article>
				<article className='flex flex-col justify-center items-center mb-28'>
					<LinearGradient
						gradient={['to right', '#6B46C1 ,#EC4899']}
						className='text-2xl 2xl:text-5xl text-center md:text-4xl font-bold font-dmsans mb-7'
					>
						{aboutMeInfo[1].title}
					</LinearGradient>
					<p className='w-10/12 xl:w-7/12 2xl:w-9/12 text-lg md:text-2xl 2xl:text-3xl text-white font-poppins  text-center leading-normal'>
						{aboutMeInfo[1].text}
					</p>
				</article>
			</div>
		</div>
	)
}

export default AboutMePage
