/* eslint-disable */

import { Link } from 'react-router-dom';
import { Row, Col, Typography} from 'antd';
import styled from 'styled-components';
import * as Colors from '../Style/Constants';

import ProductCard from '../Components/ProductCard';

export default function Section(props) {

    const { title, titleAlign, link, list } = props;

    return(
        <>
            <SectionContainer >
                <Row>
                    <Col span={12}>
                        <Row justify={ titleAlign === 'center' ? 'end' : 'start'}>
                            <Typography.Title 
                                level={3} 
                                style={{color: Colors.dark_gray_2, fontFamily: 'Inter'}}
                            >
                                {title}
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={12} justify='end' style={{ cursor: 'pointer'}}>
                        <Link>
                            <Typography.Text onClick={() => alert(link.href)} style={{ color: Colors.primary }}>
                                {link.text}
                            </Typography.Text>
                        </Link>
                    </Col>
                </Row>

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
`