import React from "react";
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cardrow from "./component/cardrow.jsx";
import Footer from "./component/footer.jsx";

const Home = () => {
	const data = {
		jumbotronTitle: "A Warm Welcome!",
		jumboContent:
			"Lorem ipsum dolor sit amet, consectetur adipiscing // elit, sed do eiusmod tempor incididunt ut labore et // dolore magna aliqua. Ut enim ad minim veniam, quis // nostrud exercitation ullamco laboris nisi ut aliquip // ex ea commodo consequat. Duis aute irure dolor in // reprehenderit in voluptate velit esse cillum dolore // eu fugiat nulla pariatur. Excepteur sint occaecat // cupidatat non proident, sunt in culpa qui officia // deserunt mollit anim id es laborum.",
		jumboButton: "Call to action!",
	};
	return (
		<div>
			<Navbar />, <Jumbotron data={data} />, <Cardrow />, <Footer />
		</div>
	);
};
export default Home;
