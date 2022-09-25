import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Completelogo from "../../Assets/images/CompleteLogo.png";
import DownloadButtonGoogle from "../../Assets/images/Download - Google play.png";
import DownloadButtonIOS from "../../Assets/images/Download - iOS.png"


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
  width: 50%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-size: 22px;
  color: white;
`;

const Logo = styled.div`
  background-image: url(${Completelogo});
  width: 507px;
  height: 189px;
`;

const Slogan = styled.div`
  font-weight: 400;
  font-size: 42px;
  text-align: center;
  padding: 1rem;
  width: 30rem;
  color: #B2B0B4;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  height: 100px;
`;


function Home() {
    return (
        <OuterContainer>
            <Header/>
            <MainSection>
                <LeftSection>
                    <ImageSlider/>
                </LeftSection>
                <RightSection>
                    <Logo/>
                    <Slogan>
                        From talent to<br/>
                        spotlight
                    </Slogan>
                    <DownloadButtons>
                        <img src={DownloadButtonIOS} width={290} height={95}/>
                        <img src={DownloadButtonGoogle} width={290} height={95}/>
                    </DownloadButtons>
                </RightSection>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Home;