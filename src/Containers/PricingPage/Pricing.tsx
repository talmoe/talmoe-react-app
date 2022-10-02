import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import {OuterContainer} from "../../Components/MainLayout/MainLayout";
import PricingCard from "../../Components/PricingCard";


const MainSection = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  margin-top: 5rem;
`;

function Pricing() {
    return (
        <OuterContainer>
            <Header/>
            <MainSection>
                <PricingCard title={"Abonnement1"} price={"Kr 75,00 / month"}/>
                <PricingCard title={"Abonnement2"} price={"Kr 100,00 / month"}/>
                <PricingCard title={"Abonnement3"} price={"Kr 125,00 / month"}/>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Pricing;