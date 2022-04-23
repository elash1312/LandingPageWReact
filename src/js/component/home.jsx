import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="container-fluid">
							<a className="navbar-brand" href="#">
								Start Bootstrap
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse justify-content-end"
								id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item">
										<a
											className="nav-link active"
											aria-current="page"
											href="#">
											Home
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											About
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Services
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link disabled"
											href="#"
											tabindex="-1"
											aria-disabled="true">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="jumbotron">
						<h1 className="display-4">A Warm Welcome!</h1>
						<p className="lead">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<hr className="my-4" />
						<p className="lead">
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Call To Action
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="card" style="width: 18rem;">
						<img src="..." class="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
			<p>
				Made by Erin Lash @{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				❤️!
			</p>
		</div>
	);
};

export default Home;
