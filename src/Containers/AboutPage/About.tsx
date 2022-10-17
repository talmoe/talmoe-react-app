import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
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
  margin-right: 6.5rem;
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
  margin-right: 1rem;
  @media (max-width: 61em) {
    width: 70%;
  }
  @media (max-width: 25em) {
    margin-top: 0;
  }
`;

const H1 = styled.h1`
  color: white;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;


const P = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 0;
  @media (max-height: 46em) {
    font-size: 1rem;
    letter-spacing: 0.4px;
  }
`;

function About() {
    return (
        <OuterContainer>
            <Header/>

            <MainSection>
                <LeftSection>
                    <ImageSlider/>
                </LeftSection>
                <RightSection>
                    <H1> From talent to spotlight</H1>
                    <P> Do you dream of a musical career?<br/><br/>

                        Maybe you have a passion for music? Or a company looking for new talents to work with?<br/><br/>

                        Talmoe is a unique platform where the music industry can interact with musical talents. A
                        platform where creatives and artists can collaborate, create new music, and expand their social
                        and professional network. A network that grows with every step of the journey.<br/><br/>

                        CONNECT - Get in touch with the music industry, meet new rising stars and build your network.<br/><br/>

                        DISCOVER - Explore unique content, follow the world’s next upcoming big stars and help them rise
                        to fame. Get in touch with professionals within the industry, music lovers, talents, and
                        discover new music.<br/><br/>

                        COLLAB - Collaborate with other inspiring talents, venues, and industry professionals.<br/><br/>

                        GET DISCOVERED - Upload your music and get discovered by the music industry.<br/><br/>

                        START TODAY WITH TALMOE - Download the Talmoe app for free, build your fan base, interact with
                        others, upload your music, get feedback, meet new people and build your network today.<br/><br/>
                    </P>

                </RightSection>

            </MainSection>

            <Footer/>
        </OuterContainer>
    )
}

export default About;