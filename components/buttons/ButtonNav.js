import React from "react";

const ButtonNav = (props) => {
	return (
		<button type={props.type} style={styles.button} onClick={props.onClick}>
			{props.btnText}
		</button>
	);
};

export default ButtonNav;

const styles = {
	button: {
		// fontSize: "1.25rem",
		// height: "3.5rem",
		width: "24ch",
		background: "#7ebdc2 ",
		color: "#231f20",
		padding: "2%",
		margin: "1%",
		border: "2px solid #bb4430 ",
		borderRadius: "25px",
		cursor: "pointer",
		alignText: "center",
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
	},
};
