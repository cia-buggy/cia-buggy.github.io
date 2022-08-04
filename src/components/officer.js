import * as React from "react"
import styled from "styled-components"
import {DARK_BG, MAIN_TXT, ACCENT_TXT, LIGHT_BG} from "../consts.js"
import eventpic from "../images/genericevent.jpg"

const OfficerPhoto = styled.img`
	width: 15rem;
	height: 15rem;
	object-fit: cover;
	display: block;
	border-radius:50%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`
const OfficerBackground = styled.div`
	background-color:var(--color-light-background);
	width: 18rem;
	border-radius: 10px;
	margin: 3rem;
	&: hover{
		scale:1.01;
	}
`
const OfficerName = styled.p`
	font-family: 'Saira', sans-serif;	
	color: ${ACCENT_TXT};
	text-align: center;
	padding-top:2rem;
	font-size: 1.5rem;
`

const OfficerDetail= styled.p`
	font-family: 'Nunito', sans-serif;	
	color: ${MAIN_TXT};
	text-align: center;
	padding-top: 0.4rem;
	padding-bottom:0.1rem;
	font-size: 1.2rem;
`
const OfficerDetail1 = styled.p`
	font-family: 'Nunito', sans-serif;	
	color: ${MAIN_TXT};
	text-align: center;
	font-size: 1.2rem;
	padding-top: 1rem;
	padding-bottom:1.7rem;
`
const Officer = ({name, title, pic, major}) => {
	return(
		<OfficerBackground>
			<OfficerName>{name}</OfficerName>
			<OfficerDetail>{title}</OfficerDetail>
			<OfficerPhoto src={pic}/>
			<OfficerDetail1>{major}</OfficerDetail1>
		</OfficerBackground>
	)
}
export default Officer;