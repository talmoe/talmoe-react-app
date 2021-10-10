import React from 'react';

import '../../App.css';
import vanylvenUtvikling from '../../Assets/images/vanylven_utvikling logo.jpg';
import aakp from '../../Assets/images/ÅKP_logo.png';
import sunnmoreKulturnaringshage from '../../Assets/images/Sunnnmøre_kulturnæringshage logo.png';
import innovasjonNorge from '../../Assets/images/powered-by-Innovation-Norway-Logo.jpg';
import styled from "styled-components";
import {
    Link,
} from "react-router-dom";
import ReactLogo from "../../Assets/images/logo.svg";
import Footer from '../../Components/Footer/Footer';
import {Header, HeaderSmall, P1} from "../../Styles/Common/CommonStyles";







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


export const PartnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

`
const OuterContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1D1B26;
  margin-bottom: 32px;
  margin-top: 32px;
`;




const Image = styled.img`
  margin: 12px 16px;
`;

const ImageVanylven = styled.img`
  margin: 12px 16px;
  width: 350px;
  height: 154px;
  @media (min-width: 630px) {
    width: 600px;

  }
`;
const ImageInnovationNorway = styled.img`
  margin: 12px 16px;
  width: 350px;
  height: 154px;
  @media (min-width: 630px) {
    width: 300px;

  }
`;



function Home() {
    return (
        <OuterContainer>
            <div/>
            <div style={{marginRight: 16, marginLeft: 16, display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Container >
                    <Link style={{textDecoration: "none"}} to="/">
                        <img src={ReactLogo} alt={"Firm logo"} height={70} width={70}/>
                    </Link>
                    <Header>Talmoe</Header>
                    <P1 style={{marginTop: "32px"}}>Coming soon to App Store and Google Play</P1>
                    <ButtonContainer>
                        <Link style={{textDecoration: "none"}} to="/about">
                            <Button style={{ marginRight: "18px"}}>About</Button>
                        </Link>
                        <Link style={{textDecoration: "none"}} to="/contact">
                            <Button>Contact</Button>
                        </Link>
                    </ButtonContainer>
                </Container>
                <HeaderSmall style={{marginBottom: "32px"}}>Partners</HeaderSmall>
                <PartnersContainer>
                    <ImageVanylven src={vanylvenUtvikling} />
                    <ImageInnovationNorway src={innovasjonNorge}  />
                    <Image src={aakp} width={200} />
                    <Image src={sunnmoreKulturnaringshage} width={300}/>
                </PartnersContainer>
            </div>
            <Footer/>
        </OuterContainer>

    );
}
export default Home;