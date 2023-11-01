import React, { useEffect } from 'react'
// router
import AppRoutes from './AppRoutes'
//components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import useScreenSize from './hooks/useScreenSize'

function App() {
	return (
		<div className='w-full h-full bg-gray-bg'>
			<div className='w-10/12 m-auto'>
				<Header />
				<AppRoutes />
				<Footer />
			</div>
		</div>
	)
}

export default App
