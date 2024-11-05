//import React from "react";
import styled from 'styled-components';

import Section from '../Components/Section';

export default function Categories() {

    const testLink = {text: 'Produtos', href: 'https://www.google.com'};
    const list = [];

    return (
        <PageContainer>
            <Section 
                title={'Categories'} 
                titleAlign={'center'} 
                link={testLink}
                list={list}
            />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter';
    text-align: center;
    margin-top: 30px;
    padding-top: 192px;
`