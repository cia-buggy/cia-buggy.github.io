import * as React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import {DARK_BG, MAIN_TXT, ACCENT_TXT} from "../consts.js"
import insta from "../images/instagram.png"
import twitter from "../images/Twitter.png"
import fb from "../images/FB.png"
import slack from "../images/Slack.png"
import linkedin from "../images/Linkedin.png"
import bridge from "../images/Bridge.png"
import buggylogo from "../images/Buggylogo.png"

const NavWrap = styled.nav`
	padding: 0;
	border-radius: 4px;
	list-style-type: none;
	text-align:center;
	bottom:0;
`
const NavStyles = styled.ul`	
	display: inline-flex;
	border-radius: 4px;
	list-style-type: none;
	background-color: ${DARK_BG};	
	font-family: 'Nunito', sans-serif;	
	padding:0.75rem;`;
	
const Logo = styled.img`
	height: 2rem;
	width: auto;
	display: inline-flex;
	font-size: 1.2rem;
	padding: 0rem 1rem;
	@media (max-width : 770px) {
		padding: 0rem 0.4rem;
	}
	&: hover{
			scale:1.1;
	}
`

const FooterInfo = styled.p`
	text-align: center;
	color: ${MAIN_TXT};
	font-size: 1.2rem;
	margin-top: 5%;
	line-height:2
`

const Navbar = () => {
  return (
    <div>
      <NavWrap>
					<FooterInfo>412-268-2038 | CIA@andrew.cmu.edu <br></br> Stever House Basement</FooterInfo>
        <NavStyles>
          <li><a href = "https://www.facebook.com/ciabuggy/"><Logo src= {fb}></Logo></a></li>
          <li><a href = "https://www.instagram.com/ciabuggy/"><Logo src= {insta}></Logo></a></li>
          <li><a href = "https://app.slack.com/client/T15JH0RJ8/C15JH0T1A"><Logo src= {slack}></Logo></a></li>
          <li><a href = "https://twitter.com/cia_buggy"><Logo src= {twitter}></Logo> </a></li>
          <li><a href = "https://twitter.com/cia_buggy"><Logo src= {linkedin}></Logo></a></li>
          <li><a href ="https://cmubuggy.org/"><Logo src= {buggylogo}></Logo></a></li>
          <li><a href = "https://thebridge.cmu.edu/organization/cia"><Logo src= {bridge}></Logo></a></li>
        </NavStyles>
      </NavWrap>
    </div>
  )
}
export default Navbar