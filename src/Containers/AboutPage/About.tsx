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
`;

const LeftSection = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-right: 7.5rem;
  width: 40%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-size: 22px;
  color: white;
`;

const H1 = styled.h1`
  color: white;
`;


const P1 = styled.p`
  color: white;
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
                    <P1> Do you dream of a musical career?<br/><br/>

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
                    </P1>

                </RightSection>

            </MainSection>

            <Footer/>
        </OuterContainer>
    )
}

export default About;