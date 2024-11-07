/* eslint-disable */

import styled from "styled-components"
import { Row, Typography } from "antd";

import * as Colors from '../Style/Constants';

export default function FilterGroup(props) {

    const { title, inputType, options } = props;

    return (
        <FilterContainer>
            <Row>
                <Typography.Title level={5} style={{ color: Colors.dark_gray_2}}>
                    {title}
                </Typography.Title>
            </Row>

            {options?.map((item) => {
                return(
                    <Row key={item?.id}>
                        <Input type={inputType} defaultChecked={item.value} />
                        <Typography.Text>{item.text}</Typography.Text>
                    </Row>
                )
            })}
        
        </FilterContainer>
    )
}

const FilterContainer = styled.div`
    width: 308px;
    margin-top: 20px;
`

const Input = styled.input.attrs({ type: "checkbox" })`
appearance: none;
width: 20px;
height: 20px;
border: 2px solid #999;
border-radius: 3px;
cursor: pointer;

&:checked {
    background-color: ${Colors.primary};
    border-color: ${Colors.primary};
}

&:checked::before {
    content: "✔";
    display: flex;
    justify-content: center;
    color: white;
    font-size: 14px;
}
`;