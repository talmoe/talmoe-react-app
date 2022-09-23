import styled from "styled-components";
import talmoeLogo from "../../Assets/images/talmoelogo.png"
import Faq from "../../Containers/FAQ/Faq";


const HeaderContainer = styled.header`
  display: flex;
  //justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  width: 100%;
`;

const LogoSection = styled.div`
  width: 25rem;
`;

const TalmoeLogo = styled.img`
  height: 50px;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  align-items: center;
  color: white;
`;

const HomeLink = styled.div`
`;

const PricingLink = styled.div`
`;

const AboutLink = styled.div`
`;

const FAQLink = styled.div`
  display: flex;
  flex-flow: row-reverse;
  width: 100%;
  padding: 1rem;
  
  color: white;
`;

function Header() {
    return <HeaderContainer>
        <LogoSection>
            <TalmoeLogo src={talmoeLogo} alt={'Talmoe logo'}/>
        </LogoSection>
        <NavLinks>
            <HomeLink>
                Home
            </HomeLink>
            <PricingLink>
                Price
            </PricingLink>
            <AboutLink>
                About
            </AboutLink>
        </NavLinks>
        <FAQLink>
            FAQ
        </FAQLink>
    </HeaderContainer>
}

export default Header;