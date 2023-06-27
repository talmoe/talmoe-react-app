import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonMailto from "../supportMailComponent";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  color: white;
  width: 100vw;
  background: #1d1b26;
`;

const FooterItems = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

const TalmoeCopyright = styled.div`
  font-size: 0.8rem;
  margin-left: 30px;
  color: #ffc17d;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40rem;
  padding: 5px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (max-width: 40em) {
    width: 35rem;
  }
  @media (max-width: 27em) {
    width: 20rem;
  }
`;

const FooterLink = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterLinks>
          <Link to={"/termsofservice"}>
            <FooterLink>Terms of Service</FooterLink>
          </Link>

          <Link to={"/privacypolicy"}>
            <FooterLink>Privacy Policy</FooterLink>
          </Link>

          <FooterLink>
            <ButtonMailto
              mailto={"mailto:support@talmoe.com"}
              label={"Contact Us"}
            />
          </FooterLink>
        </FooterLinks>
        <TalmoeCopyright>TALMOE © 2023</TalmoeCopyright>
      </FooterItems>
    </FooterContainer>
  );
}

export default Footer;
