import * as React from "react"
import styled from "styled-components"
import {DARK_BG, LIGHT_BG, ACCENT_TXT} from "../consts.js"
import "../base.css"
import {MAIN_TXT} from "../consts.js"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import line from "../images/yellowline.png"
import garage from "../images/garage.jpg"
import pancaking from "../images/pancaking.jpg"
import rolls from "../images/rolls.jpg"
import { useState } from "react";
import ReactDOM from 'react-dom';

const HeadingText = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.7rem;
	color: ${ACCENT_TXT};
	display: inline-block;
	vertical-align: middle;
	`
const HeadingTextRight = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.3rem;
	color: ${ACCENT_TXT};
	padding: 1rem;
	margin-left:20%;
	display: inline-block;
	vertical-align: middle;
	`
const HeadingStyle = styled.div`
	padding-top:5rem;
	padding-bottom:0.2rem;

`;
const LineStyle = styled.img`
	display: inline-block;
	vertical-align: middle;
`
const Text = styled.p`
	font-family: 'Nunito', sans-serif;	
	font-size: 1.3rem;
	color: ${MAIN_TXT};
	padding-bottom: 1.5rem;
	width:70%;
	display: inline-block;
	margin-right: 15%;
	line-height:2;
	margin-left: 15%;
`
const ImageJoin = styled.img`
	width:27rem;
`
const Section = styled.div`
	padding:2rem;
	width40%;
`
const Titles = styled.h1`
	font-family: 'Saira', sans-serif;
	font-size: 2.3rem;
	color: ${ACCENT_TXT};
	text-align:center;
`
const Descript = styled.p`
	font-size:1.2rem;
	font-family: 'Nunito', sans-serif;	
	width: 27rem;
`
const Info = styled.div`
	display:flex;	
	width:80vw;
	margin-left:auto;
	justify-content:center;
	margin-right:auto;
`
const Form = styled.iframe`
	width: 50%;
	height: 70rem;;
	margin-height: 0;
	margin-left:25%;
	margin-right:25%;
	frameborder:0;
	border-width: 0;

`
const Wrap = styled.div`
	width:100%;
`


const  JoinPage = () => {
        return (
					<div>
						<Navbar/>
							<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Join Us</HeadingTextRight>
				</HeadingStyle>
				<Text>Stop by our table outside Doherty Hall in the fall or our station at Activities Fair! 
					Drop by our morning rolls and social events. Check out our calendar of events here.
							You may recognize CIA members on campus by our iconic yellow sweatshirts. <br></br>
							Feel free to say hi or ask questions! You can also reach out to our officers or email cia@andrew.cmu.edu with any questions.
							</Text>
					<Info>
						<Section>
							<ImageJoin src={garage}/>
							<Titles>The Garage</Titles>
							<Descript>Our workplace and hangout is "the garage" in the basement of Stever House. If the doors aren't open, call 412-268-2038 to ask to be let in.</Descript>
						</Section>
						<Section>
							<ImageJoin src={pancaking}/>
							<Titles>Pancaking</Titles>
							<Descript>We table at the beginning of every semester and in every Friday in front of Doherty Hall with free chocolate chip pancakes!</Descript>
						</Section>
						<Section>
							<ImageJoin src={rolls}/>
							<Titles>Rolls</Titles>
							<Descript>Our workplace and hangout is "the garage" in the basement of Stever House. If the doors aren't open, call 412-268-2038 to ask to be let in. 
								We meet for rolls in our tent outside Tepper at the corner of Tech St. and Frew St. Rolls are on Saturday and Sunday mornings from 5-9 AM.</Descript>
						</Section>

					</Info>
					<Wrap>
						<Titles>Join the Mailing List!</Titles>
					<Form src="https://docs.google.com/forms/d/e/1FAIpQLSec5UeiHa6rjp59lusK7yImeM3K3YO1ADww8kXKO4uskqYUSw/viewform?embedded=true">Loading…</Form>
					<Footer/>
					</Wrap>
					</div>
        );
    } 
export default JoinPage