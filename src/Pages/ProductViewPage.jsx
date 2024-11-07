/* eslint-disable */
import styled from "styled-components";
import { Row, Col } from "antd";

import Gallery from "../Components/Gallery";
import BuyBox from "../Components/BuyBox";
import Section from "../Components/Section";
import ProductListing from "../Components/ProductListing";

import * as Constants from '../Components/Constants';

export default function ProductViewPage() {



    return(
        <PageContainer>
            <Row>
                <Col span={14} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Gallery
                        images={Constants?.ProductImages}
                        Width={'700px'}
                        Height={'570px'}
                        Radius={'4px'}
                    />
                </Col>
                <Col span={10}>
                    <BuyBox
                        name={'Teste'}
                        reference={'asdvasv'}
                        stars={4.9}
                        rating={54}
                        price={129}
                        priceDiscount={88}
                        description={'loren ipsum '}
                    />
                </Col>
            </Row>
            <Row>
                <Section 
                    title={'Produtos recomendados'} 
                    titleAlign={'left'} 
                    link={{text: "Ver todos", href: "/produtos"}}
                >
                    <ProductListing products={Constants.productsList} />
                </Section>
            </Row>
        
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Inter';
    margin: 30px;
`