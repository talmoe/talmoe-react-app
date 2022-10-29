import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ButtonMailto from "../supportMailComponent";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin: 1rem;
  max-height: 50px;
  width: 100%;
`;

const FooterItems = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`

const TalmoeCopyright = styled.div`
  font-size: 22px;
  margin-left: 30px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50rem;
  padding: 5px;
  @media (max-width: 40em) {
    width: 35rem;
  }
  @media (max-width: 27em) {
    width: 20rem;
  }
`;

const FooterLink = styled.div`
  font-size: 18px;
  text-align: center;
`;


function Footer() {
    return (
        <FooterContainer>
            <FooterItems>
                <TalmoeCopyright>
                    TALMOE © 2022
                </TalmoeCopyright>
                <FooterLinks>
                    <Link to={"/termsofservice"}>
                        <FooterLink>
                            Terms of Service
                        </FooterLink>
                    </Link>

                    <Link to={"/privacypolicy"}>
                        <FooterLink>
                            Privacy Policy
                        </FooterLink>

                    </Link>

                    <FooterLink>
                        <ButtonMailto mailto={"mailto:support@talmoe.no"} label={"Contact Us"}/>
                    </FooterLink>
                </FooterLinks>
            </FooterItems>
        </FooterContainer>
    );
}

export default Footer;




