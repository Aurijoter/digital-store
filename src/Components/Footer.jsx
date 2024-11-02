/* eslint-disable */

import * as Colors from '../Style/Constants';
import * as Constants from '../Components/Constants';
import styled from "styled-components";
import { Row, Col, Typography, Divider } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

import Logo from "./Logo";
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
                        <Typography.Title style={{color: Colors.white, fontFamily: 'Inter'}} level={5}>Informação</Typography.Title>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Sobre Drip Store</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Segurança</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Wishlist</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Blog</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Trabalhe conosco</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Meus Pedidos</Typography.Paragraph>
                    </Col>
                    <Col span={5}>
                        <Typography.Title style={{color: Colors.white, fontFamily: 'Inter'}} level={5}>Categorias</Typography.Title>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Camisetas</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Calças</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Bonés</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Headphones</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>Tênis</Typography.Paragraph>
                        </Col>
                    <Col span={5}>
                        <Typography.Title style={{color: Colors.white, fontFamily: 'Inter'}} level={5}>Contato</Typography.Title>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>{Constants.Address}</Typography.Paragraph>
                        <Typography.Paragraph style={{color: Colors.white, fontFamily: 'Inter'}}>{Constants.Phone}</Typography.Paragraph>
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