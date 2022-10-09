import React from 'react';
import '../../App.css';
import styled from "styled-components";
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import TeamMemberBox from "../../Components/TeamMemberBox/TeamMemberBox";
import testportrait from "../../Assets/images/portraits/portrait.jpg"

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
                <TeamMemberBox image={testportrait} altText={"Portrait of software developer Michal Berg"}
                               jobTitle={"Software developer"} name={"Michal Berg"}/>
                <TeamMemberBox image={testportrait} altText={"Portrait of software developer Michal Berg"}
                               jobTitle={"Software developer"} name={"Michal Berg"}/>
                <TeamMemberBox image={testportrait} altText={"Portrait of software developer Michal Berg"}
                               jobTitle={"Software developer"} name={"Michal Berg"}/>
                <TeamMemberBox image={testportrait} altText={"Portrait of software developer Michal Berg"}
                               jobTitle={"Software developer"} name={"Michal Berg"}/>
            </MainSection>
            <Footer/>
        </OuterContainer>
    );
}

export default Team;