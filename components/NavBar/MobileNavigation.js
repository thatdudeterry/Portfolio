import NavLinks from "./NavLinks";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./NavBar.css";

function MobileNavigation() {
	const [click, setclick] = useState(false);

	const closeMenu = () => setclick(false);

	const Hamburger = (
		<GiHamburgerMenu
			className="HamburgerMenu"
			size="30px"
			color="#231f20"
			onClick={() => setclick(!click)}
		/>
	);

	const Close = (
		<MdClose
			className="HamburgerMenu"
			size="30px"
			color="black"
			onClick={() => setclick(!click)}
		/>
	);
	return (
		<nav className="MobileNavigation" style={styles.nav}>
			{click ? Close : Hamburger}
			{click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
		</nav>
	);
}

export default MobileNavigation;

const styles = {
	nav: {
		borderBottom: "5px solid #bb4430 ",
	},
};
