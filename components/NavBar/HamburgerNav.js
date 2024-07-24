import React from "react";
import { Link } from "react-router-dom";

function HamburgerNav() {
	return (
		<nav style={styles.nav}>
			<Link to="/" style={styles.link}>
				<span>home</span>
			</Link>

			<Link to="/about" style={styles.link}>
				<span> about</span>
			</Link>

			<Link to="/photogallery" style={styles.link}>
				<span>photoGallery</span>
			</Link>

			<Link to="/webgallery" style={styles.link}>
				<span>webGallery</span>
			</Link>
		</nav>
	);
}

export default HamburgerNav;

const styles = {
	nav: {
		display: "flex",
		width: "80%",
		flexDirection: "column",
		backgroundColor: "#231f20",
		padding: "20px",
		margin: "20px",
		gap: "20px",
	},
	link: {
		fontFamily: "Urbanist",
		color: "#bb4430 ",
		fontSize: "2rem",
		fontWeight: "bold",
		textDecoration: "none",
	},
};
