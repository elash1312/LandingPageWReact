import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse justify-content-end"
						id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a
									class="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									About
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Services
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link disabled"
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
			<p>
				Made by Erin Lash @{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				❤️!
			</p>
		</div>
	);
};

export default Home;
