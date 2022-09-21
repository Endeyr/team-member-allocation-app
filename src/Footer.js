const Footer = () => {
	var today = new Date()

	return (
		<footer className="container">
			<div className="row justify-content-center mt-3 mb-4">
				<div className="col-8">
					<h5>Team Member Allocation App - {today.getFullYear()}</h5>
					<p>
						By Aaron Thompson. Found at{' '}
						<a
							href="https://github.com/Endeyr/team-member-allocation-app"
							alt="Github"
						>
							Github
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
