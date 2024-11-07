/* eslint-disable */
import styled from "styled-components"
import { Row, Col, Typography, Button } from "antd"

import ProductOptions from "./ProductOptions"
import Star from '../assets/star-icon.svg';

import { Numbers } from "./Constants"
import * as Colors from "../Style/Constants"


export default function BuyBox({ children, name, reference, stars, rating, price, priceDiscount, description}) {


    return(
        <PageContainer>
            <Row>
                <Typography.Title style={{ fontSize: '32px', color: Colors.dark_gray }}>
                    {name}
                </Typography.Title>
            </Row>
            <Row>
                <Typography.Text style={{ fontSize: '12px', color: Colors.dark_gray_3 }}>
                    {reference}
                </Typography.Text>
            </Row>
            <Row>
                {Array.from({ length: 5 }).map((_, i) => (
                    <img key={i} src={Star} style={{ color: Colors.warning }} />
                ))}
                <StarBox>
                    {stars}
                    <img src={Star} style={{ fill: Colors.white }} />
                </StarBox>
                <Typography.Text style={{ fontSize:'14px', color: Colors.light_gray}}>( {rating} avaliações)</Typography.Text>
            </Row>
            <Row Type='flex'>
                    {priceDiscount && (
                        <Col span={5}>
                            <Typography.Text 
                                style={{ 
                                    display: 'flex', 
                                    fontSize: '32px', 
                                    fontWeight: '700',
                                    flexDirection: 'row',
                                    color: Colors.dark_gray_2
                                }}
                                >
                                R$ {priceDiscount}
                            </Typography.Text>
                        </Col>
                    )}
                    <Col span={8} offset={0}>
                    <Typography.Text
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            fontSize: priceDiscount ? '16px' : '32px', 
                            color: priceDiscount ? 
                                Colors.light_gray_2 : 
                                Colors.dark_gray_2, 
                            textDecoration: priceDiscount ? 'line-through' : 'none' }}
                    > 
                        R$ {price}
                    </Typography.Text>
                </Col>
            </Row>
            <Row>
                <Typography.Paragraph>
                    {description}
                </Typography.Paragraph>
            </Row>
            <Row>
                <ProductOptions
                    title={'Tamanho'}
                    Options={Numbers}
                    Radius={'5px'}
                    Shape={'square'}
                    Type={'text'}
                />
            </Row>
            <Row>
                <ProductOptions
                    title={'Cores'}
                    Options={Colors.ProductColors}
                    Radius={'0'}
                    Shape={'circle'}
                    Type={'color'}
                />
            </Row>
            <Button style={{ backgroundColor: Colors.warning, color: Colors.white, width: '100px', marginTop: '50px'}}>
                Comprar
            </Button>
        </PageContainer>
    )
}


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StarBox = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 5px;
    min-width: 10px;
    margin-left: 15px;
    font-size: 14px;
    padding: 5px;
    background-color: ${Colors.warning};
    border-radius: 4px;
`