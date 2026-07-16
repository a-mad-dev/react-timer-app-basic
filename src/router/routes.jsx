import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/app" replace />} />
			<Route path="/app" element={<Home />} />
		</Routes>
	)
}

export default AppRouter