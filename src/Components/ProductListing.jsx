/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProductCard from "./ProductCard";

export default function ProductListing(props){

    const { products, busca } = props;
    const [filteredProducts, setFilteredProducts] = useState(products);

    const getProducts = () => {
        const filtered = products?.filter((item) => 
            item?.name?.toLowerCase()?.includes(busca?.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    useEffect(() => {
        getProducts();
    }, [busca, products]);

    return (
        <Container>
            {filteredProducts?.map((item) => (
                <Link to={`/produto/${item?.id}`} key={item?.id}>
                    <ProductCard
                        image={item?.image}
                        name={item?.name}
                        price={item?.price}
                        priceDiscount={item?.priceDiscount}
                        style={{ gap: '15px' }}
                    />
                </Link>
            ))}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`