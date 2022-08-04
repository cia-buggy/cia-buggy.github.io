import * as React from "react";
import styled from "styled-components";
import { DARK_BG, LIGHT_BG, MAIN_TXT, ACCENT_TXT } from "../consts.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import line from "../images/yellowline.png";
import Officer from "../components/officer";

import AikenX from "../images/officers/aiken_xie.jpg"
import ElliotF from "../images/officers/elliot_frankel.jpg"
import ErinY from "../images/officers/erin_yan.jpg"
import GraceC from "../images/officers/grace_conard.jpg"
import HannahN from "../images/officers/hannah_noh.jpg"
import HannahS from "../images/officers/hannah_shane.jpg"
import JocelynT from "../images/officers/jocelyn_tseng.jpg"
import JuliaA from "../images/officers/julia_anitescu.jpg"
import KarinaS from "../images/officers/karina_shethia.jpg"
import LeoHa from "../images/officers/leo_hasher.jpg";
import LeoHs from "../images/officers/leo_hsu.jpg";
import LeoNi from "../images/officers/leo_nicolussi.jpg";
import MaddieB from "../images/officers/maddie_burroughs.jpg"
import MateusG from "../images/officers/mateus_gondinho.jpg"
import NateK from "../images/officers/nate_klein.jpg";
import OliviaE from "../images/officers/olivia_ehrman.jpg";
import SamR from "../images/officers/sam_rosenstrauch.jpg"
import SonaM from "../images/officers/sona_marukyan.jpg";
import VictoriaH from "../images/officers/victoria_huang.jpeg";
import VictoriaN from "../images/officers/victoria_nguyen.png"
import WinnieQ from "../images/officers/winnie_quang.jpg";

import "../base.css";

const HeadingTextRight = styled.p`
  font-family: "Saira", sans-serif;
  font-size: 2.3rem;
  color: ${ACCENT_TXT};
  padding: 1rem;
  margin-left: 20%;
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 770px) {
    padding-bottom: 0rem;
    font-size: 2rem;
  }
`;
const HeadingStyle = styled.div`
  padding-top: 5rem;
  padding-bottom: 3rem;
  @media (max-width: 770px) {
    padding-bottom: 0rem;
  }
`;
const LineStyle = styled.img`
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 770px) {
    width: 100vw;
  }
`;
const GalleryWrap = styled.div`
  width: 100%;
`;
const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: row;
`;
const OfficerList = [
  {
    name: "Leo Hasher",
    title: "Co-Chair",
    pic: LeoHa,
    major: "Senior Mechanical Engineering",
  },
  {
    name: "Olivia Ehrman",
    title: "Co-Chair",
    pic: OliviaE,
    major: "Senior Mechanical Engineering",
  },
  {
    name: "Winnie Quangkananurug",
    title: "Treasurer",
    pic: WinnieQ,
    major: "Junior Chemical Engineering",
  },
  {
    name: "Mateus Godinho",
    title: "Secretary",
    pic: MateusG,
    major: "Sophomore Mechanical Engineering",
  },
  {
    name: "Grace Conard",
    title: "Head Driver ",
    pic: GraceC,
    major: "Sophomore Buisness Administration",
  },
  {
    name: "Nate Klein",
    title: "Head Mechanic",
    pic: NateK,
    major: "Junior Mechanical Engineering",
  },
  {
    name: "Julia Anitescu",
    title: "Assistant Head Mechanic",
    pic: JuliaA,
    major: "Sophomore ECE",
  },
  {
    name: "Hannah Noh",
    title: "Assistant Head Mechanic",
    pic: HannahN,
    major: "Sophomore Mechanical Engineering, Robotics",
  },
  {
    name: "Victoria Huang",
    title: "PR Chair",
    pic: VictoriaH,
    major: "Junior Chemical & Biomedical Engineering",
  },
  {
    name: "Elliot Frankel",
    title: "Build Lead",
    pic: ElliotF,
    major: "Junior Material Science Engineering",
  },
	{
    name: "Aiken Xie",
    title: "Assistant Build Lead",
    pic: AikenX,
    major: "Sophomore Physics",
  },
  {
    name: "Leo Nicolussi",
    title: "Push Captain",
    pic: LeoNi,
    major: "Junior Mechanical Engineering, Robotics",
  },
  {
    name: "Sona Marukyan",
    title: "Push Captain",
    pic: SonaM,
    major: "Junior Material Science, Biomedical Engineering",
  },
  {
    name: "Victoria Nguyen",
    title: "Push Captain",
    pic: VictoriaN,
    major: "Sophomore Mechanical Engineering, Biomedical Engineering",
  },
  {
    name: "Jocelyn Tseng",
    title: "Push Captain",
    pic: JocelynT,
    major: "Junior Computer Science",
  },
  {
    name: "Sam Rosenstrauch",
    title: "Push Captain",
    pic: SamR,
    major: "Junior Math, Computer Science",
  },
  {
    name: "Leo Hsu",
    title: "Social Couch",
    pic: LeoHs,
    major: "Junior Physics",
  },
  {
    name: "Hannah Shane",
    title: "Social Couch",
    pic: HannahS,
    major: "Junior Russian Studies, Statistics ",
  },
  {
    name: "Maddie Burroughs",
    title: "Pancaking",
    pic: MaddieB,
    major: "Senior Computer Science",
  },
  {
    name: "Karina Shethia",
    title: "Design Chair",
    pic: KarinaS,
    major: "Senior Mechanical Engineering",
  },
  {
    name: "Erin Yan",
    title: "Webmaster",
    pic: ErinY,
    major: "Junior ECE",
  },
];
const OfficersPage = () => {
  return (
    <main>
      <Navbar />
			<HeadingStyle>
					<LineStyle src={line}></LineStyle>
      		<HeadingTextRight>Officers</HeadingTextRight>
				</HeadingStyle>
      <GalleryWrap>
        <Gallery>
          {" "}
          {OfficerList.map((person) => {
            return (
              <Officer
                name={person.name}
                title={person.title}
                pic={person.pic}
                major={person.major}
              />
            );
          })}{" "}
        </Gallery>
      </GalleryWrap>
      <Footer />
    </main>
  );
};
export default OfficersPage;
