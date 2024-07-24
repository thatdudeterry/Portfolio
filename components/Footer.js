import React from "react";
import styled from "styled-components";
import logo from "../images/goof.png";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";

// Styled Components

const FooterContainer = styled.footer`
	background: #231f20;
	color: #f4f4f9;
	font-size: 1rem;
	position: fixed;
	width: 100%;
	border-top: 3px solid #f3dfa2;
	padding: 10px 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	color: #f3dfa2;
`;

const Logo = styled.img`
	height: 24px;
	margin-right: 10px;
`;

const StyledIcon = styled.a`
	color: #f3dfa2;
	font-size: 24px;
	margin: 0 10px;
	text-decoration: none;

	&:hover {
		color: #b8dbd9;
	}
`;

const StyledH2 = styled.h2`
	color: #f3dfa2;
	font-size: 12px;
	margin: 0 10px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<LogoContainer>
				<Logo src={logo} alt="thatSpace logo" />
				<h1> | Socials</h1>
			</LogoContainer>
			<StyledIcon
				href="https://github.com/biesboerTerry-FS"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IoLogoGithub />
			</StyledIcon>
			<StyledIcon
				href="https://www.instagram.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaInstagramSquare />
			</StyledIcon>
			<StyledIcon
				href="https://www.linkedin.com/in/tbiesboerjr/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin />
			</StyledIcon>
			<StyledIcon
				href="https://www.facebook.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaFacebook />
			</StyledIcon>
			<StyledIcon href="mailto:tbiesboer@gmail.com">
				<MdOutlineEmail />
			</StyledIcon>
			<StyledIcon href="tel:1-314-723-1421">
				<PiPhoneFill />
			</StyledIcon>
			<StyledH2>&copy; 2024 | thatdudeterry | All rights reserved.</StyledH2>
		</FooterContainer>
	);
};

export default Footer;
