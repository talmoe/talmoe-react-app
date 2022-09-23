import React from "react";
import styled from "styled-components";

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
`;

const FooterLink = styled.div`
    font-size: 18px;
`;


function Footer() {
    return (
        <FooterContainer>
            <FooterItems>
                <TalmoeCopyright>
                    TALMOE © 2022
                </TalmoeCopyright>
                <FooterLinks>
                    <FooterLink>
                        Terms of Service
                    </FooterLink>
                    <FooterLink>
                        Privacy Policy
                    </FooterLink>
                    <FooterLink>
                        Contacts Us
                    </FooterLink>
                </FooterLinks>
            </FooterItems>
        </FooterContainer>
    );
}

export default Footer;




