import styled from "styled-components";
import { Link } from "react-router-dom";
import talmoeLogo from "../../Assets/images/talmoelogo.png";

const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  align-items: center;
  font-size: 1.2rem;
  height: 5rem;
  width: 100%;
  background-color: #1d1b26;
  @media (max-width: 27em) {
    padding: 0 1rem;
    margin-left: 0.1rem;
  }
`;

const LogoSection = styled.div`
  width: 3rem;
  margin: 2rem 3rem 1rem 2rem;
  @media (max-width: 27em) {
    margin: 2rem;
    width: 4rem;
  }
`;

const TalmoeLogo = styled.img`
  height: 1.8rem;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 10rem;
  align-items: center;
  color: white;
  @media (max-width: 27em) {
    justify-content: space-evenly;
  }
`;

const NavLink = styled.div`
  @media (max-width: 76em) {
    min-width: 5rem;
  }
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
  }
  @media (max-width: 27em) {
    display: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoSection>
        <Link to={"/"}>
          <TalmoeLogo src={talmoeLogo} alt={"Talmoe logo"} />
        </Link>
      </LogoSection>
      <NavLinks>
        <Link to={"/"}>
          <NavLink>Home</NavLink>
        </Link>

        {/*<Link to={"/pricing"}>*/}
        {/*    <NavLink>*/}
        {/*        Pricing*/}
        {/*    </NavLink>*/}
        {/*</Link>*/}

        <Link to={"/about"}>
          <NavLink>About</NavLink>
        </Link>

        {/*<Link to={"/team"}>*/}
        {/*    <NavLink>*/}
        {/*        Our team*/}
        {/*    </NavLink>*/}
        {/*</Link>*/}
      </NavLinks>

      <FAQLink>
        {/*<Link to={"/faq"}>*/}
        {/*    FAQ*/}
        {/*</Link>*/}
      </FAQLink>
    </HeaderContainer>
  );
}

export default Header;
