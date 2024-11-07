//import React from "react";
import styled from 'styled-components';
import { Row, Col, Typography, Select, Divider } from 'antd';

import * as Colors from '../Style/Constants';
import * as Constants from '../Components/Constants';

import FilterGroup from '../Components/FilterGroup';
import Section from '../Components/Section';
import ProductListing from '../Components/ProductListing';

const verify = (value) => {
    console.log(value)
}

export default function Products() {

    return (
        <PageContainer>
            <Col span={6} style={{ maxWidth: '308px' }}>
                <Row>
                    <Typography.Title level={5} style={{ color: Colors.dark_gray_2 }}>
                        Ordenar por:
                    </Typography.Title>
                </Row>
                <Row>
                    <Select 
                        style={{ width: '308px',  color: Colors.dark_gray_2 }} 
                        onChange={verify}
                        defaultValue={'Menor preço'}
                    >
                        <Select.Option value={'menor'}>Menor preço</Select.Option>
                        <Select.Option value={'maior'}>Maior preço</Select.Option>
                    </Select>
                </Row>
                <Col span={24}>
                    <Row style={{ margin: '30px auto 0 auto ' }}>
                        <Typography.Title level={5} style={{ color: Colors.dark_gray_2 }}>
                            Filtrar por:
                        </Typography.Title>
                    </Row>
                    <Divider style={{ borderColor: Colors.light_gray_2}} />
                    <FilterGroup title={'Marka'} inputType={'checkbox'} options={Constants.Marka} />
                    <FilterGroup title={'Categoria'} inputType={'checkbox'} options={Constants.Marka} />
                </Col>
            </Col>
            <Col span={17} offset={1}>
            
                
                <Section title={'Produtos em alta'}  titleAlign={'left'} >
                    <ProductListing products={Constants.productsList} />

                </Section>

            </Col>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Inter';
    margin: 30px auto;
    padding: 0 3%;
`