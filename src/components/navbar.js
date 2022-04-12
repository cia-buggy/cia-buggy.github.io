import * as React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import {DARK_BG, MAIN_TXT, ACCENT_TXT} from "../consts.js"

const NavWrap = styled.nav`
	display: block;
	position: sticky;
	top:0;
	z-index:2000;
	margin-left: auto; 
	margin-right: 0;
	text-align: right;
	@media (max-width : 770px) {
		font-size:0.5rem;
	}
`
const NavStyles = styled.ul`	
	display: inline-flex;
	border-radius: 4px;
	list-style-type: none;
	background-color: ${DARK_BG};	
	padding:0.75rem;`;

	

const ListStyles = styled(Link)`
	padding: 0rem 1rem;
	font-size: 1.2rem;
	display: inline-flex;
	justify-content: right;
	align-items: center;
	font-family: 'Saira', sans-serif;	
	color: ${MAIN_TXT};
	text-decoration: none;
	@media (max-width : 770px) {
		font-size:0.7rem;
		padding:0rem 0.7rem;
	}
	&:hover {
    color: ${ACCENT_TXT};
		text-decoration: underline;
		scale: 1.1;
  }
`

const Navbar = () => {
  return (
    <div>
      <NavWrap>
        <NavStyles>
          <li><ListStyles to="/">Home</ListStyles></li>
          <li><ListStyles to="/events">Events</ListStyles></li>
          <li><ListStyles to="/officers">Officers</ListStyles></li>
          <li><ListStyles to="/buggies">Buggies</ListStyles></li>
          <li><ListStyles to="/gallery">Gallery</ListStyles></li>
          <li><ListStyles to="/join">Join</ListStyles></li>
        </NavStyles>
      </NavWrap>
    </div>
  )
}
export default Navbar