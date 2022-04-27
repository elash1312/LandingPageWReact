//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />, <Jumbotron />, <Cards />, <Footer />
	</div>,
	document.querySelector("#app")
);
