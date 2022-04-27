import React from "react";

const Jumbotron = (props) => {
	return (
		<div className="container bg-light rounded">
			<div className="jumbotron">
				<h1 className="display-4 font-weight-bold">
					{props.data.jumbotronTitle}
				</h1>
				<p className="lead">{props.data.jumboContent}</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg mb-5"
						href="#"
						role="button">
						{props.data.jumboButton}
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
