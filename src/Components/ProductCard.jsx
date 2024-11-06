/* eslint-disable */
import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';

import * as Colors from '../Style/Constants';

export default function ProductCard(props){

    const { image, name, price, priceDiscount } = props;

    return (
        <ContainerCard>
            <Row>
                <img src={image} />
            </Row>
            <Row>
                <Typography.Text
                    style={{ color: Colors.dark_gray, fontSize: '24px' }}
                > 
                    {name}
                </Typography.Text>
            </Row>
            <Row>
                <Col span={8} offset={0}>
                    <Typography.Text
                        style={{ display: 'flex', fontSize: '24px', color: priceDiscount ? Colors.light_gray : Colors.dark_gray, textDecoration: priceDiscount ? 'line-through' : 'none' }}
                    > 
                        R$ {price}
                    </Typography.Text>
                </Col>
                {priceDiscount && (
                    <Col span={16}>
                        <Typography.Text 
                            style={{ 
                                display: 'flex', 
                                fontSize: '24px', 
                                fontWeight: '700',
                                color: Colors.dark_gray 
                            }}
                            >
                            R$ {priceDiscount}
                        </Typography.Text>
                    </Col>
                )}
            </Row>

        </ContainerCard>
    );
}

const ContainerCard = styled.div`
    width: 292px;
    height: auto;
    box-sizing: border-box;
`