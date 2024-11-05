/* eslint-disable */
import styled from "styled-components";

import ProductCard from "./ProductCard";

export default function ProductListing(props){

    const { list } = props;

    return (
        <Container>
            {list?.map((item) => {
                return (
                    <ProductCard
                        image={item?.image}
                        name={item?.name}
                        price={item?.price}
                        priceDiscount={item?.priceDiscount}
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
`