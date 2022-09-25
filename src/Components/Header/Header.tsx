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
`;

const LogoSection = styled.div`
  width: 41rem;
  margin-top: 5px;
`;

const TalmoeLogo = styled.img`
  height: 50px;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 35rem;
  align-items: center;
  color: white;
`;

const NavLink = styled.div`
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
            <Link to={""}>
                <NavLink>
                    Home
                </NavLink>
            </Link>

            <Link to={""}>
                <NavLink>
                    Price
                </NavLink>
            </Link>

            <Link to={""}>
                <NavLink>
                    About
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