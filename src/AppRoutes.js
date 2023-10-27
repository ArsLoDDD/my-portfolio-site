import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import StackPage from './pages/StackPage/StackPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import AboutMePage from './pages/AboutMePage/AboutMePage'
import ContactPage from './pages/ContactPage/ContactPage'

const AppRoutes = () => {
	return (
		<Routes>
			{/* Public Routes */}
			<Route path='/' element={<MainPage />} />
			<Route path='/stack' element={<StackPage />} />
			<Route path='/project' element={<ProjectPage />} />
			<Route path='/aboutMe' element={<AboutMePage />} />
			<Route path='/contact' element={<ContactPage />} />

			{/* Error Path */}
			<Route path='*' element={<h1>error</h1>} />
		</Routes>
	)
}

export default AppRoutes
