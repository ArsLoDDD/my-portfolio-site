import React from 'react'
import { motion } from 'framer-motion'

const DownloadButton = () => {
	return (
		<div className='flex justify-center my-20'>
			<a href='./Arseniy_CV.pdf.zip' download>
				<motion.div
					initial={{ y: 0 }}
					animate={{
						y: [-7, 7, -7],
						transition: { duration: 2, repeat: Infinity },
					}}
					className='bg-gradient-to-r from-purple-600 to-pink-500 shadow-xl shadow-white py-3 px-4 rounded-2xl font-bold text-2xl text-white font-poppins tracking-widest hover:text-gray-300'
				>
					Download My CV
				</motion.div>
			</a>
		</div>
	)
}

export default DownloadButton
