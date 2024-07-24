import React, { useState } from "react";
import Avatar from "../Avatar";
// import MobileNavigation from "./NavBar/MobileNavigation";

import avatar from "../../images/avatar.jpeg";
import logo from "../../images/goof.png";
// import NavLinks from "./NavLinks";
// import "./NavBar.css";

const DesktopNavigation = () => {
	// const [navOpen, setNavOpen] = useState(false);

	// const toggleNav = () => {
	// 	setNavOpen(!navOpen);
	// };

	<header style={styles.header}>
		<div style={styles.logoContainer}>
			<img src={logo} alt=" thatDudeTerry" style={styles.logo} />
		</div>
		<div style={styles.avatarContainer}>
			{/* <h1 style={styles.title}>thatDudeTerry</h1> */}
			<Avatar src={avatar} style={styles.avatar} />
		</div>
		{/* <div style={styles.mobileNavigation} className="mobileNavigation">
			<MobileNavigation isNavOpen={navOpen} onClick={toggleNav} />
		</div> */}
	</header>;
	// 	return (
	// 		<header style={styles.header}>
	// 			<div style={styles.avatarContainer}>
	// 				<Avatar />
	// 			</div>
	// 			<h1 style={styles.title}>thatDudeTerry</h1>

	// 			<nav className="DesktopNavigation" style={styles.nav}>
	// 				<NavLinks />
	// 			</nav>
	// 		</header>
	// 	);
};

export default DesktopNavigation;
const styles = {
	header: {
		fontFamily: "Urbanist",
		backgroundColor: "#7ebdc2 ",
		color: "#231f20",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "20px 20px",
		borderBottom: "5px solid #bb4430 ",
	},

	logoContainer: {
		display: "flex",
		alignItems: "center",
	},

	logo: {
		height: "32px",
		margin: "10px",
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
		// maxHeight: "75px",
		height: "32px",
		border: "2px solid #bb4430 ",
		margin: "10px",
	},
};

// const styles = {
// 	header: {
// 		fontFamily: "Nabla",
// 		backgroundColor: "#7ebdc2 ",
// 		color: "#231f20",
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "space-between",
// 		padding: "20px 20px",
// 		borderBottom: "5px solid #bb4430 ",
// 	},
// 	titleContainer: {
// 		display: "flex",
// 		alignItems: "center",
// 	},
// 	title: {
// 		fontSize: "68px",
// 		fontFamily: "Nabla",
// 	},
// 	avatarContainer: {
// 		display: "flex",
// 		alignItems: "center",
// 		padding: "5px",
// 		margin: "5px",
// 	},
// 	avatar: {
// 		maxHeight: "75px",
// 		// height: "75px",
// 		border: "2px solid #bb4430 ",
// 		margin: "10px",
// 	},
// 	nav: {
// 		fontFamily: "Urbanist",
// 		fontSize: "1.25rem",
// 	},
// };
