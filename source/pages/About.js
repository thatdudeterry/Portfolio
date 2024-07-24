import React, { Component } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from "../images/goof.png";

// Styled Components
const SocialsContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #7ebdc2;
	min-height: 100vh;
`;

const Main = styled.main`
	background-color: #7ebdc2;
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	width: 100%;
	max-width: 95%;
	margin: 0 auto;
	box-sizing: border-box;
	height: calc(100vh - 160px);
	@media (max-width: 906px) {
		flex-direction: column;
	}
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;

	@media (max-width: 906px) {
		display: none;
	}
`;

const Section = styled.section`
	flex: 4;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
	overflow-y: auto;
	list-style: none;
	@media (max-width: 906px) {
		flex: 1;
	}
`;

const MainWrapper = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: left;
	padding: 20px;
	margin: 20px;
	width: 100%;
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: left;
	color: #bb4430;
	border-bottom: 2px solid #f3dfa2;
	padding: 10px;
	margin: 10px;
`;

const Logo = styled.img`
	height: 32px;
	margin: 10px;
	// color: #b8dbd9;
`;

const H1 = styled.h1`
	color: #bb4430;
`;

const H2 = styled.h2`
	color: #bb4430;
	border-bottom: 2px solid #f3dfa2;
	margin: 10px;
`;

const P = styled.p`
	color: #bb4430;
	font-size: 1.5rem;
	margin: 10px;
`;

class About extends Component {
	render() {
		return (
			<SocialsContainer>
				<Header />
				<Main>
					<LeftColumn>
						<Nav />
					</LeftColumn>
					<Section>
						<LogoContainer>
							<Logo src={logo} alt="thatSpace logo" />
							<H1>| About</H1>
						</LogoContainer>
						<MainWrapper>
							<H2>helloooo....</H2>
							<img></img>
							<P>
								I'm an aspiring web developer living in St. Louis, Missouri. I'm
								46 years old and starting a new chapter in my life with web
								development. I'm currently a student at Full Sail University
								pursuing my Bachelors degree for Web Development and Design. As
								of July 2024, I use HTML, CSS, and JavaScript, with a focus on
								React.js.
							</P>
							<H2>aboot me</H2>
							<img></img>
							<P>
								I've always had a passion for technology and design and I
								decided to take the two and do something with my talents. I
								currently reside in St. Louis, MO with plans for California in
								2026. I love to spending time with my daughter Joley playing
								videos games and watching YouTube, I help coach Joley's high
								school racquetball team and play for fun as well. When I'm not
								busy studying, I enjoy visiting the Missourii Botanical Gardens
								when the wheather permits, playing with our pug Yoshi (she's the
								bestest), playing video games (Legend of Zelda!), and honing my
								artistic abilities. I love fixing things and have been known to
								take things apart just to see how they work, and being creative
								all aorund.
							</P>
							<H2>bio</H2>
							<img></img>
							<P>
								That about sums up my bio, I'm always happy to answer questions
								you may have, especially if you want to collaborate.
								thatDudeTerry is constantly learning and improving his skills.
							</P>
						</MainWrapper>
					</Section>
				</Main>
				<Footer />
			</SocialsContainer>
		);
	}
}

export default About;
