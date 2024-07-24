import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from "../images/goof.png";

// Styled Components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #7ebdc2;
	min-height: 100vh;
	color: #bb4430;
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
	color: #bb4430;
	@media (max-width: 906px) {
		flex-direction: column;
	}
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
	color: #bb4430;
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
	color: #bb4430;
	@media (max-width: 906px) {
		flex: 1;
	}
`;

const MainWrapper = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 10px;
	display: flex;
	color: #7ebdc2;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	padding: 20px;
	margin: 20px;
`;

const LogoContainer = styled.span`
	display: flex;
	align-items: center;
	justify-content: left;
	color: #231f20;
	border-bottom: 2px solid #f3dfa2;
	padding: 10px;
	margin: 10px;
`;

const Logo = styled.img`
	height: 32px;
	margin: 10px;
`;

const H1 = styled.h1`
	color: #bb4430;
`;

class Home extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Main>
					<LeftColumn>
						<Nav />
					</LeftColumn>
					<Section>
						<LogoContainer>
							<Logo src={logo} alt="thatSpace logo" />
							<H1>| Home</H1>
						</LogoContainer>
						<MainWrapper>
							<H1>Some more stuff here</H1>
						</MainWrapper>
					</Section>
				</Main>
				<Footer />
			</Container>
		);
	}
}

export default Home;
