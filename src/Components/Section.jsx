/* eslint-disable */

import { Link } from 'react-router-dom';
import { Row, Col, Typography} from 'antd';
import styled from 'styled-components';
import * as Colors from '../Style/Constants';

import ProductCard from '../Components/ProductCard';

export default function Section({ children, title, titleAlign, link, list }) {

    return(
        <>
            <SectionContainer >
                <Row>
                    <Col span={13}>
                        <Row justify={ titleAlign === 'center' ? 'end' : 'start'}>
                            <Typography.Title 
                                level={3} 
                                style={{color: Colors?.dark_gray_2, fontFamily: 'Inter'}}
                            >
                                {title}
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={11}>
                        <Row justify='end' style={{ cursor: 'pointer'}}>
                            <Link>
                                <Typography.Text onClick={() => alert(link.href)} style={{ color: Colors?.primary }}>
                                    {link?.text}
                                </Typography.Text>
                            </Link>
                        </Row>
                    </Col>
                </Row>
                
                {children && (
                    <Row justify={'space-evenly'} wrap={false} style={{ gap: '15px 0'}}>
                        {children}
                    </Row>
                )}
                <Row>
                    {list?.map((item) => {
                        return (
                            <>
                                <ProductCard
                                    image={item?.image} 
                                    name={item?.name} 
                                    price={item?.price}
                                    priceDiscount={item?.priceDiscount}
                                />
                            </>
                        )
                    })}

                </Row>

            </SectionContainer>
        </>
    )
}

const SectionContainer = styled.section`
    width: 100%;
    margin-top: 30px;
`