import styled from "styled-components";

const TeamMemberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 18rem;
  height: 25rem;
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
  margin: 0;;
`;

const JobTitle = styled.p`
  font-size: 20px;
  margin: 0;
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