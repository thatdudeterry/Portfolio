import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
// import MobileNavigation from "./NavBar/NavBar";
import HamburgerMenu from "../components/HamburgerMenu"; // Corrected import path
import avatar from "../images/avatar.jpeg";
import logo from "../images/goof.png";

function Header() {
	const [navOpen, setNavOpen] = useState(false);
	const [maxHeight, setMaxHeight] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 806) {
				setMaxHeight("75px");
			} else {
				setMaxHeight(null);
			}
		};

		handleResize(); // Call initially
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<header style={styles.header}>
			<div style={styles.logoContainer}>
				<img src={logo} alt="thatSpace logo" style={styles.logo} />
			</div>
			<div style={styles.avatarContainer}>
				<h1 style={styles.title}>thatDudeTerry</h1>
				<Avatar src={avatar} style={{ ...styles.avatar, maxHeight }} />
			</div>
			<div style={styles.mobileNavigation} className="mobileNavigation">
				<HamburgerMenu isNavOpen={navOpen} onClick={toggleNav} />
				{/* <MobileNavigation isNavOpen={navOpen} onClick={toggleNav} /> */}
			</div>
			{/* Hamburger Menu */}
			{window.innerWidth <= 806 && ( // Only render if window width is less than or equal to 806px
				<div style={styles.hamburgerContainer} className="hamburgerContainer">
					<HamburgerMenu isNavOpen={navOpen} onClick={toggleNav} />
				</div>
			)}
			{/* Overlay for Mobile Menu */}
			{navOpen && <div style={styles.mobileMenuOverlay} onClick={toggleNav} />}
		</header>
	);
}

export default Header;

const styles = {
	header: {
		fontFamily: "Urbanist",
		backgroundColor: "#231f20",
		color: "#f3dfa2 ",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "5px",
		borderBottom: "5px solid #bb4430",
		position: "relative",
	},

	hamburgerContainer: {
		display: "flex",
		backgroundColor: "#231f20",
		alignItems: "center",
		zIndex: 1,
	},

	mobileNavigation: {
		backgroundColor: "#231f20",
		display: "none",
		"@media max-width: 806px": {
			display: "block",
		},
	},

	mobileMenuOverlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#7ebdc2 ",
		opacity: 0.95,
		zIndex: 0,
	},

	logoContainer: {
		display: "flex",
		alignItems: "center",
	},

	logo: {
		height: "32px",
		margin: "5px",
		marginRight: "30px",
	},

	title: {
		fontSize: "36px",
		fontFamily: "Urbanist",
		margin: "10px",
		padding: "10px",
	},

	avatarContainer: {
		display: "flex",
		alignItems: "center",
		margin: "5px",
	},

	avatar: {
		height: "32px",
		border: "2px solid #bb4430",
		margin: "10px",
	},
};
