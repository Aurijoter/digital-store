import { useState } from 'react'
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header"
import Footer from './Components/Footer';
import Home from "./Pages/HomePage";
import Products from './Pages/ProductsList';
import Categories from './Pages/CategoriesPage';
import Orders from './Pages/MyOrdersPage';
import ProductView from './Pages/ProductViewPage';

export default function App() {
  const [countProducts, setCountProducts ] = useState(0);
  const [busca, setBusca] = useState();

  return (
    <BrowserRouter>
      <NavContainer>
        <Header 
          countProducts={countProducts} 
          setCountProducts={setCountProducts}
          busca={busca} setBusca={setBusca}
        />
      </NavContainer>

      <Routes>
        <Route path="/" element={<Home busca={busca} setBusca={setBusca} />} />
        <Route path="/produtos" element={<Products busca={busca} setBusca={setBusca} />} />
        <Route path="/categorias" element={<Categories/>} />
        <Route path="/meus-pedidos" element={<Orders/>} />
        <Route path="/produto/:id" element={<ProductView busca={busca} setBusca={setBusca} />} />

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