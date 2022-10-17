import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import TeamMemberBox from "../../Components/TeamMemberBox/TeamMemberBox";
import mathiasØvreseth from "../../Assets/images/portraits/Mathias Løkkebø Øvreseth.jpg";
import michalBerg from "../../Assets/images/portraits/Michal Berg.jpg"

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

const MainSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;


function Team() {
    return (
        <OuterContainer>
            <Header/>
            <MainSection>
                <TeamMemberBox image={mathiasØvreseth} altText={"Portrait of Chief technology officer Mathias Løkkebø Øvreseth"}
                               jobTitle={"Chief technology officer"} name={"Mathias Løkkebø Øvreseth"}/>
                <TeamMemberBox image={michalBerg} altText={"Portrait of software developer Michal Berg"}
                               jobTitle={"Software developer"} name={"Michal Berg"}/>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Team;