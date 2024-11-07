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
    justify-content: space-between;
`