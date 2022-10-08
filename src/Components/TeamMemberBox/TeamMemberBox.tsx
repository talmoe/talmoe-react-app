import styled from "styled-components";

const TeamMemberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 20rem;
  height: 25rem;
  background: #1D1B26;
`;

const ImageSection = styled.div`
  height: 70%;
  width: 100%;
`;

const DescriptionSection = styled.div`
`;

interface boxProps {
    image: string;
}

function TeamMemberBox(props: boxProps) {
    return (
        <TeamMemberBoxContainer>
            <ImageSection>
                {props.image}
            </ImageSection>

            <DescriptionSection>
                Jobbtittel her
            </DescriptionSection>
        </TeamMemberBoxContainer>
    );
}

export default TeamMemberBox;