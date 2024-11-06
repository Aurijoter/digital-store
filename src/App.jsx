import { useState } from 'react'
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header"
import Footer from './Components/Footer';
import Home from "./Pages/HomePage";
import Products from './Pages/ProductsPage';
import Categories from './Pages/CategoriesPage';
import Orders from './Pages/MyOrdersPage';

export default function App() {
  const [countProducts, setCountProducts ] = useState(0);

  return (
    <BrowserRouter>
      <NavContainer>
        <Header 
          countProducts={countProducts} 
          setCountProducts={setCountProducts}
        />
      </NavContainer>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<Products/>} />
        <Route path="/categorias" element={<Categories/>} />
        <Route path="/meus-pedidos" element={<Orders/>} />

      </Routes>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </BrowserRouter>
  )
}

const NavContainer = styled.div`
  width: 100%;
`

const FooterContainer = styled.div`
  width: 100%;
`