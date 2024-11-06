/* eslint-disable */
import styled from "styled-components";

import ProductCard from "./ProductCard";

export default function Productproductsing(props){

    const { products } = props;

    console.log(products)

    return (
        <Container>
            {products?.map((item) => {
                return (
                    <ProductCard
                        image={item?.image}
                        name={item?.name}
                        price={item?.price}
                        priceDiscount={item?.priceDiscount}
                        style={{ gap: '15px' }}
                    />
                );
            })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    >  * {
        flex-basis: 25%; /* Cada item ocupará 25% do contêiner */
        max-width: 25%;  /* Limita a largura máxima a 25% */
        box-sizing: border-box;
    }
`