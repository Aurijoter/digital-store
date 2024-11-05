/* eslint-disable */
import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

export default function Gallery(props) {
    const { list, Width, Height, Radius } = props;

    const contentStyle = {
        width: Width,
        height: Height,
        borderRadius: Radius,
    };


    
    return (
        <div style={contentStyle}>
            <Carousel arrows infinite={false} style={contentStyle}>
                {list?.map((image, index) => {
                    return <Img key={index} style={contentStyle} src={image?.src} />;
                })}
            </Carousel>
        </div>
    );
}


const Img = styled.img`
    width: 100%;
    height: fit-content;
`;
