import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import {OuterContainer} from "../../Components/MainLayout/MainLayout";


const MainSection = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

function Pricing() {
    return <OuterContainer>
        <Header/>
        <MainSection>

        </MainSection>
        <Footer/>
    </OuterContainer>
}

export default Pricing;