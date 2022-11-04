import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import {Link} from "react-router-dom";
import Completelogo from "../../Assets/images/CompleteLogo.png";
import DownloadButtonGoogle from "../../Assets/images/Download - Google play.png";
import DownloadButtonIOS from "../../Assets/images/Download - iOS.png"


const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
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
    padding-left: 1.5rem;
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
    align-items: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-size: 22px;
  color: white;
  @media (max-width: 61em) {
    align-items: center;
  }
  @media (max-width: 25em) {
    margin-top: 0;
  }
`;

const Logo = styled.img`
  width: 31rem;
  height: 12rem;
  @media (max-width: 27em) {
    width: 23rem;
    height: 9rem;
  }
  @media (max-width: 23em) {
    width: 320px;
    height: 125px;
  }
`;

const Slogan = styled.div`
  font-weight: 400;
  font-size: 42px;
  text-align: center;
  padding: 1rem;
  width: 30rem;
  color: #B2B0B4;
  letter-spacing: 2px;
  @media (max-width: 27em) {
    width: 20rem;
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35rem;
  height: 100px;
  @media (max-width: 70em) {
    width: 31rem;
    justify-content: center;
  }
  @media (max-width: 27em) {
    width: 23rem;
  }
`;

const IOSButton = styled.img`
  height: 95px;
  width: 290px;
  @media (max-width: 65em) {
    height: 5rem;
    width: 15rem;
  }
  @media (max-width: 27em) {
    height: 64px;
    width: 180px;
  }
  @media (max-width: 23em) {
    height: 50px;
    width: 160px;
  }
`;

const GoogleButton = styled.img`
  height: 95px;
  width: 290px;
  @media (max-width: 65em) {
    height: 5rem;
    width: 15rem;
  }
  @media (max-width: 27em) {
    height: 64px;
    width: 180px;
  }
  @media (max-width: 23em) {
    height: 50px;
    width: 160px;
  }
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
                    <Logo src={Completelogo} alt={"Talmoe logo"}/>
                    <Slogan>
                        From talent to<br/>
                        spotlight
                    </Slogan>
                    <DownloadButtons>
                        <Link to={'IOSDownloadButton'}>
                            <IOSButton src={DownloadButtonIOS} alt={"iOS download button"}/>
                        </Link>
                        <Link to={'googleDownloadButton'}>
                            <GoogleButton src={DownloadButtonGoogle} alt={"Google play download button"}/>
                        </Link>
                    </DownloadButtons>
                </RightSection>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Home;