import * as React from "react"
import styled from "styled-components"
import {DARK_BG, LIGHT_BG, MAIN_TXT,ACCENT_TXT} from "../consts.js"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import line from "../images/yellowline.png"
import Officer from "../components/officer"
import Sam from "../images/officers/samuel_thompson.jpg"
import Alfred from "../images/officers/alfred_chang.png"
import Amy from "../images/officers/amy_germer.png"
import Andrew from "../images/officers/andrew_spoto.jpg"
import Christina from "../images/officers/christina_zhou.jpg"
import Ethan from "../images/officers/ethan_rosenthal.jpeg"
import Janet from "../images/officers/janet_li.jpg"
import Jasmine from "../images/officers/jasmine_cheng.png"
import Joshua from "../images/officers/joshua_cheng.jpg"
import Justin from "../images/officers/justin_ryu.jpeg"
import LeoH from "../images/officers/leo_hasher.jpg"
import LeoN from "../images/officers/leo_nicolussi.jpg"
import Nate from "../images/officers/nate_klein.jpg"
import Nisha from '../images/officers/nisha_bhargava.jpeg'
import Olivia from '../images/officers/olivia_ehrman.jpg'
import Ryley from '../images/officers/ryley_starta.jpeg'
import Sona from '../images/officers/sona_marukyan.jpg'
import Tori from '../images/officers/victoria_ciplickas.jpg'
import Victoria from '../images/officers/victoria_huang.jpeg'

import "../base.css"


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
	padding-bottom:3rem;

`;
const LineStyle = styled.img`
	display: inline-block;
	vertical-align: middle;
`
const GalleryWrap = styled.div`
	width:100%;
`
const Gallery = styled.div`
	display: flex;
  flex-wrap: wrap;
  align-items: flex-start;   
	justify-content: space-around; 
	flex-direction: row;
`
const OfficerList =[
	{ name: "Sam Thompson", title: "Co-Chair", pic:Sam, major: "Junior Math"
	},
	{ name: "Amy Germer", title: "Co-Chair", pic:Amy, major:"Junior Physics, Math"
	},
	{ name: "Joshua Cheng", title: "Treasurer", pic:Joshua, major:"Sophomore ECE"
	},
	{ name: "Olivia Ehrman", title: "Secretary", pic:Olivia, major:"Sophomore Mechanical Engineering"
	},
	{ name: "Leo Hasher", title: "Alumni Relations", pic:LeoH, major:"Junior Mechanical Engineering"
	},
	{ name: "Tori Ciplickas", title: "Head Driver ", pic:Tori, major:"Senior Math"
	},
	{ name: "Ethan Husted", title: "Head Mechanic", pic:Ethan, major:"Senior Mechanical Engineering"
	},
	{ name: "Ryley Starta", title: "Assistant Head Mechanic", pic:Ryley, major:"Sophomore Mechanical Engineering, Biomedical Engineering"
	},
	{ name: "Nate Klein", title: "Assistant Head Mechanic", pic:Nate, major:"Sophomore Mechanical Engineering"
	},
	{ name: "Nisha Bhargava", title: "PR Chair", pic:Nisha, major:"Junior Mechanical Engineering, Biomedical Engineering"
	},
	{ name: "Leo Nicolussi", title: "Build Lead", pic:LeoN, major:"Junior Mechanical Engineering, Robotics"
	},	
	{ name: "Christina Zhou", title: "Build Lead", pic:Christina, major:"Junior Chemistry, Physics"
	},
	{ name: "Alfred Chang", title: "Push Captain ", pic:Alfred, major:"Senior Mechanical Engineering"
	},
	{ name: "Andrew Spoto", title: "Push Captain ", pic:Andrew, major:"Senior Mechanical Engineering"
	},
	{ name: "Jasmine Cheng", title: "Push Captain, Co-Social Chair ", pic:Jasmine, major:"Senior Computer Science, Robotics"
	},
	{ name: "Sona Marukyan", title: "Co-Social Chair ", pic:Sona, major:"Sophomore Mat Sci & Biomedical Engineering"
	},
	{ name: "Ethan Rosenthal", title: "Pancaking", pic:Ethan, major:"Senior Computer Science"
	},
	{ name: "Victoria Huang", title: "Design Chair ", pic:Victoria, major:"Sophomore Chemical & Biomedical Engineering"
	},
	{ name: "Janet Li", title: "Nerds Chair, Webmaster ", pic:Janet, major:"Senior ECE"
	},
]
const OfficersPage = () => {
	return(
		<main>
			<Navbar/>
				<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Our Officers</HeadingTextRight>
				</HeadingStyle>
				<GalleryWrap>
				<Gallery>
					{OfficerList.map(person => {
  				return <Officer name={person.name} title={person.title} pic={person.pic} major={person.major}/>
					})}
				</Gallery>
				</GalleryWrap>
			<Footer/>
		</main>
	)
}
export default OfficersPage;