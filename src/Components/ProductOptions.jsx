/* eslint-disable */
import styled from "styled-components"
import { Row, Typography } from "antd";

import * as Colors from '../Style/Constants';

export default function ProductOptions(props) {

    const { title, Options, Radius, Shape, Type } = props;
console.log(Options)
    return(
        <BoxContainer>
            <Row>
                <Typography.Paragraph>
                    {title}
                </Typography.Paragraph>
            </Row>
            <Row>
                {Options.map((item) => {
                    return (
                        Shape === 'square' ? (
                            <OptionsListSquare key={item} style={{ borderRadius: Radius}}>
                                {item}
                            </OptionsListSquare>
                        ) : (
                            <OptionsListCircle key={item} style={{ backgroundColor: item}}>

                            </OptionsListCircle>
                        )
                    )
                })}
            </Row>
        </BoxContainer>
    )
}

const BoxContainer = styled.div`
    width: 100%;
    height: auto;
`

const OptionsListSquare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 46px;
    margin: 0 5px;
    padding: 0 2.5px;
    border: solid 1px ${Colors.dark_gray_2};
    background-color: ${Colors.primary};
    color: ${Colors.white};
    font-family: 'Inter';
`

const OptionsListCircle = styled.div`
    width: 31px;
    height: 31px;
    margin: 0 5px;
    border: solid 1px ${Colors?.dark_gray_2};
    border-radius: 50%;
`


//     ${(props) => props?.Type === 'text' ? (
//         'font-size: 24px',
//         `color: ${Colors?.dark_gray_2}`
//     ) : (
//         ''
//     )}