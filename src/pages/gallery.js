import * as React from "react"
import styled from "styled-components"
import {DARK_BG, LIGHT_BG, ACCENT_TXT} from "../consts.js"
import "../base.css"
import {MAIN_TXT} from "../consts.js"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import line from "../images/yellowline.png"
import { graphql, useStaticQuery } from "gatsby";


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
	text-align:center;
`
const GalleryImg = styled.img`
	width: 100% !important;
  height: auto !important;
	&:hover{
		scale:1.4;
		transition: all 0.5s;
		transition-timing-function: ease-in-out;
	}
`
const Gallery = styled.div`
	line-height: 0;
  -webkit-column-count: 5;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         5;
  column-gap:           0px;  
	width: 80%;
	margin-left:10%;
	margin-right:10%;
`
const ImageSupplier = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: {
        extension: {eq: "jpg"},
        sourceInstanceName: {eq: "album"}
      })
      {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300, quality: 50) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`
);

return (allFile.edges);
};
const JoinPage = () => {
    return(
					<div>
					<Navbar/>
							<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Gallery</HeadingTextRight>
				</HeadingStyle>
				
				<Text>See what we are up to!</Text>
				<Gallery>
				{ImageSupplier().map(edge => {
  				return <GalleryImg key={edge.node.childImageSharp.fluid.originalName} src={edge.node.childImageSharp.fluid.src} />
					})}
				</Gallery>
					<Footer/>
						</div>
        
		)
}
export default JoinPage
