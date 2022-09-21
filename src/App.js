import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { DataProvider } from './context/DataContext'
import Employees from './Employees'
import Footer from './Footer'
import GroupedTeamMembers from './GroupedTeamMembers'
import Header from './Header'
import Nav from './Nav'
import NotFound from './NotFound'

function App() {
	return (
		<DataProvider>
			<Router>
				<Nav />
				<Header />
				<Routes>
					<Route path="/" element={<Employees />}></Route>
					<Route
						path="/GroupedTeamMembers"
						element={<GroupedTeamMembers />}
					></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</DataProvider>
	)
}

export default App
