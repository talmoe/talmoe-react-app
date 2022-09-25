import React from 'react';
import styled from "styled-components";
import reactLogo from '../../Assets/images/logo.svg'
import {Link} from "react-router-dom";
import {Header, P2} from "../../Styles/Common/CommonStyles";
import Footer from "../Footer/Footer";


export const OuterContainer = styled.div`
  height: 100vh;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5vh;
  height: 100%;
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
            <Footer/>
        </OuterContainer>
    );
}
export default MainLayout;