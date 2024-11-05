/* eslint-disable */

import * as Colors from '../Style/Constants';
import * as Constants from '../Components/Constants';
import styled from "styled-components";
import { Row, Col, Typography, Divider } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

import Logo from "./Logo";
import Informations from './Informations';
import LogoFooter from '../assets/logo-footer.svg';
import FacebookLogo from '../assets/facebook.svg';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/twitter.svg';

export default function Footer() {

    return (
        <>
            <ContainerFooter  style={{color: Colors.white, fontFamily: 'Inter'}}>
                <Row style={{ marginTop: '50px' }}>
                    <Col span={5} offset={0} style={{ gap: '20px'}}>
                        <Row>
                            <Logo logo={LogoFooter} />
                        </Row>
                        <Row style={{ marginTop: '50px'}}>
                            <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </Typography.Paragraph>
                        </Row>
                        <Row style={{ marginTop: '50px'}}>
                            <SocialMediaLogo src={FacebookLogo} style={{ marginRight: '50px'}} />
                            <SocialMediaLogo src={InstagramLogo} style={{ marginRight: '50px'}} />
                            <SocialMediaLogo src={TwitterLogo} style={{ marginRight: '50px'}} />
                        </Row>
                    </Col>

                    <Col span={5} offset={4}>
                        <Informations data={Constants.Information}/>
                    </Col>
                    <Col span={5}>
                        <Informations data={Constants.Categories}/>
                    </Col>
                    <Col span={5}>
                        <Informations data={Constants.Contact}/>
                    </Col>
                </Row>
                <Divider style={{  borderColor: Colors.white, marginTop: '75px' }}></Divider>
                <Row align='center' style={{ fontSize: '12px'}}>
                    <CopyrightOutlined />
                    2024 Digital College
                </Row>
                
            </ContainerFooter>
        </>
    )
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 454px;
    position: fixed;
    padding: 0 3%;
    box-sizing: border-box;
    background-color: ${Colors.dark_gray};
`

const SocialMediaLogo = styled.img`
    width: fit-content;
    height: 25px;
`