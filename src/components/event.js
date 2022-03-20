import * as React from "react"
import styled from "styled-components"
import {DARK_BG, MAIN_TXT, ACCENT_TXT, LIGHT_BG} from "../consts.js"
import eventpic from "../images/genericevent.jpg"

const EventDescription = styled.div`
	display:none;
	margin-right:auto;
	margin-left:auto;
	width:13rem;
`
const EventPhoto = styled.div`
	object-fit:contain;
	overflow: hidden;
	width:15rem;
	height: 15rem;
	display: block;
	border-radius:10px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`
const EventBackground = styled.div`
	background-color: ${LIGHT_BG};
	border-radius: 10px;
	width: 18rem;
	height:27rem;
	margin-bottom:3%;
	&:hover {
		${EventPhoto} {
			visibility: hidden;
  		opacity: 0;
  		transition: visibility 0s 2s, opacity 2s linear;
			display:none;
		}
	}
	&:hover {
		${EventDescription}{
			display:block;
		}
	}
`
const EventTitle = styled.p`
	font-family: 'Saira', sans-serif;	
	color: ${ACCENT_TXT};
	text-align: center;
	padding-top:2rem;
	padding-bottom:0.2rem;
	font-size: 1.2rem;
`
const Heading = styled.p`
	color:  ${ACCENT_TXT};
	font-family: 'Saira', sans-serif;	
	margin-top:0;
	margin-bottom:0;
	font-size: 1.2rem;
`
const Info = styled.p`
	color: ${MAIN_TXT};
	margin-top:0;
`

const EventTime = styled.p`
	font-family: 'Nunito', sans-serif;	
	color: ${ACCENT_TXT};
	text-align: center;
	padding-top: 1.2rem;
	padding-bottom:1.7rem;
`
const Event = ({date, location, title, description, contact}) => {
	return(
		<EventBackground>
			<EventTitle>{title}</EventTitle>
			<EventPhoto>
				<img src={eventpic}/>
			</EventPhoto>
			<EventDescription>
				<Heading>Location</Heading>
				<Info>{location}</Info>

				<Heading>Contact</Heading>
				<Info>{contact}</Info>

				<Heading>Description</Heading>
				<Info>{description}</Info>

			</EventDescription>
			<EventTime>{date}</EventTime>
		</EventBackground>
	)
}
export default Event;