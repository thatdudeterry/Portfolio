import React from "react";

const Modal = ({ isOpen, onClose, image }) => {
	if (!isOpen) return null;

	return (
		<div style={styles.modalOverlay} onClick={onClose}>
			<div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<span style={styles.closeButton} onClick={onClose}>
					&times;
				</span>
				<img src={image} alt="Preview" style={styles.modalImage} />
			</div>
		</div>
	);
};

const styles = {
	modalOverlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(84, 111, 124, 0.8)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1000,
	},
	modalContent: {
		position: "relative",
		maxWidth: "90%",
		maxHeight: "90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#2F4550",
		borderRadius: "8px",
		overflow: "hidden",
	},
	closeButton: {
		position: "absolute",
		top: "10px",
		right: "10px",
		fontSize: "2rem",
		color: "#fff",
		cursor: "pointer",
		zIndex: 1001,
	},
	modalImage: {
		width: "100%",
		height: "auto",
		objectFit: "contain",
	},
};

export default Modal;
