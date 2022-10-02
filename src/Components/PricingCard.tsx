import styled from "styled-components";


const PricingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 385px;
  height: 570px;
  background: #1D1B26;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const CardTitle = styled.h1`
  align-self: center;
  color: white;
`;

const CardPrice = styled.p`
  margin-left: 1.5rem;
  color: #A9A9AA;
`;

const CardInfoList = styled.ul`
  height: 35vh;
  font-size: 20px;
  color: white;
`;

const Li = styled.li`
    margin: 0.5rem;
`;


const CardButton = styled.button`
  height: 3rem;
  width: 90%;
  align-self: center;
  background: white;
  border-radius: 12px;

  font-weight: 600;
  font-size: 20px;
  text-align: center;
  
  cursor: pointer;
  }
`;


interface cardProps {
    title: string;
    price: string;
}


function PricingCard(props: cardProps) {

    return (
        <PricingCardContainer>
            <CardTitle>
                {props.title}
            </CardTitle>
            <CardPrice>
                {props.price}
            </CardPrice>
            <CardInfoList>
                <Li>Lorem</Li>
                <Li>Ipsum</Li>
                <Li>Dolor sit amet</Li>
                <Li>consectetur adipiscing elit</Li>
            </CardInfoList>
            <CardButton>
                Choose
            </CardButton>
        </PricingCardContainer>
    );
}

export default PricingCard;