//import React from "react";
import styled from 'styled-components';

import Section from '../Components/Section';
// import ProductListing from '../Components/ProductListing';
import Gallery from '../Components/Gallery';

export default function Home() {

    // const productsList = [
    //     {
    //         name: "Nome do produto 1",
    //         image: "https://url.imagem/do/produto1.png",
    //         price: 200,
    //         priceDiscount: 149.9
    //     },
    //     {
    //         name: "Nome do produto 2",
    //         image: "https://url.imagem/do/produto2.png",
    //         price: 49.9
    //     },
    //     {
    //         name: "Nome do produto 3",
    //         image: "https://url.imagem/do/produto2.png",
    //         price: 49.9,
    //         priceDiscount: 39.9
    //     },
    //     {
    //         name: "Nome do produto 4",
    //         image: "https://url.imagem/do/produto2.png",
    //         price: 189.9
    //     },
    //     {
    //         name: "Nome do produto 5",
    //         image: "https://url.imagem/do/produto2.png",
    //         price: 349.9,
    //     },
    //     {
    //         name: "Nome do produto 6",
    //         image: "https://url.imagem/do/produto2.png",
    //         price: 249.9,
    //         priceDiscount: 219.9
    //     }
    // ]

    const listImages =  [
        { src: "https://blog.autocompara.com.br/wp-content/uploads/2024/06/carros-esportivos.jpeg" },
        { src: "https://lh7-us.googleusercontent.com/faZuUMoA-LpkeyvZcW7sPTqMyWjHUEbjfB8dm_sv4Lee3kmkztelFOQFSBa0aBNZ55_S6x9zmA_MCiD-RSzI8a59fJnz_0W_rMJsS5u73yAtRvTO5e0EIXYCbOdN-H2tl0RTeQt61PloiXhOLJ_NJkA" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzMtzNFmmAX8SyUcoR4PK1vG_-V3c_4Xn2jM_JQ7umh6_0qGfx5d9Z_3XqQm5g5kBqbI&usqp=CAU" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FVddriBGE7K4AVdqDpDzTetxd6nER8EWbp1jKe98WEji3OXjti0pr5fLj6L5IsFO9cU&usqp=CAU" },
        { src: "https://s2-autoesporte.glbimg.com/8s6jesUR3xAdl1tCzhI5joMFbTs=/0x0:840x560/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/w/A/y3HqYlRr6X7qdD5CLdHA/aston-martin-valour-4.jpg" },
    ]

    const testLink = {text: 'Produtos', href: 'https://www.google.com'};
    const list = [];

    return (
        <PageContainer>
            <Section 
                title={'Home'} 
                titleAlign={'center'} 
                link={testLink}
                list={list}
            />
            {/* <ProductListing list={productsList} /> */}
            <Gallery list={listImages} Width={'250px'} Height={'fit-content'} Radius={'54px'} />
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
    padding: 192px 3%;
`