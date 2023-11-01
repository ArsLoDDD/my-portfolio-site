import React, { useEffect } from 'react'
//сomponents
import StackBlock from '../../components/StackBlock/StackBlock'
import { LinearGradient } from 'react-text-gradients'
import { motion, useAnimation } from 'framer-motion'
//hooks
import { useSelector } from 'react-redux'

const infoStack = [
	{
		name: 'HTML',
		time: '2 years',
		text: 'I am confident in my strong grasp of HTML. HTML is a fundamental language, and my proficiency with it has been instrumental in comprehending the core principles of web design and layout. It plays a pivotal role in structuring web content, and my deep understanding of HTML has empowered me in decomposing intricate designs.',
	},
	{
		name: 'CSS',
		time: '2 years',
		text: 'CSS knowledge is indispensable in my journey, enabling me to breathe life into my web creations by crafting visually appealing and vibrant designs. Additionally, mastering CSS animations has enhanced my skills in creating engaging and dynamic web interfaces.',
	},
	{
		name: 'JavaScript (JS)',
		time: '1.5 years',
		text: 'JS serves as the bedrock of my skill set. This versatile language has been a cornerstone in the development of user-friendly and captivating web applications. My proficiency in JS empowers me to bring interactive and responsive functionality to life, ensuring an enriched user experience.',
	},
	{
		name: 'React.JS',
		time: '1 years',
		text: "My journey with React has been truly invigorating. This powerful library is the beating heart of modern web development, and my proficiency with it enables me to craft dynamic and responsive user interfaces. React's component-based architecture, combined with state management, has ushered me into the realm of interactive and state-of-the-art web applications.",
	},
	{
		name: 'Redux | Redux TK',
		time: '1 years',
		text: "With a year of experience in Redux, I've harnessed the capabilities of this essential tool for state management. It empowers me to maintain global data consistency in complex applications, ensuring smooth interactions between components. My expertise in Redux is instrumental in delivering polished and efficient web solutions.",
	},
	{
		name: 'SASS',
		time: '1 years',
		text: 'Sass has added a creative dimension to my styling journey. This preprocessor makes my stylesheets efficient, maintainable, and dynamic. It allows me to write clean and organized CSS code while employing advanced features like variables and mixins, thus streamlining the styling process.',
	},
	{
		name: 'TailWind CSS',
		time: '0.5 years',
		text: "Tailwind CSS has been a recent but impactful addition to my toolkit. In just half a year of usage, it's become an integral part of my workflow. Its utility-first approach and customizable styling classes expedite the development process, resulting in stunning and highly maintainable user interfaces.",
	},
	{
		name: 'Material UI',
		time: '0.5 years',
		text: "Material-UI offers an extensive set of ready-to-use components, enhancing my proficiency in web design. My half-year journey with MUI has honed my ability to create visually pleasing and intuitive interfaces. This library's elegant, material-inspired components have enriched my web applications with polished aesthetics.",
	},
	{
		name: 'GIT',
		time: '1 years',
		text: 'My experience with Git extends over a year, and it plays an indispensable role in collaborative projects. Version control is crucial for maintaining code integrity and facilitating team collaboration. Git empowers me to track changes, manage code versions, and ensure a seamless development process.',
	},
	{
		name: 'API Integration',
		time: '1 years',
		text: "With a year of experience in API integration, I've unlocked the potential of connecting web applications with external data sources. This proficiency allows me to build feature-rich and data-driven applications that interact seamlessly with external services.",
	},
]

const StackPage = () => {
	const activeIndex = useSelector(state => state.stackInfo?.activeIndex)

	const controls = useAnimation()

	const enterAnimation = {
		hidden: {
			y: 500,
			opacity: 0.2,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 1.2,
			},
		},
	}

	useEffect(() => {
		controls.start('hidden')
		if (activeIndex !== null) {
			controls.start('visible')
		}
	}, [activeIndex, controls])

	return (
		<div className='h-full w-10/12 m-auto min-h-screen pt-20 2xl:flex 2xl:flex-col justify-evenly items-center 2xl:pt-0'>
			<StackBlock isAdaptive={true} />
			{activeIndex !== null && (
				<motion.article
					initial='hidden'
					animate={controls}
					variants={enterAnimation}
					key={activeIndex}
					className='flex flex-col justify-center items-center pt-32'
				>
					<LinearGradient
						gradient={['to right', '#6B46C1 ,#EC4899']}
						className='text-4xl 2xl:text-5xl font-bold font-dmsans mb-7'
					>
						{infoStack[activeIndex].name}
					</LinearGradient>
					<p className='w-full text-xl lg:w-9/12 md:text-2xl 2xl:text-3xl text-white font-poppins  text-center leading-normal'>
						{infoStack[activeIndex].text}
					</p>
				</motion.article>
			)}
		</div>
	)
}

export default StackPage
