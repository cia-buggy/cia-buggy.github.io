import * as React from "react"
import styled from "styled-components"
import {DARK_BG, ACCENT_TXT} from "../consts.js"
import "../base.css"
import {MAIN_TXT} from "../consts.js"
import Navbar from "../components/navbar"
import Events from "../components/eventcarousel"
import line from "../images/yellowline.png"
import buggyhome from "../images/homeimg.png"
import arrow from "../images/whitearrow.png"
// styles

const MainStyle = styled.main`
	font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top:1.2rem;	
`;
const HeadingStyleRight = styled.div`
	padding-top:5rem;
	padding-bottom:4rem;
`;
const Content = styled.div`
	background-color: ${DARK_BG};
	margin-top:100vh;
	width:100%;
`
const HeadingText = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.3rem;
	color: ${ACCENT_TXT};
	padding: 1rem;
	margin-left:5%;
	display: inline-block;
	vertical-align: middle;
	`
const LineStyle = styled.img`
	display: inline-block;
	vertical-align: middle;
`
const Hero = styled.div`
	top:3rem;
  position: fixed;
	width:100%;
	z-index:-1;
`
const ArrowText = styled.div`
	color: ${MAIN_TXT};
	text-align: center;
	margin-right: auto;
	margin-left: auto;
	font-size: 2vh;
	font-family: 'Saira', sans-serif;
`
const ArrowStyle = styled.img`
	width: 1.8rem;
	display:block;
	height: auto;
	text-align: center;
	margin-right: auto;
	margin-left:auto;
  transform: translate(-50%, 0%);
  bottom: 15%;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0% {transform: translate(-50%, 0%);}
    50% {transform: translate(-50%, 30%);}
    100% {transform: translate(-50%, 0%);}
  }
`
const BuggyStyle = styled.img`
	width: 100%;
`
const Mission = styled.div`
	margin-top: -5%;
`
// markup
const IndexPage = () => {
  return (
    <MainStyle>
      <title>Home Page</title>
			<Navbar/>
			<Hero>
				<BuggyStyle src={buggyhome}></BuggyStyle>
				<Mission>
					<ArrowText>accept your mission</ArrowText>
					<ArrowStyle src={arrow}></ArrowStyle>
				</Mission>
			</Hero>
			<Content>
				<HeadingStyleRight>
					<LineStyle src={line}></LineStyle>
      		<HeadingText>Events for 2021</HeadingText>
				</HeadingStyleRight>
				<Events/>
			</Content>
    </MainStyle>

  )
}

export default IndexPage
