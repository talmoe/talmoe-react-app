import React from 'react';
import ReactLogo from '../../Assets/logo.svg';
import '../../App.css';
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import MainLayout from '../../Components/MainLayout';




export const P1 = styled.p`
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.5px;
  text-align: center;

`;
export const P2 = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.5px;

`;
export const CopyRight = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.5px;
  :after {
    content: "\\00a9  2021";
  }
`;


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

  @media (max-width: 456px) {
        flex-direction: column;
        width: 100%;
      }
`;
export const Button = styled.button`
    background-color: #FFC17D;
    color: #fff;
    padding: 12px;
    margin-bottom: 18px;
    border-radius: 20px;
    font-size: 16px;
    width: 100%;
      @media (min-width: 456px) {
        width: 200px;
      }
    display: flex;
    justify-content: center;
    font-family: 'manrope', sans-serif;
    border: none;
    :active {
      transform: scale(0.99);
    }
  :disabled {
    opacity: 40%;
    color: #333;
  }
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


function Home() {

    return (
        <MainLayout>
                <P1 style={{marginTop: "32px"}}>Coming soon to App Store and Google Play</P1>
                <ButtonContainer>
                    <Link style={{textDecoration: "none"}} to="/about">
                        <Button style={{ marginRight: "18px"}}>About</Button>
                    </Link>
                    <Link style={{textDecoration: "none"}} to="/contact">
                        <Button>Contact</Button>
                    </Link>

                </ButtonContainer>
        </MainLayout>
    );
}

export default Home;
