import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import PricingCard from "../../Components/PricingCard/PricingCard";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";


const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 61em) {
    flex-direction: column-reverse;
    margin: 3rem;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 25em) {
    margin: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-right: 7.5rem;
  width: 45rem;
  @media (max-height: 46em) {
    width: 39rem;
  }
  @media (max-width: 76em) {
    flex-flow: row;
    margin: auto;
    width: 40%;
  }
  @media (max-width: 61em) {
    justify-content: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  font-size: 22px;
  color: white;
  @media (max-width: 61em) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
`;

const Slogan = styled.div`
  font-weight: 400;
  font-size: 42px;
  margin-top: 1rem;
  width: 35rem;
  color: #B2B0B4;
  letter-spacing: 2px;
  text-align: center;
  @media(max-height: 46em) {  
    display: none;
  }
  @media (max-width: 61em) {
   margin-top: 0;
  }
`;

function Pricing() {
    return (
        <OuterContainer>
            <Header/>
            <MainSection>
                <LeftSection>
                    <ImageSlider/>
                </LeftSection>
                <RightSection>
                    <Slogan>
                        From talent to <br/> spotlight
                    </Slogan>
                    <PricingCard title={"Talmoe Pro"} price={"Then NOK 49,00 / month"} buttonText={"Try for free"}/>
                </RightSection>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Pricing;