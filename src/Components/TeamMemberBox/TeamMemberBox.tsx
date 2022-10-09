import styled from "styled-components";

const TeamMemberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 20rem;
  height: 25rem;
  background: #1D1B26;
`;

const ImageSection = styled.img`
  height: 70%;
  width: 100%;
`;

const DescriptionSection = styled.div`
  color: white;
  text-align: center;
`;

const Name = styled.h1`
`;

const JobTitle = styled.p`
  font-size: 20px;
`;

interface boxProps {
    image: string;
    altText: string;
    name: string;
    jobTitle: string;
}


function TeamMemberBox(props: boxProps) {
    return (
        <TeamMemberBoxContainer>
            <ImageSection src={props.image} alt={props.altText}/>
            <DescriptionSection>
                <Name>
                    {props.name}
                </Name>
                <JobTitle>
                    {props.jobTitle}
                </JobTitle>
            </DescriptionSection>
        </TeamMemberBoxContainer>
    );
}

export default TeamMemberBox;