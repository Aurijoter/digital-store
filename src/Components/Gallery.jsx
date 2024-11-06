/* eslint-disable */
import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

export default function Gallery(props) {
    const { images, Width, Height, Radius } = props;

    const contentStyle = {
        width: Width,
        height: Height,
        borderRadius: Radius,
        background: '#364d79',
        boxSizing: 'border-box',
    };


    
    return (
        <div style={contentStyle}>
            <Carousel 
                arrows 
                infinite={false} 
                fade
            >
                {images?.map((image, index) => {
                    return <Img key={index} src={image?.src} />;
                })}
            </Carousel>
        </div>
    );
}


const Img = styled.img`
    display: flex;
    width: 100%;
    height: fit-content;
`;
