import React from "react";

const data = {
	jumbotronTitle: "Hello, World!",
	jumboContent:
		"Lorem ipsum dolor sit amet, consectetur adipiscing // elit, sed do eiusmod tempor incididunt ut labore et // dolore magna aliqua. Ut enim ad minim veniam, quis // nostrud exercitation ullamco laboris nisi ut aliquip // ex ea commodo consequat. Duis aute irure dolor in // reprehenderit in voluptate velit esse cillum dolore // eu fugiat nulla pariatur. Excepteur sint occaecat // cupidatat non proident, sunt in culpa qui officia // deserunt mollit anim id es laborum.",
	jumboButton: "Call to action!",
};

const Jumbotron = () => {
	return (
		<div className="container-fluid bg-light rounded">
			<div className="jumbotron">
				<h1 className="display-4 font-weight-bold">
					{data.jumbotronTitle}
				</h1>
				<p className="lead">{data.jumboContent}</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg mb-5"
						href="#"
						role="button">
						{data.jumboButton}
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
