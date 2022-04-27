import React from "react";
import Card from "./cards.jsx";

const Cardrow = () => {
	return (
		<div className="container">
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
export default Cardrow;
