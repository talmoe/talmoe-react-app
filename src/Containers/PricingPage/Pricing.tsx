import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import PricingCard from "../../Components/PricingCard";
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
  width: 50%;
  font-size: 22px;
  color: white;
  //justify-content: center;
  @media (max-width: 61em) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
  @media (max-width: 25em) {
    margin-top: 0;
  }
`;

const Slogan = styled.div`
  justify-self: center;
  font-weight: 400;
  font-size: 42px;
  margin-top: 1rem;
  width: 35rem;
  color: #B2B0B4;
  letter-spacing: 2px;
  @media(max-height: 46em) {  
    display: none;
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
                        From talent to spotlight
                    </Slogan>
                    <PricingCard title={"Talmoe Pro"} price={"Then NOK 49,00 / month"} buttonText={"Try for free"}/>
                </RightSection>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Pricing;