import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav style={styles.nav}>
			<Link to="/" style={styles.button}>
				<span>home</span>
			</Link>

			<Link to="/about" style={styles.button}>
				<span> about</span>
			</Link>

			<Link to="/code_examples" style={styles.button}>
				<span>codeExamples</span>
			</Link>

			<Link to="/photogallery" style={styles.button}>
				<span>photoGallery</span>
			</Link>
		</nav>
	);
}

export default Nav;

const styles = {
	nav: {
		display: "flex",
		width: "80%",
		flexDirection: "column",
		backgroundColor: "#7ebdc2",
		padding: "20px",
		margin: "20px",
		gap: "20px",
	},
	button: {
		fontFamily: "Urbanist",
		color: "#bb4430 ",
		fontSize: "2rem",
		fontWeight: "bold",
		textDecoration: "none",
	},
};
