import React from 'react'
// router
import AppRoutes from './AppRoutes'
//components
import Header from './components/Header/Header'

function App() {
	return (
		<div className='w-full min-h-screen bg-gray-bg'>
			<div className='w-10/12 h-2 m-auto'>
				<Header />
			</div>
			<AppRoutes />
		</div>
	)
}

export default App
