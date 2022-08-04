import * as React from "react";
import styled from "styled-components";
import { DARK_BG, LIGHT_BG, MAIN_TXT, ACCENT_TXT } from "../consts.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import line from "../images/yellowline.png";
import "../base.css";

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
		
	}
	`;
const HeadingStyle = styled.div`
	padding-top:5rem;
	padding-bottom:3rem;
	@media (max-width : 770px) {
		padding-bottom:0rem;
		padding:top:3rem;
	}
`;
const LineStyle = styled.img`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 770px) {
    width: 100vw;
  }
`;

const Calendar = styled.iframe`
  margin-left: 10%;
  margin-right: 10%;
  style: border;
  width: 80%;
  height: 100vh;
  scrolling: "no";
  @media (max-width: 770px) {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 60vh;
  }
`;
const Text = styled.p`
  font-family: "Saira", sans-serif;
  font-size: 1.3rem;
  color: ${MAIN_TXT};
  padding-bottom: 1.5rem;
  width: 70%;
  display: inline-block;
  margin-right: 15%;
  margin-left: 15%;
  text-align: center;
  @media (max-width: 770px) {
    margin-right: 10%;
    margin-left: 10%;
    font-size: 1rem;
    width: 80%;
  }
`;
const EventsPage = () => {
  return (
    <main>
      <Navbar />
      <HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Our Events</HeadingTextRight>
				</HeadingStyle>
      <Text>
        {" "}
        We invite everyone to try any and all of the various roles in this
        unique sport, and encourage members and friends to participate in our IM
        sports teams, join us for community service or weekly Half Price meals,
        and hang out with us at our social events and parties.{" "}
      </Text>
      <Calendar src="https://calendar.google.com/calendar/embed?src=81chdj6lpav23v9fe3ig7mrj88%40group.calendar.google.com&ctz=America%2FNew_York">
        {" "}
      </Calendar>
      <Footer />
    </main>
  );
};
export default EventsPage;
