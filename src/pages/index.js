import * as React from "react"
import styled from "styled-components"
import {DARK_BG, LIGHT_BG, ACCENT_TXT} from "../consts.js"
import "../base.css"
import {MAIN_TXT} from "../consts.js"
import Navbar from "../components/navbar"
import Events from "../components/eventcarousel"
import line from "../images/yellowline.png"
import buggyhome from "../images/homeimg.png"
import arrow from "../images/whitearrow.png"
import pusher from "../images/pusher.png"
import mechanics from "../images/Mechanics.jpg"
import driver from "../images/Drivers.jpg"
import support from "../images/Support.png"
import Footer from "../components/footer"
import { Link } from 'gatsby'
// styles

const MainStyle = styled.main`
	font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top:1.2rem;	
`;
const LightBg = styled.div`
	background-color: ${LIGHT_BG};
	width: 100%;
	padding-bottom: 5rem;
`
const HeadingStyle = styled.div`
	padding-top:5rem;
	padding-bottom:3rem;

`;
const Content = styled.div`
	background-color: ${DARK_BG};
	margin-top:100vh;
	width:100%;
`
const HeadingTextRight = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.3rem;
	color: ${ACCENT_TXT};
	padding: 1rem;
	margin-left:5%;
	display: inline-block;
	vertical-align: middle;
	`
const HeadingTextLeft = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.3rem;
	color: ${ACCENT_TXT};
	padding: 0rem;
	margin-left:10%;
	margin-top:-10%;
	display: inline-block;
`

const LineStyle = styled.img`
	display: inline-block;
	vertical-align: middle;
`
const LineStyleRight = styled.div`
	display: inline-block;
	vertical-align:middle;
	float:right;
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
const CIADesc = styled.p`
	width:52%;
	margin-right:auto;
	margin-left:auto;
	display:block;
	align:justify;
	font-size:1.4rem;
	font-family: 'Nunito', sans-serif;	
	padding-bottom:4rem;
	line-height:3rem;
`
const LearnMore = styled.button`
	display:block;
	margin-right:auto;
	margin-left:auto;
	background-color: ${ACCENT_TXT};
	color: ${MAIN_TXT};
	font-family: 'Saira', sans-serif;
	font-weight: bold;
	font-size:1.2rem;
	padding:1rem;
	border-radius:10px;
	text-decoration:none;
	&:hover{
		color: ${ACCENT_TXT};
		background-color: ${DARK_BG};
		text-decoration:none;
	}
`
const Team = styled.div`
	display:flex;
	flex-direction: row;
	align-self:center;
	padding:0.5rem;
	align-items:center;
	align-self:center;
	justify-content:center;
	overflow-wrap: break-word;
	 flex-wrap: wrap;
`

const TeamPic = styled.img`
	border-radius:50%;
	width:30rem;
	height:30rem;
	margin-left:2rem;
	margin-right:2rem;
`
const Heading = styled.h2`
	font-family: 'Saira', sans-serif;
	font-size:2rem;
	text-align: center;
	font-weight:1;
	color: ${ACCENT_TXT};
`
const Text = styled.p`
	font-size: 1.1rem;
	line-height: 2;

`
const TeamBg = styled.div`
	width:35rem;
	padding:2rem;
	margin:2rem;
	background-color: ${LIGHT_BG};
	border-radius:10px;
`
const Cal = styled.iframe`
	width:80%;
	height:30rem;
	margin-left:10%;
	margin-right:10%;
	justify-content:center;
	margin-bottom: 4rem;
	color: ${MAIN_TXT};
	border-width:0;
	frameborder:0;
	scrolling:No;
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
				<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Events for 2021</HeadingTextRight>
				</HeadingStyle>
				<Cal src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23FFFFFF&ctz=America%2FNew_York&mode=WEEK&showTitle=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=0&src=ODFjaGRqNmxwYXYyM3Y5ZmUzaWc3bXJqODhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23EF6C00"></Cal>
				<LightBg>
					<HeadingStyle>
      			<HeadingTextLeft>Welcome Agents, </HeadingTextLeft>
						<LineStyleRight>
							<img src={line}/>
						</LineStyleRight>
					</HeadingStyle>
				<CIADesc>
					The Carnegie Involvement Association, or CIA, was founded in 1970 by Frank Robb, Larry Ross, and Carl Saurman.

We were the first independent (non-Greek) organization to win Sweepstakes, or Buggy, winning the Men's races in 1981 and the Women's races in 1980, 1982, 1983, 1985, 2015, and 2016.

Open to all members of the student body, CIA's objective is to strike the right balance between performing well and having a blast!
				</CIADesc>
					<Link to ="/join"><LearnMore>Learn More!</LearnMore></Link>
				</LightBg>
				
				<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>The Team</HeadingTextRight>
				</HeadingStyle>

				<Team>
					<TeamPic src={pusher}></TeamPic>
					<TeamBg>
						<Heading>Pushers</Heading>
						<Text>The buggy would stay still at the start line if not for the pushers.
			 						Since the buggy derives its power from those pushing it, 
									it is important that pushers be strong, fast, and in top physical form. 
									The social life of the pusher revolves around the consumption of food, 
									and as such the customary greeting for a pusher is a reminder to 'sup.'</Text>
					</TeamBg>
				</Team>
				
				<Team>
					<TeamBg>
						<Heading>Mechanic</Heading>
						<Text>Sometimes referred to as gnomes, mechanics are the members of our team 
						that design, build, and maintain our buggies to keep them safe and fast.
			 			The natural habitat of the mechanics is inside the garage during the week,
			  			inside the tent during rolls, and inside the truck on Raceday.</Text>
					</TeamBg>
					<TeamPic src={mechanics}></TeamPic>
				</Team>

				<Team>
					<TeamPic src={driver}></TeamPic>
					<TeamBg>
						<Heading>Drivers</Heading>
						<Text>Drivers basically just lie there, but what little motions they make are
			 critical to the race. The driver is responsible for getting the buggy
			 around the course as quickly as possible and without incident, all while 
			 while lying prone inches from the ground at speeds approaching 40 mph.</Text>
					</TeamBg>
				</Team>

				<Team>
					<TeamBg>
						<Heading>Support</Heading>
						<Text>Support is everyone and no one. One may be part of support for an hour, 
			or for the rest of your college career; you never know. It's quite mystifying.
			 Support is most visible when operating the flags used to signal to drivers, 
			 but they also are involved in performing the necessary chores so that the 
			 course can be used for practices and races. Interested in joining the support team?
			  You can check out our training slides and learn more!</Text>
					</TeamBg>
					<TeamPic src={support}></TeamPic>
				</Team>
				<Footer/>
			</Content>
    </MainStyle>

  )
}

export default IndexPage
