// export default CodeExamples;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from "../images/goof.png";
import example from "../images/bNwNewAmericanGothic.jpg";

// Styled Components
const ExamplesContainer = styled.div`
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

	@media (max-width: 906px) {
		flex-direction: column;
	}
`;

const LeftColumn = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);

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

	@media (max-width: 906px) {
		flex: 1;
	}
`;

const MainWrapper = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: space-evenly;
	align-content: flex-start;
	padding: 20px;
	margin: 20px;
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
	color: #bb4430;
`;

const H1 = styled.h1`
	color: #bb4430;
`;

const H2 = styled.h2`
	font-size: 1.5rem;
	// background-color: #231f20;
	color: #bb4430;
	text-align: left;
	padding: 10px;
	margin: 0;
`;

const H3 = styled.h3`
	font-size: 1.125rem;
	// background-color: #231f20;
	color: #f3dfa2;
	text-align: left;
	padding: 10px;
	margin: 0;
`;

const StyledLink = styled(Link)`
	font-family: "Urbanist";
	color: #bb4430;
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
	padding: 30px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	// background-color: #231f20;
	// border: 2px solid #f3dfa2;
	// border-radius: 5px;
	// box-shadow: 0 4px 8px rgba(239, 230, 221, 0.5);

	&:hover {
		text-decoration: none;
		// box-shadow: 0 6px 12px rgba(239, 230, 221, 0.7);
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		margin: 0;
		border-radius: 5px;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

class CodeExamples extends Component {
	render() {
		return (
			<ExamplesContainer>
				<Header />
				<Main>
					<LeftColumn>
						<Nav />
					</LeftColumn>
					<Section>
						<LogoContainer>
							<Logo src={logo} alt="" />
							<H1>| Code Examples</H1>
						</LogoContainer>
						<MainWrapper>
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>{" "}
							<StyledLink to="/">
								<ImageWrapper>
									<H2>Example Name</H2>
									<img src={example} alt="Example" />
									<H3>Code Example</H3>
								</ImageWrapper>
							</StyledLink>
						</MainWrapper>
					</Section>
				</Main>
				<Footer />
			</ExamplesContainer>
		);
	}
}

export default CodeExamples;
