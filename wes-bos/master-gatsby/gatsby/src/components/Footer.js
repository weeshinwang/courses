import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    text-align: center;
`

export default function Footer() {
    return (
        <FooterStyles>
            <p>&copy; 思力克（中国）有限公司 {new Date().getFullYear()}</p>
        </FooterStyles>
    )
};
