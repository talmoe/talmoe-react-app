import styled from "styled-components";
import {Link} from "react-router-dom";
import talmoeLogo from "../../Assets/images/talmoelogo.png"


const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0 4rem;
  width: 100%;
  background-color: #1D1B26;
  @media (max-width: 27em) {
    padding: 0 1.6rem;
  }
`;

const LogoSection = styled.div`
  width: 30rem;
  margin: 0.3rem 1rem 0 1rem;
  @media (max-width: 27em) {
    margin: 0.3rem 1rem 0 0;
    width: 5rem
  }
`;

const TalmoeLogo = styled.img`
  height: 3rem;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  align-items: center;
  color: white;
`;

const NavLink = styled.div`
  @media (max-width: 76em) {
    min-width: 5rem;
`;

const FAQLink = styled.div`
  display: flex;
  flex-flow: row-reverse;
  width: 100%;
  padding-right: 1.5rem;
  color: white;
  @media (max-width: 57em) {
    flex-flow: row;
    padding: 0;
`;

function Header() {
    return <HeaderContainer>
        <LogoSection>
            <Link to={"/"}>
                <TalmoeLogo src={talmoeLogo} alt={'Talmoe logo'}/>
            </Link>
        </LogoSection>
        <NavLinks>
            <Link to={"/"}>
                <NavLink>
                    Home
                </NavLink>
            </Link>

            <Link to={"/pricing"}>
                <NavLink>
                    Pricing
                </NavLink>
            </Link>

            <Link to={"/about"}>
                <NavLink>
                    About
                </NavLink>
            </Link>

            <Link to={"/team"}>
                <NavLink>
                    Our team
                </NavLink>
            </Link>
        </NavLinks>

        <FAQLink>
            <Link to={"/faq"}>
                FAQ
            </Link>
        </FAQLink>
    </HeaderContainer>
}

export default Header;