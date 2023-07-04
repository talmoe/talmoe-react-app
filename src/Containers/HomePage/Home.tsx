import React from "react";
import "../../App.css";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { Link } from "react-router-dom";
import Completelogo from "../../Assets/images/TalmoeLogo_Complete.png";
import DownloadButtonGoogle from "../../Assets/images/download_google.png";
import DownloadButtonIOS from "../../Assets/images/download_ios.png";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
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
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-right: 7.5rem;
  margin-left: 7.5rem;
  width: 40%;

  @media (max-width: 76em) {
    margin: auto;
    width: 40%;
    padding-right: 3rem;
  }
  @media (max-width: 36em) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  font-size: 22px;
  color: white;
  @media (max-width: 61rem) {
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 30rem;
  height: 14rem;
  justify-content: center;

  @media (max-width: 35em) {
    width: 19.5rem;
    height: 8.8rem;
    justify-content: center;
  }
`;

const Slogan = styled.div`
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
  padding: 1rem;
  width: 30rem;
  color: white;
  letter-spacing: 2px;
  @media (max-width: 35em) {
    width: 19.5rem;

    font-size: 2rem;
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30rem;
  padding: 1rem;
  margin-top: 2rem;

  @media (max-width: 70em) {
    width: 27rem;
    justify-content: center;
    padding-left: 2rem;
  }
  @media (max-width: 35em) {
    width: 80%;
    align-items: center;
  }
`;

const IOSButton = styled.img`
  height: 5.5rem;
  width: 15rem;

  @media (max-width: 35em) {
    height: 4rem;
    width: 10.5rem;
  }
`;

const GoogleButton = styled.img`
  height: 5.5rem;
  width: 15rem;

  @media (max-width: 35em) {
    height: 4rem;
    width: 10.5rem;
  }
`;

function Home() {
  return (
    <OuterContainer>
      <Header />
      <MainSection>
        <LeftSection>
          <ImageSlider />
        </LeftSection>
        <RightSection>
          <Logo src={Completelogo} alt={"Talmoe logo"} />
          <Slogan>From talent to spotlight</Slogan>
          <DownloadButtons>
            <Link to={"IOSDownloadButton"}>
              <IOSButton src={DownloadButtonIOS} alt={"iOS download button"} />
            </Link>
            <Link to={"googleDownloadButton"}>
              <GoogleButton
                src={DownloadButtonGoogle}
                alt={"Google play download button"}
              />
            </Link>
          </DownloadButtons>
        </RightSection>
      </MainSection>
      <Footer />
    </OuterContainer>
  );
}

export default Home;
