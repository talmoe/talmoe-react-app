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
`;

const LeftSection = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-right: 7.5rem;
  width: 40%;
`;

const RightSection = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 22px;
  color: white;
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
                    <PricingCard title={"Subscription for talents"} price={"Kr 49,00 / month"}/>
                </RightSection>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Pricing;