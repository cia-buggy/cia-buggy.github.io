import React, { Component } from "react";
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Event from "./event"

const SliderPage = styled.div`
	display:flex;
	justify-content: space-around;
`
export default class Events extends Component {
    render() {
        return (
            <Carousel>
                <SliderPage>
                   <Event/>
									 <Event/>
									 <Event/>
									 <Event/>
                </SliderPage>
                <SliderPage>
                   <Event/>
									 <Event/>
									 <Event/>
									 <Event/>
                </SliderPage>
                <SliderPage>
                   <Event/>
									 <Event/>
									 <Event/>
									 <Event/>
                </SliderPage>
            </Carousel>
        );
    } 
}
