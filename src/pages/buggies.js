import React, { Component } from "react";
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tempest from "../images/tempest.jpg"
import equinox from "../images/equinox.jpg"
import icarus from "../images/icarus.jpg"
import orca from "../images/orca.jpg"
import impulse from "../images/impulse.jpg"
import kingfisher from "../images/kingfisher.jpg"
import emperor from "../images/emperor.jpg"
import aroura from '../images/aurora.jpg'
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import line from "../images/yellowline.png"
import {DARK_BG, LIGHT_BG, MAIN_TXT,ACCENT_TXT} from "../consts.js"

const SliderPage = styled.div`
	display:flex;
	justify-content: space-around;
`
const Buggyimg = styled.img`

`
const HeadingText = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.7rem;
	color: ${ACCENT_TXT};
	display: inline-block;
	vertical-align: middle;
	@media (max-width : 770px) {
		font-size: 2.1rem;
		margin-left:auto
		margin-right:auto;
	}
	`
const HeadingTextRight = styled.p`
	font-family: 'Saira', sans-serif;
	font-size: 2.3rem;
	color: ${ACCENT_TXT};
	padding: 1rem;
	margin-left:20%;
	display: inline-block;
	vertical-align: middle;
	@media (max-width : 770px) {
		font-size: 2.1rem;
		margin-left:auto
		margin-right:auto;
		padding:0.5rem;
	}
	
	`
const HeadingStyle = styled.div`
	padding-top:5rem;
	padding-bottom:0.2rem;
		@media (max-width : 770px) {
		padding-bottom:0rem;
		padding-top:2rem;
	}

`;
const LineStyle = styled.img`
	display: inline-block;
	vertical-align: middle;
		@media (max-width : 770px) {
		width: 100vw;
	}
`

const Wrapper = styled.div`
	width 70%;
	margin-left:15%;
	margin-right:15%;
	@media (max-width : 770px) {
		width:90%;
		margin-left:5%;
		margin-right:5%;
	}
`
export default class buggycarosel extends Component {
    render() {
        return (
					<div>
						<Navbar/>
							<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Our Buggies</HeadingTextRight>
				</HeadingStyle>
					<Wrapper>
						<HeadingText>Active Buggies</HeadingText>
            <Carousel autoPlay="true" infiniteLoop="true">
								<Buggyimg src={kingfisher}/>
								<Buggyimg src={aroura}/>
								<Buggyimg src ={emperor}/>
                <Buggyimg src={tempest}/>
                <Buggyimg src={equinox}/>
                <Buggyimg src={icarus}/>
            </Carousel>
					<HeadingText>Retired Buggies</HeadingText>
					 <Carousel autoPlay="true" infiniteLoop="true">
                <Buggyimg src={impulse}/>
                <Buggyimg src={orca}/>
            </Carousel>
					</Wrapper>
					<Footer/>
					</div>
        );
    } 
}