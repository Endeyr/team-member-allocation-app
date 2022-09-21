import { useState } from 'react'
import './App.css'
import Employees from './Employees'
import Footer from './Footer'
import Header from './Header'

function App() {
	const [selectedTeam, setTeam] = useState('TeamB')

	const [employees, setEmployees] = useState([
		{
			id: 1,
			fullName: 'Bob Jones',
			designation: 'Javascript Developer',
			gender: 'male',
			teamName: 'TeamA',
		},
		{
			id: 2,
			fullName: 'Jill Bailey',
			designation: 'Node Developer',
			gender: 'female',
			teamName: 'TeamB',
		},
		{
			id: 3,
			fullName: 'Gail Shepherd',
			designation: 'Java Developer',
			gender: 'female',
			teamName: 'TeamC',
		},
		{
			id: 4,
			fullName: 'Sam Reynolds',
			designation: 'React Developer',
			gender: 'male',
			teamName: 'TeamD',
		},
		{
			id: 5,
			fullName: 'Bob Jones',
			designation: 'Javascript Developer',
			gender: 'male',
			teamName: 'TeamA',
		},
		{
			id: 6,
			fullName: 'Jill Bailey',
			designation: 'Node Developer',
			gender: 'female',
			teamName: 'TeamB',
		},
		{
			id: 7,
			fullName: 'Gail Shepherd',
			designation: 'Java Developer',
			gender: 'female',
			teamName: 'TeamC',
		},
		{
			id: 8,
			fullName: 'Sam Reynolds',
			designation: 'React Developer',
			gender: 'male',
			teamName: 'TeamD',
		},
		{
			id: 9,
			fullName: 'Bob Jones',
			designation: 'Javascript Developer',
			gender: 'male',
			teamName: 'TeamA',
		},
		{
			id: 10,
			fullName: 'Jill Bailey',
			designation: 'Node Developer',
			gender: 'female',
			teamName: 'TeamB',
		},
		{
			id: 11,
			fullName: 'Gail Shepherd',
			designation: 'Java Developer',
			gender: 'female',
			teamName: 'TeamC',
		},
		{
			id: 12,
			fullName: 'Sam Reynolds',
			designation: 'React Developer',
			gender: 'male',
			teamName: 'TeamD',
		},
	])

	function handleTeamSelectionChange(event) {
		setTeam(event.target.value)
	}

	function handleEmployeeCardClick(event) {
		const transformedEmployees = employees.map((employee) =>
			employee.id === parseInt(event.currentTarget.id)
				? employee.teamName === selectedTeam
					? { ...employee, teamName: '' }
					: { ...employee, teamName: selectedTeam }
				: employee
		)
		setEmployees(transformedEmployees)
	}

	return (
		<div className="App">
			<Header />
			<Employees
				employees={employees}
				selectedTeam={selectedTeam}
				handleEmployeeCardClick={handleEmployeeCardClick}
				handleTeamSelectionChange={handleTeamSelectionChange}
			/>
			<Footer />
		</div>
	)
}

export default App
