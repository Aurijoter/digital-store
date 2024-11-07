/* eslint-disable */

import styled from "styled-components"
import { Row, Typography } from "antd";

import * as Colors from '../Style/Constants';

export default function FilterGroup(props) {

    const { title, inputType, options } = props;

    console.log(options)

    return (
        <FilterContainer>
            <Row>
                <Typography.Title level={5} style={{ color: Colors.dark_gray_2}}>
                    {title}
                </Typography.Title>
            </Row>

            {options?.map((item) => {
                return(
                    <Row>
                        <Input type={inputType} checked={item.value} />
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

const Input = styled.input`
    width: 22px;
    height: 22px;
`