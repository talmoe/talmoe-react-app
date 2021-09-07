import React from 'react';
import styled from "styled-components";
import ReactLogo from "../assets/logo.svg";
import {Link} from "react-router-dom";
import {CopyRight, P2} from "../Containers/Home";


export const OuterContainer = styled.div`
  height: 100vh;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1D1B26;
  margin-bottom: 5vh;
`;

export const Header = styled.text`
  color: #fff;
  font-size: 36px;
  margin-top: 18px;
  letter-spacing: 0.5px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  height: 54px;
  background-color: #28283A;
  align-items: center;
  justify-content: center;
    
`

type Props = {
    children: JSX.Element|JSX.Element[],
};

const MainLayout = ({children}: Props) => {
    return(
        <OuterContainer>
            <Container>
                <Link style={{textDecoration: "none"}} to="/">
                <img src={ReactLogo} alt={"Firm logo"} height={70} width={70}/>
                </Link>
                <Header>Talmoe</Header>
                {children}
            </Container>
            <Footer>
                <CopyRight>TALMOE </CopyRight>
                <P2>Based in Vanylven, Norway</P2>
            </Footer>
        </OuterContainer>
    );
}
export default MainLayout;