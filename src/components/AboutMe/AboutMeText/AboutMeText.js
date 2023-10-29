import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import { motion } from 'framer-motion'

const AboutMeText = () => {
	return (
		<div className='w-half-plus '>
			<p className='text-white text-5xl leading-snug font-dmsans'>
				<span className='mr-4'> Hello!</span>
				<motion.span
					className='inline-block'
					animate={{
						x: [0, -10, 0, 10, 0],
						rotate: [0, -30, 0, 30, 0],
					}}
					transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
				>
					👋
				</motion.span>
				<br />
				My name is{' '}
				<LinearGradient
					className=' font-bold'
					gradient={['to left', '#6B46C1 ,#EC4899']}
				>
					Arseniy
				</LinearGradient>
				<br />
				This website is all about showcasing my portfolio and CV. <br />
				<LinearGradient
					className='font-bold'
					gradient={['to left', '#EC4899,#6B46C1']}
				>
					Welcome!
				</LinearGradient>
			</p>
		</div>
	)
}

export default AboutMeText
