import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import "./NavBar.css"; // Import the CSS file

function NavBar() {
	return (
		<div>
			<div className="desktop-nav">
				<DesktopNavigation />
			</div>
			<div className="mobile-nav">
				<MobileNavigation />
			</div>
		</div>
	);
}

export default NavBar;
