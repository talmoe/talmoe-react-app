import React, {CSSProperties} from "react";
import styled from "styled-components";
import {CopyRight} from "../../Containers/HomePage/Home";
import { P2 } from "../../Styles/Common/CommonStyles";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 54px;
  background-color: #28283A;
  align-items: center;
  justify-content: center;
  
    
`


function Footer(style: CSSProperties) {

    return  (
        <FooterContainer style={style}>
        <CopyRight>TALMOE </CopyRight>
        <P2>Based in Vanylven, Norway</P2>
        </FooterContainer>
    );
}

export default Footer;




