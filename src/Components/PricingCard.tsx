import styled from "styled-components";
import {BiInfoCircle} from "react-icons/bi";


const PricingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 24rem;
  height: 36rem;
  background: #1D1B26;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const CardTitle = styled.h1`
  align-self: center;
  color: white;
  text-align: center;
`;

const TrialText = styled.h2`
  margin: 0 0 0 1.5rem;
  color: #A9A9AA;

`;

const CardPrice = styled.p`
  margin-left: 1.5rem;
  margin-bottom: 0;
  font-size: 1rem;
  color: #A9A9AA;
`;

const CardInfoList = styled.ul`
  height: 35vh;
  font-size: 1rem;
  color: white;
`;

const Li = styled.li`
  margin: 0.5rem;
`;


const CardButton = styled.button`
  width: 90%;
  align-self: center;
  background: white;
  border-radius: 12px;
  margin: 1rem;
  height: 5rem;

  font-weight: 600;
  font-size: 20px;
  text-align: center;

  cursor: pointer;
`;

const PaymentDisclaimerText = styled.p`
  margin-left: 1rem;
  color: #A9A9AA;
  font-size: 0.6rem;
  @media (max-width: 25em) {
    margin-top: 0;
  }
`;


interface cardProps {
    title: string;
    price: string;
    buttonText: string;
}


function PricingCard(props: cardProps) {

    return (
        <PricingCardContainer>
            <CardTitle>
                {props.title}
            </CardTitle>
            <TrialText>
                30 days free
            </TrialText>
            <CardPrice>
                {props.price}
            </CardPrice>
            <CardInfoList>
                <Li>Unlock unlimited video and audio uploads</Li>
                <Li>High quality audio <BiInfoCircle title={"High quality audio: Equivalent to AAC 320kbps."}/></Li>
                <Li>Pin your favorite posts</Li>
                <Li>Motion cover <BiInfoCircle
                    title={"Motion covers are animated 30 seconds clips of the regular cover. "}/> </Li>
                <Li>Send collaboration requests</Li>
                <Li>Receive two marketplace advertisements monthly, with a duration of 15 days</Li>
            </CardInfoList>
            <CardButton>
                {props.buttonText}
            </CardButton>
            <PaymentDisclaimerText>
                You won’t be charged until your free trial ends. We’ll remind you 7 days before you get charged. No
                commitment, cancel anytime.
            </PaymentDisclaimerText>
        </PricingCardContainer>
    );
}

export default PricingCard;