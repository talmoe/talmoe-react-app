import styled from "styled-components";
import followingFeed from "../../Assets/images/appImages/FollowingFeed.png"
import newFeed from "../../Assets/images/appImages/NewFeed.png"
import profileView from "../../Assets/images/appImages/ProfileView.png"
import videoStream from "../../Assets/images/appImages/VideoStream.png"


const ImageSliderContainer = styled.div`
  width: 375px;
  height: 812px; 
  left: 200px;
  border-radius: 22px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  background-image: url(${videoStream});
  margin: 1rem;
`;

function ImageSlider() {
    return <ImageSliderContainer>

    </ImageSliderContainer>
}

export default ImageSlider;