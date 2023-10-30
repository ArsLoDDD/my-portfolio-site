import React from 'react'
import BlockName from '../BlockName/BlockName'
import ProjectItem from './ProjectItem/ProjectItem'

const blockInfo = ['My Projects', 'Diving Deeper into My Portfolio World']

const projectItems = [
	{
		id: 1,
		img: 'twitter',
		title: 'Twitter Clone',
		text: 'This is a Twitter clone project that replicates the full functionality of Twitter. It is a collaborative project that provides an excellent opportunity to learn how to work effectively in a team. I am taking a key role in front-end development for this project.',
		stack: 'React, Redux, Material-UI, Formik',
		link: 'https://www.github.com/FP1-2/final_project_2',
		liveLink: 'http://www.twitterdanit.us-east-1.elasticbeanstalk.com',
		isDone: false,
	},
	{
		id: 2,
		img: 'aniMan',
		title: 'AniMan',
		text: 'AniMan is a personal web project designed for reading manga and watching anime in the Ukrainian language. It also includes real-time comments feature for engaging discussions and interactions with the community.',
		stack: 'React, Redux, TailWind, Firebase, AntDesign',
		link: 'https://www.gitlab.com/ArsLoDDD/manga-ua-lib',
		liveLink: null,
		isDone: false,
	},
	{
		id: 3,
		img: 'landing',
		title: 'Test Task',
		text: 'It serves as a landing page and is a part of my portfolio. The main task of the assignment was completed successfully, and the project was delivered in accordance with the specified requirements.It serves as a landing page and is a part of my portfolio. The main task of the assignment was completed successfully, and the project was delivered in accordance with the specified requirements.',
		stack: 'React, SASS, formik, YUP, Lodash',
		link: 'https://www.gitlab.com/ArsLoDDD/test-project-landing',
		liveLink: null,
		isDone: true,
	},
	{
		id: 4,
		img: 'medician',
		title: 'Doctor Visits',
		text: "This is a web application I developed during my courses. The application is written in pure JavaScript. It allows users to schedule doctor's appointments and saves this information in a database. This enables both doctors and clients to access and view the scheduled appointments, as well as relevant client information.",
		stack: 'JavaScript, HTML, CSS, axios',
		link: 'https://www.gitlab.com/ArsLoDDD/third-step-project',
		liveLink: null,
		isDone: true,
	},
	{
		id: 5,
		img: 'theHam',
		title: 'My First Project',
		text: "This is one of my early projects, and looking at it, I realize how much I've grown in my skills. However, I still appreciate many details of this simple work.",
		stack: 'HTML, CSS, JavaScript, Motivation',
		link: 'https://www.gitlab.com/ArsLoDDD/step-project',
		liveLink: null,
		isDone: true,
	},
]
const ProjectBlock = () => {
	return (
		<div className='w-full'>
			<BlockName title={blockInfo[0]} text={blockInfo[1]} />
			<div className='w-10/12 m-auto flex flex-wrap justify-center gap-10'>
				{projectItems.map(item => (
					<ProjectItem item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default ProjectBlock
