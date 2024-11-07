/* eslint-disable */

import { Link } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import * as Colors from '../Style/Constants';

export default function Section({ children, title, titleAlign, link, list }) {

    return(
        <SectionContainer >
            <Row  style={{ maxWidth: '1260px', margin: '0 auto' }}>
                <Col span={14}>
                    <Row justify={ titleAlign === 'center' ? 'end' : 'start'}>
                        <Typography.Title 
                            level={3} 
                            style={{color: Colors?.dark_gray_2, fontFamily: 'Inter'}}
                        >
                            {title}
                        </Typography.Title>
                    </Row>
                </Col>
                <Col span={10}>
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
                <Row justify={'space-between'} wrap={false} style={{ maxWidth: '1260px', margin: '0 auto 30px auto' }}>
                    {children}
                </Row>
            )}
        </SectionContainer>
    )
}

const SectionContainer = styled.section`
    width: 100%;
    margin-top: 30px;
`