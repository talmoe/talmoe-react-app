import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';

const OuterContainer = styled.div`
`;

const MainSection = styled.div`
`;


function Team() {
    return (
        <OuterContainer>
            <Header/>
            <MainSection>

            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Team;