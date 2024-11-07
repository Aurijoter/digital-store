/* eslint-disable */

import { useState } from "react";
import * as Colors from '../Style/Constants';
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Badge, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Logo from "./Logo";
import LogoHeader from '../assets/logo-header.svg';
import MiniCart from '../assets/mini-cart.svg'

export default function Header(props) {
    const { countProducts, setCountProducts, busca, setBusca } = props;

    return (
        <>
            <ContainerHeader>
                <Row align='center' justify='space-between'>
                    <Logo logo={LogoHeader} />
                    <div style={{ width: '30%', height: '60px' }}>
                        <Input 
                            placeholder="Pesquisar Produto..." 
                            type="text" 
                            value={busca} 
                            onChange={(event) => {setBusca(event?.target?.value); console.log(busca)}}
                        />
                        <SearchOutlined
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                fontSize: '16px',
                                backgroundColor: Colors.light_gray_3,
                                width: '60px',
                                height: '60px',
                                borderRadius: '0 8px 8px 0'
                            }}
                        />
                    </div>
                    <BoxButtons>
                        <Link to={null}>
                            <ButtonLink onClick={() => console.log(countProducts)}>Cadastre-se</ButtonLink>
                        </Link>
                        <Link to={null}>
                            <ButtonPrimary>Entrar</ButtonPrimary>
                        </Link>
                    </BoxButtons>
                    <ButtonCart onClick={() => setCountProducts((prevState) => prevState + 1)}>
                        <Badge count={countProducts}>
                            <CartIMG src={MiniCart} />
                        </Badge>
                    </ButtonCart>
                </Row>
                <NavBox>
                    <NavLink to="/"
                        style={({ isActive }) => ({
                            color: isActive ? Colors.primary : Colors.dark_gray_2,
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        {({ isActive }) => (
                            <span className={isActive ? "active" : ""}>Home</span>
                        )}
                    </NavLink>

                    <NavLink to="/produtos"
                        style={({ isActive }) => ({
                            color: isActive ? Colors.primary : Colors.dark_gray_2,
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        {({ isActive, isPending, isTransitioning }) => (
                            <span className={isActive ? "active" : ""}>Produtos</span>
                        )}
                    </NavLink>
                    <NavLink to="categorias/"
                        style={({ isActive }) => ({
                            color: isActive ? Colors.primary : Colors.dark_gray_2,
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        {({ isActive, isPending, isTransitioning }) => (
                            <span className={isActive ? "active" : ""}>Categorias</span>
                        )}
                    </NavLink>
                    <NavLink to="/meus-pedidos"
                        style={({ isActive }) => ({
                            color: isActive ? Colors.primary : Colors.dark_gray_2,
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        {({ isActive, isPending, isTransitioning }) => (
                            <span className={isActive ? "active" : ""}>Meus Pedidos</span>
                        )}
                    </NavLink>
                </NavBox>
                <Row>
                </Row>
            </ContainerHeader>
        </>
    )
}

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 192px;
    justify-content: space-between;
    padding: 2% 3% 1% 3%;
    box-sizing: border-box;
    background-color:  ${Colors.white};
    z-index: 9;
`

const Input = styled.input`
    width: 55%;
    height: 60px;
    padding: 0 20px;
    border: none;
    border-radius: 8px 0 0 8px;
    background-color: ${Colors.light_gray_3};

    :active{
        border: none;
    }
`

const BoxButtons = styled.div`
    display: flex;
    align-items: center;
    width: 245px;
    justify-content: space-between;
`

const CartIMG = styled.img`
    width: 24px;
    height: 24px;
`

const NavBox = styled.div`
    display: flex;
    width: 425px;
    justify-content: space-between;
`

const ButtonCart = styled.button`
    width: 50px;
    border: none;
    background-color: transparent;
    color: black;
`

const ButtonLink = styled.button`
    width: 105px;
    height: 30px;
    border: none;
    background-color: transparent;
    color: ${Colors.dark_gray_2};
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
`

const ButtonPrimary = styled.button`
    width: 114px;
    height: 40px;
    border: none;
    background-color: ${Colors.primary};
    border-radius: 8px;
    color: ${Colors.white};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`