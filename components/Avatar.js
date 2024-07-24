import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.jpeg";

// No known issues

function Avatar(props) {
	return (
		<Link to="/About">
			<img src={avatar} alt={props.AvatarAlt} style={styles.avatar} />
		</Link>
	);
}

export default Avatar;

const styles = {
	avatar: {
		cursor: "pointer",
		borderRadius: "50%",
		width: "48px",
		border: "2px solid #bb4430 ",
		backgroundColor: "#7ebdc2 ",
		boxShadow:
			"0 4px 8px 0 rgba(187, 68, 48, 0.2), 0 6px 20px 0 rgba(187, 68, 48, 0.19)",
	},
};
