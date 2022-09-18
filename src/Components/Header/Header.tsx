import styled from "styled-components";
import talmoeLogo from "../../Assets/images/talmoelogo.png"
import Faq from "../../Containers/FAQ/Faq";


const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem;
  width: 100%;
`;

const TalmoeLogo = styled.img`
  height: 54px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  color: white;

`;

const HomeLink = styled.div`
  width: 5rem;
`;

const PricingLink = styled.div`
  width: 5rem;
`;

const AboutLink = styled.div`
  width: 5rem;
`;

const FAQLink = styled.div`
  width: 5rem;
  color: white;
`;

function Header() {
    return <HeaderContainer>
        <TalmoeLogo src={talmoeLogo} alt={'Talmoe logo'}/>
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