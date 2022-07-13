import React from 'react';
import styled from "styled-components";
import reactLogo from '../../Assets/images/logo.svg'
import { Link } from "react-router-dom";
import { CopyRight } from "../../Containers/HomePage/Home";
import { Footer, Header, P2 } from "../../Styles/Common/CommonStyles";


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


type Props = {
    children: JSX.Element | JSX.Element[],
};

const MainLayout = ({ children }: Props) => {
    return (
        <OuterContainer>
            <Container>
                <Link style={{ textDecoration: "none" }} to="/">
                    <img src={reactLogo} alt={"Firm logo"} height={70} width={70} />
                </Link>
                <Header>Talmoe</Header>
                {children}
            </Container>
            <Footer>
                <P2>TALMOE &copy; 2022</P2>
                <P2>Based in Vanylven, Norway</P2>
            </Footer>
        </OuterContainer>
    );
}
export default MainLayout;