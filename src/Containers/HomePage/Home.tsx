import React from 'react';

import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';



export const CopyRight = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.5px;

  :after {
    content: "\\00a9  2021";
  }
`;


const OuterContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


function Home() {
    return (
        <OuterContainer>
            <Header/>
            <Footer/>
        </OuterContainer>

    );
}

export default Home;