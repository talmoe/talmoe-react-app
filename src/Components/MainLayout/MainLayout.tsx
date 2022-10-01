import React from 'react';
import styled from "styled-components";
import reactLogo from '../../Assets/images/logo.svg'
import {Link} from "react-router-dom";
import {Heading} from "../../Styles/Common/CommonStyles";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export const OuterContainer = styled.div`
  height: 100vh;
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

const MainLayout = ({children}: Props) => {
    return (
        <OuterContainer>
            <Header/>
            <Container>
                <Link style={{textDecoration: "none"}} to="/">
                    <img src={reactLogo} alt={"Firm logo"} height={70} width={70}/>
                </Link>
                <Heading>Talmoe</Heading>
                {children}
            </Container>
            <Footer/>
        </OuterContainer>
    );
}
export default MainLayout;