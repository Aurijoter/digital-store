/* eslint-disable */
import React from "react";
import styled from 'styled-components';

import Section from '../Components/Section';
import ProductListing from '../Components/ProductListing';
import Gallery from '../Components/Gallery';
import * as Constants from '../Components/Constants';
import Collection_1 from '../../public/images/collection-1.png'
import Collection_2 from '../../public/images/collection-2.png'
import Collection_3 from '../../public/images/collection-3.png'

export default function Home({busca}) {

    return (
        <PageContainer>
            <Gallery images={Constants?.HomeSlide} Width={'1440px'} Height={'681px'} Radius={'25px'} />
            <Section title={'Coleções em destaque'}  titleAlign={'center'} >
                <BoxContent src={Collection_1} alt='image 1' />
                <BoxContent src={Collection_2} alt='image 2' />
                <BoxContent src={Collection_3} alt='image 3' />

            </Section>
            <Section title={'Produtos em alta'} titleAlign={'left'} >
                <ProductListing products={Constants.productsList} busca={busca} />
            </Section>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter';
    text-align: center;
    margin: 30px auto;
    padding: 0 3%;
`

const BoxContent = styled.img`
    width: 405px;
    height: fit-content;
    border-radius: 4px;

`