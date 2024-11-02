/* eslint-disable */

import styled from "styled-components";

export default function Logo(props) {
    const { logo } = props;

    return(
        <LogoIMG src={logo} />
    )
}

const LogoIMG = styled.img`
    width: 253px;
    height: 44px;
`