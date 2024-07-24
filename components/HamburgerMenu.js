import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import HamburgerNav from "./NavBar/HamburgerNav";

function HamburgerMenu({ isNavOpen, onClick }) {
	return (
		<div style={styles.container}>
			<button onClick={onClick} style={styles.hamburgerButton}>
				{isNavOpen ? <FaTimes /> : <FaBars />}
			</button>
			{isNavOpen && <HamburgerNav />}
		</div>
	);
}

export default HamburgerMenu;

const styles = {
	hamburgerButton: {
		backgroundColor: "#231f20",
		border: "none",
		color: "#f3dfa2",
		fontSize: "2rem",
		cursor: "pointer",
		padding: "10px",
		position: "absolute",
		top: "10px",
		right: "10px",
		zIndex: 1001,
		"@media min-width: 906px": {
			display: "none",
		},
	},

	container: {
		backgroundColor: "#231f20",
		border: "2px solid #efe6dd",
		// boxShadow:
		// 	"4px 0 4px 4px rgba(243, 223, 162, 0.1), 8px 0 8px 16px rgba(243, 223, 162, 0.1)",
	},

	navMenu: {
		display: "flex",
		flexDirection: "column",
		alignItems: "left",
		justtifyContent: "flex-start",
		padding: "20px",
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		backgroundColor: "#231f20",
		zIndex: 1000,
	},

	navLink: {
		display: "flex",
		alignItems: "center",
		color: "#bb4430 ",
		backgroundColor: "#231f20",
		textDecoration: "none",
		margin: "10px 0",
	},

	navLinkIcon: {
		marginRight: "10px",
		backgroundColor: "#231f20",
	},

	navLinkText: {
		fontSize: "1.2rem",
		backgroundColor: "#231f20",
	},
};
